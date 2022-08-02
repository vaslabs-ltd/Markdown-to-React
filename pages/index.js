import Test from '../components/ProfileCard'

import React from 'react'
import fs from "fs"
import path from 'path'
import {marked} from "marked"
import matter from "gray-matter"


export default function Home({frontmatter: {name, component, position, photo}, content}) {
  return (
    <Test name={name} position={position} bio={content} photo={photo}/>
  )
}


export async function getStaticProps() {

  const configDirectory = path.resolve(process.cwd(), "pages/custom-templates");
  const fileContent = fs.readFileSync(
    path.join(configDirectory, "test.md"), "utf8"
  )

  const parsedContent = marked.parse(fileContent)
  const { data: frontmatter, content } = matter(fileContent)

  return {
    props: {
      frontmatter,
      content
    },
  }
}