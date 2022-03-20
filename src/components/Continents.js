import React from 'react';
import CardContinents from './CardContinents';
import { useStateValue } from '../StateProvider';


const Continents = () => {

   const [{ continentes }, dispatch] = useStateValue()

   return (

      <div>

         <nav>

            <h1 className="cardMasterTitulo">Continents</h1>

         </nav>

         <div>
            <CardContinents />
         </div>

      </div>


   )
}

export default Continents;