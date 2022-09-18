import React from 'react'

const Section2 = ({response}) => {
  return (
    <div className="card mb-4" style={{borderRadius: `25px`}}>
          <div className="card-body p-4">

            <div id="demo2" className="carousel slide" data-ride="carousel">
              
              <ul className="carousel-indicators mb-0">
                <li></li>
                <li></li>
               
              </ul>
            
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                    <div className="flex-column">
                      <p className="small"><strong>{Math.round(response?.main.feels_like-273.15)} °C</strong></p>
                      <i className="fas fa-sun fa-2x mb-3" style={{color: `#ddd`}}></i>
                      <p className="mb-0"><strong>Sensacion</strong></p>
                      <p className="mb-0 text-muted" style={{fontSize: `.65rem`}}>Termica</p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>{response?.main.humidity} %</strong></p>
                      <i className="fas fa-sun fa-2x mb-3" style={{color: `#ddd`}}></i>
                      <p className="mb-0"><strong>Humedad</strong></p>
                      <p className="mb-0 text-muted" style={{fontSize: `.65rem`}}>Ambiental</p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>{response?.main.pressure} hPa</strong></p>
                      <i className="fas fa-cloud fa-2x mb-3" style={{color: `#ddd`}}></i>
                      <p className="mb-0"><strong>Presion</strong></p>
                      <p className="mb-0 text-muted" style={{fontSize: `.65rem`}}>Atmoferica</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
  )
}

export default Section2