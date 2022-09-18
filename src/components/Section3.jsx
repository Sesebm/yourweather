import React from 'react'

const Section3 = ({response}) => {
  return (
    <div className="card" style={{borderRadius: `25px`}}>
    <div className="card-body p-4">

      <div id="demo3" className="carousel slide" data-ride="carousel">
   
        <ul className="carousel-indicators mb-0">
          <li > </li>
          <li > </li>
          <li > </li>
        </ul>
      
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">

            <div className="flex-column">
                      <p className="small"><strong>{Math.round(response?.main.temp_min-273.15)} °C</strong></p>
                      <i className="fas fa-cloud fa-2x mb-3" style={{color: `#ddd`}}></i>
                      <p className="mb-0"><strong>Temperatura</strong></p>
                      <p className="mb-0 text-muted" style={{fontSize: `.65rem`}}>Minima</p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>{Math.round(response?.main.temp_max-273.15)} °C</strong></p>
                      <i className="fas fa-cloud-showers-heavy fa-2x mb-3" style={{color: `#ddd`}}></i>
                      <p className="mb-0"><strong>Temperatura</strong></p>
                      <p className="mb-0 text-muted" style={{fontSize: `.65rem`}}>Maxima</p>
                    </div> 

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Section3