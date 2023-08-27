//@ts-nocheck
import React from 'react';
import Card from './Card';
import "./team.css"
import membersData from "./members.json"

// The Team component displays a list of team members using the Card component
export default function Team() {
    return (
        <div className="container">
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
