import axios from "axios";

const API_URL = "http://localhost:5005";

const getAllToDo = (setToDo) => {
    axios
    .get(API_URL)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data)
    })
}

export {getAllToDo}