const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTree(rootNode, obj) {
  rootNode.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  const ul = document.createElement('ul');

  obj.forEach(element => {
    const i = document.createElement('i');
    const liParent = document.createElement('li');
    const ulSecChild = document.createElement('ul');
    const childrenUl = element['title'];
    const child = element['children'];

    ulSecChild.className = 'child-ul';
    liParent.className = 'parent';
    ul.append(liParent);

    if (element.folder) {
      i.setAttribute('class', 'material-icons');
      i.innerText = 'folder_open';
      liParent.prepend(i);
      liParent.addEventListener('click', () => {
        ulSecChild.classList.toggle('hidden');

        if (i.innerText === 'folder') {
          i.innerText = 'folder_open';
        } else {
          i.innerText = 'folder';
        }

      });
    }

    if (childrenUl) {
      liParent.append(childrenUl);
    }

    if (!child) {
      return child
    }

    child.forEach(element => {
      const li = document.createElement('li');
      const childrenOne = element['title'];

      li.className = 'child';
      ulSecChild.append(li);
      liParent.appendChild(ulSecChild);

      if (childrenOne) {
        li.append(childrenOne);
      }

    });

  });

  return ul;
}

createTree(rootNode, data);

function addSpain() {
  const spainJpg = data[0].children[1].children[0].title;
  const ulSpain = document.createElement('ul');
  const liSpain = document.createElement('li');
  const firstLi = document.getElementsByClassName('child')[1];
  const innerLi = firstLi.innerHTML;

  ulSpain.append(liSpain);

  if (spainJpg) {
    liSpain.append(spainJpg);
  }

  if (innerLi === 'Vacations') {
    firstLi.append(ulSpain);
  }

}

addSpain();

function toggleFolder () {

  rootNode.onclick = function (event) {

    const childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) {
      return;
    }

    childrenContainer.hidden = !childrenContainer.hidden;
  };
}

toggleFolder();