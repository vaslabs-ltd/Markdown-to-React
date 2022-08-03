import Test from '../components/ProfileCard'

import React from 'react'
import fs from "fs"
import path from 'path'
import {marked} from "marked"
import matter from "gray-matter"
import {parsedData} from "./customProps"




export default function Home({frontmatter: {name, component, position, photo}, content, textColor}) {
  return (
    <Test name={name} position={position} bio={textColor} photo={photo}/>
  )
}


export async function getStaticProps() {


  const rootDirectory = path.resolve(process.cwd(), "./");


  const propsInFile = fs.readFileSync(
    path.join(rootDirectory, "customProps.txt"), "utf8"
  )
 

  const parsedData = JSON.parse(propsInFile)
  console.log(parsedData.textColor)
  const textColor = parsedData.textColor

 
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
      textColor
   
    }, 
  }
}