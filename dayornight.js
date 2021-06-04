window.load = update()

function update(){
    let date = new Date().getHours()
    let h1 = document.querySelector('h1')
    console.log(date)
    if(date >= 12){
        h1.classList.remove('morning')
        h1.classList.add('day')
        h1.textContent = 'GOOD AFTERNOON'
    }
    if(date > 18){
        h1.classList.remove('day')
        h1.classList.add('night')
        h1.textContent = 'GOOD NIGHT'
    }
    if(date >= 6){
        h1.classList.remove('night')
        h1.classList.add('morning')
        h1.textContent = 'GOOD MORNING'
    }
    console.log('called')
}

setInterval(() => {
    console.log('running')
    update()
}, 30*60*1000);
