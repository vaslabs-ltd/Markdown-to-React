import React, { useState } from 'react'
import { themes } from "../my-themes"
import { useEffect } from 'react';


export default function Themes(custom_themes) {

    const [selected, setSelected] = useState(null)
    const [selectedCustom, setSelectedCustom] = useState(null)
    const [customThemesArray, setCustomThemesArray] = useState(null)
    const [themesArray,setThemesArray] = useState([]);
   
  

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
   
      },[selected]);

    

      const handleSave = (e) => {
        e.preventDefault();

       
        function watchColorPicker(event) {
           bgColorPicker.value = event.target.value;
        }

        const themeName = document.getElementById("themeName").value;

        const bgColorPicker = document.getElementById("backgroundColor");
        const textColorPicker = document.getElementById("textColor");
        const componentColorPicker = document.getElementById("componentColor");
        const compTextColorPicker = document.getElementById("componentTextColor");

        bgColorPicker.addEventListener("change", watchColorPicker, false);


          const selectedBgColor = bgColorPicker.value;
        const selectedTextColor = textColorPicker.value;
        const selectedComponentColor = componentColorPicker.value;
        const selectedComponentTextColor = compTextColorPicker.value;

       
   

        const customTheme = {
          theme: themeName,
          textColor: selectedTextColor,
          bgColor: selectedBgColor,
          componentBg: selectedComponentColor,
          componentText: selectedComponentTextColor
        }
        themesArray.push(customTheme);

        const newArray = themesArray;
        setThemesArray(newArray);
        
        setCustomThemesArray(newArray);

      

        console.log(customThemesArray);
        console.log(selectedCustom);
        



        }

        useEffect(() => {

          if(customThemesArray != null){
            customThemesArray.map((entry, key) => {
              if(selectedCustom == entry.theme){
                document.documentElement.style.setProperty('--text_color', entry.textColor);
                document.documentElement.style.setProperty('--comp_color', entry.componentBg);
                document.documentElement.style.setProperty('--background_color', entry.bgColor);
                document.documentElement.style.setProperty('--comp_text_color', entry.componentText); 
              }
            })
          }

       
          
        }, [selectedCustom]);
        
      
   
  return (
    <div className='themesContainer'>
        <div>
            <h1>Choose a Theme</h1>
        </div>
        <div className='chooseThemeContainer'>
          <div className='themesList'>
          <h3>Default themes</h3>
              <select name="themes" onChange={(e) => setSelected(e.target.value || null)}
          value={selected || ""}>
              <option value="" selected disabled hidden>Choose here</option>

                  {
                    
                  custom_themes.custom_themes.map((theme, key) => 
                    <option key={key} value={theme.theme}>{theme.theme}</option>
                  )

                  
                  }
              </select>
            
          </div>
 
          <div className='themesList'>
          <h3>Your themes</h3>
              <select name="themes" onChange={(e) => setSelectedCustom(e.target.value || null)}
          value={selectedCustom || ""}>
              <option value="" selectedCustom disabled hidden>Choose here</option>

                  {
                  customThemesArray != null ?  
                  customThemesArray.map((theme, key) => 
                    <option key={key} value={theme.theme}>{theme.theme}</option>
                  )
                  :
                  null

                  
                  }
              </select>
            
          </div>
 
          </div>
        

        <form className='createTheme' onSubmit={handleSave}>
          <h1>Create your own</h1>
          <h2>Enter a name for your theme</h2>
          <input type="text" className='themeName' id="themeName" placeholder="Enter name..." required></input>
          <h2>Choose your preferred colors</h2>
          <div className='chooseProps'>

            <div className='chooseColor'>
              <label htmlFor="backgroundColor">Choose background color:</label>
              <input type="color" id="backgroundColor"   />
            </div>
            <div className='chooseColor'>
              <label htmlFor="textColor">Choose text color:</label>
              <input type="color" id="textColor" />
            </div>
            <div className='chooseColor'>
              <label htmlFor="componentColor">Choose component background color:</label>
              <input type="color" id="componentColor"  />
            </div>
            <div className='chooseColor'>
              <label htmlFor="componentTextColor">Choose component text color:</label>
              <input type="color" id="componentTextColor"  />
            </div>
          </div>
          <button className='saveTheme' type='submit' value="Submit">Save theme</button>
        </form>



        {/* onclick will trigger function that will save given inputs to the mythemes.js file. input will be saved as an object in the array. will use writefile method of node in order to write in the file */}
     
    </div>
  )

  
}



export async function getStaticProps() {

    const custom_themes = themes;

    // const rootDirectory = path.resolve(process.cwd(), "./");
  
  
    // const themesinFile = fs.readFileSync(
    //   path.join(rootDirectory, "my-themes.js"), "utf8"
    // )

    // fs.writeFile("../my-themes.js", themesArray, (err) => {
    //   if(err)
    //   console.log(err)
    //   else
    //   console.log("saved!");
    // })

    
  
    return {
      props: {
       custom_themes,
   
     
      }, 
    }
}