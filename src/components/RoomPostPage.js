import React from 'react';
import CHeader from './CustomHeader';
import { Label, Button } from 'reactstrap';
import axios from 'axios';

export default class RoomPostPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: "85a5a7a061c184bde23389dea4505c1b",
            name: "John Doe",
            postTitle: "Farm House",
            location: "Ames, Iowa",
            numOfRooms: "3",
            numOfBeds: "3",
            numOfBaths: "2",
            amenities: "Pet Friendly, Wifi",
            contactName: "John Doe",
            contactPhone: "+15157201611",
            contactEmail: "email@gmail.com",
            profileName: "Jane Doe",
            profilePhone: "+15157201611",
            profileEmail: "email@gmail.com"
        };
    }

    componentDidMount() {
        // axios.get('')
        //   .then(response => {
        //     console.log(response);
        //     this.setState({numOfPeople : response.numOfPeople});
        // });
    }

    sendText(profileName, postTitle, profilePhone, profileEmail) {
        var Base64 = require('js-base64').Base64;
        let message = 'Hello, ' + profileName + ' would like a place to stay in ' 
            + postTitle + '. Their phone number is ' + profilePhone 
            + ' and their email is ' + profileEmail + '.';
        const account = '';
        const token = '';

        let hash = Base64.encode( `${account}:${token}` );

        let form = new FormData();
        form.append( 'From', '+' );
        form.append( 'Body', message );
        form.append( 'To', '' ); //send to post author

        fetch( `https://api.twilio.com/2010-04-01/Accounts/${account}/Messages.json`, {
            method: 'POST',
            headers: {
            'Authorization': `Basic ${hash}`
            }, 
            body: form
        } )
        .then( ( response ) => response.json() )
        .then( ( data ) => {
            console.log( data );
        } );
    }

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <br/>
                <br/>
                <h1 id="postName"Post Name></h1>
                <Label id="authorName">Author Name: {this.state.name}</Label>
                <Label id="location">Location: {this.state.location}</Label>
                {/*Images*/}
                <Label id="rooms">Room(s): {this.state.numOfRooms}</Label>
                <Label id="beds">Bed(s): {this.state.numOfBeds}</Label>
                <Label id="baths">Bath(s): {this.state.numOfBaths}</Label>
                <Label id="Amenities">Amenities: {this.state.amenities}</Label>
                <br/>
                {/*Contact Info*/}
                <Button color="info" size="lg" style={{width: '75%'}} onClick={this.sendText(this.state.profileName, this.state.postTitle, this.state.profilePhone, this.state.profileEmail)} block>Click to Send Text</Button>
                <br/>
            </header>
        )
    }
}