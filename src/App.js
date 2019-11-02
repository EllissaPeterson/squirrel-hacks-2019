import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.css';
import CHeader from './components/CustomHeader';
import MainPage from './components/MainPage';
import AccountPage from './components/AccountPage';
import RoomPostFormPage from './components/RoomPostFormPage';
import RoomPostPage from './components/RoomPostPage';
import RoomRequestFormPage from './components/RoomRequestFormPage';
import RoomRequestPage from './components/RoomRequestPage';

const Home = () => (
  <div className="App">
      <header className="App-header">
        <CHeader/>
          <Button color="info" size="lg" style={{width: '75%'}} href="/mainPage" block>Main Page</Button>
      </header>
    </div>
)

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/mainPage" component={MainPage} />
      <Route exact path="/accountPage" component={AccountPage} />
      <Route exact path="/roomPostFormPage" component={RoomPostFormPage} />
      <Route exact path="/roomPostPage" component={RoomPostPage} />
      <Route exact path="/roomRequestFormPage" component={RoomRequestFormPage} />
      <Route exact path="/roomRequestPage" component={RoomRequestPage} />
    </Router>
  );
}

export default App;
