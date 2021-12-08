import axios from "axios";


const apiFirebase = axios.create({
    baseURL: 'https://films-4e00c-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default apiFirebase;