import React from 'react';
import CHeader from './CustomHeader';
import { Button,Form, FormGroup, Label, Input } from 'reactstrap';

export default class RoomPostFormPage extends React.Component {

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <Form>
                    <FormGroup>
                        <Label for="postName">Name of Post:</Label>
                        <Input type="text" name="postName" id="postName" placeholder="Post Name" />
                    </FormGroup>
                </Form>
            </header>
        )
    }
}