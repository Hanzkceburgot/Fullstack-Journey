// Events on
const p3 = document.getElementsByClassName('p3')[0]

const ubahWarna = (i)=>{
    p3.style.backgroundColor = 'lightblue'
}
p3.onclick = ubahWarna

// addEventlistener
const p4 = document.querySelector('#b p')
p4.addEventListener('click',()=>{
    const ul = document.querySelector('#b ul')
    const newLi = document.createElement('li')
    const textLi = document.createTextNode('Li Baru bang')
    newLi.appendChild(textLi)
    ul.appendChild(newLi)
})
