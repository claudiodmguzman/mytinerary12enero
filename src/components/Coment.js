import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import 'react-bootstrap-accordion/dist/index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Coment() {


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


   const [coment, setComent] = useState()
   

   const submitComent = async (event) => {
      event.preventDefault()
      //console.log(event.target[0].value)

      const dataComents = {
         itinerarioComent: itineraries[0]._id,
         mensageComent: event.target[0].value,
         userComent: user.datosUser.id,
         

      }
      //console.log(dataComents)
      await axios.post("http://localhost:4000/api/coment", { dataComents })
         .then(response => setComent(response.data.response.comentario))

   }

   useEffect(() => {
      let id = itineraries
      axios.get(`http://localhost:4000/api/coment/${id}`)
         .then(response => {
           setComent(response.data.response.comentario)
         })

   }, [])


   return (

      <form onSubmit={submitComent}>

         <div className="comentario">

            <>
               {coment?.map(itemComent =>
                  <div>

                     <div className='fromComentario'>{itemComent.user.firstName}</div>

                     <div><p name="textarea" className='textComentario'>{itemComent.coment}</p></div>
                  </div>
               )}
            </>

            <div><textarea name="textarea" className='textComentario' placeholder='write your beautiful comment here...'></textarea></div>

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