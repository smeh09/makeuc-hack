import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Results from "./Components/Results";
import SearchBookForm from './Components/SearchBookForm';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Link to='/searchBook'>Searh quiz page</Link>
          </Route>
          <Route exact path="/details/:keyword/:keywordInAuthor/:keywordInTtile/:keywordInPublisher/:filter/:lang/:printType">
            <Results />
          </Route>
          <Route exact path='/searchBook'>
            <SearchBookForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
