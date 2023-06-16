/* 사용자가 좋아하는 날씨 */
let weather = document.querySelector('#userFavorite').innerText;
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
    wicon.setAttribute('src',`../static/${fileName}.png`);
    // console.log(wicon);
}
Icon();
/* 저장한 날씨 */
document.querySelector('.sIcon').addEventListener('click',()=>{
    alert('검색');
    location.reload();
})

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
document.querySelector('#changePF').addEventListener('click',()=>{
    document.querySelector('.changePFbackground').style.display = 'flex'
})

document.querySelector('#closeChangePF').addEventListener('click',()=>{
    document.querySelector('.changePFbackground').style.display = 'none'
})

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

document.querySelector('#saveDetailClose').addEventListener('click',()=>{
    document.querySelector('.saveDetailWrapper').style.display = 'none';
})

document.querySelector('#saveDetailDelete').addEventListener('click',()=>{
    console.log('삭제');
})

/* 좋아하는 날씨 변경 */
document.querySelector('#fw').addEventListener('change',()=>{
    document.querySelector('#currentFw').innerText = document.querySelector('#fw').value;
})

/* 조건 새로고침 */
document.querySelector('.rIcon').addEventListener('click',()=>{
    document.querySelector('#sTemp').value = -1;
    document.querySelector('#sHumid').value = -1;
    document.querySelector('#sRain').value = -1;
})

function popUp(){
    console.log(document.querySelector('.fwItem'));
    // document.querySelector('.saveDetailWrapper').style.display = 'flex';
}

{/* <div class="saveDetailWrapper">
<div class="saveDetail">
    <h4>상세정보</h4>
    <div class="saveDetailInfo">
        <span><b>날짜</b></span> <span>2023.04.30</span>
        <br>
        <span><b>지역</b></span> <span>대구 달서구</span>
    </div>
    <div class="saveDetailBtn">
        <button id="saveDetailClose">닫기</button>
        <button id="saveDetailDelete">삭제</button>
    </div>
</div>
</div> */}