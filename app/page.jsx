'use client'
import Banner from "@components/Banner"
import { useDispatch } from "react-redux"
import { startGame } from "@store/questionSlice"


const MainPage = () => {
  
  const dispatch = useDispatch()

  return (
    <section className="main-page main-page_background">
      <Banner titleText={"Who wants to be a millionaire?"} buttonText={"Start"} buttonLink={"/game"} buttonAction={() => {dispatch(startGame())}} />
    </section>
  )
}

export default MainPage