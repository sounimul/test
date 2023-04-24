/* 사용자가 좋아하는 날씨 */

//[userId, userNickname, fvWeather] = prompt('아이디/닉네임/좋아하는 날씨', 'id nickname sunny').split(' ');

[userId, userNickname, fvWeather] = ['id', 'nick', 'sunny'];
document.querySelector('#userId').innerText = userId;
document.querySelector('#userNickname').innerText = userNickname;
document.querySelector('#userFavorite').innerText = `${fvWeather}를 좋아합니다.`;

/* 프로필 버튼 */

//프로필 수정
document.querySelector('#changePF').addEventListener('click',()=>{
    alert('프로필 수정');
})

//비밀번호 변경
document.querySelector('#changePW').addEventListener('click',()=>{
    alert('비밀번호 수정');
})

/* 저장한 날씨 */
document.querySelector('#sIcon').addEventListener('click',()=>{
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

document.querySelector('#add').addEventListener('click',()=>{
    //createArticleItem(month, date, weather, temp, humidity, rain)
    const arr = (prompt('month, date, weather, temp, humidity, rain', '1 1 sunny 35 60 3').split(' '));
    [m, d, w, t, h, r]= [arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],];
    
    fwList.appendChild(createArticleItem(m, d, w, t, h, r));
})
document.querySelector('#remove').addEventListener('click',()=>{
    console.log('삭제');
    const dArticle = document.querySelectorAll('.fwItem');

    if(dArticle.length<1){
        console.log('리스트 없음');
    }
    else {
    dArticle[dArticle.length-1].remove();
    }
})