import React, { useState } from 'react'
import QuoteBox from './QuoteBox'

const Body = ({quotes, color}) => {

   // Esta funcion calcula un indice random
   const getIndexRamdon = arr => {
      return Math.floor(Math.random() * arr.length);
   }

   // Aqui extrae un elemento segun el indice random
   const firstQuote = quotes[getIndexRamdon(quotes)];
   const firstColor = color[getIndexRamdon(color)];

   const [randomQuote, setRandomQuote] = useState(firstQuote);
   const [randomColor, setRandomColor] = useState(firstColor);

   const backgroundObject = {
      backgroundColor: randomColor
   };

   // Esta funcion calcula tanto un quote como un color random
   const getRandomAll = () => {
      setRandomQuote(quotes[getIndexRamdon(quotes)]);
      setRandomColor(color[getIndexRamdon(color)]);
   }

   return (
      <div style={backgroundObject} className="Body">
         <QuoteBox
            randomQuote={randomQuote}
            randomColor={randomColor}
            getRandomAll={getRandomAll}
         />
      </div>
   )
}

export default Body