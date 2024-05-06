import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card"
import Hero from "./Components/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    {count}
    <button onClick={()=> setCount(count + 1)}>+</button>
    <Card 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrt7lRNuw9Mjm1tLi0_RMhzn3cQHZPLTTVQ&s"
      name="Brownie"
      ingredients="Flour, Chocolate, Oil, Egg, Pan, Butter"
      recipe="Mix ingredients together, bake at 350 degrees for 15 min, and consume"
    />

    <Card 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGshIlYMTzv4AF_8q773fTxmb5OozvNMuy4g&s"
      name="Cake"
      ingredients="Flour, Sugar, Eggs, Milk, Vanilla Extract"
      recipe="Mix ingredients together, bake at 350 degrees for 15 min, and consume"
    />  

     <Card 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYC6T7R6ojIGVExNzBsuxKBukVo2Ryw0VM1g&s"
      name="Muffins"
      ingredients="Flour, Baking Powder, Salt, Sugar, Egg, Milk, Oil"
      recipe="Mix ingredients together, bake at 350 degrees for 15 min, and consume"
    />
  </>
  )
}

export default App
