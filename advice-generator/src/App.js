import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import React, { useState, useEffect } from "react";
import dMobile from './images/pattern-divider-mobile.svg';
import deskTopDiv from './images/pattern-divider-desktop.svg';
import diceRoll from './images/icon-dice.svg';




const GlobalStyle = createGlobalStyle`
  body {
    background-color: hsl(218, 23%, 16%);
    font-family: 'Manrope', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2%;
  }
`

const Container = styled.main`
  text-align: center;
`

const Card = styled.div`
  background-color: hsl(217, 19%, 24%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 5% 8%;
  position: relative;

  @media (min-width: 1440px) {
    width: 30%;
    margin: 0 auto;
    padding: 2% 4%;
  }
`

const Advice = styled.p`
  color: hsl(150, 100%, 66%);
  `

const Answer = styled.span`
  font-size: 28px;
	color: #cee3e9;
	`
const  Symbol = styled.img`
  margin-top: 8%;
  margin-bottom: 15%;

  @media (min-width: 1440px) {
    margin-bottom: 7%;
  }
`

const Button = styled.button`
  border: 0;
  background-color: #52ffa8;
  cursor: pointer;
  border-radius: 50%;
  width: 4rem;
  height:  4rem;
  position: absolute;
  bottom: -12%;
  user-select: none;
  justify-content: center;


  &:hover {
    box-shadow: 0 0 20px 3px hsl(150, 100%, 66%);
    transition: all 0.5s ease;
  }
` 

const Dice = styled.img`
`

function App() {
const [text, setText] = useState("")

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice")
  const data = await res.json()
  setText(data)
}

  useEffect(() => {
    fetchAdvice()
}, [])

  return (
    <Container>
      <GlobalStyle />
        <Card>
          <Advice>
            Advice #{text.slip.id}
          </Advice>
          <Answer>
            "{text.slip.advice}"
          </Answer>
          <picture>
            <source srcSet={deskTopDiv} media="(min-width: 1440px)" />
            <Symbol src={dMobile} alt='page-symbol' />
          </picture>
          <Button onClick={fetchAdvice} >
              <Dice src={diceRoll} alt='dice-roll' />
          </Button>
        </Card>
    </Container>
  );
}

export default App;
