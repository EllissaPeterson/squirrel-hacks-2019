import React from 'react';
import CHeader from './CustomHeader';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RoomRequestFormPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            numOfPeople: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      handleSubmit(event) {
        event.preventDefault();
        //send request to database with account info and numOfPeople from state
        //TODO
        this.props.history.push('/mainPage');
    }

    render() {
        const {
            numOfPeople
          } = this.state;
        return (
            <header className="App-header">
                <CHeader/>
                <Form>
                    <br/>
                    <br/>
                    <h1>Room Request Form</h1>
                    <FormGroup>
                        <Label for="numOfPeople">Number of People:</Label>
                        <Input type="number" name="numOfPeople" id="numOfPeople" placeholder="0" value={numOfPeople} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="warning" size="lg" onClick={this.handleSubmit} >Submit With My Information</Button>
                    </FormGroup>
                    <FormGroup>
                        <Button color="warning" size="lg" >Delete Request</Button>
                    </FormGroup>
                </Form>
            </header>
        )
    }
}