"use client"
import {useTheme} from "next-themes"
import Link from "next/link";


export default function Home() {
  const {theme,setTheme}=useTheme()
  console.log(theme);
  return (
    <>
     <div className="text-3xl font-bold underline text-slate-600">sadık</div>
     <div>
      The current theme is: {theme} <br />
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <br />
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <Link href="/hakkimizda">sadık</Link>
    </div>
    
    </>
    
  )
}
