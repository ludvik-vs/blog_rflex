import reflex as rx
from blog_rflex.styles import auth_page_stylesheet
from blog_rflex.components.input_field import render_input_field
from blog_rflex.components.button import render_submit_button
from blog_rflex.states import State, RegisterState


@rx.page(route="/register", title="Register Form")
def register():
    return rx.vstack(
        rx.hstack(
            rx.color_mode.button(),
            width="100%",
            justify_content="end"
        ),
        rx.spacer(),
        rx.heading("Welcome to my Blog!", size="9", transition="all 550ms ease"),
        rx.text("Create an account to get started."),
        rx.separator(size="3"),
        render_input_field(
            title="Username",
            is_password=False,
            value=RegisterState.username,
            update=RegisterState.update_username
        ),
        render_input_field(
            title="Email",
            is_password=False,
            value=RegisterState.email,
            update=RegisterState.update_email
        ),
        render_input_field(
            title="Password",
            is_password=True,
            value=RegisterState.password,
            update=RegisterState.update_password
        ),
        render_submit_button(name="Create Account!", event=State.void_event),
        *[rx.spacer() for _ in range(1)],
        rx.text("Already have account? click ", rx.link("here", href="/"), "."),
        rx.spacer(),
        style=auth_page_stylesheet,
        spacing="4"
    )