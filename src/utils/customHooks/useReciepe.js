import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReciepe } from "../redux/reciepeSlice";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;




const useReciepe = () =>{
    let searchTxt = useSelector((store)=> (store.reciepe.searchTxt));
   console.log(searchTxt);
    let dispatch = useDispatch();
    

    const fetchReciepe = async (searchTxt) =>{
        let res =  await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchTxt}&type=public`);
        let data = await res.json();
        // console.log(data.hits);
        dispatch(addReciepe(data.hits));
    }
     useEffect(()=>{fetchReciepe(searchTxt)},[searchTxt]);
}

export default useReciepe;