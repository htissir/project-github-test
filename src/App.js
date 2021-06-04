import React, { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('https://course-api.com/react-tours-project')
      .then((response) => response.json())
      .then((hotelData) => {
        setData(hotelData)
        console.log(hotelData)
      })
  }

  const deletHotel = (id) => {
    const nwData = data.filter((hotel) => hotel.id !== id)
    setData(nwData)
  }

  return (
    <div className='container text-center'>
      <div className='row'>
        <h1>Tour List</h1>
        {data.map(({ id, image, info, name, price }) => {
          return (
            <div className='col-6'>
              <div className='image'>
                <img width='100%' src={image} alt={name} />
              </div>

              <div className='titre'>
                <h5>
                  {name} <span className='badge bg-primary'>{price}$</span>
                </h5>
              </div>
              <div className='ifos'>{info}</div>
              <div>
                <button
                  className='btn btn-outline-danger'
                  onClick={() => deletHotel(id)}
                >
                  NOT INTERSTED
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default App
