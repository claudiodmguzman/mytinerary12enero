import React from 'react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';


function Coment() {

    const [itineraries, setItineraries] = useState([])

    const [{ cities },{user}, dispatch] = useStateValue() 

    const submitComent = (event) => {
        event.preventDefault()
        
        const dataComents = {
            itinerario:itineraries[0]._id,
            mensage:event.target[0].value,
            //user:user.datosUser.id, (queda comentado porque no me funcioana el logIn)
            user:user,
             
        }
        console.log(dataComents)
    }

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