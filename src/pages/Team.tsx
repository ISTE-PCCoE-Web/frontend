//@ts-nocheck
import React from 'react';
import "../components/Team/team.css"
import { Card, TeamCarousel} from '../components';
import HeadDesign from '../components/Team/HeadDesign';
import dummyData from "../utils/members.json";

import {
    Heading,
    Text
} from "@chakra-ui/react"
import {useEffect,useState} from 'react';
import axios from 'axios';

interface SortableObject {
    [key: string]: any;
  }
  
  function sortByCustomOrder<T extends SortableObject>(
    array: T[],
    property: keyof T,
    customOrder: (keyof T)[]
  ): T[] {
    return [...array].sort((a, b) => {
      const indexA = customOrder.indexOf(a[property]);
      const indexB = customOrder.indexOf(b[property]);
      return indexA - indexB;
    });
  }

  const coreTeamSortOrder = ["President",
   "Vice President",
   "Secretary",
   "Joint Secretary",
   "Treasurer",
   "Co-treasurer",
    "Management Head",
    "Head Coordinator",
    "Member"
    ];
const TeamSortOrder=["Head","Member"];

export default function Team() {
    const [membersData,setmembersData]=useState([]);
    const [coreTeam,setcoreTeam]=useState([]);
    const [codingTeam,setcodingTeam]=useState([]);
    const [webTeam,setwebTeam]=useState([]);
    const [eventTeam,seteventTeam]=useState([]);
    const [DesignTeam,setDesignTeam]=useState([]);
    const [marketingTeam,setmarketingTeam]=useState([]);
    const [supportingTeam,setSupportingTeam]=useState([]);

    useEffect(()=>{

        const fetchData=async()=>{
            const response=await axios.get("https://us-central1-iste-pccoe.cloudfunctions.net/getTeamData")
            .then((ans)=>{
                setmembersData(ans.data);
                const v1=[],v2=[],v3=[],v4=[],v5=[],v6=[],v7=[];
                for(const v of ans.data){
                    if(v.team==undefined){
                        console.log(v);
                    }
                    else if((v.team).toUpperCase()==="CORE"){
                         v1.push(v);
                     }
                     else if((v.team).toUpperCase()==="CODING"){
                         v2.push(v);
                     }
                     else if((v.team).toUpperCase()==="WEB"){
                         v3.push(v);
                     }
                     else if((v.team).toUpperCase()==="EVENT MANAGEMENT"){
                         v4.push(v);
                     }
                     else if((v.team).toUpperCase()==="DESIGN"){
                         v5.push(v);
                     }
                     else if((v.team).toUpperCase()==="SUPPORTING"){
                         v6.push(v);
                     }
                     else if((v.team).toUpperCase()==="MARKETING"){
                         v7.push(v);
                     }
                     
                 }
              
                 setcoreTeam(sortByCustomOrder(v1,'position',coreTeamSortOrder));
                 setcodingTeam(sortByCustomOrder(v2,'position',TeamSortOrder));
                 setwebTeam(sortByCustomOrder(v3,'position',TeamSortOrder));
                 seteventTeam(sortByCustomOrder(v4,'position',TeamSortOrder));
                 setDesignTeam(sortByCustomOrder(v5,'position',TeamSortOrder));
                 setSupportingTeam(sortByCustomOrder(v6,'position',TeamSortOrder));
                 setmarketingTeam(sortByCustomOrder(v7,'position',TeamSortOrder));
     
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        if(membersData.length==0)fetchData();

    },[]);

    return (
        
        <div className="teamContainer">
         
            {/* Team section */}
            <section>
                {/* Heading */}
                <HeadDesign teamName="Core"/>
                {/* Displaying team members using the Card component */}
                <div className="row">
                    {/* Mapping over membersData to render each member using Card */}
                    {coreTeam.map((member) => (
                        // Rendering the Card component for each member
                        <Card member={member} />
                    ))}
                </div>
                <HeadDesign teamName="Coding"/>
                {/* Displaying team members using the Card component */}
                <div className="row">
                    {/* Mapping over membersData to render each member using Card */}
                    {codingTeam.map((member) => (
                        // Rendering the Card component for each member
                        <Card member={member} />
                    ))}
                </div>
                <HeadDesign teamName="Web"/>
                {/* Displaying team members using the Card component */}
                <div className="row">
                    {/* Mapping over membersData to render each member using Card */}
                    {webTeam.map((member) => (
                        // Rendering the Card component for each member
                        <Card member={member} />
                    ))}
                </div>
                <HeadDesign teamName="Event Management"/>
                {/* Displaying team members using the Card component */}
                <div className="row">
                    {/* Mapping over membersData to render each member using Card */}
                    {eventTeam.map((member) => (
                        // Rendering the Card component for each member
                        <Card member={member} />
                    ))}
                </div>
                <HeadDesign teamName="Design"/>
                {/* Displaying team members using the Card component */}
                <div className="row">
                    {/* Mapping over membersData to render each member using Card */}
                    {DesignTeam.map((member) => (
                        // Rendering the Card component for each member
                        <Card member={member} />
                    ))}
                </div>
                <HeadDesign teamName="Marketing"/>
                {/* Displaying team members using the Card component */}
                <div className="row">
                    {/* Mapping over membersData to render each member using Card */}
                    {marketingTeam.map((member) => (
                        // Rendering the Card component for each member
                        <Card member={member} />
                    ))}
                </div>
                <HeadDesign teamName="Support"/>
                {/* Displaying team members using the Card component */}
                <div className="row">
                    {/* Mapping over membersData to render each member using Card */}
                    {supportingTeam.map((member) => (
                        // Rendering the Card component for each member
                        <Card member={member} />
                    ))}
                </div>
            </section>
        </div>
    )
}
