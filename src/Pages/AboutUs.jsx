import React from 'react'
import Plate from '../assets/plates.png'
import artist from '../assets/artist.png'
import shop from '../assets/shop.png'
import cloths from '../assets/cloths.png'
import image from '../assets/image.png'
import wood from '../assets/wood.png'
import beads from '../assets/beads.png'


function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h3 className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Why we do it</h3>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">About Us</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We want to empower local craftsmen while bringing ease to visitors of our wonderful country.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we are</h2>
          <p className="text-gray-700 leading-relaxed">We are a team of passionate individuals dedicated to promoting and supporting local artisans in Ghana. Our mission is to provide a platform that connects talented craftsmen with a global audience, allowing them to showcase their unique creations and preserve traditional art forms. We focus on indigenous and intricate artifacts that hold sentimental value to the people of Ghana. This makes every product a connection to the Ghanaian spirit.</p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src={Plate} alt="Handmade plates" className="w-full max-w-md h-64 md:h-80 object-cover rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[400px] md:max-w-[600px] place-items-center">
          <img className="hover:opacity-75" src={artist} alt="Artist at work" />
          <img className="hover:opacity-75" src={shop} alt="Pottery shop" />
          <img className="hover:opacity-75" src={cloths} alt="Cloth weaving" />
          <img className="hover:opacity-75" src={wood} alt="Wood carving" />
          <img className="hover:opacity-75" src={beads} alt="Beads and jewelry" />
          <img className="hover:opacity-75" src={image} alt="Handmade bags" />
        </div>

        <div className="prose max-w-xl text-gray-700 mx-auto text-center md:text-left">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p>Our mission is to empower local artisans by providing them with a platform to showcase and sell their handmade crafts to a global audience. We aim to preserve traditional art forms while promoting sustainable economic growth within Ghanaian communities.</p>
          <h3 className="text-xl font-semibold mt-4">Our Vision</h3>
          <p>Our vision is to be the leading online marketplace for authentic Ghanaian handmade crafts, recognized for our commitment to quality, cultural preservation, and social impact. We aspire to create a world where artisans thrive, and their unique creations are celebrated worldwide.</p>
        </div>
      </div>

      <div className='text-center mb-12 mt-12'>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">If you need help picking the right product, our team is here to assist you. Head to support!</p>
      </div>
    </section>
  )
}

export default AboutUs