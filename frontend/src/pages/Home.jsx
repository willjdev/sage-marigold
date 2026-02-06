import React from 'react'
import Hero from '../components/Hero.jsx'
import ItemCard from '../components/ItemCard.jsx'
import sofaImage from '../assets/sofa_placeholder.jpg'
import ToasterImage from '../assets/toaster_placeholder.jpg'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <ItemCard
          category="Furniture"
          title="Sofa"
          description="Upgraded my living room and want these to go to someone..."
          condition="good"
          location="Manhattan, NY"
          date_posted="01/02/2026"
          image={sofaImage}
          onRequest={() => console.log("Requested")}
        />
        <ItemCard
          category="Appliances"
          title="Toaster"
          description="Upgraded my kitchen and want these to go to someone..."
          condition="good"
          location="Manhattan, NY"
          date_posted="01/02/2026"
          image={ToasterImage}
          onRequest={() => console.log("Requested")}
        />
        <ItemCard
          category="Furniture"
          title="Sofa"
          description="Upgraded my living room and want these to go to someone..."
          condition="good"
          location="Manhattan, NY"
          date_posted="01/02/2026"
          image={sofaImage}
          onRequest={() => console.log("Requested")}
        />
        <ItemCard
          category="Appliances"
          title="Toaster"
          description="Upgraded my kitchen and want these to go to someone..."
          condition="good"
          location="Manhattan, NY"
          date_posted="01/02/2026"
          image={ToasterImage}
          onRequest={() => console.log("Requested")}
        />
      </div>
    </>
  )
}

export default Home
