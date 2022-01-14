import React from 'react';
import Switch from '@mui/material/Switch';
export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);
  const [filtro, setFiltro] = React.useState("Ciudades")


  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
    event.target.checked ? setFiltro("Ciudades") : setFiltro("Continente")
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
