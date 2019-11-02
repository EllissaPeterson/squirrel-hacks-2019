import React from 'react';
import CHeader from './CustomHeader';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RoomRequestFormPage extends React.Component {

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <Form>
                    <br/>
                    <br/>
                    <FormGroup>
                        <Label for="numOfPeople">Number of People:</Label>
                        <Input type="number" name="numOfPeople" id="numOfPeople" placeholder="0" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="warning" size="lg" >Submit With My Information</Button>
                    </FormGroup>
                    <FormGroup>
                        <Button color="warning" size="lg" >Delete Request</Button>
                    </FormGroup>
                </Form>
            </header>
        )
    }
}