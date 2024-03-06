const mainImage = document.getElementById("headerImage");
const heading = document.getElementById("heading");
const para = document.getElementById("para");

const back = document.getElementById("back");
const next = document.getElementById("next");


const pages = [{
    heading: "Discover innovative ways to decorate",
    para: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imgFile: "images/desktop-image-hero-1.jpg "
}, {
    heading: "We are available all across the globe",
    para: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ",
    imgFile: "images/desktop-image-hero-2.jpg "
}, {
    heading: "Manufactured with the best materials",
    para: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imgFile: "images/desktop-image-hero-3.jpg "
}]

let mainPage = 0;
const changePage = (num) => {
    mainPage += num ;
    if(mainPage < 3 && mainPage >= 0) {
        mainImage.style.backgroundImage = `url("images/desktop-image-hero-${mainPage}.jpg")`;
        heading.innerText = pages[mainPage].heading;
        para.innerText = pages[mainPage].para;

    }
    

}



