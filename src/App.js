import React from "react"

function Food({name, picture}){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name:"Kimchi",
    image:
      "https://www.bing.com/images/blob?bcid=S6XFCkyejawCqxcxoNWLuD9SqbotqVTdP.E"
  },
  {
    name:"Kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/02/21/f34c2f0fcd67513941d683d90050f3c01.jpg"
  },

];

function App() {
  return (
    <div>
      {{foodILike.map(dish => (
       <Food name={dish.name} picture={dish.image}/>
      ))}}
    </div>
  )
}

export default App;