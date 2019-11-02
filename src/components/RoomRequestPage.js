import React from 'react';
import CHeader from './CustomHeader';
import { Label } from 'reactstrap';

export default class RoomRequestPage extends React.Component {

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <br/>
                <br/>
                <Label id="name">Name</Label>
                <Label id="numOfPeople">Number of People</Label>
                {/*Contact info*/}
            </header>
        )
    }
}