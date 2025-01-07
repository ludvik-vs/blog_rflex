import reflex as rx
from blog_rflex.styles import input_stylesheet


def render_input_field(title: str, is_password: bool, value: rx.Var, update: rx.State) -> rx.vstack:
    return rx.vstack(
        rx.text(title),
        rx.input(
            value=value,
            on_change=update,
            type="password" if is_password else "text",
            width="100%"
        ),
        style=input_stylesheet,
        spacing= "2"
    )