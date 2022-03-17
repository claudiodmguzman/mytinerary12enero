import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import 'react-bootstrap-accordion/dist/index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Coment() {

    const [{ cities }, {user}, dispatch] = useStateValue()

    const submitComent = (event) => {
        event.preventDefault()
        //console.log(event.target[0].value)

        const dataComents = {
            itinerario:itineraries[0]._id,
            mensage: event.target[0].value,
            //user:user.datosUser.id, (queda comentado porque no me funcioana el logIn)
            user: user,

        }
        console.log(dataComents)
    }

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


    return (

        <form onSubmit={submitComent}>

            <div className="comentario">

                <div className='fromComentario'>FROM's comment</div>

                <div><textarea name="textarea" className='textComentario' placeholder='write us...'></textarea></div>

                <div className='botonesComentario'>
                    <div><button type="submit" className="btn btn-outline-primary botonComentario">send</button></div>

                    <div><button type="submit" className="btn btn-outline-warning botonComentario">edit</button></div>

                    <div><button type="submit" className="btn btn-outline-danger botonComentario">delete</button></div>
                </div>

            </div>

        </form>
    )
}

export default Coment;