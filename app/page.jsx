// "use client"

import Image from "next/image";
import Link from "next/link";

async function getCountry() {
  let res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

export default async function Home() {
  let countries = await getCountry();
  return (
    <div>
      {countries.map((item,index) => {
        return (
          <Link href={item?.name?.common} className="flex justify-between border-2 items-center px-5 border-slate-500 mb-2 py-2 bg-slate-200 text-slate-600">
            <div>{item?.name?.common}</div>
            <Image
              src={item?.flags?.png}
              alt={item?.name.common}
              width={60}
              height={60}
            />
          </Link>
        );
      })}
    </div>
  );
}
