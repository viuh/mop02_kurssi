import React from 'react'
import Kurssi from './components/Kurssi'


const opintojakso = ({kurssit}) => kurssit.map(kurssi1 => 
    <Kurssi key={kurssi1.id} kurssi={kurssi1}/>
  )
  
  
  const Opintojakso = ({kurssit}) => {
    return (
      <div>
        {opintojakso({kurssit})}
      </div>
      )
  
  }
  
  

const App = ({kurssit}) => {
  
    return (
      <div>
        {/*<Kurssi kurssi={kurssi} />*/}
        <Opintojakso kurssit={kurssit}/>
      </div>
    )
  }


export default App


  