import React, {useState, useEffect} from "react";
import axios from "axios";
import ImgCard from "./ImgCard";

export default function ImgList() {
    const [picOfDay, setPicOfDay] = useState({});
useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=2zQLcmgHSq21m3XG4PgI7JjELgc9WjKAEijLDmKb')
    .then(response => {
        console.log(response);
        setPicOfDay(response.data);
    })
}, [])    

return (
    <div>
        <ImgCard title={picOfDay.title} date={picOfDay.date} url={picOfDay.url} explanation={picOfDay.explanation} />
    </div>
)
}