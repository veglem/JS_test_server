const homeBtn = document.getElementById('home-btn')
const aboutBtn = document.getElementById('about-btn')

homeBtn.addEventListener('click', () => {
    document.location.replace('/index.html')
})

aboutBtn.addEventListener('click', () => {
    document.location.replace('/about.html')
})