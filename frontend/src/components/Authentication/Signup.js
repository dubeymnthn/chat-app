import React, { useState } from "react";
import {
  VStack,
  StackDivider,
  Box,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { handle } from "express/lib/application";
const Signup = () => {
    // const {show,setShowPassword}=useState(false);
    const [name,setName] =useState([]);
    const [password,setPassword] = useState([]);
    const [PhoneNo,setPhone] = useState([]);
    const handleClick= () => {}
  return (
    <>
      <VStack
        divider={
          <StackDivider borderColor="gray.200" />
        }
        spacing={4}
        align="stretch"
        color="White"
      >
        <FormControl id="FirstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input 
                color="White"
                placeholder ="Enter your Name"
                onChange={(e)=> setName(e.target.value)}
            />
        </FormControl>
        <FormControl id="phoneNo" isRequired>
            <FormLabel>Phone No</FormLabel>
            <Input 
                color="White"
                placeholder ="Enter your Phone Number"
                onChange={(e)=> setPhone(e.target.value)}
            />
        </FormControl>
        <FormControl id="Password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
                type="password"
                color="White"
                placeholder ="Enter your Password"
                onChange={(e)=>setPassword(e.target.value)}
            />
            
            </InputGroup>
            
        </FormControl>
        
        
      </VStack>
    </>
  );
};

export default Signup;
