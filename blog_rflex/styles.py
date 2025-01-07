# general stylesheet for components

general_stylesheet: dict = {
    "width": ["100%", "100%", "70%", "50%", "35%"],
    "padding": ["0rem 2rem"],
    "transition": "all 550ms ease",
    "display": "flex",
    "justify_content": "center",
    "align_items": "start",
}

button_stylesheet: dict = {
    **general_stylesheet,
    "height": "45px",
}

input_stylesheet: dict = {
    **general_stylesheet,
}

auth_page_stylesheet: dict = {
    "width": "100%",
    "height": "100vh",
    "display": "flex",
    "justify_content": "start",
    "align_items": "center",
}