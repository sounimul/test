/* 사용자가 좋아하는 날씨 */
// let weather = document.querySelector('#userFavorite').innerText;
const wicon = document.getElementById("wicon");
//[userId, userNickname, fvWeather] = prompt('아이디/닉네임/좋아하는 날씨', 'id nickname sunny').split(' ');

// [userId, userNickname, fvWeather] = ['id', 'nick', 'sunny'];
// document.querySelector('#userId').innerText = userId;
// document.querySelector('#userNickname').innerText = userNickname;
// document.querySelector('#userFavorite').innerText = `${fvWeather}를 좋아합니다.`;

function Icon(){
    switch (weather){
        case '맑음':
            fileName="fvSun";
            break;
        case '구름 많음':
            fileName="fvSunAndCloud";
            break;
        case '흐림':
            fileName="fvCloud";
            break;
        case '비':
            fileName="fvRain";
            break;
        case '눈':
            fileName="fvSnow";
            break;
        default:
            fileName="seat";
    }
    wicon.setAttribute('src',`${img/fileName}.svg`);
    // console.log(wicon);
}
// Icon();

/* 날짜, 위치 받아오기 (날씨페이지 이동) */
let now = new Date(); //날짜, 시간 객체
let year = 0;
let month = 0;
let date = 0;
let hour = 0; //24시간제
let min = 0;
let sec = 0;

