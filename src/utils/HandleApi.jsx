import axios from "axios";
import ToDo from "../components/ToDo";
import { useState } from "react";

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