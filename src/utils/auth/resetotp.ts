import axios from "axios"
import { config } from "../../providers"

 const sendOtp = async(email:string)=>{
    try{
        let res = await axios.patch(`${config().baseurl}/api/resetotp`, {
            email:email,
            subject:"OTP for reset your account Password"
        })
        return res.data
    }catch(e:any){
        return e.message
    }
}

export default sendOtp
