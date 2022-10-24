import axios from "axios"
import { config } from "../../providers"

 const resetpassword = async(email:string, newPassword:string, otp:string)=>{
    console.log(email,newPassword, otp);
    try{
        let res = await axios.patch(`${config().baseurl}/api/resetpassword`, {
            email:email,
            newPassword:newPassword,
            otp:otp
        })
        return res.data
    }catch(e:any){
        return e.message
    }
}

export default resetpassword
