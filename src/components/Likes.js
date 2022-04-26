import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function Likes(props) {

    const likes = props.itinerario

    const [{ cities }, dispatch] = useStateValue()
    const [{ user }] = useStateValue()
 
    const [itineraries, setItineraries] = useState([])
 
    const { id } = useParams()
    const citiesSelecter = cities.filter(city => city._id === id)
 
    useEffect(() => {
       citiesSelecter.map(city =>
          axios.get(`http://localhost:4000/api/itinerarios/${city.name}`)
             .then(response => setItineraries(response.data.response.itinerario)
             )
       )
    }, [])

    // const [{ user }, dispatch] = useStateValue()

    // const [like, setLike] = useState(0)

    const likeDisLike = async () => {
        const token = localStorage.getItem("token")
        console.log(user)
        console.log(props)
        await axios.put(`http://localhost:4000/api/likeDisLike/${user.datosUser.id}`,{}, {
            headers: {
              'Authorization': 'Bearer ' + token // método de autorizacion estandar para autoriza y autentificar al usuario
            }
          })
        .then(response => console.log(response))
    }
  


    return (

        <>

            <div className="accessLikes">


                <button className="accessLikes" onClick={likeDisLike}>♠</button>


            </div>

        </>
    )
}

export default Likes;