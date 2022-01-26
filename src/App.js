import './App.css';
import HomePage from "./components/HomePage";
import ReactPage from './components/ReactPage';
import DataStructures from './shared/DataStructures';
import ReactGuide from './shared/ReactGuide';
import DataStructuresSections from './components/DataStructuresSections';
import DataStructuresPage from './components/DataStructuresPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const datastructurespath = DataStructures.url
  const reactpath = ReactGuide.url

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={`${datastructurespath}`}>
          <DataStructuresPage />
        </Route>
        <Route path={`${reactpath}`}>
          <ReactPage />
        </Route>
        <Route path={`${datastructurespath}/:itemname`}>
          <DataStructuresSections />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
