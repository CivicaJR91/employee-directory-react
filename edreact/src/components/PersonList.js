import React from "react";
import API from "../utils/API"; // using the API
import { Table } from 'reactstrap';
import '../utils/style.css';




//Class -  setting state (data that I want to render)
export default class PersonList extends React.Component {
    state = {
        users: [], //setting as an array. It's how we'll receive the data 

    };

    componentDidMount() {
        this.api() // this is calling axios.get from API.js and wil get data as soon componentDiMount loads. And runs one time
    }

    //Using API to get data 
    api = () => {
        API.ramdomEmployees().then(res => {
            this.setState({ users: res.data.results });// using setState to change USERS at the state level

            // setting second API respond to display only search box input
            this.setState({ usersToDisplay: res.data.results });
            console.log(res);
        })

    }

    //Rendering data
    //this = reference to state
    render() {

        const users = this.state.users;
        console.log('user', this.state.users)

    
        //accessing array of data and displaying each employeey information

        const usersMap = users.map((user, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                        <img src={user.picture.thumbnail} />
                    </td>
                    <td>{`${user.name.first} ${user.name.last}`}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                </tr>
            )
        })

 
        return (
            <div>
           
            <Table striped>
                <thead>
                    <tr>
                        <th value="id">ID</th>
                        <th value="picture">Picture</th>
                        <th value="name">Name</th>
                        <th value="gender">Gender</th>
                        <th value="email">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersMap}
                </tbody>
            </Table>
            </div>

        );

    }
}

