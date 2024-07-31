import Navbar from "./Navbar";
import About from "./Routes/About";
import Blogs from "./Routes/Blogs";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs/:id">
            <Blogs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
