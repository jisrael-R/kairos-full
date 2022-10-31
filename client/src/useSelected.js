import { useState,useEffect } from "react"
export const useSelected = ()=>{
const [selected, setSelected]=useState();

useEffect(()=>{
    if(selected){
        console.log(selected);
        setSelected(setSelected)
    }
},[selected])
       
return {selected,setSelected}
}