const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");


yesBtn.addEventListener("click", ()=>{
    alert("i Love You To Baby😍💕😘");
})

function movingBtn() {
    const maxWidth = 400;
    const maxHeight = 400;
    const x = Math.floor(Math.random() * maxWidth) ;
    const y = Math.floor(Math.random() * maxHeight );

console.log(x, y);
    noBtn.style.left = x + "px" ;
    noBtn.style.top = y + "px" ;
}

noBtn.addEventListener("mousemove", function(){
    movingBtn();
})
console.log(yesBtn, noBtn);
