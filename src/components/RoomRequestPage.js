import React from 'react';
import CHeader from './CustomHeader';
import { Label,Button } from 'reactstrap';
import axios from 'axios';

export default class RoomRequestPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: "85a5a7a061c184bde23389dea4505c1b",
            name: "Jane Doe",
            numOfPeople: 3,
            location: "Ames, Iowa",
            contactName: "Jane Doe",
            contactPhone: "+15157201611",
            contactEmail: "email@gmail.com",
            profileName: "John Doe",
            profilePhone: "+15157201611",
            profileEmail: "email@gmail.com"
        };
      }

    sendText(profileName, profilePhone, profileEmail) {
        var Base64 = require('js-base64').Base64;
        let message = 'Hello, ' + profileName + ' has a place to stay. Their phone number is ' 
            + profilePhone + ' and their email is ' + profileEmail + '.';
        const account = 'AC8958e14b6120c8f3342812c4cdda594e';
        const token = 'e14286eeb3f4a4eb47c1c0ab5b7dd5ff';

        let hash = Base64.encode( `${account}:${token}` );

        let form = new FormData();
        form.append( 'From', '+14154888651' );
        form.append( 'Body', message );
        form.append( 'To', '+15157201611' ); //send to request author

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

    componentDidMount() {
        // axios.get('')
        //   .then(response => {
        //     console.log(response);
        //     this.setState({numOfPeople : response.numOfPeople});
        // });
    }

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <br/>
                <br/>
                <h1>Room Request</h1>
                <Label id="name">Name</Label>
                <Label id="numOfPeople">Number of People: {this.state.numOfPeople}</Label>
                {/*Contact info*/}
                <Button color="info" size="lg" style={{width: '75%'}} onClick={this.sendText(this.state.profileName, this.state.profilePhone, this.state.profileEmail)} block>Click to Send Text</Button>
            </header>
        )
    }
}