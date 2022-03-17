import DinamicRouter from "./DinamicRouter";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/:message/:color1/:color2">
          <DinamicRouter />
        </Route>
        <Route path="/:message/:color1">
          <DinamicRouter />
        </Route>
        <Route path="/:message">
          <DinamicRouter />
        </Route>
        <Route path="/">
          <DinamicRouter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
