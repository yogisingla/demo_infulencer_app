
const RestUtil = require('../common/rest-util');
const MongoDB = require('../common/mongo-util');


class UserService{
    constructor(config){
        this.config = config;
        this.restUtil = new RestUtil();
        this.mongoDB = new MongoDB(config.get('mongodb:url'));
        
      
       this.saveDetails = this.saveDetails.bind(this);
    }

   

    
    
    async saveDetails(data){
        let result = await this.mongoDB.createRecord("wobb",data);
        return result; 
    }
    
}

module.exports = UserService;