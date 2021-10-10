import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Results from "./Components/Results";
import SearchBookForm from './Components/SearchBookForm';
import BookSelect from "./Components/BookSelect";
import { Header } from "./Components/Header"
import { HomeAppHero } from "./Components/HomeAppHero";
import { ContanctUs } from "./Components/ContactUs";
import { Features } from "./Components/Features";
import DictApiResults from "./Components/DictApiResults";
import DictForm from "./Components/DictForm";
import About from "./Components/About";
function App() {
  return (
    <div>
      <Router>
        <Header title="Search Books" />
        <Switch>
          <Route exact path='/'>
            <HomeAppHero />
            <Features />
            <ContanctUs />
          </Route>
          <Route exact path="/dictionary/:lang/:word">
              <DictApiResults/>
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
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/searchDictionary'>
            <DictForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
