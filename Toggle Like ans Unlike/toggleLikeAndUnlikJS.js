let puppyImageElement = document.getElementById("puppyImage");
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");
let isImageClicked = false;

let changePuppy = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
let oldPuppy = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";

function onClickLikeButton() {
    if(isImageClicked === false) {
        puppyImageElement.src = changePuppy;
        likeIconElement.style.color = "#0967d2";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#ffff";
        isImageClicked = true;
    }else {
        puppyImageElement.src = oldPuppy;
        likeIconElement.style.color = "#cbd2d9";
        likeButtonElement.style.color = "#9aa5b1";
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        isImageClicked = false;
    }
}