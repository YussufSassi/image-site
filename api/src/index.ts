import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import { generate } from 'short-uuid';
import fileUpload from "express-fileupload";
import Image from './models/Images';
import { connect } from 'mongoose';
import fs from 'fs';
const cors = require("cors")
dotenv.config();

connect("mongodb://127.0.0.1:27017/images")

const app: Express = express();
export const router = express.Router();
const port = process.env.PORT;


app.use("/api/v1", router)
app.use(json())
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  
}));
app.use(cors())
app.options('*', cors());
app.get('/', (req: Request, res: Response) => {
  res.json({"image": "api"})
});


router.post("/upload", fileUpload(), (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let id = generate();
  let file = req.files?.file as fileUpload.UploadedFile;
  console.log(file)
  console.log(req.files)
  if(!file){
    res.status(400).json({"error": "no file"});
  }
  else{
    
    let farr = file.name.split(".");
    let extension = farr.slice(-1);
    fs.mkdirSync(`${process.env.SRC_ABSOLUTE_DIR}usrimgs/${id}`);
    file.mv(`${process.env.SRC_ABSOLUTE_DIR}usrimgs/${id}/${id}.${extension}`)
    let image = new Image(
      {
        filename: `${id}.${extension}`,
        id: id,
        path: `${process.env.SRC_ABSOLUTE_DIR}usrimgs/${id}/${id}.${extension}`,
        size: file.size,
        uploadedAt: Date.now()
      }
    )
    res.json(id)
    
    image.save(err => {
      if(err){
        console.log(err)
      }
    } )
    next();
  }
})


router.get("/image/:id", (req, res) => {
  let id = req.params.id;
  Image.findOne({id: id}, (err: Error, img: any) => {
    res.json(img)
  })

})
router.get("/image/:id/raw", (req, res) => {
  let id = req.params.id;
  Image.findOne({id: id}, (err: Error, img: any) => {
    res.sendFile(img.path)
  })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});