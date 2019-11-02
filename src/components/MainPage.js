import React from 'react';
import CHeader from './CustomHeader';
import { Button } from 'reactstrap';

export default class MainPage extends React.Component {

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <Button color="warning" size="lg" style={{width: '75%'}} href="/roomPostFormPage" block>Make Post</Button>
                <Button color="warning" size="lg" style={{width: '75%'}} href="/roomRequestFormPage" block>Make Request</Button>
            </header>
        )
    }
}