import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
