import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Results from "./Components/Results";
import SearchBookForm from './Components/SearchBookForm';
import BookSelect from "./Components/BookSelect";
import { Header } from "./Components/Header"

function App() {
  return (
    <div>
      <Router>
        <Header title="Search Books" />
        <Switch>
          <Route exact path='/'>
            
          </Route>
          <Route exact path="/book/:id">
              <BookSelect/>
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
