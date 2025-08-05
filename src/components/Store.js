import { legacy_createStore as createStore } from "redux";
import BookReducer from './BookReducder';

const store = createStore(BookReducer);

export default store;