import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components'

import { PlayCircle }  from 'styled-icons/fa-regular'

const Card = styled.div`
  width: 800px;
  height: 460px
  border-radius: .2em;
  box-shadow: -1px 1px 5px 3px #e8e8e8;
  overflow: hidden;
  position: relative;

  &:hover { opacity: 0.9; };
`
const Center = styled.div`
  position: absolute;
  top: 100px;
  left: 35%;
`
const WhitePlayCircle = styled(PlayCircle)`
  color: #f2f2f1;
`

class VideoPlayer extends React.Component {
  constructor(props)  {
    super(props)
    this.state = { video: false }
  }

  playVideo = (e) => {
    this.setState({ video: true })
  }

  render() {
    if (this.state.video) {
      let src = `${this.props.video}?controls=0&autoplay=1`
      return (
        <Card>
          <iframe 
            width="800" 
            height="465" 
            src={src} 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen>
          </iframe>
        </Card>
      )
    }
    return (
      <Card>
        <img src={this.props.image} />
        <Center>
          <WhitePlayCircle size={250} onClick={this.playVideo} />
        </Center>
      </Card>
    )
  }
}

const profile = {
  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-0.3.5&s=d6b71efb7cfd3161bb96e9f2035c3752&dpr=1&auto=format&fit=crop&w=800&q=80&cs=tinysrgb',
  video: 'https://www.youtube-nocookie.com/embed/0sXvuUrJa0o'
}

const App = () => (
  <VideoPlayer video={profile.video} image={profile.image} />
)

ReactDOM.render(<App />, document.body);