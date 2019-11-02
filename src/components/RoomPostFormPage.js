import React from 'react';
import CHeader from './CustomHeader';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RoomPostFormPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            nameOfPost: "",
            rooms: 0,
            beds: 0,
            baths: 0,
            amenities: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      handleSubmit(event) {
        event.preventDefault();
        //send request to database with account info and info from state
        //TODO
        this.props.history.push('/mainPage');
    }

    render() {
        const {
            numOfPeople
          } = this.state;
          return(
            <header className="App-header">
                <CHeader/>
                <Form>
                    <br/>
                    <br/>
                    <h1>Room Post Form</h1>
                    <FormGroup>
                        <Label for="postName">Name of Post:</Label>
                        <Input type="text" name="postName" id="postName" placeholder="Post Name" onChange={this.handleChange}/>
                    </FormGroup>
                    {/*Images*/}
                    <br/>
                    <br/>
                    <FormGroup>
                        <Label for="rooms">Room(s):</Label>
                        <Input type="number" name="rooms" id="rooms" placeholder="0" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="beds">Bed(s):</Label>
                        <Input type="number" name="beds" id="beds" placeholder="0" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="baths">Bath(s):</Label>
                        <Input type="number" name="baths" id="baths" placeholder="0" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="amenities">Amenities:</Label>
                        <Input type="text" name="amenities" id="amenities" placeholder="Amenities, etc" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="warning" size="lg" onClick={this.submitPost} onClick={this.handleSubmit}>Submit With My Information</Button>
                    </FormGroup>
                    <FormGroup>
                        <Button color="warning" size="lg" >Delete Post</Button>
                    </FormGroup>
                </Form>
            </header>
        )
    }
}