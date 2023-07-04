'use client'


import GameWindow from "@components/GameWindow"
import Steps from "@components/Steps"


const GamePage = () => {

  return (

    <section className="game-page game-page_background">
      <GameWindow />
      <Steps />
    </section>
  )
}

export default GamePage