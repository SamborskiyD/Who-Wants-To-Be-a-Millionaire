
import box from "@styles/moneyBox.module.css"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useState, useEffect } from "react"

const MoneyBox = ({text, id}) => {

  const currentQuestion = useSelector((state) => state.question.currentQuestion)
  const [boxState, setBoxState] = useState(box.moneyBox)

  const changeBoxState = () => {

    if(id === currentQuestion){
      setBoxState(`${box.moneyBox} ${box.active}`)
    }
    else if( id < currentQuestion){
      setBoxState(`${box.moneyBox} ${box.finished}`)
    }
    else{
      setBoxState(box.moneyBox)
    }
  }

  useEffect(() => {
    changeBoxState()
  }, [currentQuestion])



  return (
    <div id={id} className={boxState}>
      <span className={box.line}></span>
      <div className={box.content}>
        <p className={box.text}>{text}</p>
      </div>
      <span className={box.line}></span>
    </div>
  )
}

export default MoneyBox