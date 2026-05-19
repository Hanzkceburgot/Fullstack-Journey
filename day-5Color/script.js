const button = document.getElementById('change')

button.onclick = ()=>{
    // document.body.style.backgroundColor = 'orange'
    // document.body.setAttribute('class','nightMode')
    document.body.classList.toggle('nightMode')
}

const newButton = document.createElement('button')
const textButton = document.createTextNode('Random color')

newButton.appendChild(textButton)
newButton.setAttribute('type','buttons')
button.after(newButton)

// newButton.addEventListener('click',()=>{
//     const random1 = Math.round(Math.random() * 255 + 1)
//     const random2 = Math.round(Math.random() * 255 + 1)
//     const random3 = Math.round(Math.random() * 255 + 1)

//     document.body.style.backgroundColor= `rgb(${random1},${random2},${random3})`
// })
const range = document.querySelectorAll('input')

for (let i = 0; i < range.length; i++) {

    range[i].addEventListener('input',()=>{
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}

document.body.addEventListener('mousemove',(event)=>{
    const x =  Math.round((event.clientX/window.innerWidth) * 255)
    const y =  Math.round((event.clientY / window.innerHeight) * 255)
    const z = Math.round(Math.random() * 255) 
    document.body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
})