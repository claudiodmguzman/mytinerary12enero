import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import 'react-bootstrap-accordion/dist/index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


function Coment(props) {


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

   const [cambio, setCambio] = useState()

   const [reload, setReload] = useState(false)

   const submitComent = async (event) => {
      event.preventDefault()
      //console.log(event.target[0].value)

      const dataComents = {
         itinerarioComent: props.itinerario,
         mensageComent: event.target[0].value,
         userComent: user.datosUser.id,

      }
      console.log(dataComents)
      console.log(props)
      await axios.post("http://localhost:4000/api/coment", { dataComents })
         .then(response =>
            setComent(response.data.response.comentario))
      setReload(!reload)

   }

   useEffect(() => {
      let id = props.itinerario
      axios.get(`http://localhost:4000/api/coment/${id}`)
         .then(response => {
            setComent(response.data.response.comentario)
         })
      console.log(coment)

   }, [reload])


   const borrarComentario = async (id) => {
      await axios.delete(`http://localhost:4000/api/coment/${id}`)
         .then(response =>
            displayMessages(response.data),
         )
      function displayMessages(data) {
         if (data.success) {
            swal(data.message)
         }
      }
      setReload(!reload)
   }

   const handelChange = (event) => {
      setCambio(event.target.value)
   }

   // const modificarComentario = async (id) => {
   //    console.log(id)
   //    // console.log(cambio)
   //    let data = cambio
   //    await axios.put(`http://localhost:4000/api/coment/${id}`, { data })
   //       .then(response => console.log(response))
   //    setReload(!reload)
   // }

   const modificarComentario = async (id) => {
      console.log(id)
      // console.log(cambio)
      let data = cambio
      await axios.put(`http://localhost:4000/api/coment/${id}`, { data })
         .then(response =>
            displayMessages(response.data),
         )
      function displayMessages(data) {
         if (data.success) {
            swal(data.message)
         }
      }
      setReload(!reload)
   }



   return (

      <>

         <div>
            {coment?.map(itemComent =>
               <div>
                  <div className='fromComentarioAndInfo'>
                     <div className='fromComentario'>{itemComent.user.firstName.toUpperCase()}</div>
                     <div className='fromComentarioInfo'>{"from " + itemComent.user.from}</div>
                  </div>

                  <div><input className='textComentarioUser' onKeyUp={handelChange} defaultValue={itemComent.comentaryUser}></input></div>

                  <div className='botonesComentario'>
                     <div><button className="btn btn-outline-warning botonComentario edit" onClick={() => modificarComentario(itemComent._id)}>edit</button></div>

                     <div><button className="btn btn-outline-danger botonComentario delete" onClick={() => borrarComentario(itemComent._id)}>delete</button></div>
                  </div>
               </div>
            )}

         </div>

         <form onSubmit={submitComent}>

            <div className="comentario">

               <div><input type="text" className='textComentario' placeholder='write your beautiful comment here...' /></div>

               <div className='botonesComentario'>
                  <div><button type="submit" className="btn btn-outline-primary botonComentarioSend">send</button></div>
               </div>

            </div>

         </form>

      </>
   )
}

export default Coment;