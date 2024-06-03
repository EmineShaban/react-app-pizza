import { createStore } from "redux";
function counter(state = 0, action) {
    console.log(state+1)
}


const store = createStore(counter)

export default store