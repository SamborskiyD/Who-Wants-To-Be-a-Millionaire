'use client'

import AnsverButton from "./AnsverButton"
import window from "@styles/gameWindow.module.css"
import button from "@styles/ansverButton.module.css"

import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { nextQuestion, lastQuestion } from "@store/questionSlice"
import { useRouter } from "next/navigation"


const GameWindow = () => {
    
    const question = useSelector((state) => state.question)
    const dispatch = useDispatch()
    const router = useRouter()
   
    useEffect(() => {
        if(question.selectedVariant != null){
            if(question.selectedVariant === question.correctVariant){
                setTimeout( async () => {
                    if(question.currentQuestion === question.lastQuestion){
                        await router.push("/finish")
                        dispatch(lastQuestion())
                    }
                    else{
                        dispatch(nextQuestion())
                    }
                }, 1000)
            }
            else{
                setTimeout( async () => {
                    await router.push("/finish")
                }, 1000)
            }
        }
    }, [question.selectedVariant])

    return (
        <div className={window.gameWindow}>
            <h1 className={window.question}>{question.questionText}</h1>

            <div className={window.ansvers}>
                {question.ansverVariants.map((text, index) => (
                    <AnsverButton variant={String.fromCharCode(65+index)} text={text} id={index} />
                ))}
            </div>
        </div>
    )
}

export default GameWindow