document.addEventListener('DOMContentLoaded', () => {
    const scrollToBottomButtom = document.getElementById('btn-ir-arriba')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToBottomButtom.style.display = 'block'
        } else {
            scrollToBottomButtom.style.display = 'none'
        }
    })

    scrollToBottomButtom.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            // behavior: 'smooth'
        })
    })
})

// Agregar un controlador de eventos al formulario
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault() // Prevenir la recarga de la página por defecto

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value
    const correo = document.getElementById('correo').value
    const comentario = document.getElementById('comentario').value

    const message = `Gracias por tu mensaje ${nombre}, nos pondremos en contacto contigo en el correo ${correo} para atender tu mensaje: ${comentario}`
    alert(message)

    document.getElementById('nombre').value = ''
    document.getElementById('correo').value = ''
    document.getElementById('comentario').value = ''
})
