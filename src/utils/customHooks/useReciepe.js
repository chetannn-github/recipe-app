import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addReciepe } from "../redux/reciepeSlice";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;




const useReciepe = (searchQuery="baati") =>{
   
  
    let dispatch = useDispatch();
    // console.log(searchQuery)

    const fetchReciepe = async (searchQuery) =>{
        let res =  await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`);
        let data = await res.json();
        // console.log(data.hits);
        dispatch(addReciepe(data.hits));
    }
     useEffect(()=>{fetchReciepe(searchQuery)},[searchQuery]);
}

export default useReciepe;