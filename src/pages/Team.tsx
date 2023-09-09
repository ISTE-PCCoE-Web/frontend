//@ts-nocheck
import React from 'react';
import "../components/Team/team.css"
import { Card, TeamCarousel } from '../components';
import membersData from "../utils/members.json"

import {
    Heading,
    Text
} from "@chakra-ui/react"

// The Team component displays a list of team members using the Card component
export default function Team() {
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
        </div>
    )
}
