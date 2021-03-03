import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//I may need to link the search area with the API or data

function searchField(props){
    return (
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="search" className="mr-sm-2"></Label>
            <Input type="search" name="search" id="search" placeholder="search by name" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      );
}



  
  export default searchField;