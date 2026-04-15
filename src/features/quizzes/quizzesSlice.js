import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {}
};

const quizzesSlice = createSlice({
    name: 'quizzesSlice',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = { ...action.payload }
        }
    }
});

export const selectQuiz = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;