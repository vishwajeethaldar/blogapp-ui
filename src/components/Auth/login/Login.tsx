import React from 'react'
import axios from "axios"
import {
    Box, 
    Flex,
    Input,
    Button,
    Text,
    VStack,
    FormControl,
    FormLabel
} from "@chakra-ui/react"
import {Link, useNavigate} from "react-router-dom";

export const Login = () => {


const handleLogin=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.nativeEvent.preventDefault()
    
    let res = await axios.post("http://localhost:8080/api/session",{
        body:{email:"a@gmail.com", password:"12345"}
    })

    console.log(res.data);
    
}

  return (
    <Box w="100%" border="1px solid #ccc" py="20px" pr="30px">
 
        <Text textAlign="center" fontSize={["6vw","6vw","4.2vw","3.2vw"]} pb="25px">
            Login
        </Text>

        <Flex w="100%"  direction="column" gap="12px" justify="center">

            <Flex w="100%" direction={"row"} justify="center" align={"center"}>
                <FormLabel w="25%" textAlign={"right"}>
                        Email :
                </FormLabel>
                <Input w="70%"  type={"email"} placeholder="user email"/>
            </Flex>
            
            <Flex w="100%"  direction={"row"} justify="center" align={"center"}>
                <FormLabel  w="25%" textAlign={"right"}>
                        Password :
                </FormLabel>
                
                <Input w="70%" type={"password"} placeholder="user password"/>

            </Flex>

            <Flex w="100%"  direction={"row"} justify="center" align={"center"}>
                <FormLabel  w="25%" textAlign={"right"}>
                       
                </FormLabel>
                
                <Button w="70%" colorScheme={"telegram"} mb="10px" mt="10px"> Login </Button>

            </Flex>

            <Flex w="100%"  direction={"row"}  align={"center"} gap="25px">
                <Box w="25%">
                    
                </Box>

                <Flex gap="25px">
                   
                    <Link to="">
                        <Text fontSize={"18px"}>Forget Password </Text>
                    </Link>
                   
                  
                    <Link to="">
                        <Text fontSize={"18px"}>
                            Sign Up
                        </Text>    
                    </Link>
                   
                </Flex>
            </Flex>
        </Flex>

    </Box>
  )
}
