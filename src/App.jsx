import { BrowserRouter as Switch, Router , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      </Router>

    </div>
  );
}


export default App;