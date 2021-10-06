import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import logger from 'morgan'
import endpoints from './router';
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

export const app = express()
app.server = http.createServer(app);

app.use(cors()); 

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", endpoints);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(async (req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    // next(createError.NotFound())
    next(error)
})

const port  =  process.env.PORT;

app.use((err, req, res, next)=>{
  res.status(err.status || 500)
  res.json({
    status: err.status || 500,
    message: err.message,
  })
})

console.log("nodemon nodemon")

  var server = app.listen(port, function () { 
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port) 
  })

