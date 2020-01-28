'use strict'

let mainPage = document.getElementById('main-page');
let addNew = document.getElementById('add-new');
let modify = document.getElementById('modify');
location.hash = '#main-page';

let patternMainPage = new RegExp('#main-page')
let patternAddNew = new RegExp('#/add');
let patternModify = new RegExp('#/modify');
let i = 0;



window.onhashchange = function() {
  console.log(patternAddNew.test(window.location.href));
  if (patternAddNew.test(window.location.href)) {
    addNew.className = 'page-visible';
    mainPage.className = 'page-hidden';
    modify.className = 'page-hidden';
  } else if (patternModify.test(window.location.href)) {
    addNew.className = 'page-hidden';
    mainPage.className = 'page-hidden';
    modify.className = 'page-visible';
  } else {
    mainPage.className = 'page-visible';
    addNew.className = 'page-hidden';
    modify.className = 'page-hidden';
  }
}


const createSetForm = document.getElementById('set-form');
const nameSet = document.getElementById('name');
const titleSet = document.getElementById('add-term');
const term = document.getElementById('term');
const definition = document.getElementById('definition');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
const formTerm = document.getElementById('term-definition');


titleSet.onclick = function() {
    formTerm.style.display = 'block';
}


save.onclick = function() {
  if (nameSet.value !== null && nameSet.value !== '') {
    i++;
    const newSet = document.createElement('div');
    newSet.id = i;
    const newSetTerm = document.createElement('span');
    newSetTerm.innerText = term.value;
    const newSetDescription = document.createElement('span');
    newSetDescription.innerText = definition.value;
    const newSetEdit = document.createElement('button');
    newSetEdit.innerText = 'Edit';
    const newSetRemove = document.createElement('button');
    newSetRemove.innerText = 'Remove';
    newSet.appendChild(newSetTerm);
    newSet.appendChild(newSetDescription);
    newSet.appendChild(newSetEdit);
    newSet.appendChild(newSetRemove);
    mainPage.appendChild(newSet);
    location.hash = '#main-page';
    
  } else {
    alert('Enter your name');
  }
}
