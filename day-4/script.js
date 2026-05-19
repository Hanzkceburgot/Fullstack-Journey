// DOM SELECTION
// getElemntById => element
const judul = document.getElementById('judul')
judul.style.color ="red"

// document.getElementsByTagName => HTMLCollections
const p = document.getElementsByTagName('p')
for(let i=0 ; i < p.length;i++){
    p[i].style.backgroundColor = 'lime'
}
const linkInstagram = document.getElementsByTagName('a')[0]

// document.getElementsByClassName() => HTMLCollections
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'Ini berubah karena getElementbyclass'

// document.querySelector => element
const p4 = document.querySelector('#b p')
p4.style.color= "brown"

const li2 = document.querySelector('#b ul li:nth-child(2)')
li2.style.color = 'orange'

// document.querySelectorAll() => nodelist
const li = document.querySelectorAll('li')
for(let d=0; d < li.length ; d++){
    li[d].style.backgroundColor = 'blue'
}

// DOM MANIPULATE ELEMENT
// .innerHTML 
judul.innerHTML = "Muhammad Hasby Aizqi"

// element.style.properti
judul.style.backgroundColor = "#ccc"

// setAttribut | getAttribute | removeAttribute
judul.setAttribute('name','Hasby')
console.log(linkInstagram.getAttribute('href'))

// element.classList => add(), remove(), toggle(), item(), contains(), replace()

// DOM MANIPULATE NODE
// createElement | createTextNode | appendChild
const pBaru = document.createElement('p')
const pBaruText = document.createTextNode('Ini Paragraf yang dibuat dengan DOM')
pBaru.appendChild(pBaruText)

const SecA = document.getElementById('a')
SecA.appendChild(pBaru)

const ul = document.querySelector('section#b ul')
const liBaru = document.createElement('li')
const teksLi = document.createTextNode("Gomennasai okka san")
liBaru.appendChild(teksLi)

ul.insertBefore(liBaru,li2)
