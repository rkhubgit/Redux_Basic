import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {purchase_book} from './BookAction';
import { Purchase_book } from './BookAction';


const BookContainer = () => {
    const noOfBooks = useSelector(state => state.NumberOfBooks);
    const dispatch = useDispatch();

    return (
        <div>Book Container
            <h2>
                Number of Books are :  {noOfBooks}
            </h2>
            <button onClick={() => dispatch(Purchase_book())} >Increment</button>
            <button onClick={() => dispatch(purchase_book())} >Decrement</button>
        </div>
    )
}
export default BookContainer;
