import React from 'react';
import ReactDOM from 'react-dom'

import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from './data'

const Page1Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: #111;

  & a { 
    text-decoration: none; 
  }
`
const Page1Item = styled.div`
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

const Page1 = (props) => (
  <Page1Wrap>
  {data.map(v =>
      <Link to={`/game/${v.trackId}`} key={v.trackId} >
        <Page1Item image={v.artworkUrl512}>
        <h1 className='name'>{v.trackName}</h1>
        </Page1Item>
      </Link>
  )}
  </Page1Wrap>
)

const Page2Wrap = styled.div`
  display: flex;
  padding: 20px;
  height: 100%;
  
  border: 1px solid white;
  background-color: #111;

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

const Page2 = (props) => {
  let id = props.match.params.id
  let g = data.find(v => v.trackId == id)

  return (
  <Page2Wrap>
  <img class="artwork" src={g.artworkUrl512}/>
  <div>
    <h1 class="title">{g.trackName}</h1>
    <p class="description">{g.description}</p>
    <div class="screenshots">
    {g.screenshotUrls.map(v => <img src={v} key={v} /> )}
    </div>
  </div>
  </Page2Wrap>
  )
}

class App extends React.Component {
  constructor(props)  {
    super(props)
  }

  render() {
    return (
      <Router>
        <>
        <Route exact path="/" component={Page1} />
        <Route path="/game/:id" component={Page2} />
        </>
    </Router>)
  }
}

ReactDOM.render(<App />, document.body);