// * Hover Project
let cards = document.querySelectorAll('.main .hover_project .card');

cards.forEach(card => {
    card.onmousemove = function(e){
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--y', y + "px");
        card.style.setProperty('--x', x + "px");
    };
});

// * Scroll Project

let ball = document.querySelector('.main .scroll_project .ball')
window.addEventListener('scroll',()=>{
    let scroll = window.scrollY
    if (scroll >= 1350){
        document.querySelector('html').style.filter = "grayscale(0%)"
        ball.style.transition = "0.8s"
        ball.style.background = "linear-gradient(to right,#9a11e9,#3800d1)"
        ball.style.transform = "scale(100)"
    }else{
        document.querySelector('html').style.filter = "grayscale(100%)"
        ball.style.background = "#9a11e9"
        ball.style.transition = "0.2s"
        ball.style.transform = "translateY("+ (scroll-200) + "px) scale("+ (scroll*0.001) + ")"
        console.log(scroll)
    }
});