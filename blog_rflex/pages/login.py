import reflex as rx
from blog_rflex.styles import auth_page_stylesheet
from blog_rflex.components.input_field import render_input_field
from blog_rflex.components.button import render_submit_button
from blog_rflex.states import State, LoginState, Authentication


@rx.page(route="/", title="Log in Form")
def login():
    return rx.vstack(
        rx.hstack(
            rx.color_mode.button(),
            width="100%",
            justify_content="end"
        ),
        rx.spacer(),
        rx.heading("Welcome back!", size="9", transition="all 550ms ease"),
        rx.text("Sig In below to access your account."),
        rx.separator(size="3"),
        render_input_field(
            title="Email",
            is_password=False,
            value=LoginState.email,
            update=LoginState.update_email
        ),
        render_input_field(
            title="Password",
            is_password=True,
            value=LoginState.password,
            update=LoginState.update_password
        ),
        render_submit_button(name="Login!", event=Authentication.user_login),
        *[rx.spacer() for _ in range(2)],
        rx.text("Don't have account? click ", rx.link("here", href="/register"), "."),
        rx.spacer(),
        style=auth_page_stylesheet,
        spacing="4"
    )