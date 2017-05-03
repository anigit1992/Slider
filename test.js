let img=document.querySelectorAll('.img');
var n=img.length;
var counter=0;
function start(){
    var a=[counter++  % n];
    img[a].style.display=`block`;
    if (a==0){
        img[n-1].style.display=`none`;
    }
    if(a!=0){
        img[a-1].style.display=`none`;}
}
setInterval(start, 1000);