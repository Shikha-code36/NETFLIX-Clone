import React from "react";
import Row from "../../components/row/Row";
import Header from "../../components/header/Header";
import Nav from "../../components/navbar/Nav";

function MoviesPage(){
  return (
    <>
      <Nav/>
      <Header/>
      <Row type="fetchTrending" genre="Trending" isLarge/>
      <Row type="fetchNetflixOriginals" genre="Netflix Originals"/>
      <Row type="fetchTopRated" genre="Top Rated"/>
      <Row type="fetchActionMovies" genre="Action Movies"/>
      <Row type="fetchComedyMovies" genre="Comedy Movies"/>
      <Row type="fetchHorrorMovies" genre="Horror Movies"/>
      <Row type="fetchRomanceMovies" genre="Romance Movies"/>
      <Row type="fetchDocumentaries" genre="Documentaries"/>
    </>
  )
}

export default MoviesPage;