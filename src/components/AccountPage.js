import React from 'react';
import CHeader from './CustomHeader';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button } from 'reactstrap';

export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
          name: "name",
          location: "Ames",
          email: "ellissa@iastate.edu",
          phoneNumber: "+15157201611"
        };
      }
    save (){
        //TODO
        //update states using databases
    }

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <h1>Your Account</h1>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <h2>Your Info</h2>
                            <Form>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" placeholder={this.state.name} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="location">Location</Label>
                                    <Input type="text" name="location" id="location" placeholder={this.state.location} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder={this.state.email} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phoneNumber">Phone Number</Label>
                                    <Input type="text" name="phoneNumber" id="phoneNumber" placeholder={this.state.phoneNumber} />
                                </FormGroup>
                                <Button onClick={this.save}>Save</Button>
                            </Form>
                        </Col>
                        <Col>
                            <h2>Your Posts</h2>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}