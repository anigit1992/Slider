let previousBtn=document.querySelector('.previous');
let nextBtn=document.querySelector('.next');
let img=document.querySelectorAll('.img');
var n=img.length;
var index=0;
var k=document.querySelector('#k');
k.style.display=`block`;
previousBtn.addEventListener('click', a);
function a() {
    if (index > 0) {
        index--;
        if (index < n) {
            img[index].style.display = `block`;
            img[index + 1].style.display = `none`;
        }
    }
    nextBtn.addEventListener('click', nextClic);
    function nextClic() {
        if (index < n - 1) {
            index++;
            if (index < n) {
                img[index].style.display = `block`;
                img[index - 1].style.display = `none`;
            }
        }
    }
}