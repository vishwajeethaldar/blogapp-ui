import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
    Box, 
    Flex,
    Input,
    Button,
    Text,
    FormLabel,
    FormControl,
    FormHelperText,
    FormErrorMessage
} from "@chakra-ui/react"
import { inputstate } from '../../../interface'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { matchPwd, resetPassword, sendOtp } from '../../../utils'
import { validatePwd } from '../../../interface/inputstate.interface'

const error:inputstate.resetemailerror = {
    email:false,
    errorMessage:""
}
const intiState:inputstate.resetpwd = {
    email:"",
    password:"",
    otp:""
}

const optIntState:inputstate.optInput = {
    one:"",
    two:"",
    three:"",
    four:"",
    five:"",
    six:""
}

const validatePassword:validatePwd={
    pwd1:"",
    pwd2:''
}

const ResetPwd = () => {
    const navigate= useNavigate()
    const [input, setinput] =  useState(intiState)
    const [diserror, setdisError] = useState("")
    const [switchResetForm, setSwitchResetForm] = useState(true)
    const [otpinput, setOtpInput]  = useState(optIntState)
    const [enablePwd, setEnablePwd] = useState(false)
    const [matchpawwor, setMatchPwd]= useState(validatePassword)


    const handleInput = (e:ChangeEvent<HTMLInputElement>)=>{
        let {name, value}=  e.target as {name:string, value:string} ;
        setinput({...input, [name]:value})
        error.email = value===""
        error.errorMessage = error.email?"Email is Required":""
        setdisError(error.errorMessage)
    }


    const handleOtp = (e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target as {name:string, value:string};
      
        setOtpInput({...otpinput, [name]:value})

        if(otpinput.one && otpinput.two && otpinput.three && otpinput.four && otpinput.five){
            if(name==="six" && value!==""){
                console.log("ehre")
                setEnablePwd(true)
            }else{
                setEnablePwd(false)
            }
        }else{
            setEnablePwd(false)
        }
}

const handlePwds = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target as {name:string, value:string};
    setMatchPwd({...matchpawwor, [name]:value})
 
    if(name==="pwd2" && matchpawwor.pwd1!==value){
       setdisError("Password does not matched")
    }else{
        setdisError("")
        setinput({...input, password:matchpawwor.pwd1})
    }
}

    const sendEmail = async(e:FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
        let res =  await sendOtp(input.email)
       
       if(res?.status==="success"){
        setSwitchResetForm(!switchResetForm)
        return
       }

       error.email = res?.status!=="success"
       error.errorMessage = error.email?"Email Not registered in our Database":""
       setdisError(error.errorMessage)
    }
   

    const updateNewPassword = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const finalotp = otpinput.one+otpinput.two+otpinput.three+otpinput.four+otpinput.five+otpinput.six;
        
           let res =  await resetPassword(input.email, input.password, finalotp)
            

           if(res.status==="success"){
                setinput(intiState)
                setOtpInput(optIntState)
                return navigate("/login")
           }            
       
              
    }

  return (
    <Box w="100%" boxShadow={"lg"} borderTop="1px solid #eee" py="40px" px="30px" borderRadius={"10px"} bg="#fff">
    {/* COntainer Box */}

    {switchResetForm?
    // Display the below Component when user visits to reset passsword page 
    <form  onSubmit={(e)=>sendEmail(e)}>
    <Text textAlign="center" fontSize={["6vw","6vw","4.2vw","2.5vw"]} fontWeight={"600"} pb="25px">
        Reset password
    </Text>
         <FormControl isInvalid={error.email}>
            <Flex w="100%" direction={"column"} justify="center" align={"flex-start"} minHeight={"50px"} >
                    <FormLabel pl="11px" w={"100%"} textAlign={"left"}>
                            Email :
                    </FormLabel>
                    
                    <Box w={"100%"}>
                    <Input w="100%"  name="email" type={"email"} placeholder="Email" value={input.email} onChange={handleInput} required/>
                        {!(error.email)? (
                        <FormHelperText>
                            
                        </FormHelperText>
                        ) : (
                            <FormErrorMessage>{diserror}</FormErrorMessage>
                        )}
                    </Box>
            </Flex>
	    </FormControl>

        <Flex w="100%"  direction={"row"} justify="flex-start" align={"center"}>
                <Button type="submit" w="50%" colorScheme={"telegram"} mb="10px" mt="10px" > Send  </Button>
        </Flex>

        <Flex w="100%"  direction={"row"}  align={"center"} gap="25px" pt="10px">
            <Text fontSize={"18px"}>
                Go Back to  <Link to="/login"> <Box as="b" color="#668">Login </Box> </Link>
            </Text>    
        </Flex>
    </form>


// Display below Component after sending the email 
        :<form onSubmit={updateNewPassword}>
            <Text textAlign="center" fontSize={["6vw","6vw","4.2vw","2.5vw"]} fontWeight={"600"} pb="25px">
                    Create a New Password
            </Text>
            
            <FormControl >
                <Flex mb="20px" w="97%" gap="15px" mx={"auto"} direction={"column"} justify="center" align={"center"} minHeight={"50px"} >
                        <FormLabel fontSize={"20px"} minW={"22%"} textAlign={"left"}>
                                Enter OTP :
                        </FormLabel>
                        
                        <Flex w={"80%"} gap="10px">
                           
                            <Input  id="one" value={otpinput.one} autoFocus={true} name="one" type={"text"} minLength={0} maxLength={1} onChange={handleOtp} required/>
                            
                            <Input  id="two" value={otpinput.two} name="two" type={"text"}  minLength={0} maxLength={1}  onChange={handleOtp} max={1} required/>
                            <Input id="three"  value={otpinput.three} name="three" type={"text"}  minLength={0} maxLength={1} onChange={handleOtp} max="1"  required/>
                            <Input  id="four" value={otpinput.four} name="four" type={"text"} minLength={0} maxLength={1}  onChange={handleOtp}  required/>
                            <Input  id="five" value={otpinput.five} name="five" type={"text"}  minLength={0} maxLength={1}  onChange={handleOtp} max="1" required/>
                            <Input  id="six" value={otpinput.six} name="six" type={"text"} minLength={0} maxLength={1}  onChange={handleOtp} max="1"  required/>
                        </Flex>
                </Flex>
            </FormControl>

            
            <FormControl >
                <Flex w="100%" direction={"column"} justify="center" align={"flex-start"} minHeight={"50px"} >
                        <FormLabel pl="11px" w={"100%"} textAlign={"left"}>
                                New Password :
                        </FormLabel>
                        
                        <Box w={"100%"} >
                        
                        <Input w="100%" bg={enablePwd?"#fff":"#ccc"}  onChange={handlePwds} value={matchpawwor.pwd1} name="pwd1" type={"password"} placeholder="Type new password" disabled={!enablePwd} required/>
                            {!(false)? (
                            <FormHelperText>
                                
                            </FormHelperText>
                            ) : (
                                <FormErrorMessage></FormErrorMessage>
                            )}
                        </Box>
                </Flex>
            </FormControl>

            <FormControl >
                <Flex w="100%" direction={"column"} justify="center" align={"flex-start"} minHeight={"50px"} >
                        <FormLabel pl="11px" w={"100%"} textAlign={"left"}>
                                Confirm New Password :
                        </FormLabel>
                        
                        <Box w={"100%"}>
                        
                        <Input w="100%"  bg={enablePwd?"#fff":"#ccc"} onChange={handlePwds} value={matchpawwor.pwd2} name="pwd2" type={"password"} placeholder="Confirm new password" disabled={!enablePwd} required/>
                            {!(false)? (
                            <FormHelperText>
                                
                            </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </Box>
                </Flex>
            </FormControl>
            

            <Flex w="100%"  direction={"row"} justify="flex-start" align={"center"}>
                    <Button type="submit" w="40%" colorScheme={"telegram"} mb="10px" mt="10px" > Submit  </Button>
            </Flex>
            <Text align={"center"}>{diserror}</Text>                    
            <Flex w="100%"  direction={"row"}  align={"center"} gap="25px" pt="10px">
            <Text fontSize={"18px"}>
                   <Box as="b" color="#668" onClick={()=>setSwitchResetForm(!switchResetForm)} _hover={{cursor:"pointer"}}>   Go Back  </Box> 
                </Text> 
                <Text fontSize={"18px"}>
                    Go Back to  <Link to="/login"> <Box as="b" color="#668">Login </Box> </Link>
                </Text>    
            </Flex>
        </form>
     }

    </Box>
  )
}

export  default ResetPwd