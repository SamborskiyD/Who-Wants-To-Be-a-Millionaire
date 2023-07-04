'use client'


import Banner from "@components/Banner"
import { useSelector } from "react-redux/es/hooks/useSelector"

const FinishPage = () => {

  const prize = useSelector((state) => state.question.ernedMoney)

  return (
      <section className="finish-page">
        <Banner titleText={prize + " earned"} buttonText={"Try again"} buttonLink={"/"} labelText={"Total score:"} />
      </section>

  )
}

export default FinishPage