import flet as ft

def main(page: ft.Page):


    # titulo app 

    title = ft.Text(value='Tarefas', color="orange")


    def button_clicked(e):
        t.value = f"Textboxes values are:  '{tb1.value}'."
        page.update()

    t = ft.Text()
    tb1 = ft.TextField(label="Título")

   
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    page.add(title, tb1, b, t)
 

ft.app(target=main)

