import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Requests'
import Rows from '../Rows'

const HomeScreen = () => {
    return (
        <div className='home__screen'>
            <Nav />
            <Banner/>
            <Rows 
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow />
          <Rows title="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
          <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Rows title="Action movies" fetchUrl={requests.fetchActionMovies} />
          <Rows title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
          <Rows title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
          <Rows title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
          <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
  


        </div>
    )
}

export default HomeScreen
