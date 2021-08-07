const panels = document.querySelectorAll('.panel')

panels.forEach(item => {
    item.addEventListener('click', (e) => {
        removeAndAddActive(e.target)
    })
})

function removeAndAddActive(element) {
    panels.forEach(item => {
        if(item == element && item.classList.contains('active')) {
            item.classList.remove('active')
            return;
        }
        if(item == element) {
            item.classList.add('active')
            return;
        }
        item.classList.remove('active')
    })
}