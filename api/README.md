# url-shortener-api

## How To Run The App

1. git clone https://github.com/Akinfaks/url-shortener.git
2. cd url-shortener
3. yarn or npm install
4. yarn run dev or npm run dev

## Test

1. yarn test or npm test

## ALL Test case And Responses

1.  - get: http://127.0.0.1:8000/api/encode?longUrl=http://www.google.com
    - response: {"short":"http://127.0.0.1:8000/06LAze","long":"http://www.google.com","hash":"06LAze","status":200,"statusTxt":"OK"}

2.  - get: http://127.0.0.1:8000/api/decode?shortUrl=http://127.0.0.1/0FXsk
    - response: {"url":"http://www.google.com","hash":"06LAze","status":200,"statusTxt":"OK"}

3.  - get: http://127.0.0.1:8000/api/statistic?url_path=0FXsk
    - response: {"hash":"06LAze","hit":0,"url_long":"http://www.google.com","url_short":"http://127.0.0.1:8000/06LAze","status":200,"statusTxt":"OK"}

4.  - get: http://127:0.0.1:8000/api/list
    - response: [{"hash":"06LAze","short":"http://127.0.0.1:8000/06LAze","long":"http://www.google.com","hit":0}]

5.  - get: http://127:.0.0.1:8000/0FXsk
    - response: Found. Redirecting to http://www.google.com
