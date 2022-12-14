import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react'

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
import {Link, useNavigate} from "react-router-dom";
import { inputstate } from '../../../interface';
import { useAppdispatch, useAppSelector } from "../../../store/hooks/store.hook"
import { login } from '../../../store/Auth.store/Auth.Slice';
import {BsGithub} from 'react-icons/bs'
const initialInput:inputstate.loginInput = {
    email:"",
    password:""
}

const errors:inputstate.loginerror = {
    email:false,
    password:false,
	emailerrorMsg:"",
	pwderrorMsg:""
}


const Login = () => {
	const navigte= useNavigate()
	// state to manage track the input data in registartion form
	const [input, setInput] =  useState<inputstate.loginInput>(initialInput)
	const dispatch = useAppdispatch()
	const auth = useAppSelector(store=>store.AuthSlice)



const handleLogin=async(e:FormEvent<HTMLFormElement>)=>{
	e.preventDefault()
	
	if(errors.email || errors.password){
		return
	}
	dispatch(login(input))

}




// function to update the state based on input 
const handleInput = (e:ChangeEvent<HTMLInputElement>)=>{
	let {name, value}=  e.target as {name:string, value:string} ;
	setInput({...input, [name]:value})
	
	if(name==="password"){
		errors.password = value.length<8 ||value===""
		errors.pwderrorMsg =  value===""?"Password is required":value.length<8?"Min 8 character is required":""
	}

	if(name==="email"){
		errors.email = value===""
		errors.emailerrorMsg="email is required"
	}
       
}

useEffect(()=>{
	if(auth.isAuth){
		return navigte("/")
	}
})

  return (
	!(auth.isAuth)?
		<Box w="100%" boxShadow={"lg"} borderTop="1px solid #eee" py="15px" px="15px" borderRadius={"5px"} bg="#fff">
		<form onSubmit={(e)=>handleLogin(e)}>
				{/* COntainer Box */}

				<Text textAlign="center" fontSize={["5vw","5vw","3.2vw","2vw"]} fontWeight={"600"} pb="15px">
					Login
				</Text>
				{/* Form Title */}

				<a href="https://github.com/login/oauth/authorize?client_id=fa5a76c9883fa9487ef9" >
				<Flex bg="#03a9f4" _hover={{cursor:"pointer"}} w="250px" align={"center"} justify="center" gap="10px" border="1px solid #ccc" py="5px" px="5px" mx="auto">
					{/* <AiFillGithub /> */}
					<BsGithub fontSize={"20px"} color={"#fff"}/>
					<Text color={"#fff"} fontWeight={"650"} px="3px">Continue with Github</Text>
				</Flex>
				</a>

			
					<Flex w="100%"  direction="column" gap="12px" justify="center">
					
					
					{/* Email Form controller  */}
					<FormControl isInvalid={errors.email}>
					<Flex w="100%" direction={"column"} justify="center" align={"flex-start"} minHeight={"50px"} >
								<FormLabel pl="11px" w={"100%"} textAlign={"left"}>
										Email :
								</FormLabel>
								
								<Box w={"100%"}>
								<Input w="100%"  name="email" type={"email"} value={input.email} placeholder="Email" onChange={handleInput} required/>
									{!(errors.email)? (
									<FormHelperText>	
									</FormHelperText>
									) : (
										<FormErrorMessage>{errors.emailerrorMsg}</FormErrorMessage>
									)}
								</Box>
						</Flex>
					</FormControl>
					{/* Password Form controller  */}
					<FormControl isInvalid={errors.password}>
						<Flex w="100%" direction={"column"} justify="center" align={["center","center","center","flex-start"]} minHeight={"50px"} >
								<FormLabel pl="11px" w={"100%"} textAlign={"left"}>
										Password :
								</FormLabel>
								
								<Box w={"100%"}>
								<Input w="100%"  name="password" type={"text"}  value={input.password} placeholder="Password" onChange={handleInput} required/>
									{!(errors.password)? (
									<FormHelperText>
										
									</FormHelperText>
									) : (
										<FormErrorMessage>{errors.pwderrorMsg}</FormErrorMessage>
									)}
								</Box>
						</Flex>
					</FormControl>

						<Flex w="100%"  direction={"row"} justify="flex-start" align={"center"}>
							<Button type="submit" w="150px" colorScheme={"telegram"} mb="5px" mt="10px"> Login </Button>
						</Flex>

						<Flex w="100%"  direction={"row"}  align={"center"} justify="felx-start" gap="25px" pt="5px">
							<Text fontSize={"14px"}>
								<Link to="/reset_password"> <Box as="b" color="#668">Forget Passoword </Box> </Link>
							</Text> 
							<Text fontSize={"14px"}>
								<Link to="/signup"> <Box as="b" color="#668">Create an Account </Box> </Link>
							</Text>    
						</Flex>
					</Flex>
		</form>
	</Box>:null
	
  )
}


export default Login