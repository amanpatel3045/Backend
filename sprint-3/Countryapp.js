import React from 'react'
import Grid from '@mui/material'
const Countryapp = () => {
  const [Countrydata, setCountrydata] = React.useState([])

  const getCountrydata = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const ResinjsonData = await response.json()
    setCountrydata(ResinjsonData)
  }

  React.useEffect(() => {
    getCountrydata()
  }, [])

  return (
    <>
      {
        Countrydata.map((el)=>{
         <h1>{el.region}</h1>
    <h1>{el.capital}</h1>
    <img src={el.flag.png}/>
        })
      }
    
    </>
  )
}

export default Countryapp
