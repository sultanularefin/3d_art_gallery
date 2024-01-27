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

// const express = require('express')
const corsOrigin = {
    origin: ['http://localhost:3001', 'http://localhost:6002'],
    //or whatever port your frontend is using
    credentials: true,
    optionSuccessStatus: 200
}


const index: Express = express();


index.set('json spaces', 5);
index.use(cors(corsOrigin));
/*const PORT = process.env.PORT;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const my_Bucket = process.env.S3_BUCKET;

const bodyParser = require('body-parser');*/
index.use(express.json());

index.use(express.urlencoded({extended: true}));
// REQ.BODY WILL WORK NOW AFTER ADDING THE ABOVE 2 LINES  REQ.BODY.BUCKET_NAME:  AREFIN31 , WORKED AFTER ADDDING ABOVE 2 LINES.

// app.use(bodyParser.urlencoded({ extended: false }));


const url_2 = require('url');
// const querystring = require('querystring');
// app.use(bodyParser.json());


index.get('/', (req: Request, res: Response) => {
    res.send(`
    <h2>File Upload With <code>"Node.js"</code></h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Select a file: 
        <input name="file" type="file"  

        />
      </div>
      <input type="submit" value="Upload"  />
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






