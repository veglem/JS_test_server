const homeBtn = document.getElementById('home-btn')
const aboutBtn = document.getElementById('about-btn')





homeBtn.addEventListener('click', () => {
    const par = document.createElement('p')

    par.innerHTML= "teeeext";

    document.body.appendChild(par);
})

aboutBtn.addEventListener('click', () => {
    document.location.replace('/about.html')
})