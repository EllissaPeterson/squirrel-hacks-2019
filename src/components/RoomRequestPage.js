import React from 'react';
import CHeader from './CustomHeader';
import { Label,Button } from 'reactstrap';

export default class RoomRequestPage extends React.Component {
    sendText() {
        var Base64 = require('js-base64').Base64;
        let message = 'Hello, [Name] has a place to stay with [numRooms] room(s) and [numBeds] bed(s). Their phone number is [Phone Number] and their email is [Email].'; //more info
        const account = 'act';
        const token = 'token';

        let hash = Base64.encode( `${account}:${token}` );

        let form = new FormData();
        form.append( 'From', 'from' );
        form.append( 'Body', message );
        form.append( 'To', 'to' ); //send to request author

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
                <h1>Room Request</h1>
                <Label id="name">Name</Label>
                <Label id="numOfPeople">Number of People</Label>
                {/*Contact info*/}
                <Button color="info" size="lg" style={{width: '75%'}} onClick={this.sendText} block>Click to Send Text</Button>
            </header>
        )
    }
}