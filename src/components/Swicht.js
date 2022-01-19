import React from 'react';
import Switch from '@mui/material/Switch';
import Continents from './Continents'
import Cities from './Cities'


export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(false);
  const [filtro, setFiltro] = React.useState("Cities")


  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
    event.target.checked ? setFiltro(<Continents />) : setFiltro(<Cities />)
  };

  return (



    <div>
      <Switch

        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <h1>
        {filtro}
      </h1>
    </div>


  );
}
