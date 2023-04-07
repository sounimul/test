let weather = prompt('날씨를 입력하세요','sun')
const wicon = document.getElementById("wicon");

function Icon(){
    wicon.setAttribute('src',`${weather}.png`);
    console.log(wicon);
}

Icon();