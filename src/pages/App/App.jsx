import './App.css';
import { useState } from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from "../LoginPage/LoginPage";
import ActorIndexPage from "../ActorIndexPage/ActorIndexPage";
import MovieIndexPage from "../MovieIndexPage/MovieIndexPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import NavBar from "../../components/NavBar/NavBar";
import {movies} from "../../components/data";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
            {user ? <>
              <h1>Welcome {user}</h1>
                <NavBar/>
               <Switch>
               <Route  path="/movies/:movieName">
                        <MovieDetailPage movies={movies}/>
                    </Route>
                    <Route exact path="/movies">
                        <MovieIndexPage movies={movies}/>
                    </Route>
                    
                    <Route path="/actors">
                        <ActorIndexPage movies={movies}/>
                    </Route>
                    <Redirect to="/movies"/>
                    </Switch>
            </> : <LoginPage setUser={setUser}/>}
        </main>
  );
}

export default App;
