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
	AlertDescription
  } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { inputstate } from "../../../interface"
import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import { config } from "../../../providers"
import { useAppdispatch } from "../../../store/hooks/store.hook"
import { createNewUser } from "../../../store/users/user.slice"
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
		<Box w="100%" boxShadow={"lg"}  borderTop="1px solid #eee" py="40px" px="30px" borderRadius={"10px"} bg="#fff">
			{/* COntainer Box */}
			<form onSubmit={RegistrationProcess}>
			<Text textAlign="center" fontSize={["6vw","6vw","4.2vw","2.5vw"]} fontWeight={"600"} pb="25px">
				Sign up
			</Text>
			{/* Form Title */}
	

			<Box>
				Continue with Github
			</Box>
				<Flex w="100%"  direction="column" gap="12px" justify="center">
				
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


					

					<Flex w="100%"  direction={"row"} justify="center" align={"center"}>
						<Button type="submit" w="50%" colorScheme={"telegram"} mb="10px" mt="10px" > Sign up </Button>
					</Flex>

					<Flex w="100%"  direction={"row"}  align={"center"} gap="25px" pt="10px">
						<Text fontSize={"18px"}>
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