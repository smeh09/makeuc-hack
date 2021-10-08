import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBookForm from './Components/SearchBookForm';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/searchBook'>
            <SearchBookForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
