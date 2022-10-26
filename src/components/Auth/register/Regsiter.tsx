import {
	Box, 
	Flex,
	Input,
	Button,
	Text,
	FormLabel,
	FormControl,
	FormHelperText,
	FormErrorMessage,
	Alert,
	AlertIcon,
	AlertTitle,
	Image
  } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { inputstate } from "../../../interface"
import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import { config } from "../../../providers"
import { useAppdispatch } from "../../../store/hooks/store.hook"
import { createNewUser } from "../../../store/users/user.slice";
import {BsGithub} from 'react-icons/bs'
import { getRefreshToken } from "../../../store/Auth.store/Auth.Slice"

const initialInput:inputstate.registerInput = {
	name:"",
	email:"",
	password:""
}

const errors:inputstate.registererror = {
	name:false,
	email:false,
	password:false
}

const Register = ()=>{
	const [successMsg, setSuccessMsg] = useState(false)
	// state to manage track the input data in registartion form
	const [input, setInput] =  useState<inputstate.registerInput>(initialInput)
	const dispatch= useAppdispatch()


	// function to update the state based on input 
	const handleInput = (e:ChangeEvent<HTMLInputElement>)=>{

			let {name, value}=  e.target as {name:string, value:string} ;

			setInput({...input, [name]:value})
			
			if(name==="name"){
				errors.name = value===""
			}
			if(name==="email"){
				errors.email = value===""
			}
			if(name==="password"){
				errors.password = value===""
			}
	
		}
	
	const RegistrationProcess = async(e:FormEvent<HTMLFormElement>)=>{
			e.preventDefault()
			let responce = await createNewUser(input)
			setInput(initialInput)
			setSuccessMsg(true)
	}
	useEffect(()=>{
		return (
			setSuccessMsg(false),
			setInput(initialInput)
		)
	},[])

	return (
		<Box w="100%" boxShadow={"lg"}  borderTop="1px solid #eee" py="20px" px="30px" borderRadius={"10px"} bg="#fff">
			{/* COntainer Box */}
			<form onSubmit={RegistrationProcess}>
			{/* <Text textAlign="center" fontSize={["6vw","6vw","4.2vw","2vw"]} fontWeight={"500"} pb="15px">
				Sign up
			</Text> */}
			{/* Form Title */}
	
			<a href="https://github.com/login/oauth/authorize?client_id=fa5a76c9883fa9487ef9" >
			<Flex bg="#03a9f4" _hover={{cursor:"pointer"}} w="250px" align={"center"} justify="center" gap="10px" border="1px solid #ccc" py="5px" px="5px" mx="auto">
				{/* <AiFillGithub /> */}
				<BsGithub fontSize={"20px"} color={"#fff"}/>
				<Text color={"#fff"} fontWeight={"650"} px="3px" >Continue with Github</Text>
			</Flex>
			</a>
				<Flex w="100%"  direction="column" gap="12px" justify="center" mt="10px">
				
				{/* Name input controller  */}
				<FormControl isInvalid={errors.name}>
					<Flex w="100%" direction={"column"} justify="center" align={"flex-start"} minHeight={"50px"} >
							<FormLabel pl="11px" w={"100%"} textAlign={"left"}>
									Name :
							</FormLabel>
							
							<Box w={"100%"}>
							<Input w="100%"  name="name" type={"text"} value={input.name} placeholder="Full Name" onChange={handleInput} required/>
								{!(errors.name)? (
								<FormHelperText>
									
								</FormHelperText>
								) : (
									<FormErrorMessage>Name is required.</FormErrorMessage>
								)}
							</Box>
					</Flex>
				</FormControl>

				{/* Email Form controller  */}
				<FormControl isInvalid={errors.email}>
				<Flex w="100%" direction={"column"} justify="center" align={"flex-start"} minHeight={"50px"} >
							<FormLabel pl="11px" w={"100%"} textAlign={"left"}>
									Email :
							</FormLabel>
							
							<Box w={"100%"}>
							<Input w="100%"  name="email"  value={input.email} type={"text"} placeholder="Email" onChange={handleInput} required/>
								{!(errors.email)? (
								<FormHelperText>
									
								</FormHelperText>
								) : (
									<FormErrorMessage>Email is required.</FormErrorMessage>
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
							<Input w="100%"  name="password" type={"text"} value={input.password} placeholder="Password" onChange={handleInput} required/>
								{!(errors.password)? (
								<FormHelperText>
									
								</FormHelperText>
								) : (
									<FormErrorMessage>Password is required.</FormErrorMessage>
								)}
							</Box>
					</Flex>
				</FormControl>


					

					<Flex w="100%"  direction={"row"}  align={"center"}>
						<Button type="submit" w="150px" colorScheme={"telegram"} mb="5px" mt="5px" > Sign up </Button>
					</Flex>

					<Flex w="100%"  direction={"row"}  align={"center"} gap="25px" pt="5px">
						<Text fontSize={"14px"}>
							Already have account ? Click here to <Link to="/login"> <Box as="b" color="#668">Login </Box> </Link>
						</Text>    
					</Flex>
					
					{successMsg?<Alert status='success'>
						<AlertIcon />
						Account Verfication Link send to your Email Please Verify
					</Alert>
					:null}
				</Flex>
			</form>
    	</Box>
	)
}

export default Register