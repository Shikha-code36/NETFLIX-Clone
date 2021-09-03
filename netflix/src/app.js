import React, {useContext} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
import MoviesPage from "./pages/moviespage/MoviesPage";
import HomePage from "./pages/homepage/HomePage";
import CategoryPage from "./pages/categorypage/CategoryPage";
import SignInPage from "./pages/signinpage/SignInPage";
import {UserContext} from "./contexts/UserContext";

function App(){
     let user = useContext(UserContext);
  return (
    <Switch>
      {!user ?
       <>
          <Route path="/" exact component={HomePage}/>
          <Route path="/signIn" exact render={(routeProps) => <SignInPage {...routeProps} method="signIn" />}/>
          <Route path="/signUp" exact render={(routeProps) => <SignInPage {...routeProps} method="signUp" />}/>
          <Redirect to="/"/>
       </>
            :
      <>
          <Route path="/movies" exact component={MoviesPage}/>
          <Route path="/category/action" exact render={(routeProps) => <CategoryPage {...routeProps} type="fetchActionMovies" genre="Action Movies"/>}/>
          <Route path="/category/horror" exact render={(routeProps) => <CategoryPage {...routeProps} type="fetchHorrorMovies" genre="Horror Movies"/>}/>
          <Route path="/category/comedy" exact render={(routeProps) => <CategoryPage {...routeProps} type="fetchComedyMovies" genre="ComedyMovies"/>}/>
          <Route path="/category/top_rated" exact render={(routeProps) => <CategoryPage {...routeProps} type="fetchTopRated" genre="Top Rated"/>}/>
          <Route path="/category/netflix_originals" exact render={(routeProps) => <CategoryPage {...routeProps} type="fetchNetflixOriginals" genre="Netflix Originals"/>}/>
          <Route path="/category/romance" exact render={(routeProps) => <CategoryPage {...routeProps} type="fetchRomanceMovies" genre="Romance Movies"/>}/>
          <Route path="/category/trending" exact render={(routeProps) => <CategoryPage {...routeProps} type="fetchTrending" genre="Trending"/>}/>
          <Route path="/category/trending" exact render={(routeProps) => <CategoryPage {...routeProps} type="fetchDocumentaries" genre="Documentaries"/>}/>
          <Redirect to="/movies"/>
       </>
      }
    </Switch>
  )
}


export default App;
