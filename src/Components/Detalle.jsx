import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function Detalle() {
    const [infoAnime, setinfoAnime] = useState()

    const {id} = useParams();

    useEffect(()=>{
        
        axios
        .get(`https://kitsu.io/api/edge/anime/${id}`)
        .then((response) =>{
            console.log('el response', response)
            setinfoAnime(response.data.data)
            
        })

    },[id])

    return (
        <div>
        {infoAnime && infoAnime.attributes.synopsis}
        </div>
    )
}

export default Detalle
