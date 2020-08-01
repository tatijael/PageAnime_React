import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from "./Cards"
import {Redirect} from 'react-router';


function Anime() {

const [anime, setAnime] = useState([]);
const [active, setActive] = useState({active: false, anime:{}});


    useEffect(()=>{

        axios
        .get('https://kitsu.io/api/edge/anime')
        .then((response) =>{
            // console.log(response)
            setAnime(response.data.data);
        })

    },[])

    const handleOnClick = (anime) =>{
    console.log(anime)
    setActive({active:true, anime})
    // console.log(anime)
    
}


    return (
        
        <div className="row mx-3 my-3">
            {anime.map((item) => <Cards onClick={()=> handleOnClick(item)} {...item} key={item.id}/>)   }
            { active.active && <Redirect to={`/anime/${active.anime.id}`} />  }   
           
        </div>
    )
}

export default Anime
