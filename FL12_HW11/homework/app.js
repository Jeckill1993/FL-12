'use strict'

const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');


createFolder(structure, rootNode);


function createFolder(array, parent) {
  array.forEach(element => {
    const list = document.createElement('div');
    const listItem = document.createElement('p');
    listItem.innerHTML = `<i class="material-icons">${element['title']}</i>`; 
    parent.appendChild(listItem); 
   
    if(element.folder) {
      listItem.className = 'closed-folder';
    } else {
      listItem.className = 'file';
    }

    if(element.children) {
      listItem.appendChild(list);
      createFolder(element.children, list);
    }

     listItem.addEventListener('click', function clickAction(){
      if(listItem.className === 'closed-folder') {
        listItem.className = 'open-folder';
      } else {
        listItem.className = 'closed-folder';
      }
    })
    
  }) 

}




































/*const generateTree = (array, rootHtmlElement) => array.forEach(
function createItem(item, index, arr, ownerHtmlElement = null) {
  ownerHtmlElement = ownerHtmlElement || rootHtmlElement;
  const p = ownerHtmlElement.appendChild(document.createElement('p'));
  p.className = item.folder ? 'folder folded' : 'file';
  p.innerHTML = `<i class="material-icons"></i>${item.title}`;
  if (item.folder) {
    p.addEventListener('click', e => e.target.classList.toggle('folded'));
    const div = ownerHtmlElement.appendChild(document.createElement('div'));
    if (Array.isArray(item.children)) {
      item.children.forEach(subItem => createItem(subItem, index, arr, div));
    } else {
      div.innerHTML = '<p><i>Folder is empty</i></p>';
    }
  }
}
);

generateTree(structure, rootNode);*/