function getLoc(){
    now = new Date();
    console.log('위치 시작');
    navigator.geolocation.getCurrentPosition(Sucess, Error);
    year = now.getFullYear();
    month = now.getMonth();
    date = now.getDate();
    hour = now.getHours(); //24시간제
    min = now.getMinutes();
    sec = now.getSeconds();

    function Sucess(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // 1개의 $ajax로 날짜,시간,위도,경도를 서버로 전송하기 위해
        // // Ajax 요청 생성하여 서버로 위치 정보를 전송
        $.ajax({
            url:"/weather",
            type:"POST",
            data:JSON.stringify({
                latitude:latitude,
                longitude:longitude,
                year:year,
                month:month+1,
                date:date,
                hour:hour,
                min:min,
                sec:sec
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){
                location.href="/weather";
                console.log("서버로 위치 정보를 전송했습니다.");
            },
            error: function(xhr, status, error){
                console.error("서버로 위치 정보 전송하지 못하였습니다.");
            }
        });
    }

    function Error(position){
        console.log('위치 실패');
        document.getElementById('location').innerText = `위치 비동의`
    }
}

/* 저장한 날씨 */
// document.querySelector('.sIcon').addEventListener('click',()=>{
//     alert('검색');
//     location.reload();
// })

/* 저장, 삭제 */
const fwList = document.querySelector('.fwList');

function createArticleItem(month, date, weather, temp, humidity, rain){
    /* article */
    const article = document.createElement("article");
    article.setAttribute('class', 'fwItem');

    /* header */
    const header = document.createElement("header");
    header.setAttribute('class','fwHeader');
    article.appendChild(header);

        /* header h4 */
        const h4= document.createElement("h4");
        const fwDay = document.createTextNode(`${month}월 ${date}일`);
        h4.appendChild(fwDay);
        header.appendChild(h4);

        /* header span */
        const span= document.createElement("span");
        const fWeather = document.createTextNode(weather);
        span.setAttribute('class','material-symbols-outlined');
        span.appendChild(fWeather);
        header.appendChild(span);

    /* div .fwDetails */
    const fwDetails = document.createElement("div");
    fwDetails.setAttribute('class','fwDetails');
    article.appendChild(fwDetails);

        /* p .fwTemp */
        const fwTemp = document.createElement("p");
        fwTemp.setAttribute('class','fwTemp');
        fwDetails.appendChild(fwTemp);
            /* span icon */
            const tempIcon= document.createElement("span");
            tempIcon.setAttribute('class','material-symbols-outlined');
            const tempIconText = document.createTextNode("device_thermostat");
            tempIcon.appendChild(tempIconText);
            fwTemp.appendChild(tempIcon);
            /* span value */
            const tempValue= document.createElement("span");
            const tempValueText = document.createTextNode(`${temp}°C`);
            tempValue.appendChild(tempValueText);
            fwTemp.appendChild(tempValue);

        /* p .fwHumidity */
        const fwHumidity = document.createElement("p");
        fwHumidity.setAttribute('class','fwHumidity');
        fwDetails.appendChild(fwHumidity);
        
            /* span icon */
            const humidityIcon= document.createElement("span");
            humidityIcon.setAttribute('class','material-symbols-outlined');
            const humidityIconText = document.createTextNode("water_drop");
            humidityIcon.appendChild(humidityIconText);
            fwHumidity.appendChild(humidityIcon);
            /* span value */
            const humidityValue= document.createElement("span");
            const humidityValueText = document.createTextNode(`${humidity}%`);
            humidityValue.appendChild(humidityValueText);
            fwHumidity.appendChild(humidityValue);

        /* p .fwRain */
        const fwRain = document.createElement("p");
        fwRain.setAttribute('class','fwRain');
        fwDetails.appendChild(fwRain);

            /* span icon */
            const rainIcon= document.createElement("span");
            rainIcon.setAttribute('class','material-symbols-outlined');
            const rainIconText = document.createTextNode("rainy");
            rainIcon.appendChild(rainIconText);
            fwRain.appendChild(rainIcon);
            /* span value */
            const rainValue= document.createElement("span");
            const rainValueText = document.createTextNode(`${rain}mm`);
            rainValue.appendChild(rainValueText);
            fwRain.appendChild(rainValue);

    return article;
}
// 임의로 주석처리(백엔드 구현)
// document.querySelector('#add').addEventListener('click',()=>{
//     //createArticleItem(month, date, weather, temp, humidity, rain)
//     const arr = (prompt('month, date, weather, temp, humidity, rain', '1 1 sunny 35 60 3').split(' '));
//     [m, d, w, t, h, r]= [arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],];
//
//     fwList.appendChild(createArticleItem(m, d, w, t, h, r));
// })
// document.querySelector('#remove').addEventListener('click',()=>{
//     console.log('삭제');
//     const dArticle = document.querySelectorAll('.fwItem');

//     if(dArticle.length<1){
//         console.log('리스트 없음');
//     }
//     else {
//     dArticle[dArticle.length-1].remove();
//     }
// })

/* 프로필 버튼(2) */

/* 프로필 수정 */
document.querySelector('#changeProfile').addEventListener('click',()=>{
    document.querySelector('#changePFbackground').style.display = 'flex'
})

document.querySelector('#close').addEventListener('click',()=>{
    document.querySelector('#changePFbackground').style.display = 'none'
})

// document.querySelector('#closeChangePF').addEventListener('click',()=>{
//     document.querySelector('.changePFbackground').style.display = 'none'
// })

/* 닉네임 변경 */
// document.querySelector('#changeNN').addEventListener('click',()=>{
//     const newNick = prompt('변경할 닉네임을 입력하세요','nickname');
//     document.querySelector('#userNickname').innerText = newNick;
//     document.querySelector('#pUserNickname').innerText = newNick;
// })

/* 좋아하는 계절 변경 */
// document.querySelector('#changeFW').addEventListener('click',()=>{
//     const newFW = prompt('좋아하는 날씨를 입력하세요','흐림');
//     document.querySelector('#userFavorite').innerText = `${newFW}을/를 좋아합니다.`;
//     document.querySelector('#fw').innerText = newFW;
// })


// /* 비밀번호 변경 */
// document.querySelector('#changePW').addEventListener('click',()=>{
//     document.querySelector('.changePWbackground').style.display = 'flex'
// })

// document.querySelector('#closeChangePW').addEventListener('click',()=>{
//     document.querySelector('.changePWbackground').style.display = 'none'
// })

// const regexPW =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
// const currentPW = document.querySelector('#currentPW');
// const newPW = document.querySelector('#newPW');
// const confirmPW = document.querySelector('#confirmPW');

// /* 현재 비밀번호 */
// function checkCurrentPW(){
//     //console.log('사용자가 원하는 비밀번호', pw.value);
//     //8-20자리
//     //영문 대소문자
//     //숫자
//     //아래의 특수문자
    
//     if(!regexPW.test(currentPW.value)) {
//         currentPW.style.color = "red";
//         currentPW.style.borderBottom = "1px solid red"
//         return false;
//     }
    
//     else {
//         currentPW.style.color = "green";
//         currentPW.style.borderBottom = "1px solid green"
//         return true;
//     }
// }

// function confirmCurrentPW(){

//     if(!regexPW.test(currentPW.value)) {
//         currentPW.style.color = "red";
//         // currentPW.value = '';
//         currentPW.style.borderBottom = "1px solid red"
//         return false;
//     }
    
//     else {
//         currentPW.style.borderBottom = 'none';
//         return true;
//     }
// }

// // 맞는 비밀번호인지 확인 추가


// /* 새로운 비밀번호 */
// function checkNewPW(){
//     //console.log('사용자가 원하는 비밀번호', pw.value);
//     //8-20자리
//     //영문 대소문자
//     //숫자
//     //아래의 특수문자
//     if(!regexPW.test(newPW.value) || newPW.value===currentPW.value) {
//         newPW.style.color = "red";
//         newPW.style.borderBottom = "1px solid red"
//         return false;
//     }
    
//     else {
//         newPW.style.color = "green";
//         newPW.style.borderBottom = "1px solid green"
//         return true;
//     }
// }

// function confirmNewPW(){

//     if(!regexPW.test(newPW.value) || newPW.value===currentPW.value) {
//         // newPW.value = '';
//         newPW.style.color = "red";
//         newPW.style.borderBottom = "1px solid red"
//         return false;
//     }
    
//     else {
//         newPW.style.borderBottom = 'none';
//         return true;
//     }
// }


// /* 새로운 비밀번호 재확인 */
// function checkConfirmPW(){
//     //console.log('사용자가 원하는 비밀번호', pw.value);
//     //8-20자리
//     //영문 대소문자
//     //숫자
//     //아래의 특수문자
    
//     if(!regexPW.test(confirmPW.value) || newPW.value!==confirmPW.value || newPW.value===currentPW.value) {
//         confirmPW.style.color = "red";
//         confirmPW.style.borderBottom = "1px solid red"
//         return false;
//     }
    
//     else {
//         confirmPW.style.color = "green";
//         confirmPW.style.borderBottom = "1px solid green"
//         return true;
//     }
// }

// function completePWC(){
//     let regexPw =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    
//     if(!regexPW.test(confirmPW.value) || newPW.value!==confirmPW.value || newPW.value===currentPW.value) {
//         // confirmPW.value = '';
//         confirmPW.style.color = "red";
//         confirmPW.style.borderBottom = "1px solid red"
//         return false;
//     }
    
//     else {
//         confirmPW.style.borderBottom = 'none';
//         return true;
//     }
// }

/* 저장 데이터 상세 정보 */
// document.querySelector('.fwItem').addEventListener('click',()=>{
//     document.querySelector('.saveDetailWrapper').style.display = 'flex';
// })

/* 좋아하는 날씨 변경 */
document.querySelector('#fw').addEventListener('change',()=>{
    document.querySelector('#currentFw').innerText = document.querySelector('#fw').value;
})

/* 조건 새로고침 */
// document.querySelector('.rIcon').addEventListener('click',()=>{
//     document.querySelector('#sTemp').value = -1;
//     document.querySelector('#sHumid').value = -1;
//     document.querySelector('#sRain').value = -1;
// })

// function pop(a){
//     // console.log(a.parentElement.parentElement.parentElement);
//     const ele= a.parentElement.parentElement.parentElement;
//     ele.childNodes[3].style.display = 'flex';
// }

// function closeDetails(b){
//     // console.log(b.parentElement.parentElement.parentElement.style.display);
//     b.parentElement.parentElement.parentElement.style.display = 'none';
// }

function confirmDelete(c){
    const answer = confirm('정말 삭제하시겠습니까?'); //true, false
    
    if(answer){ //삭제 O

    }else { //삭제 X

    }

    // c.parentElement.parentElement.parentElement.style.display = 'none'; //팝업 닫기
}

// document.querySelector('#expandBtn').addEventListener('click',()=>{
//     console.log('클릭');
//     // let expand = document.querySelector('.fwHeader').style.display;
//     let expand = document.querySelector('.fwDetails').style.display;
//     if(expand === 'none' || expand === ''){
//         document.querySelector('.fwDetails').style.display = 'flex';
//         document.querySelector('#expandBtn').innerText = 'expand_less';
//         document.querySelector('.fwItem').style.height = '80px';
//     }else {
//         document.querySelector('.fwDetails').style.display = 'none';
//         document.querySelector('#expandBtn').innerText = 'expand_more';
//         document.querySelector('.fwItem').style.height = '40px';
//     }
// })

/* 작은 버튼 */
// function expand(e){
//     // console.log(e.parentElement.parentElement.parentElement.childNodes[3]); fwHDetails
//     // console.log(e.parentElement.parentElement); //fwHeader
//     // console.log(e.parentElement.parentElement.parentElement); //fwItem

//     let expand = e.parentElement.parentElement.parentElement.childNodes[3].style.display;
//     if(expand === 'none' || expand === ''){
//         e.parentElement.parentElement.parentElement.childNodes[3].style.display = 'flex';
//         e.innerText = 'expand_less';
//         e.parentElement.parentElement.parentElement.style.height = '80px';
//     }else {
//         e.parentElement.parentElement.parentElement.childNodes[3].style.display = 'none';
//         e.innerText = 'expand_more';
//         e.parentElement.parentElement.parentElement.style.height = '40px';
//     }

// }

// 전체 item 클릭
function expand(e){

    let expand = e.childNodes[3].style.display;

    if(expand === 'none' || expand === ''){
        e.childNodes[3].style.display = 'flex';
        e.childNodes[1].childNodes[11].childNodes[1].innerText = 'expand_less';
        e.style.height = '70px';
    }else {
        e.childNodes[3].style.display = 'none';
        e.childNodes[1].childNodes[11].childNodes[1].innerText = 'expand_more';
        e.style.height = '40px';
    }

}