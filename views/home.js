const openAPI = require('../openAPI');

module.exports = {
   html:function(bulbNumber){
      return`
        <!doctype html>
        <html>
            <head>
            <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                <style>
                    body{
                        background-image:url('/public/background.jpg');
                        background-size:1600px;
                    }
                    .container{
                        display:flex;
                        flex-direction:row;
                        box-sizing:border-box;  
                        width:800px;
                        height:480px;
                        margin:0px; /*본래는 0px이다.*/
                    }
                    #content-1{
                        display:flex;
                        flex-direction:column;
                        width:476px;
                        box-sizing:border-box;
                        margin:1px;
                    }
                    #content-2{
                        display:flex;
                        width:320px;
                        flex-direction:column;
                        box-sizing:border-box;
                        margin:1px;
                    }
                    #content-1-1{
                        display:flex;
                        align-items:center;
                        height:90px;
                        box-sizing:border-box;
                        margin:0px;
                    }
                    #content-1-2{
                        margin-left:5px;
                        height:198px;
                        box-sizing:border-box;
                        margin-top:1px;
                        margin-bottom:1px;
                    }
                    #content-1-3{
                        height:188px;
                        box-sizing:border-box;
                        margin:0px;
                    }
                    #content-2-1{
                        display:flex;
                        flex-direction:column;
                        width:320px;
                        height:269px;
                        box-sizing:border-box;
                        margin:0px;
                        border:2px solid black;
                        border-radius:20px;
                        background-color:#EDEEEE;
                    }
                    #content-2-2{
                        display:flex;
                        width:320px;
                        height:208px;
                        box-sizing:border-box;
                        margin-top:1px;
                    }
                    #memo{
                        background-color:#FFE4C4;
                        margin-left:11px;
                        width:410px;
                        border-radius:1em;
                        font-size:1.1em;
                        font-weight: bold;
                        color:black;
                        text-decoration:underline;
                    }
                    #memo ol li a{
                        text-decoration:none;
                        color:black;
                    }
                    .pmContainer{
                        margin-left:5px;
                        display:flex;
                        flex-direction:row;
                    }
                    #pmTextContent{
                        display:flex;
                        flex-direction:row;
                        box-sizing:border-box;
                        width:90px;
                        height:185px;
                        text-align:center;
                        background-color:snow;
                        border-radius:30% 0 0 30%;
                        padding-top:13%;
                    }
                    #pm{
                    width:162px;
                    height:185px;
                    box-sizing:border-box;
                    margin-left:1px;
                    margin-right:1px;
                    }
                    #pm #pmName{
                    position:relative;
                    left:41px;
                    bottom:165px;
                    font-size:1.2rem;
                    color:antiquewhite;
                    font-weight:bold;
                    }
                    #pm #pmValue{
                    position:relative;
                    right:28px;
                    bottom:35px;
                    font-size:1.1rem;
                    color:antiquewhite;
                    font-weight:bold;
                    }
                    #detailPm{
                    width:162px;
                    height:185px;
                    box-sizing:border-box;
                    }
                    #detailPm #detailPmName{
                    position:relative;
                    left:34px;
                    bottom:165px;
                    font-size:1.2rem;
                    color:antiquewhite;
                    font-weight:bold;
                    }
                    #detailPm #detailPmValue{
                    position:relative;
                    right:46px;
                    bottom:35px;
                    font-size:1.2rem;
                    color:antiquewhite;
                    font-weight:bold;
                    }
                    #content-1-2 table{
                        width:421px;
                        height:193px;
                        text-align:center;
                        font-size:1.1rem;
                        font-weight:bold;
                    }
                    table, th, td {
                        border-radius:0.5em;
                    }
                    #tableTitle td{
                        text-align:center;
                    }
                    #content-2-2-2-1{
                        box-sizing: border-box;
                        width:120px;
                        height:104px;
                    }
                    #content-2-2-2-2{
                        box-sizing: border-box;
                        width:120px;
                        height:104px;
                    }
                    #content-2-1-1{
                        display: flex;
                        box-sizing:border-box;
                        width:318px;
                        height:105px;
                    }
                    #content-2-1-2{
                        display:flex;
                        box-sizing:border-box;
                        width:318px;
                        height:59px;
                    }
                    #content-2-1-3{
                        display:flex;
                        box-sizing:border-box;
                        width:318px;
                        height:105px;
                    }
                    #content-2-1-1-1{
                        box-sizing:border-box;
                        width:159px;
                        height:105px;
                    }
                    #content-2-1-1-2{
                        box-sizing:border-box;
                        width:159px;
                        height:105px;
                    }
                    #content-2-1-2-3{
                        box-sizing:border-box;
                        width:99px;
                        height:59px;
                    }
                    #content-2-1-3-1{
                        box-sizing:border-box;
                        width:159px;
                        height:105px;
                    }
                    #content-2-1-3-2{
                        box-sizing:border-box;
                        width:159px;
                        height:105px;
                    }
                    #content-2-2-1{
                        width:200px;
                        height:208px;
                        box-sizing:border-box;
                        margin:0px;
                    }  
                    #content-2-2-2{
                        display:flex;
                        flex-direction:column;
                        width:120px;
                        height:208px;
                        box-sizing:border-box;
                        margin:0px;
                    }
                    #content-2-1-2-1{
                        box-sizing:border-box;
                        width:99px;
                        height:59px;
                    }
                    #content-2-1-2-2{
                        box-sizing:border-box;
                        width:120px;
                        height:59px;
                    }
                    #openButton{
                        position:relative;
                        top:30px;
                        left:25px;
                        width: 170px;
                        height: 170px;
                        padding: 12px 16px;
                        border:2px solid black;
                        border-radius: 85px;
                        font-size: 2.5rem;
                        font-weight:bold;
                        background-color:snow;
                    }
                    #passwordButton{
                        position:relative;
                        left:-3px;
                        width: 100px;
                        height: 100px;
                        padding: 29px 13px;
                        border:2px solid black;
                        border-radius: 50px;
                        font-size: 1rem;
                        font-weight:bold;
                        background-color:snow;
                    }
                    #inOutAdminButton{
                        position:relative;
                        top:10px;
                        left:-10px;
                        width: 80px;
                        height: 80px;
                        padding: 10px 0px;
                        border:2px solid black;
                        border-radius: 50px;
                        font-size: 1rem;
                        font-weight:bold;
                        background-color:snow;
                    }
                    #bulb-1-text{
                        position:relative;
                        font-size:1.1rem;
                        font-weight:bold;
                        bottom:30px;
                        left:20px;
                    }
                    #bulb-2-text{
                        position:relative;
                        font-size:1.1rem;
                        font-weight:bold;
                        bottom:32px;
                        left:20px;
                    }
                    #bulb-3-text{
                        position:relative;
                        font-size:1.2rem;
                        font-weight:bold;
                        bottom:33px;
                        left:20px;
                    }
                    #bulb-4-text{
                        position:relative;
                        font-size:1.2rem;
                        font-weight:bold;
                        bottom:30px;
                        left:20px;
                    }
                    #bulb-1, #bulb-2, #bulb-3, #bulb-4{
                        position:relative;
                    }
                    #bulb-2, #bulb-3{
                        bottom:5px;
                    }
                    #admitButton{
                        position:relative;
                        left:20px;
                        bottom:10px;
                        width:80px;
                        height:80px;
                        border:2px solid black;
                        border-radius:40px;
                        background-color:#00b9f1;
                        font-size:1.4rem;
                        font-weight:bold;
                    }
                </style>
            </head>
            <body class="container">
                <div id="content-1">
                    <div id="content-1-1">
                        ${this.memo()} <!--margin-left:11px, width:420px -->
                    </div>
                    <div id="content-1-2"> 
                        ${this.weather()} <!--margin-left:5px, width:421px -->
                    </div>
                    <div id="content-1-3">
                        ${this.PM()}
                    </div>
                </div>
                <div id="content-2">
                    <div id="content-2-1">
                        ${this.bulbGroup(bulbNumber)}
                    </div>
                    <div id="content-2-2">
                        ${this.doorLock()}
                    </div>
                </div>
            <script>
            var groupLed = 15;
            if(document.cookie.length==0)
               document.cookie="groupLed="+groupLed;
            function imageSrcParser(id){
                strArray = document.getElementById(id).src.split("/");
                return strArray[strArray.length-1];
            }
            function imageChange(id){
                var imageSrc = imageSrcParser(id);
                if(id == "bulb-1"){
                    if(imageSrc == 'onBulb.svg'){
                        document.getElementById(id).src="/public/offBulb.svg";
                    }else if(imageSrc == 'offBulb.svg'){
                        document.getElementById(id).src="/public/onBulb.svg";                 
                    }
                }else if(id =="bulb-2"){
                    if(imageSrc == 'onBulb.svg'){
                        document.getElementById(id).src="/public/offBulb.svg";
                    }else if(imageSrc == 'offBulb.svg'){
                        document.getElementById(id).src="/public/onBulb.svg";               
                    }
                }else if(id =="bulb-3"){
                    if(imageSrc == 'onBulb.svg'){
                        document.getElementById(id).src="/public/offBulb.svg";
                    }else if(imageSrc == 'offBulb.svg'){
                        document.getElementById(id).src="/public/onBulb.svg";               
                    }
                }else{
                    if(imageSrc == 'onBulb.svg'){
                        document.getElementById(id).src="/public/offBulb.svg";
                    }else if(imageSrc == 'offBulb.svg'){
                        document.getElementById(id).src="/public/onBulb.svg";                
                    }
                }
                document.getElementById('admitButton').style.backgroundColor="red";
            }
            function openButton_click(callBack){
                $.ajax({
                    url: 'http://168.131.35.103:7579/Mobius/lock/update',
                    type: 'POST',
                    dataType:"json",
                    headers:{
                        'Accept':'application/json',
                        'X-M2M-RI':12345,
                        'X-M2M-Origin':'JongJin',
                        'Content-Type':'application/vnd.onem2m-res+json;ty=4'
                    },
                    data:JSON.stringify({
                        'm2m:cin':{
                            'con':'123'
                        }
                    })
                });
                document.getElementById("openButton").style.backgroundColor="red";
                setTimeout(callBack, 5000);
            }
            function colorChange(){
                document.getElementById("openButton").style.backgroundColor="snow";
            }
            function inOutAdminButton_click(){
                location.href="/SMSService";
            }
            function passwordButton_click(){
                location.href="/password";
            }
            function admitButton_click(){
                groupLed =0;
                if(imageSrcParser('bulb-1')=="onBulb.svg")
                    groupLed += 1;
                if(imageSrcParser('bulb-2')=="onBulb.svg")
                    groupLed += 2;
                if(imageSrcParser('bulb-3')=="onBulb.svg")
                    groupLed += 4;
                if(imageSrcParser('bulb-4')=="onBulb.svg")
                    groupLed += 8;
                $.ajax({
                    url:'http://168.131.35.103:7579/Mobius/LEDGroup/update',
                    type:'POST',
                    dataType:"json",
                    headers:{
                        'Accept': 'application/json',
                        'X-M2M-RI': 12345,
                        'X-M2M-Origin': 'JongJin',
                        'Content-Type': 'application/vnd.onem2m-res+json;ty=4'
                    },
                    data:JSON.stringify({
                       'm2m:cin':{
                            'con':groupLed
                       }
                    })
                });
                document.getElementById('admitButton').style.backgroundColor="#00b9f1";
                document.cookie="groupLed="+groupLed
            }
          </script>
          </body>
      </html>
      `;
   },
   memo: function(){
      return`
      <span id="memo">
         <ol>
            <li><a href="www.naver.com">주민등록등본 가져가기</a></li>
            <li><a href="www.naver.com">컴퓨터 네트워크 과제 가져가기</a></li>
         </ol>
      </span>
      `;
   },
   weather: function(){
        var title=``;
        for(i=16;i<openAPI.weather.title[0].length;i++){
            if(i<=openAPI.weather.title[0].length-3 && i>=openAPI.weather.title[0].length-4);
            else
            title +=openAPI.weather.title[0].charAt(i);
        }
        var pubDate = openAPI.weather.pubDate[0];
        var time=``;
        var image=``;
        var temperate=``;
        var wind=``;
        for(var i=0;i<6;i++){
            // time
            if(openAPI.detailWeather[i].day>=1){
                if(openAPI.detailWeather[i].hour>=12 && openAPI.detailWeather[i].hour<24){
                    time += `<td>${openAPI.detailWeather[i].hour}PM</td>`;
                }
                else{
                    time += `<td>${openAPI.detailWeather[i].hour}AM</td>`;
                }
            }
            else{
                if(openAPI.detailWeather[i].hour>=12 && openAPI.detailWeather[i].hour<24){
                    time += `<td>${openAPI.detailWeather[i].hour}PM</td>`;
                }
                else{
                    time += `<td>${openAPI.detailWeather[i].hour}AM</td>`;
                }
            }
            //image
            if(openAPI.detailWeather[i].wfKor == "흐림")
                image += `<td><img src="/public/cloud.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "구름 많음")
                image += `<td><img src="/public/clouds.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "비")
                image += `<td><img src="/public/rain.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "소나기")
                image += `<td><img src="/public/shower.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "눈")
                image += `<td><img src="/public/snow.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "맑음")
                image += `<td><img src="/public/sun.svg"></td>`;
            else
                image += `<td>${openAPI.detailWeather[i].wfkor}</td>`;
            //temperate
            temperate += `<td>${openAPI.detailWeather[i].temp}°C</td>`;
            //wind
            wind += `<td>${openAPI.detailWeather[i].wdKor}</td>`;
        }
      return`
      <table>
        <thead>
            <tr id="tableTitle">
                <td colspan="7" style="background-color:snow">${title}
                </td>
            </tr>
            <tr>
                <td style="background-color:snow">시간</td>
                ${time}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="background-color:snow">날씨</td>
                ${image}
            </tr>
            <tr>
                <td style="background-color:snow">기온</td>
                ${temperate}
            </tr>
            <tr>
                <td style="background-color:snow">풍향</td>
                ${wind}
            </tr>
        </tbody>
    </table>
      `;
   },
   PM:function(){
      var pm10Image="";
      var pm25Image="";
      if(openAPI.PM.pm10Value[0]<=30)
         pm10Image = "/public/vertical_good.jpg";
      else if(openAPI.PM.pm10Value[0]<=80)
         pm10Image = "/public/vertical_normal.jpg";
      else if(openAPI.PM.pm10Value[0]<=150)
         pm10Image = "/public/vertical_bad.jpg";
      else
         pm10Image = "/public/vertical_prettybad.jpg";
      if(openAPI.PM.pm25Value[0]<=15)
         pm25Image = "/public/vertical_good.jpg";
      else if(openAPI.PM.pm25Value[0]<=35)
         pm25Image = "/public/vertical_normal.jpg";
      else if(openAPI.PM.pm25Value[0]<=75)
         pm25Image = "/public/vertical_bad.jpg";
      else
         pm25Image = "/public/vertical_prettybad.jpg";
      return`
      <div class="pmContainer">
      <div id="pmTextContent">
          <span id="pmText">
            <div style="margin:0px;font-weight:bold">서울 ${openAPI.PM.cityName[0]}</div>
            <div style="font-size:1rem;">${openAPI.PM.dataTime[0]}기준</div>
          </span>
      </div>
      <div id="pm">
          <img src=${pm10Image} width="100%" height="100%">
          <content id="pmName">
              미세먼지
          </content>
          <content id="pmValue">
              (${openAPI.PM.pm10Value[0]}<span style="font-size:0.5rem">㎍/㎥</span>)
          </content>
      </div>
      <div id="detailPm">
          <img src=${pm25Image} width="100%" height="100%">
          <content id="detailPmName">
              초미세먼지
          </content>
          <span id="detailPmValue">
              (${openAPI.PM.pm25Value[0]}<span style="font-size:0.5rem">㎍/㎥</span>)
          </span>
      </div>
      </div>
      `;
   },
   bulbGroup:function(bulbNumber){
    bulbImage1 = '';
    bulbImage2 = '';
    bulbImage3 = '';
    bulbImage4 = '';
    if(bulbNumber==15){
        bulbImage1 = './public/onBulb.svg';
        bulbImage2 = './public/onBulb.svg';
        bulbImage3 = './public/onBulb.svg';
        bulbImage4 = './public/onBulb.svg';
    }else if(bulbNumber==14){
        bulbImage1 = './public/offBulb.svg';
        bulbImage2 = './public/onBulb.svg';
        bulbImage3 = './public/onBulb.svg';
        bulbImage4 = './public/onBulb.svg';
    }else if(bulbNumber==13){
        bulbImage1 = './public/onBulb.svg';
        bulbImage2 = './public/offBulb.svg';
        bulbImage3 = './public/onBulb.svg';
        bulbImage4 = './public/onBulb.svg';
    }else if(bulbNumber==12){
        bulbImage1 = './public/offBulb.svg';
        bulbImage2 = './public/offBulb.svg';
        bulbImage3 = './public/onBulb.svg';
        bulbImage4 = './public/onBulb.svg';
    }else if(bulbNumber==11){
        bulbImage1 = './public/onBulb.svg';
        bulbImage2 = './public/onBulb.svg';
        bulbImage3 = './public/offBulb.svg';
        bulbImage4 = './public/onBulb.svg';
    }else if(bulbNumber==10){
        bulbImage1 = './public/offBulb.svg';
        bulbImage2 = './public/onBulb.svg';
        bulbImage3 = './public/offBulb.svg';
        bulbImage4 = './public/onBulb.svg';
    }else if(bulbNumber==9){
        bulbImage1 = './public/onBulb.svg';
        bulbImage2 = './public/offBulb.svg';
        bulbImage3 = './public/offBulb.svg';
        bulbImage4 = './public/onBulb.svg';
    }else if(bulbNumber==8){
        bulbImage1 = './public/offBulb.svg';
        bulbImage2 = './public/offBulb.svg';
        bulbImage3 = './public/offBulb.svg';
        bulbImage4 = './public/onBulb.svg';
    }else if(bulbNumber==7){
        bulbImage1 = './public/onBulb.svg';
        bulbImage2 = './public/onBulb.svg';
        bulbImage3 = './public/onBulb.svg';
        bulbImage4 = './public/offBulb.svg';
    }else if(bulbNumber==6){
        bulbImage1 = './public/offBulb.svg';
        bulbImage2 = './public/onBulb.svg';
        bulbImage3 = './public/onBulb.svg';
        bulbImage4 = './public/offBulb.svg';
    }else if(bulbNumber==5){
        bulbImage1 = './public/onBulb.svg';
        bulbImage2 = './public/offBulb.svg';
        bulbImage3 = './public/onBulb.svg';
        bulbImage4 = './public/offBulb.svg';
    }else if(bulbNumber==4){
        bulbImage1 = './public/offBulb.svg';
        bulbImage2 = './public/offBulb.svg';
        bulbImage3 = './public/onBulb.svg';
        bulbImage4 = './public/offBulb.svg';
    }else if(bulbNumber==3){
        bulbImage1 = './public/onBulb.svg';
        bulbImage2 = './public/onBulb.svg';
        bulbImage3 = './public/offBulb.svg';
        bulbImage4 = './public/offBulb.svg';
    }else if(bulbNumber==2){
        bulbImage1 = './public/offBulb.svg';
        bulbImage2 = './public/onBulb.svg';
        bulbImage3 = './public/offBulb.svg';
        bulbImage4 = './public/offBulb.svg';
    }else if(bulbNumber==1){
        bulbImage1 = './public/onBulb.svg';
        bulbImage2 = './public/offBulb.svg';
        bulbImage3 = './public/offBulb.svg';
        bulbImage4 = './public/offBulb.svg';
    }else if(bulbNumber==0){
        bulbImage1 = './public/offBulb.svg';
        bulbImage2 = './public/offBulb.svg';
        bulbImage3 = './public/offBulb.svg';
        bulbImage4 = './public/offBulb.svg';
    }
    return`
    <div id="content-2-1-1">
        <div id="content-2-1-1-1"> <!-- 160 X 105 -->
            <img id="bulb-1" src=${bulbImage1} width=100% height=100% onclick="imageChange(this.id)">
            <span id="bulb-1-text">안방</span>
        </div>
        <div id="content-2-1-1-2"> <!-- 160 X 105 -->                      
            <img id="bulb-4" src=${bulbImage4} width=100% height=100% onclick="imageChange(this.id)">
            <span id="bulb-4-text">서재</span>
        </div>
    </div>
    <div id="content-2-1-2">
        <div id="content-2-1-2-1"> <!-- 100 X 59 -->
        
        </div>
        <div id="content-2-1-2-2"> <!-- 120 X 59 -->
            <button type="button" id="admitButton" onclick="admitButton_click()">
                적용
            </button>
        </div>
        <div id="content-2-1-2-3"> <!-- 100 X 59 -->
        </div>
    </div>
    <div id="content-2-1-3">
        <div id="content-2-1-3-1"> <!-- 160 X 105 -->
            <img id="bulb-2" src=${bulbImage2} width=100% height=100% onclick="imageChange(this.id)">
            <span id="bulb-2-text">옷방</span>
        </div>
        <div id="content-2-1-3-2"> <!-- 160 X 105 -->
            <img id="bulb-3" src=${bulbImage3} width=100% height=100% onclick="imageChange(this.id)">
            <span id="bulb-3-text">거실</span>
        </div>
    </div>
    `;
   },
   doorLock:function(){
    return`
    <div id="content-2-2-1">
    <button id="openButton" onclick="openButton_click(colorChange);">
        문열기
    </button>
    </div>
    <div id="content-2-2-2">
        <div id="content-2-2-2-1">
            <button type="button" id="inOutAdminButton" onclick="inOutAdminButton_click()()">
                출입관리
            </button>
        </div>
        <div id="content-2-2-2-2">
            <button type="button" id="passwordButton" onclick="passwordButton_click()">
                비밀번호 설정
            </button>
        </div>
    </div>
    `;
   }
}
