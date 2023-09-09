//@ts-nocheck
import React from 'react';
import "../components/Team/team.css"
import { Card, Footer } from '../components';
import dummyData from "../utils/members.json"

import {
    Heading,
    Text
} from "@chakra-ui/react"
import {useEffect,useState} from 'react';
import axios from 'axios';

// The Team component displays a list of team members using the Card component
// const [isLoading,setIsLoading]=useState(true);

export default function Team() {
    const [membersData,setmembersData]=useState([]);

    useEffect(()=>{

        const fetchData=async()=>{
            try{

                const response=await  axios.get('https://us-central1-iste-pccoe.cloudfunctions.net/getTeamData');
                // console.log(response);
                if(response.status==200){
                    const responseData=response.data;
                    // console.log("Response data is as follows: ",response.data);
                    setmembersData(response.data);

                }
                else{
                    
                    setmembersData(dummyData);
                }
            }
            catch(err){
                    console.log("Error at the backend request!!");
                   
                    setmembersData(dummyData);
            }
        }
        if(membersData.length==0)fetchData();
    },[]);
    return (
        
        <div className="teamContainer">
         
            {/* Team section */}
            <section>
                {/* Heading */}
                <Heading
                    fontWeight={600}
                    textAlign={'center'}
                    p={'4em 1em 2em 1em'}
                    fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
                    lineHeight={'110%'}>
                    <Text
                        fontSize={{ base: "2.5rem", sm: "2.2rem", md: "2.5rem", lg: "50px" }}
                        color = "white"
                        fontWeight="bold"
                    >
                        Core Team
                    </Text>
                </Heading>

                {/* Displaying team members using the Card component */}
                <div className="row">
                    {/* Mapping over membersData to render each member using Card */}
                    {membersData.map((member) => (
                        // Rendering the Card component for each member
                        <Card member={member} />
                    ))}
                </div>

            </section>
            <Footer/>
        </div>
    )
}
