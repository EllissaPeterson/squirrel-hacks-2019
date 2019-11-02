import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.css';
import MainPage from './MainPage';

const Home = () => (
  <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
        <Button color="warning" size="lg" style={{width: '75%'}} href="/mainPage" block>Main Page</Button>
      </header>
    </div>
)

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/mainPage" component={MainPage} />
    </Router>
  );
}

export default App;
