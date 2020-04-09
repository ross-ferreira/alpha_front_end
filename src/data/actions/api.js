import axios from '../axios';


export const getData = () => (dispatch) => {
    axios.get("/").then(({ data }) => {
        console.log(data); 
    
        dispatch ({
            type:"SET_IMAGES",
            images: data.data,
        })
    });
}

