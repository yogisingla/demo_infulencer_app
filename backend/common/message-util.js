class MessageUtil{

    static getMessage(){
         return {
        Unable_Fetch:"Unable tp fetch the response",
       
         FORMAT_ERROR :"fill the details in correct format",
         allDetail:"please fill all the details",
         alexist:'error: user already exist,please fill the new details',
        error:'falied in saving details',
        sucess:'sucess in saving details'

           }
    }

    static get(){
        if(arguments.length < 1)
        return '';
       let key = this.getMessage()[arguments["0"]];
       for(let i in arguments){
        if(i != "0")
         key = key.replace("@ARGU@",arguments[i]);
       }
       return key;
    }

}

module.exports = MessageUtil;