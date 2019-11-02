import React from 'react';
import CHeader from './CustomHeader';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RoomPostFormPage extends React.Component {

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <Form>
                    <br/>
                    <br/>
                    <h1>Room Post Form</h1>
                    <FormGroup>
                        <Label for="postName">Name of Post:</Label>
                        <Input type="text" name="postName" id="postName" placeholder="Post Name" />
                    </FormGroup>
                    {/*Images*/}
                    <br/>
                    <br/>
                    <FormGroup>
                        <Label for="rooms">Room(s):</Label>
                        <Input type="number" name="rooms" id="rooms" placeholder="0" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="beds">Bed(s):</Label>
                        <Input type="number" name="beds" id="beds" placeholder="0" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="baths">Bath(s):</Label>
                        <Input type="number" name="baths" id="baths" placeholder="0" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="amenities">Amenities:</Label>
                        <Input type="text" name="amenities" id="amenities" placeholder="Amenities, etc" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="warning" size="lg" >Submit With My Information</Button>
                    </FormGroup>
                    <FormGroup>
                        <Button color="warning" size="lg" >Delete Post</Button>
                    </FormGroup>
                </Form>
            </header>
        )
    }
}