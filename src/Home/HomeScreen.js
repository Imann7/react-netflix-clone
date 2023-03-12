import React from 'react'
import Banner from '../Banner/Banner'
import "./HomeScreen.css"
import Nav from '../Nav/Nav'
import requests from '../request'
import Row from '../Row/Row'




function HomeScreen() {
  return (
    <div className='home'>


    <Nav/>
    
    <Banner/>

    <Row  title="Trending NOW"  fetchUrl={requests.fetchTrending}/>
    <Row  title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
    <Row  title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
    <Row  title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
    <Row  title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/>
    
    
    </div>
  )
}

export default HomeScreen