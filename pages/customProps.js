import fs from "fs"
import path from 'path'
import React from 'react'
import { useEffect } from "react"
import MyPage from "./my-mdx-page.mdx"

export default function CustomProps({text_color, background_color, comp_color, comp_text_color}) {


    // useEffect(() => {
    //     const color = getComputedStyle(document.documentElement).getPropertyValue('--variable');
    //     console.log(color);
    
     
    //       document.documentElement.style.setProperty('--text_color', text_color);
    //     document.documentElement.style.setProperty('--comp_color', comp_color);
    //   document.documentElement.style.setProperty('--background_color', background_color);
    //   document.documentElement.style.setProperty('--comp_text_color', comp_text_color);    
    //   },[])

  return (
    <div>

        <MyPage />
    </div>
  )
}



export async function getStaticProps() {


    const rootDirectory = path.resolve(process.cwd(), "./");
  
  
    const propsInFile = fs.readFileSync(
      path.join(rootDirectory, "customProps.txt"), "utf8"
    )
   
  
    const parsedData = JSON.parse(propsInFile)
    const text_color = parsedData.textColor
    const background_color = parsedData.bgColor
    const comp_color = parsedData.componentBg
    const comp_text_color = parsedData.componentText

  
    return {
      props: {
            text_color,
        background_color,
        comp_color,
        comp_text_color
     
      }, 
    }
  }