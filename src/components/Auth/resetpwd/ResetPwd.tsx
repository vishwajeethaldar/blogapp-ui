import React, { ChangeEvent, useState } from 'react'
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
import { Link, useNavigate } from 'react-router-dom'

const error:inputstate.resetemailerror = {
    email:false
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


const ResetPwd = () => {
    const navigate= useNavigate()
    const [input, setinput] =  useState(intiState)
    const [switchResetForm, setSwitchResetForm] = useState(true)
    const [otpinput, setOtpInput]  = useState(optIntState)
    const [enablePwd, setEnablePwd] = useState(false)

    const handleInput = (e:ChangeEvent<HTMLInputElement>)=>{
        let {name, value}=  e.target as {name:string, value:string} ;
        setinput({...input, [name]:value})
        error.email = value===""
    }

    const sendEmail = ()=>{
        setSwitchResetForm(!switchResetForm)
    }

    
    const handleOtp = (e:ChangeEvent<HTMLInputElement>)=>{
            const {name,value} = e.target as {name:string, value:string};
            console.log(name,value)
           
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
    const updateNewPassword = ()=>{
        const opt = otpinput.one+otpinput.two+otpinput.three+otpinput.four+otpinput.five+otpinput.six;
 
    }

  return (
    <Box w="100%" boxShadow={"lg"} borderTop="1px solid #eee" py="40px" px="30px" borderRadius={"10px"} bg="#fff">
    {/* COntainer Box */}

    {switchResetForm?
    // Display the below Component when user visits to reset passsword page 
    <Box>
    <Text textAlign="center" fontSize={["6vw","6vw","4.2vw","2.5vw"]} fontWeight={"600"} pb="25px">
        Reset password
    </Text>
         <FormControl isInvalid={error.email}>
            <Flex w="100%" direction={"column"} justify="center" align={"flex-start"} minHeight={"50px"} >
                    <FormLabel pl="11px" w={"100%"} textAlign={"left"}>
                            Email :
                    </FormLabel>
                    
                    <Box w={"100%"}>
                    <Input w="100%"  name="email" type={"text"} placeholder="Email" value={input.email} onChange={handleInput} required/>
                        {!(error.email)? (
                        <FormHelperText>
                            
                        </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </Box>
            </Flex>
	    </FormControl>

        <Flex w="100%"  direction={"row"} justify="flex-start" align={"center"}>
                <Button type="submit" w="50%" colorScheme={"telegram"} mb="10px" mt="10px" onClick={sendEmail}> Send  </Button>
        </Flex>

        <Flex w="100%"  direction={"row"}  align={"center"} gap="25px" pt="10px">
            <Text fontSize={"18px"}>
                Go Back to  <Link to="/login"> <Box as="b" color="#668">Login </Box> </Link>
            </Text>    
        </Flex>
    </Box>


// Display below Component after sending the email 
        :<Box>
            <Text textAlign="center" fontSize={["6vw","6vw","4.2vw","2.5vw"]} fontWeight={"600"} pb="25px">
                    Create a New Password
            </Text>
            
            <FormControl >
                <Flex mb="20px" w="97%" gap="15px" mx={"auto"} direction={"column"} justify="center" align={"center"} minHeight={"50px"} >
                        <FormLabel fontSize={"20px"} minW={"22%"} textAlign={"left"}>
                                Enter OTP :
                        </FormLabel>
                        
                        <Flex w={"80%"} gap="10px">
                            <Input  value={otpinput.one} autoFocus={true} name="one" type={"text"} minLength={0} maxLength={1} onChange={handleOtp} required/>
                            <Input  value={otpinput.two} name="two" type={"text"}  minLength={0} maxLength={1}  onChange={handleOtp} max={1} required/>
                            <Input  value={otpinput.three} name="three" type={"text"}  minLength={0} maxLength={1} onChange={handleOtp} max="1"  required/>
                            <Input  value={otpinput.four} name="four" type={"text"} minLength={0} maxLength={1}  onChange={handleOtp}  required/>
                            <Input  value={otpinput.five} name="five" type={"text"}  minLength={0} maxLength={1}  onChange={handleOtp} max="1" required/>
                            <Input  value={otpinput.six} name="six" type={"text"} minLength={0} maxLength={1}  onChange={handleOtp} max="1"  required/>
                        </Flex>
                </Flex>
            </FormControl>

            
            <FormControl >
                <Flex w="100%" direction={"column"} justify="center" align={"flex-start"} minHeight={"50px"} >
                        <FormLabel pl="11px" w={"100%"} textAlign={"left"}>
                                New Password :
                        </FormLabel>
                        
                        <Box w={"100%"} >
                        
                        <Input w="100%" bg={enablePwd?"#fff":"#ccc"}  name="password" type={"password"} placeholder="Type new password" disabled={!enablePwd} required/>
                            {!(false)? (
                            <FormHelperText>
                                
                            </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
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
                        <Input w="100%"  bg={enablePwd?"#fff":"#ccc"}  name="password" type={"password"} placeholder="Confirm new password" disabled={!enablePwd} required/>
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
                    <Button type="submit" w="40%" colorScheme={"telegram"} mb="10px" mt="10px" onClick={updateNewPassword}> Submit  </Button>
            </Flex>

            <Flex w="100%"  direction={"row"}  align={"center"} gap="25px" pt="10px">
            <Text fontSize={"18px"}>
                   <Box as="b" color="#668" onClick={()=>setSwitchResetForm(!switchResetForm)} _hover={{cursor:"pointer"}}>   Go Back  </Box> 
                </Text> 
                <Text fontSize={"18px"}>
                    Go Back to  <Link to="/login"> <Box as="b" color="#668">Login </Box> </Link>
                </Text>    
            </Flex>
        </Box>
     }

    </Box>
  )
}

export  default ResetPwd