import React from 'react';
import ReactDOM from 'react-dom'

import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from './data'

const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  & a { text-decoration: none; }
`
const GameItem = styled.div`
  padding: 30px;
  margin: 30px;

  text-decoration: none; 
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: #fefefe;

  background-image: url(${props => props.image});
  border-radius: 0.5em;

  height: 350px;
  width: 350px;

  &:hover { opacity: 0.7; };
  & .name { padding: 10px; background-color: #000000a8; }
`

const HomePage = (props) => (
  <Home>
  {data.map(v =>
      <Link to={`/game/${v.trackId}`} key={v.trackId} >
        <GameItem image={v.artworkUrl512}>
        <h1 className='name'>{v.trackName}</h1>
        </GameItem>
      </Link>
  )}
  </Home>
)

const Details = styled.div`
  display: flex;
  padding: 20px;
  height: 100%;
  
  color: #fefefe;
  font-family: sans-serif;

  & .artwork { 
    width: 400px; 
    height: 400px;
    padding: 20px;
    padding-right: 30px;
  }

  & .description {
    line-height: 1.5em;
    font-size: 25px;
    color: gray;
  }

  & .screenshots {
    display: flex;
    flex-wrap: wrap;
  }

  & .screenshots img {
    padding: 5px;
    width: 200px;
    height: 200px;
  }
`

const DetailsPage = (props) => {
  let id = props.match.params.id
  let g = data.find(v => v.trackId == id)

  return (
  <Details>
  <img class="artwork" src={g.artworkUrl512}/>
  <div>
    <h1 class="title">{g.trackName}</h1>
    <p class="description">{g.description}</p>
    <div class="screenshots">
    {g.screenshotUrls.map(v => <img src={v} key={v} /> )}
    </div>
  </div>
  </Details>
  )
}

const App = () => (
  <Router>
    <>
    <Route exact path="/" component={HomePage} />
    <Route path="/game/:id" component={DetailsPage} />
    </>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'));