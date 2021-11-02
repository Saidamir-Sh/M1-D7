// EX7: Write a function to change the h1 text to something else
function headerChange() {
    let titleShop = document.querySelector(".title-shop")
    titleShop.innerText = "EasyShop"
}
// EX8: Write a function to change the page background color
function colorChange() {
    let body = document.querySelector(".body")
    body.classList.toggle("backColor")
}
// EX9: Write a function to change the footer address with a fake one
function changeFooter() {
    let footerText = document.querySelector(".footerText")
    footerText.innerText = "2021. Berlin, Germany."
    
}
// EX10: Write a function to add a CSS class to every Amazon link
let amazonLink = document.getElementsByTagName('a')
amazonLink.addEventListener('onload', () => {
    amazonLink.style.color = 'green'
})
// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function hideImages() {
     let images = document.querySelectorAll(".card-img-top")
    images.classList.toggle('displayImg')
}
// EX12: Write a function to color the price of the products in a different one every time it's invoked