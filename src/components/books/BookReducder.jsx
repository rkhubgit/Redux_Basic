import { buy_book } from "./Buy_book";
import {Buy_book} from './Buy_book'



const initialState = {
    NumberOfBooks: 0,
}

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_book: return {
            ...state, NumberOfBooks: state.NumberOfBooks - 1
        }
        case Buy_book: return{
            ...state, NumberOfBooks: state.NumberOfBooks + 1
        }
        default: return state;
    }
}

export default BookReducer;