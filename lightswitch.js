const body = document.querySelector('body')

const button = document.getElementById('lightswitch')

button.addEventListener('click', () =>{
    body.classList.toggle("dark")
})