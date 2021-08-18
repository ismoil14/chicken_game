let d_is = document
let overley = d_is.getElementById("overley")
let natija = d_is.getElementById("natija")
let audio = d_is.getElementById("audio");
let e = 0
let prive = d_is.getElementById("prive")
let next = d_is.getElementById("next")
let nnn = d_is.getElementById("nnn")
let hhh = d_is.getElementById("hhh")
let chickens = d_is.querySelectorAll('.tovuq')
let bullets = d_is.querySelectorAll('.bullet')
let header = d_is.querySelector("header")
let raqam = 4
let tugash = d_is.getElementById("tugash");
let audio2 = d_is.getElementById("audio2");
let soat_ovozi = d_is.getElementById("soat_ovozi");
let natijaclass = d_is.getElementById("natijaclass")



for (let i = 0; i <= chickens.length - 1; i++) {

    chickens[i].addEventListener('click', () => {
        if (raqam > -1) {

            chickens[i].classList.add("yumalash")
            natija.innerText = ++e
        }
        if (e == 5) {
            nnn.style.display = "none"

            hhh.style.display = "block"
        }
    })
}
next.addEventListener('click', () => {
    window.scrollTo(20000, 0);
})
prive.addEventListener('click', () => {
    window.scrollTo(0, 0);
})


d_is.body.addEventListener('click', (ev) => {
    if (raqam < 0) {
        tugash.play();
        audio.stop()
    } else {
        bullets[raqam].style.display = 'none'
        raqam--
    }

})

for (let i = 0; i <= bullets.length - 1; i++) {

    chickens[i].addEventListener('click', (e) => {
        audio2.play();

    })


    header.addEventListener('click', (e) => {


        if (raqam > -1) {

            audio.play();


        }


        if (e == 5) {
            nnn.style.display = "none"

            hhh.style.display = "block"
        }


    })





}



function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        timer--

        if (timer < 0) {
            // timer = duration;
            // console.log("s")
            time.innerText = "Vaqt tugadi"
            nnn.innerText = "tugadi"
            d_is.getElementById("natijaclass").classList.add("natija_flex")
                // d_is.getElementById("natijaclass").style.display

            soat_ovozi.stop()
        }
        if (timer < 10) {
            // timer = duration;
            soat_ovozi.play()
            time.classList.add("color_red")
        }
    }, 1000);

}
let j = 0.2
let restart = d_is.getElementById("restart")
window.onload = function() {
    let fiveMinutes = 60 * j,
        display = d_is.querySelector('#time');
    startTimer(fiveMinutes, display);
};
restart.addEventListener('click', function() {
        // let fiveMinutes = 60 * 0.1,
        //     display = d_is.querySelector('#time');
        // startTimer(fiveMinutes, display);
        // time.innerText = timer
        // natijaclass.style.display = "none"
        d_is.getElementById("natijaclass").classList.remove("natija_flex")

        console.log("sa")
    })
    // if (time === ' <span id="time"></span>') {
    //     console.log("salom")
    // } else {
    //     console.log("alik")
    // }
    // console.log(restart)

magazin.addEventListener('click', () => {
    raqam = 4
    bullets[0].style.display = "flex"
    bullets[1].style.display = "flex"
    bullets[2].style.display = "flex"
    bullets[3].style.display = "flex"
    bullets[4].style.display = "flex"
    let chakatlash = d_is.getElementById("chakatlash");
    chakatlash.play();
    audio.play();
    console.log(raqam)

})

document.addEventListener('keypress', (eventKey) => {
    console.log(eventKey)
})


document.addEventListener('keypress', (event) => {
    if (event.key == " ") {
        raqam = 4
        bullets[0].style.display = "flex"
        bullets[1].style.display = "flex"
        bullets[2].style.display = "flex"
        bullets[3].style.display = "flex"
        bullets[4].style.display = "flex"
        let chakatlash = d_is.getElementById("chakatlash");
        chakatlash.play();
        audio.play();
        console.log(raqam)
    }
})