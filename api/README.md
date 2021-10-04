# url-shortener-api

## How To Run The App

1. git clone https://github.com/Akinfaks/url-shortener.git
2. cd url-shortener
3. yarn or npm install
4. yarn start or npm start

## Test case

get: http://127.0.0.1:8000/api/encode?longUrl=http://www.google.com
response: {"url":"http://127.0.0.1:8000/0FXsk","hash":"0FXsk","status":200,"statusTxt":"OK"}

get: http://127.0.0.1:8000/api/decode?longUrl=http://127.0.0.1/0FXsk
response: {"url":"http://www.google.com","hash":"0FXsk","status":200,"statusTxt":"OK"}

get: http://127.0.0.1:8000/api/statistic?url_path=0FXsk
response: {"hash":"0FXsk","hit":0,"url_long":"http://www.google.com","url_short":"http://127.0.0.1:8000/0FXsk","status":200,"statusTxt":"OK"}

get: http://127:0.0.1:8000/api/list
response: [{"short":"0FXsk","long":"http://www.google.com"}]

get: http://127:.0.0.1:8000/0FXsk
response: Should redirect to http://www.google.com
