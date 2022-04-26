import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function Likes(props) {

    const [{ user }, dispatch] = useStateValue()

    // const [like, setLike] = useState(0)

    const likeDisLike = async () => {
        await axios.put(`http://localhost:4000/api/likeDisLike/${user.id}`)
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