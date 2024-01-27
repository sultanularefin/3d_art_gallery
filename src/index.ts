/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/


import express, {Express, NextFunction, Request, response, Response} from 'express';
// import {Express} from "express";
import cors from "cors";
import Download_file_with_curl_test from "./apis/Download_file_with_curl_test";

// const express = require('express')
const corsOrigin = {
    origin: ['http://localhost:3001', 'http://localhost:6002'],
    //or whatever port your frontend is using
    credentials: true,
    optionSuccessStatus: 200
}
const PORT = 3000;//process.env.PORT;

const app: Express = express();


app.set('json spaces', 5);
app.use(cors(corsOrigin));
app.use(express.static('public'))
/*const PORT = process.env.PORT;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const my_Bucket = process.env.S3_BUCKET;

const bodyParser = require('body-parser');*/
app.use(express.json());

app.use(express.urlencoded({extended: true}));
// REQ.BODY WILL WORK NOW AFTER ADDING THE ABOVE 2 LINES  REQ.BODY.BUCKET_NAME:  AREFIN31 , WORKED AFTER ADDDING ABOVE 2 LINES.

// app.use(bodyParser.urlencoded({ extended: false }));


// const url_2 = require('url');
// const querystring = require('querystring');
// app.use(bodyParser.json());

// app.post('/api/upload_store_items_12',With_PutObjectCommand_12);
app.post('/api/pdf_scrap', Download_file_with_curl_test);
app.get('/', (req: Request, res: Response) => {
    res.send(`
    <h2>Check Links With <code>"Node.js"</code></h2>
    <form action="/api/pdf_scrap" enctype="application/x-www-form-urlencoded" method="post">
      <div>Enter Publicly accessible aws file links: 
        
        
        <br/>
        <br/>
        <input style="width: 500px" name="link" type="text"  placeholder="Enter Publicly accessible aws file links"


        />
        <br/>
        <br/>
      </div>
      
        <br/>
        <br/>
      <input type="submit" value="Submit"  />
             <br/>
      
    </form>

  `);
});


/*index.post('/api/list_objects_in_A_bucket', async (req: Request, res: Response, next: NextFunction) => {


    const client = new S3Client({
        credentials: {
            accessKeyId: accessKeyId ? accessKeyId : "",
            secretAccessKey: secretAccessKey ? secretAccessKey : "",
        },
        region
    });
    const input = {
        Bucket: my_Bucket, // required

    };
    const command = new ListObjectsCommand(input);
    const response = await client.send(command);


    return res.json({data: response});

});*/


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
})




