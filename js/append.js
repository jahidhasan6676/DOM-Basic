// const placesList1 = document.getElementById('places-list');
// const li1 = document.createElement('li');
// li1.innerText = 'pahartoliBon';
// placesList1.appendChild(li1);

// const fruitsList2 = document.getElementById('fruits-list');
// const li2 = document.createElement('li');
// li2.innerText = 'anaros';
// fruitsList2.appendChild(li2)


// new section

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'kacchi';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'morogpolao';
ul.appendChild(li4);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress list</h1>
<ul>
    <li>T-shirt</li>
    <li>pant</li>
    <li>punjabi</li>
    <li>shirt</li>

</ul>

`
mainContainer.appendChild(sectionDress)