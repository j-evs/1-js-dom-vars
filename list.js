'use strict';

const people = [
  {
    name: 'Daenerys Targaryen',
    gender: 'female'
  },
  {
    name: 'Jon Snow',
    gender: 'male'
  },
  {
    name: 'Tyrion Lannister',
    gender: 'male'
  },
  {
    name: 'Ned Stark',
    gender: 'male'
  },
  {
    name: 'Cersei Lannister',
    gender: 'female'
  },
  {
    name: 'Sansa Stark',
    gender: 'female'
  },
  {
    name: 'Arya Stark',
    gender: 'female'
  },
  {
    name: 'Peter Baelish',
    gender: 'male'
  },
  {
    name: 'Hodor',
    gender: 'male'
  },
  {
    name: 'Margaery Tyrell',
    gender: 'female'
  }
];

const jobs = ['King in the North', 'Khaleesi', 'King of the Andals, the Rhoynar, and the First',
              'Hand of the King', 'Lord Commander of the Night\'s watch', 'Khal', 'Warden',
              'Master of Coin', 'King-Beyond-the-Wall', 'Lord of Winterfell' ];



function generatePeopleArray (peopleList, jobList, resultArrayLength, minAge, maxAge, minSalary, maxSalary) {
  let generatedArray = [];

  for (let i = 0; i <= resultArrayLength; i++) {
    let pickedPersonId = Math.floor(Math.random() * peopleList.length);
    let generatedPerson = {
      name: peopleList[pickedPersonId]['name'],
      gender: peopleList[pickedPersonId]['gender'],
      job: jobList[Math.floor(Math.random() * jobList.length)],
      age: Math.floor((Math.random() * (maxAge - minAge + 1)) + minAge),
      salary: Math.floor((Math.random() * (maxSalary - minSalary)) + minSalary)
    }
    generatedArray.push(generatedPerson);
  }
  return generatedArray;
}

function addStyles(elem) {
  let {job, age, salary, gender} = elem.dataset;

  elem.style.margin = '15px';
  elem.style.width = '200px';
  if (salary < 50) {
    elem.style.background = 'red';
  } else if ( salary <= 80 && salary >= 50) {
    elem.style.background = 'yellow';
  } else {
    elem.style.background = 'green';
  }

  if (age <= 27 && age >= 20) {
    elem.querySelector('.name').style.fontWeight = 700;
  }

  if (job === 'King in the North') {
    elem.style.borderBottom = '2px solid blue';
  }

  if (gender === 'female') {
    elem.style.fontSize = `150%`;
  }
}

function createDomList(people) {
  let ul = document.createElement('ul');
  ul.style.display = 'flex';
  ul.style.flexWrap = 'wrap';
  ul.style.listStyle = 'none';

  people.forEach(person => {
    let li = document.createElement('li');
    for (let prop in person) {
      let propElement = document.createElement('p');
      propElement.classList.add(`${prop}`);
      li.setAttribute(`data-${prop}`, `${person[prop]}`);
      propElement.innerHTML = `${prop}: ${person[prop]}`;
      li.appendChild(propElement);
    };
    addStyles(li);
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}

let peopleArray = generatePeopleArray(people, jobs, 10, 20, 35, 20, 120);
createDomList(peopleArray);
