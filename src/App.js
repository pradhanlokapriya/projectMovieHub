import {BrowserRouter,Route,Switch} from "react-router-dom";
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav'
import './App.css';
import Trending from './Pages/Trending/Trending';
import Series from "./Pages/Series/Series";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";

function App() {
  return(
    <BrowserRouter>
       <Header/>
       <div className="app">
       <Container>
         <Switch>
         <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
         </Switch>
        </Container>
       </div>
       <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
