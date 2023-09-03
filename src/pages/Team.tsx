//@ts-nocheck
import React from 'react';
import "../components/Team/team.css"
import { Card } from '../components';
import membersData from "../utils/members.json"

// The Team component displays a list of team members using the Card component
export default function Team() {
    return (
        <div className="teamContainer">
            {/* Team section */}
            <section>
                {/* Heading */}
                <div className="row">
                    <h1>Our Team</h1>
                </div>

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
