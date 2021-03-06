const express = require('express');
const app = express();
const path = require('path');
const static = require('serve-static');
// const Mrequest = require('request');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passwordRouter = require('./routes/password.js');
const SMSServiceRouter = require('./routes/SMSService.js');
const home = require('./views/home');

app.use('/public', static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (request,response) => { // => 는 변수를 생성하고 무명함수를 변수에 담을 때 사용하는 문법
    if(request.cookies.groupLed==null)
        response.send(home.html(15));
    else
        response.send(home.html(request.cookies.groupLed));
});

app.use('/password', passwordRouter);
app.use('/SMSService', SMSServiceRouter);

app.listen(3000, () => {   
    console.log('3000번 포트에서 스마트 도어락 서버가 대기중입니다.');
});
