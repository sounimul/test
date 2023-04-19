//let weather = prompt('날씨를 입력하세요','sun')
const wicon = document.getElementById("wicon");
const clock = document.getElementById('clock');
const pastHour = document.getElementById('pastHour');
const futureHour = document.getElementById('futureHour');
const loc = document.getElementById('location');
const futureDay1 = document.getElementsByClassName('futureDay')[0];
const futureDay2 = document.getElementsByClassName('futureDay')[1];
const futureDay3 = document.getElementsByClassName('futureDay')[2];

const weather_arr = ['맑음','구름조금','구름많음','흐림','빗방울','비','눈'];

function Icon(){
    //wicon.setAttribute('src',`${weather}.png`);
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
    
    const past = hour-1;
    if(past<0) pastHour.innerText = '11:00';
    else pastHour.innerText = `${past}:00`;

    const future = hour+1;
    if(future==24) futureHour.innerText = `00:00`
    else futureHour.innerText = `${future}:00`

    /* 3일 날씨 */
    if(day===4) {
        futureDay1.innerText = day_arr[5];
        futureDay2.innerText = day_arr[6];
        futureDay3.innerText = day_arr[0];
    }
    else if(day===5) {
        futureDay1.innerText = day_arr[6];
        futureDay2.innerText = day_arr[0];
        futureDay3.innerText = day_arr[1];
    }
    else if(day===6) {
        futureDay1.innerText = day_arr[0];
        futureDay2.innerText = day_arr[1];
        futureDay3.innerText = day_arr[2];
    }
    else {
        futureDay1.innerText = day_arr[day+1];
        futureDay2.innerText = day_arr[day+2];
        futureDay3.innerText = day_arr[day+3];
    }


    
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

