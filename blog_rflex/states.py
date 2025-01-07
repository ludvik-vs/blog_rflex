import reflex as rx
from .api import user_login_endpoint

class State(rx.State):
    """Base state class"""
    def void_event(self):
        pass

class LoginState(State):
    email: str
    password: str

    @rx.event
    def update_email(self, email: str) -> None:
        self.email = email

    @rx.event
    def update_password(self, password: str) -> None:
        self.password = password


class RegisterState(State):
    username: str
    email: str
    password: str

    @rx.event
    def update_username(self, username: str) -> None:
        self.username = username

    @rx.event
    def update_email(self, email: str) -> None:
        self.email = email

    @rx.event
    def update_password(self, password: str) -> None:
        self.password = password


class Registration(RegisterState):

    async def user_login(self):'/'




class Authentication(LoginState):
    access_token: str
    user_id: str
    user_email: str
    session_exp: str

    async def user_login(self):
        (
            self.access_token,
            self.session_exp,
            self.user_id,
            self.user_email,
        ) = await user_login_endpoint(self.email, self.password)

        print(
            self.access_token,
            self.session_exp,
            self.user_id,
            self.user_email,
        )


    


