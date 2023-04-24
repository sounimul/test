const wicon = document.getElementById("wicon");
const pastWicon = document.querySelector('#pastIcon');

const clock = document.getElementById('clock');
const pastHour = document.getElementById('pastHour');
const futureHour = document.getElementById('futureHour');
const loc = document.getElementById('location');
const futureDay1 = document.getElementsByClassName('futureDay')[0];
const futureDay2 = document.getElementsByClassName('futureDay')[1];
const futureDay3 = document.getElementsByClassName('futureDay')[2];

//                        ['맑음', '구름 많음', '흐림', '비', '비 또는 눈', '눈', '빗방울', '빗방울눈날림', '눈날림']; //현재 날씨
const weather_arr = ['맑음', '구름 많음', '흐림', '비', '비/눈', '눈', '비', '비/눈', '눈']; //현재 날씨
const cweatherIconCharacter = ['sun', 'cloud', 'cloudAndSun', 'rain', 'rain', 'snow', 'rain', 'rain', 'snow']; //현재 날씨
const weatherGIcon_arr = ['sunny', 'cloudy', 'partly_cloudy_day', 'rainy', 'weather_mix', 'weather_snowy', 'rainy', 'weather_mix', 'weather_snowy']; //현재 날씨
//구글 아이콘
//                        ['맑음', '구름 많음', '흐림', '비', '비 또는 눈', '눈', '소나기']; //3일 예보
const tweatherGIcon_arr = ['sunny', 'cloudy', 'partly_cloudy_day', 'rainy', 'weather_mix', 'weather_snowy', 'rainy_heavy']; //3일 예보

function Icon(){
    document.querySelector('#pastIcon').innerText = `${weatherGIcon_arr[Math.floor(Math.random() * 9)]}`;
    document.querySelector('#futureIcon').innerText = `${weatherGIcon_arr[Math.floor(Math.random() * 9)]}`;

    document.querySelector('#plusOneIcon').innerText = `${tweatherGIcon_arr[Math.floor(Math.random() * 7)]}`;
    document.querySelector('#plusTwoIcon').innerText = `${tweatherGIcon_arr[Math.floor(Math.random() * 7)]}`;
    document.querySelector('#plusThreeIcon').innerText = `${tweatherGIcon_arr[Math.floor(Math.random() * 7)]}`;

    console.log(wicon);
}

function setInfo(){

    /* -1/현재/+1 기온 */
    document.querySelector('#pastTemp').innerText = `${Math.floor(Math.random() * 45)}℃ `;
    document.querySelector('#currentTemp').innerText = `${Math.floor(Math.random() * 45)}℃ `;
    document.querySelector('#futureTemp').innerText = `${Math.floor(Math.random() * 45)}℃ `;

    /* 현재 날씨 정보 */
    const currentWeather = Math.floor(Math.random() * 9);
    wicon.setAttribute('src',`${cweatherIconCharacter[currentWeather]}.png`);
    document.querySelector('#currentExp').innerText = `${weather_arr[currentWeather]}`;

    /* 현재 날씨 상세 정보 */
    //최저기온 최고기온 습도 강수
    document.querySelector('#infoLow').innerText = `${Math.floor(Math.random() * 10)}℃ `;
    document.querySelector('#infoHigh').innerText = `${Math.floor(Math.random() * 45)+10}℃ `;
    document.querySelector('#infoHumidity').innerText = `${Math.floor(Math.random() * 100)}% `;
    document.querySelector('#infoRain').innerText = `${Math.floor(Math.random() * 100)}%`;

    /* 3일 예보 기온 정보 */
    //최저 순서대로
    document.querySelectorAll('.threeDaysLow')[0].innerText = `${Math.floor(Math.random() * 10)}℃ `;
    document.querySelectorAll('.threeDaysLow')[1].innerText = `${Math.floor(Math.random() * 10)}℃ `;
    document.querySelectorAll('.threeDaysLow')[2].innerText = `${Math.floor(Math.random() * 10)}℃ `;
    //최고 순서대로
    document.querySelectorAll('.threeDaysHigh')[0].innerText = `${Math.floor(Math.random() * 45)+10}℃ `;
    document.querySelectorAll('.threeDaysHigh')[1].innerText = `${Math.floor(Math.random() * 45)+10}℃ `;
    document.querySelectorAll('.threeDaysHigh')[2].innerText = `${Math.floor(Math.random() * 45)+10}℃ `;
}

setInfo();

function getClock(){
    const day_arr = ['일','월','화','수','목','금','토'];
    const now = new Date(); //날짜, 시간 객체
  //const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();
    const hour = now.getHours(); //24시간제
    const min = now.getMinutes();

    console.log(hour, min);

    clock.innerText = `${month+1}월 ${date}일 ${day_arr[day]}요일 ${hour}시 ${min}분`;
    
    const past = hour-1;
    if(past<0) pastHour.innerText = '11:00';
    else pastHour.innerText = `${past}시`;

    const future = hour+1;
    if(future==24) futureHour.innerText = `00:00`
    else futureHour.innerText = `${future}시`

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

        loc.innerText = `${latitude} ${longitude}`;
        console.log('위치');
    }
}


/* 실행 */
Icon();
getClock();
getLoc();

setInterval(getClock,1000);

const nickName = prompt('닉네임을 입력해 주세요.','날씨 요정');
document.querySelector('#userNickname').innerText = nickName;
document.querySelector('#huserNickname').innerText = nickName;

/* 날씨 저장 */
//userInfo
document.querySelector('#saveWeather').addEventListener('click',()=>{
    document.querySelector('.fvSaveWrapper').style.display = 'flex';
})

//header
document.querySelector('#hsaveWeather').addEventListener('click',()=>{
    document.querySelector('.fvSaveWrapper').style.display = 'flex';
})

document.querySelector('#close').addEventListener('click',()=>{
    document.querySelector('.fvSaveWrapper').style.display = 'none';
})

//임시 저장 버튼 기능
document.querySelector('#save').addEventListener('click',()=>{
    document.querySelector('.fvSaveWrapper').style.display = 'none';
})
