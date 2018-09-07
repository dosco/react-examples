import React from 'react';
import ReactDOM from 'react-dom'

import styled from 'styled-components'
import axios from 'axios';

const Img = styled.img`
  height: 1000px;
`

const CarouselWrap = styled.div`
  display: flex;
  flex-direction: row;
`

const Carousel = (props) => (
  <CarouselWrap>
    {props.images.map((img, i) => 
      <Img src={img} key={`img-${i}`} />
    )}
  </CarouselWrap>
)

class RedditArt extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    axios.get(`/api`)
      .then(res => {
        const images = res.data.data.children.map(obj => obj.data.url);
        this.setState({ images });
      });
  }

  render = () => (
    <Carousel images={this.state.images} />
  )
}

const Banner = styled.h1`
  position: fixed;
  margin: 10px;
  padding: 8px;
  border-radius: 5px;
  background-color: #ffeb3b;
  color: #222;
`

const App = () => (
  <>
  <Banner>Reddit Art</Banner>
  <RedditArt />
  </>
)

ReactDOM.render(<App />, document.getElementById('app'));