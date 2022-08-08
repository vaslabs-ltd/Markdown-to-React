import React, { useEffect } from 'react'
import fs from "fs"
import path from 'path'
import matter from "gray-matter"
import ProfileCard from '../components/ProfileCard'
import Feature from "../components/Feature"





export default function Home({frontmatter: {name, position, photo}, text_color, background_color, comp_color, comp_text_color}) {

  // useEffect(() => {
  //   const color = getComputedStyle(document.documentElement).getPropertyValue('--text_color');
  //   console.log(color);

 
  //     document.documentElement.style.setProperty('--text_color', text_color);
  //     document.documentElement.style.setProperty('--comp_color', comp_color);
  //     document.documentElement.style.setProperty('--background_color', background_color);
  //     document.documentElement.style.setProperty('--comp_text_color', comp_text_color);


  // },[])





  return (
    <div >

    <div className='heroContainer'>
      <h1>Welcome!</h1>
      <h2>Choose a theme and start your blog!</h2>
    </div>


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


  
 
/////////////////////////////////////////////////////////////////////////////////////////////

  const configDirectory = path.resolve(process.cwd(), "pages/custom-templates");
  const fileContent = fs.readFileSync(
    path.join(configDirectory, "test.md"), "utf8"
  )



  // const parsedContent = marked.parse(fileContent)
  const { data: frontmatter, content } = matter(fileContent)

  return {
    props: {
      frontmatter,
      content,
      text_color,
      background_color,
      comp_color, 
      comp_text_color
   
    }, 
  }
}







