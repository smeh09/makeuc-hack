import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Results from "./Components/Results";
import SearchBookForm from './Components/SearchBookForm';
import BookSelect from "./Components/BookSelect";
import { Header } from "./Components/Header"
import { ContanctUs } from "./Components/ContactUs";
import { Features } from "./Components/Features";
import DictApiResults from "./Components/DictApiResults";
import DictForm from "./Components/DictForm";
import About from "./Components/About";
import { Cards } from "./Components/Cards";
import { Footer } from "./Components/Footer"

function App() {
  return (
    <div>
      <Router>
        <Header title="LectoPoint" />
        <Switch>
          <Route exact path='/'>
            <Features />
            <Cards />
            <ContanctUs />
            <Footer />
          </Route>
          <Route exact path="/dictionary/:lang/:word">
              <DictApiResults/>
              <Footer />
          </Route>
          <Route exact path="/book/:id">
              <BookSelect/>
              <Footer />
          </Route>
          <Route exact path="/details/:keyword/:keywordInAuthor/:keywordInTtile/:keywordInPublisher/:filter/:lang/:printType">
            <Results />
            <Footer />
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
