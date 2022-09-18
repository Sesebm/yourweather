import React from 'react'

const Section1 = ({response}) => {
  return (
    
    <div className="card mb-4 gradient-custom" style={{borderRadius: `25px`}}>
    <div className="card-body p-4">

      <div id="demo1" className="carousel slide" data-ride="carousel">
        
        <ul className="carousel-indicators mb-0">
          <li></li>
      
        </ul>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-between mb-4 pb-2">
              <div>
                <h2 className="display-2"><strong>{Math.round(response?.main.temp- 273.15)} °C</strong></h2>
                <p className="text-muted mb-0">{response?.name}, {response?.sys.country} </p>
              </div>
              <div>
                <img src={`http://openweathermap.org/img/wn/${response?.weather[0].icon}@4x.png`}
                  width="140px"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  )
}

export default Section1