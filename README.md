## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Custom Markdown to React

The user can create a blog-style webpage with the flexibility of adding custom styling properties.

## Functionality

When the program starts, a stream of questions will be promted to the user on the CLI. The inputs will be the custom properties for the page.
Then the webpage will open in the browser with the custom properties.

## How it works

The project is written in using Next.js and Node.js.

The user will write the page's content in markdown format. In this case, in order to also take advantage of React components, the program is using MDX which can incorporate predefined React components into the markdown syntax.

## Problems faced and solutions

During the implementation so far, I have faced the following problems:

### Problem

- how to make a stream of questions that accept user input on the command line

### Solution

- using rl.question module of Node

### Problem

- how to use the user input in the program

### Solution

- the input was not accessible outside the function that promted the command line questions. The solution followed was to save the user input in a text file at the time of retrieval. Used readFile and writeFile modules from Node to read and write contents in the text file. Parsed to JSON format after reading in order to be assign the values to variables in the program. Created the variables holding the user values in getStaticProps() function of Nextjs.

### Problem

- how to change the global css values in order to apply the styling changes to all pages of the project

### Solution

- had to use custom variables in CSS and set them to the user input using the React useEffect hook.

`useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--variable');
        console.log(color);
    
     
        document.documentElement.style.setProperty('--text_color', text_color);
        document.documentElement.style.setProperty('--comp_color', comp_color);
        document.documentElement.style.setProperty('--background_color', background_color);
        document.documentElement.style.setProperty('--comp_text_color', comp_text_color);    
},[]) `

### Problem

- how to make the custom styling also apply to the MDX file, because useEffect cannot be used inside such file.

### Solution

- The MDX file is treated as a page in Nextjs project. However, a single MDX file can be imported in another file as a React component. Thus, the MDX file is incorporated as a component in a normal Nextjs "page" where the custom styling works correctly.

## What's next

 - The user can provide custom styling from a UI component that maybe has some dropdowns with custom properties
 - Implement CLI command to first run the command to open the stream of questions to the user and after the user provides all the values then the "npm run dev" executes.
 - Maybe add more customizations
 - Add a Layout component to have a consistent structure in the website
 - Add some kind of restrictions on the values that a user can provide in the CLI. E.g. the color values must be names that are recognizable by CSS and not some custom words like "cucumber green"
 - The user can save a set of given custom styling props as a theme for reusability.




