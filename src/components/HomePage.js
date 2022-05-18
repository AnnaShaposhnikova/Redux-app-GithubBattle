import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        
            <div className="home-container">
                <h1>GitHub Buttle: buttle your friends ... and stuff</h1> 
                
                    <Link className="button" to="/battle">Battle</Link>               
            </div>
           
      
    );
};
