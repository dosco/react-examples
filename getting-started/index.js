import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components'
import { BarChart, Bar } from 'recharts'

import { Fingerprint, Star } from 'styled-icons/material'
import { Github } from 'styled-icons/fa-brands'

const Card = styled.div`
  width: 650px;
  height: 200px
  border-radius: .2em;
  box-shadow: -1px 1px 5px 3px #e8e8e8;
  font-size: 20px;
  font-family: -apple-system,helvetica neue;
  display: flex;
  overflow: hidden;

  &:hover { opacity: 0.9; };
  & h3, & p { margin: 0px; }
  & .image { width: 200px; overflow hidden; }
`
const Circle = styled.div`
  position: relative;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const Image = (props) => (
  <div className='image'>
  <img src={props.src} />
  <Circle style={{ bottom: '70px', left: '-20px' }}>
    <Fingerprint size='60' />
  </Circle>
  </div>
)

const InfoWrap = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2em 0.5em;
  overflow: hidden;

  & .name { font-size: 23px; }
  & .title { color: #444; }
`

const Info = (props) => (
  <InfoWrap>
  <div>
    <h3 className='name'>{props.name}</h3>
    <p className='title'>{props.title}</p>
  </div>
  <BarChart width={360} height={100} data={props.data}>
    <Bar dataKey='y' fill='#CEEEAE' />
  </BarChart>
  </InfoWrap>
)

const LinksWrap = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: start;
  padding: 0.5em 1em;
  overflow: hidden;
  color: #666;
  border-left: 1px solid #f3f3f3;
`

const Links = (props) => (
  <LinksWrap>
    <Github size='40' />
    <Star size='40' />
  </LinksWrap>
)

const profile = {
  image: 'https://avatars3.githubusercontent.com/u/832235?s=200&v=4',
  name: 'React Hacker',
  title: 'twitter.com/dosco',
  hacking: [
    {x: 'Sun', y: 20},
    {x: 'Mon', y: 30},
    {x: 'Tue', y: 40},
    {x: 'Wed', y: 20},
    {x: 'Thu', y: 40},
    {x: 'Fri', y: 25},
    {x: 'Sat', y: 5}
  ],
}

const App = () => (
  <Card>
    <Image 
      src={profile.image}/>
    <Info  
      name={profile.name} 
      title={profile.title}
      data={profile.hacking}
    />
    <Links />
  </Card>
);

ReactDOM.render(<App />, document.body);