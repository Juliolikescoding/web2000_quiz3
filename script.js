var pic = document.querySelector('img');
var img = pic.querySelector('.changeImg');

function changeImg(){
    img.classList.toggle(".changeImg");
    img.src=`scratching.gif`;
}

pic.addEventListener("click", ()=>{
    changeImg();
})