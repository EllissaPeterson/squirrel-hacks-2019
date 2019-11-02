import React from 'react';
import CHeader from './CustomHeader';
import { Label,Button } from 'reactstrap';

export default class RoomRequestPage extends React.Component {
    sendText() {
        var Base64 = require('js-base64').Base64;
        let message = 'Hello';
        const account = 'AC8958e14b6120c8f3342812c4cdda594e';
        const token = 'e14286eeb3f4a4eb47c1c0ab5b7dd5ff';

        let hash = Base64.encode( `${account}:${token}` );

        let form = new FormData();
        form.append( 'From', '+14154888651' );
        form.append( 'Body', message );
        form.append( 'To', '+15157201611' );

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