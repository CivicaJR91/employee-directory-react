import React from "react";
import API from "../utils/API"; // using the API
import { Table } from 'reactstrap';


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
            this.setState({ users: res.data.results })// using setState to change USERS at the state level
            console.log(res);
        })

    }

//Filter by name when a name is enter. 
  employeeFilterOnChange = (event) => {
            console.log("input", event.target.user)
            this.setState({ 
                users: event.target.user})
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
                <div>
                <label htmlFor="search"> Search by Name</label>
                <input type="text" value={this.users} onChange={this.employeeFilterOnChange}></input>
                </div>

            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
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

