
import { createSlice } from "@reduxjs/toolkit"
import data from "@store/gameConfig.json"

const initialState = {
    currentQuestion: 0,
    lastQuestion: data.questions.length - 1,
    questionText: data.questions[0].text,
    ansverVariants: data.questions[0].ansverVariants,
    correctVariant: data.questions[0].correctVariant,
    selectedVariant: null,
    ernedMoney: "$0"
}

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        enterAnsver: (state, action) => {
            state.selectedVariant = action.payload
        },
        nextQuestion: (state) => {
            state.ernedMoney = data.questions[state.currentQuestion].prize,
            state.currentQuestion++,
            state.questionText = data.questions[state.currentQuestion].text,
            state.ansverVariants = data.questions[state.currentQuestion].ansverVariants,
            state.correctVariant = data.questions[state.currentQuestion].correctVariant,
            state.selectedVariant = null
        },
        startGame: (state) => {
            state.ernedMoney = "$0",
            state.selectedVariant = null,
            state.currentQuestion = 0,
            state.questionText = data.questions[state.currentQuestion].text,
            state.ansverVariants = data.questions[state.currentQuestion].ansverVariants,
            state.correctVariant = data.questions[state.currentQuestion].correctVariant
        },
        lastQuestion: (state) => {
            state.ernedMoney = data.questions[state.currentQuestion].prize
        }
    },
})


export default questionSlice.reducer
export const {enterAnsver, nextQuestion, lastQuestion, startGame} = questionSlice.actions