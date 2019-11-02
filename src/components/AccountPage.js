import React from 'react';
import CHeader from './CustomHeader';
import { Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

export default class MainPage extends React.Component {

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
                                    <Input type="text" name="name" id="name" placeholder="Current name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="location">Location</Label>
                                    <Input type="text" name="location" id="location" placeholder="Current location" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Current email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phoneNumber">Phone Number</Label>
                                    <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Current phone number" />
                                </FormGroup>
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