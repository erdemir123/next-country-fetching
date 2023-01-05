"use client"
import React from 'react'
import {useTheme} from "next-themes"
const page = () => {
  const {theme,setTheme}=useTheme()
  return (
    <div className={theme === "dark" ? "white" : "text-slate-900"}>{theme}</div>
  )
}

export default page