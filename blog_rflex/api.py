import jwt
import httpx
import os

SUPABASE_PUBLIC_API_KEY:str = os.environ["SUPABASE_PUBLIC_API_KEY"]

#API endpoints
async def user_login_endpoint(email:str, password:str):
    url:str = os.environ["API_BASE_LOGIN_URL"]
    
    #headers
    headers: dict[str, str] = {
        "apikey": SUPABASE_PUBLIC_API_KEY,
        "Content-Type": "application/json",
    }

    #Request data
    data: dict[str, str] = {
        "email": email,
        "password": password,
    }

    # Send Request
    async with httpx.AsyncClient() as client:
        response = await client.post(
            url=url, headers=headers, json=data
        )

        data = response.json()
        access_token = data["access_token"]
        expires_in = data["expires_in"]
        user_id = data["user"]["id"]
        user_email = data["user"]["email"]
        
        return access_token, expires_in, user_id, user_email

async def username_registration_endpoint(user_id:str, username:str):
    url:str = os.environ["SUPABASE_API_INSERT_A_ROWS_URL"]

    #headers
    headers: dict[str, str] = {
        "apikey": SUPABASE_PUBLIC_API_KEY,
        "Authorization": f"Bearer {SUPABASE_PUBLIC_API_KEY}",
        "Content-Type": "application/json",
    }

    #Request data
    data: dict[str, str] = {
        "id": user_id,
        "username": username,
    }

    # Send Request
    async with httpx.AsyncClient() as client:
        response = await client.post(url=url, headers=headers, json=data)
        return response.status_code

async def is_username_taken(username: str):
    url:str = os.environ["SUPABASE_API_READ_LAL_ROWS_URL"]

    #headers
    headers: dict[str, str] = {
        "apikey": SUPABASE_PUBLIC_API_KEY,
        "Authorization": f"Bearer {SUPABASE_PUBLIC_API_KEY}",
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(url=url, headers=headers)
        return any(username == user.get("username") for user in response.json())

    
async def user_registration_endpoint(
    username:str, 
    email:str, 
    password:str
    ):
    url:str = os.environ["API_BASE_REGISTRATION_URL"]
    
    #headers
    headers: dict[str, str] = {
        "apikey": SUPABASE_PUBLIC_API_KEY,
        "Content-Type": "application/json",
    }

    #Request data
    data: dict[str, str] = {
        "email": email,
        "password": password,
    }

    # Send Request
    async with httpx.AsyncClient() as client:
        response = await client.post(
            url=url, headers=headers, json=data
        )

        if response.status_code == 400:
            msg = "Email already Taken"
            return msg
        else:
            if await is_username_taken(username) is False:
                data = response.json()
                await username_registration_endpoint(
                    data["user"]["id"],
                    username
                )
                return True
            else:
                msg = "Username already Taken"
                return msg


        data = response.json()
        access_token = data["access_token"]
        expires_in = data["expires_in"]
        user_id = data["user"]["id"]
        user_email = data["user"]["email"]
        
        return access_token, expires_in, user_id, user_email





