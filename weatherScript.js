let weather = prompt('날씨를 입력하세요','sun')
const wicon = document.getElementById("wicon");
const clock = document.getElementById('clock');
const loc = document.getElementById('location');

function Icon(){
    wicon.setAttribute('src',`${weather}.png`);
    console.log(wicon);
}

function getClock(){
    const day_arr = ['일','월','화','수','목','금','토'];
    const now = new Date(); //날짜, 시간 객체
  //const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();
    const hour = now.getHours(); //24시간제
    const min = now.getMinutes();

    clock.innerText = `${month+1}월 ${date}일 ${day_arr[day]}요일 \n ${hour}시 ${min}분`;

}

function getLoc(){
    navigator.geolocation.getCurrentPosition(Success, Error);

    function Success(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        loc.innerText = `위도 ${latitude} \n 경도 ${longitude}`;
    }
}


/* 실행 */
Icon();
getClock();
getLoc();

setInterval(getClock,1000);

