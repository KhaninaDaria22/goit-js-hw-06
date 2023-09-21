const items = document.querySelector('#categories');
const itemsChild = items.children;

[...itemsChild].forEach(item => 
    console.log(`Category: ${item.firstElementChild.textContent} 
    Elements:`, item.lastElementChild.children.length));
