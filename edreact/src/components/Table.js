import React from "react";
import Search from "./Search";
import API from "../utils/API"; // using the API
import axios from "axios";
import { Table } from 'reactstrap';


export default class PersonList extends React.Component {
    state = {
        picture: [],
        name: [],
        gender: [],
        email: []
    }
    componentDidMount() {
        //use the API URL to get the data and set the promise
        axios.get("add here URL API").then(res => {
            this.setState({ state.res.data.data });
        })
    }

    //render the data in a table
    render() {
        //where to put this.state.map(state =>)
        const dirTable = (props) => {
            return (
                <Table striped>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{props.picture[0]}</td>
                            <td>{props.name[0]}</td>
                            <td>{props.gender[0]}</td>
                            <td>{props.email[0]}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{props.picture[1]}</td>
                            <td>{props.name[1]}</td>
                            <td>{props.gender[1]}</td>
                            <td>{props.email[1]}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>{props.picture[2]}</td>
                            <td>{props.name[2]}</td>
                            <td>{props.gender[2]}</td>
                            <td>{props.email[2]}</td>
                        </tr>
                    </tbody>
                </Table>
            );
        }

        export default dirTable;

    }


}