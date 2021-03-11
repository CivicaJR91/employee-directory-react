import React from "react";
import PersonList from './PersonList'



function Directory() {
    return(  
        <div className="container">
        <div className="jumbotron">
            <h1>Employee Directory</h1>
            <p>Add Text Here!</p>
            <p></p>
            
            <div>
            <PersonList  />
            </div>
        </div>
    </div>
     )
 
}

export default Directory;