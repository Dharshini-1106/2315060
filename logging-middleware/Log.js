import axios from"axios";
import dotenv from "dotenv";
dotenv.config();
const Token=process.env.ACCESS_TOKEN;
export async function Log(stack,level,packageName,message){
    try{
        await axios.post("http://4.224.186.213/evaluation-service/logs",{
            stack,
            level,
            package:packageName,
            message,
        },{
            headers:{
                Authorization:`Bearer ${Token}`,
            },
        }
    );
    }catch(error){
        console.log("Log Failed");

    }
}
    
