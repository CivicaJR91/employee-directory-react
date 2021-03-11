import React from "react";
import PersonList from './PersonList'
import Search from './Search'
import '../utils/style.css';



function Directory() {
    return(  
        <div>
        <div className="container">
        <div className="jumbotron">
            <h1>Employee Directory</h1>
        </div>
        <div>
            <Search />
        </div>

        <div>
            <PersonList  />
            </div>
    </div>
    </div>
     )
 
}

export default Directory;