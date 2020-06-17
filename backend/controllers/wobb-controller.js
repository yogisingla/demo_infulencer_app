const config = require('../common/config-util');
const MessageUtil = require('../common/message-util');
const multer = require('multer');
const RestUtil = require('../common/rest-util');
const UserService = require('../services/wobb-service');
const GridFsStorage = require("multer-gridfs-storage");
const upload = require("../middleware/upload");


class WebhookController {
    constructor() {
        this.userService = new UserService(config);
        this.createGig= this.createGig.bind(this);
        this.restUtil = new RestUtil();
 }
 async createGg(req,res){ 
    try {
        await upload(req, res);
    
        console.log(req.file);
        if (req.file == undefined) {
          return res.send(`You must select a file.`);
        }
    
        return res.send(`File has been uploaded.`);
      } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload image: ${error}`);
      }
    
 }

 
    async createGig(req,res){
        try{
          
            await upload(req, res);
           
            let data={
               
                selectGig:req.body.selectGig,
                gigCost:req.body.gigCost,
                description:req.body.description,
                deliveryTime:req.body.deliveryTime,
                
            }
            if(data.selectGig=="" && data.gigCost=="" &&data.deliveryTime==""){
                res.send(MessageUtil.getMessage().allDetail);
            }

            else{
               
                let value= this.userService.saveDetails(data);
                console.log('data',data);
               
                if(value){
                    res.send(MessageUtil.getMessage().sucess);

                }
                else
                res.send(MessageUtil.getMessage().error);
            }
    
    
    

        }catch(e){
        console.log('Error!', e);
            res.setHeader('Content-Type', 'application/json');
            res.send(MessageUtil.getMessage().Unable_Fetch);
            res.end();
       }
    }
}
 module.exports = WebhookController;