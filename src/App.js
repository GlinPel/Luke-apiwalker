import Starwars from "./Starwars";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Starwars />
        </Route>
        <Route path="/">
          <Starwars />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
