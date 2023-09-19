const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    width: "250",
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    width: "250",
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    width: "250",
  },
];


const galleryList = document.querySelector('.gallery');
console.log(galleryList);
function creatMarkup(arr) {
  const markup = arr.map(({url, alt, width}) => `<li><img src="${url}" alt="${alt}" width="${width}"></li>`).join("");

  galleryList .insertAdjacentHTML("beforeend", markup);
}
creatMarkup(images);
