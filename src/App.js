import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = React.lazy(() => import("./components/HomePage"));

function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={"loading  ....."}>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
