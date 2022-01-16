import React from 'react';
import Switch from '@mui/material/Switch';
export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);
  const [filtro, setFiltro] = React.useState("Cities")


  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
    event.target.checked ? setFiltro("Cities") : setFiltro("Continents")
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
    <p></p>
    <p></p>
    <p></p>
    </div>

  );
}
