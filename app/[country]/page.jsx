// "use client";
import Image from "next/image";
import React from "react";

export default async function page({ params }) {
  async function getCountry() {
    let res = await fetch(
      `https://restcountries.com/v3.1/name/${params?.country}`
    );
    return res.json();
  }
  let country = await getCountry();
  
  return  <div className="flex flex-col items-center bg-slate-300 h-[84vh] gap-4">
  <div className="text-center font-bold text-2xl text-slate-500 mt-20">{country[0]?.name?.common}</div>
  <Image src={country[0]?.flags?.png} alt=""  width={400} height={400}/>
  <div className="text-center font-bold text-2xl text-slate-500" >Capital : {country[0]?.capital}</div>
  <div className="text-center font-bold text-2xl text-slate-500" >Continent : {country[0]?.continents}</div>
  <div className="text-center font-bold text-2xl text-slate-500" > Population : {country[0]?. population}</div>
</div>;
}
