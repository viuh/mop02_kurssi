import React from 'react'



const Osa = ({nimi,tehtavia,id}) => {
    //console.log("Osa:",nimi, ",",tehtavia)
    return (
        <div key={id} id={id}>
          <p>{nimi} {tehtavia}</p>
        </div>
      )
  
  }
  
  
  function tehtlkm(osa) {
    return osa.tehtavia
  }
  
  
  const Yhteensa = ({osat}) => {
  
      //let sum = props.osat[0].tehtavia+props.osat[1].tehtavia+props.osat[2].tehtavia
  
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let arvot = osat.map(tehtlkm)
      //console.log("Yht",arvot)
      let sum = arvot.reduce(reducer)
  
      return(
          <p>yhteensä {sum} tehtävää</p>
  
      )
  
  }
  
  
  const Otsikko = ({nimi}) => {
    return (<h2>{nimi}</h2>)
  }
  
  
  const Kurssi = ({kurssi}) => {
    
    //console.log("Kurs.",kurssi.osat )
    return ( 
      <div key={kurssi.id}>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto kurssi={kurssi} />
      <Yhteensa osat={kurssi.osat} />
      </div>
    )
  }
  
  const Sisalto = ({kurssi}) => {
  
    return (
        <div>
          {rivit(kurssi)}
        </div>
      )
  }
  
  const rivit = ({osat}) => osat.map(osa => 
    <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia}/>
  )
  
  
  

export default Kurssi
