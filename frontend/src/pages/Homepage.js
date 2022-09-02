import {
  Box,
  Container,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="grid"
        justifyContent="center"
        p={3}
        bg="#79DAE8"
        w="100%"
        m="20% 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans-serif"
          color="#205375"
          fontWeight="bold"
        >
          RealConvo.
        </Text>
      </Box>
      <Box
        bg="#0AA1DD"
        w="100% "
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs defaultIndex={1} variant="soft-rounded" colorScheme="cyan" >
        <TabList >
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Register</Tab>
          </TabList>
          <TabPanels>
          
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
          
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
