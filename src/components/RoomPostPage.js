import React from 'react';
import CHeader from './CustomHeader';
import { Label, Button } from 'reactstrap';

export default class RoomPostPage extends React.Component {
    sendText() {
        var Base64 = require('js-base64').Base64;
        let message = 'Hello, [Name] would like a place to stay in [Post Name]. Their phone number is [Phone Number] and their email is [Email].'; //more info
        const account = 'AC8958e14b6120c8f3342812c4cdda594e';
        const token = 'e14286eeb3f4a4eb47c1c0ab5b7dd5ff';

        let hash = Base64.encode( `${account}:${token}` );

        let form = new FormData();
        form.append( 'From', '+14154888651' );
        form.append( 'Body', message );
        form.append( 'To', '+15157201611' ); //send to post author

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
                <Button color="info" size="lg" style={{width: '75%'}} onClick={this.sendText} block>Click to Send Text</Button>
            </header>
        )
    }
}