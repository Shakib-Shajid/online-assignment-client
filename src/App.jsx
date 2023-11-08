
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';


function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div>
      <Navbar></Navbar>
      <div className='m-5 md:m-10 lg:m-20'>
        <Banner></Banner>
        <h1 className='text-6xl text-center text-purple-600 my-20'>Hot Hot Cold Coffes:
          {coffees.length}</h1>
        <div className='grid md:grid-cols-2 gap-6 '>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}

              coffees={coffees}
              setCoffees={setCoffees}

            ></CoffeeCard>)
          }
        </div>
        <FAQ></FAQ>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
