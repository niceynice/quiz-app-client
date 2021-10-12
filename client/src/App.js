import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import GenerateQuizPage from './pages/GenerateQuizPage/GenerateQuizPage';
import NavBar from "./components/NavBar/index";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/generate' component = {GenerateQuizPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
