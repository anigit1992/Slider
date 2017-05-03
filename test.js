let previousBtn=document.querySelector('.previous');
let nextBtn=document.querySelector('.next');
let img=document.querySelectorAll('.img');
var n=img.length;
var index=0;
var k=document.querySelector('#k');
k.style.display=`block`;
// previousBtn.addEventListener('keydown', a.keyCode);
previousBtn.addEventListener('click', a);
function a() {
    if (index>0) {
        index--;
        console.log(index);
        if(index<n ){
            img[index].style.display=`block`;
            img[index+1].style.display=`none`;
        }
    }
    if(index==0){
        previousBtn.style.display=`none`;
    }
    if(index!=n-1){
        nextBtn.style.display=`inline-block`;
    }
}

nextBtn.addEventListener('keydown', nextClic.keyCode);
nextBtn.addEventListener('click',nextClic );
function nextClic() {
    if (index<n-1) {
        index++;
        console.log(index);
        if(index<n){
            img[index].style.display=`block`;
            img[index-1].style.display=`none`;
        }
    }
    if(index>0){
        previousBtn.style.display=`inline-block`;
    }
    if(index==n-1){
        nextBtn.style.display=`none`;
    }
    if(index!=n-1){
        nextBtn.style.display=`inline-block`;
    }
}