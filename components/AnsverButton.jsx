
import button from "@styles/ansverButton.module.css"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { enterAnsver } from "@store/questionSlice"
import { useEffect, useState } from "react"


const AnsverButton = ({variant, text, id}) => {

  const dispatch = useDispatch()
  const selectedVariant = useSelector((state) => state.question.selectedVariant)
  const correctVariant = useSelector((state) => state.question.correctVariant)

  const [buttonState, setButtonState] = useState(button.ansverButton)

  
  const buttonClick = (event) => {
    const id = event.currentTarget.id
    dispatch(enterAnsver(parseInt(id)))
  }

  const changeButtonState = () => {
    if(id === selectedVariant){
      if(correctVariant === selectedVariant){
        setButtonState(`${button.ansverButton} ${button.correct}`)
      }
      else{
        setButtonState(`${button.ansverButton} ${button.wrong}`)
      }
    }
    else{
      setButtonState(button.ansverButton)
    }
    
  }

  useEffect(() => {
    changeButtonState()
  }, [selectedVariant])
  

  return (
    <div id={id} className={buttonState} onClick={(event) => buttonClick(event)}  data-testid="ansverButton">
      <span className={button.line}></span>
      <div className={button.content}>
        <span className={button.variant}>{variant}</span>
        <p className={button.text}>{text}</p>
      </div>
      <span className={button.line}></span>
    </div>
  )
}

export default AnsverButton