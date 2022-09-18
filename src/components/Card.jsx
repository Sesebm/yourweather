import React, { useEffect, useState } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import axios from "axios"

let latitude = 0
let longitude = 0
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
    latitude = crd.latitude
    longitude = crd.longitude 
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

navigator.geolocation.getCurrentPosition(success, error, options);

const Card = () => {

const [response, setResponse] = useState()

useEffect(() => {
    const Key=`1c91f7550d0182a129c5f9708a5a48bf`
    const Url=`https://api.openweathermap.org/data/2.5/weather?lat=`+latitude+`&lon=`+longitude+`&appid=`+ Key
    
    axios.get(Url)
    .then(res=> {setResponse(res.data)})
    .catch(err=> console.log(err))
  
}, [])
console.log(response)

  return (
    <section className="vh-100" style={{backgroundColor: `#C1CFEA`}}>
  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100" style={{color: `#282828`}}>
      <div className="col-md-9 col-lg-7 col-xl-5">

        <Section1 response={response}/>

        <Section2 response={response}/>

        <Section3 response={response}/>

      </div>
    </div>

  </div>
</section>
  )
}

export default Card