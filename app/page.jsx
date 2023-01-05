"use client"
async function getCountry(){
  let res = await fetch("https://restcountries.com/v3.1/all")
  return res.json()
}

export default async function Home() {
  let countries = await getCountry()
  console.log(countries?.region)
  return (
    
    <>
    a
    </>
    
  )
}
