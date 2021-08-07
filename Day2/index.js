const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < circles.length) {
        currentActive = 1
    }
    update()
})

function update() {
    circles.forEach((item, idx) => {
        if(idx < currentActive) {
            item.classList.add('active')
        }
        else {
            item.classList.remove('active')
        }
    })
    const activeCircles = document.querySelectorAll('.active')
    progress.style.width = (activeCircles.length - 1) / (circles.legnth - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}