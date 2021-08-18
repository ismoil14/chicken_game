let input = document.getElementById('text')
let btns = document.getElementById('clicks')
let login_card = document.querySelector('.login_card')
let img = document.getElementById("img")

btns.addEventListener('click', () => {
    if (input.value === "Muhriddin") {
        console.log('Sizni Hack qildim :D')
        document.querySelector('.heading')
        innerText = "To'gri login parol"
        login_card.style.display = "none"
    } else {
        document.querySelector('.heading').innerText = 'Ismingizni kiriting'
        console.log('Ismingizni kiriting')
    }

})