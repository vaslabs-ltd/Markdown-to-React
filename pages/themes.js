import React, { useState } from 'react'
import { themes } from "../my-themes"
import { useEffect } from 'react';

export default function Themes(custom_themes) {

    const [selected, setSelected] = useState("Light")

    useEffect(() => {
       
        if(selected == "Dark"){
            document.documentElement.style.setProperty('--text_color', custom_themes.custom_themes[0].textColor);
            document.documentElement.style.setProperty('--comp_color', custom_themes.custom_themes[0].componentBg);
          document.documentElement.style.setProperty('--background_color', custom_themes.custom_themes[0].bgColor);
          document.documentElement.style.setProperty('--comp_text_color', custom_themes.custom_themes[0].componentText);  
        }else if(selected == "Light"){
            document.documentElement.style.setProperty('--text_color', custom_themes.custom_themes[1].textColor);
            document.documentElement.style.setProperty('--comp_color', custom_themes.custom_themes[1].componentBg);
          document.documentElement.style.setProperty('--background_color', custom_themes.custom_themes[1].bgColor);
          document.documentElement.style.setProperty('--comp_text_color', custom_themes.custom_themes[1].componentText);  
        }else if(selected == "Hot"){
            document.documentElement.style.setProperty('--text_color', custom_themes.custom_themes[2].textColor);
            document.documentElement.style.setProperty('--comp_color', custom_themes.custom_themes[2].componentBg);
          document.documentElement.style.setProperty('--background_color', custom_themes.custom_themes[2].bgColor);
          document.documentElement.style.setProperty('--comp_text_color', custom_themes.custom_themes[2].componentText);  
        }  
        else if(selected == "Earthy"){
            document.documentElement.style.setProperty('--text_color', custom_themes.custom_themes[3].textColor);
            document.documentElement.style.setProperty('--comp_color', custom_themes.custom_themes[3].componentBg);
          document.documentElement.style.setProperty('--background_color', custom_themes.custom_themes[3].bgColor);
          document.documentElement.style.setProperty('--comp_text_color', custom_themes.custom_themes[3].componentText);  
        }    
        else if(selected == "Ocean"){
            document.documentElement.style.setProperty('--text_color', custom_themes.custom_themes[4].textColor);
            document.documentElement.style.setProperty('--comp_color', custom_themes.custom_themes[4].componentBg);
          document.documentElement.style.setProperty('--background_color', custom_themes.custom_themes[4].bgColor);
          document.documentElement.style.setProperty('--comp_text_color', custom_themes.custom_themes[4].componentText);  
        } 
        else if(selected == "Space"){
            document.documentElement.style.setProperty('--text_color', custom_themes.custom_themes[5].textColor);
            document.documentElement.style.setProperty('--comp_color', custom_themes.custom_themes[5].componentBg);
          document.documentElement.style.setProperty('--background_color', custom_themes.custom_themes[5].bgColor);
          document.documentElement.style.setProperty('--comp_text_color', custom_themes.custom_themes[5].componentText);  
        }           
   
      },[selected])

      
   
  return (
    <div className='themesContainer'>
        <div>
            <h1>Choose a Theme</h1>
        </div>
        <div className='themesList'>
            <select name="themes" onChange={(e) => setSelected(e.target.value || null)}
        value={selected || ""}>
                {
                   
                custom_themes.custom_themes.map((theme, key) => 
                  <option key={key} value={theme.theme}>{theme.theme}</option>
                )

                
                }
            </select>
          
        </div>
        {
            (selected != null) ?
                <h2>You have chosen the {selected} theme. Enjoy!</h2> : null
            
        }
     
    </div>
  )

  
}



export async function getStaticProps() {

    const custom_themes = themes;
  
    return {
      props: {
       custom_themes
     
      }, 
    }
}