import axios from "axios";

const APIURL = "https://randomuser.me/api/?results=3&inc=picture,name,gender,email";//WEBSITE FOR THE API


//Exporting records thur search method

export default {
    search: function(query){
        return axios.get(APIURL + query)
        
    }
};