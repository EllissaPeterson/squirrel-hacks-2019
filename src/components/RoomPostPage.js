import React from 'react';
import CHeader from './CustomHeader';
import { Label } from 'reactstrap';
import ContactInfo from './ContactInfo';

export default class RoomPostPage extends React.Component {

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <br/>
                <br/>
                <h1 id="postName"Post Name></h1>
                <Label id="authorName">Author Name</Label>
                <Label id="location">Location</Label>
                {/*Images*/}
                <Label id="rooms">Rooms</Label>
                <Label id="beds">Beds</Label>
                <Label id="baths">Baths</Label>
                <Label id="Amenities">Amenities</Label>
                <br/>
                <Label id="lastUpdated">Last Updated</Label>
                <br/>
                {/*Contact Info*/}
            </header>
        )
    }
}