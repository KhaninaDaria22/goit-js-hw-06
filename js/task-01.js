const items = document.querySelectorAll('#categories');
const itemsChild = items.children;

[...itemsChild].forEach(item => 
    console.log(`Category: ${item.firstElementChild.textContent} 
    Elements:`, item.lastElementChild.children.length));
