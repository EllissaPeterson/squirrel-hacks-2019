import React from 'react';
import CHeader from './CustomHeader';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class MainPage extends React.Component {

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <Form>
                    <FormGroup>
                        <Label for="sortBy">Sort By:</Label>
                        <Input type="select" name="sortBy" id="sortBy">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                        <Label for="filterBy">Filter By:</Label>
                        <Input type="select" name="filterBy" id="filterBy">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                </Form>
                <Button color="warning" size="lg" style={{width: '75%'}} href="/roomPostFormPage" block>Make Post</Button>
                <Button color="warning" size="lg" style={{width: '75%'}} href="/roomRequestFormPage" block>Make Request</Button>
            </header>
        )
    }
}