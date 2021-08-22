console.log("Welcome to the poor man's Instagram.")
console.log("It's like Instagram but without any trackers or annoying ads. Enjoy!")

const clickMe = document.querySelector('.clickme')
const times = document.querySelector('.times')
const reloadBtn = document.querySelector('.reloadBtn')

reloadBtn.addEventListener('click', ()=> location.reload())

let clickTime = 0
let timesClicked = 0

clickMe.addEventListener('click', (e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }
    else{
        if((new Date().getTime() - clickTime)<800){
            createHeart(e)
            clickTime = 0
        }
        else{
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) =>{
    const heart = document.createElement('i')
    heart.classList.add('fab')
    heart.classList.add('fa-gripfire')

    const x = e.clientX
    const y = e.clientY

    const offsetLeft = e.target.offsetLeft
    const offsetTop = e.target.offsetTop

    const xInside = x - offsetLeft
    const yInside = y - offsetTop

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    clickMe.appendChild(heart)
    setTimeout(() => {
        heart.remove()
    }, 1000);
     times.innerHTML = ++timesClicked
}