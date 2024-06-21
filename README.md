# MichaelMortlockChapman.github.io
Welcome to my portfolio website's repository! Find the site [here](https://michaelmortlockchapman.github.io/). It includes some information about me, ways to get in touch, and details about some of my projects. The current site utilises React-Three-Fiber (R3F) to build a visually engaging 3D presentation. The varied animations seen in the site are handled with R3F’s custom react hook `useFrame`. This includes the intro pan, the floating motion, and the scrolling animation. Additionally, Drei was used to streamline the website’s creation process through its helpful ready-made abstractions.

The main idea behind the site was to display my skills and willingness to learn and try new things. To showcase this mindset. I utilised my recently developed knowledge with ThreeJS. Together with my skills with React and other incredible tools such as R3F, to create the current visually engaging and interactive rendition of my site.

## Tools Used
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React-Three-Fiber](https://github.com/pmndrs/react-three-fiber)
- [Drei](https://github.com/pmndrs/drei)
- [Mui](https://mui.com/)
- 3D Model  [Sandwich assembly](https://skfb.ly/ozG7Q) by Harry Charalambous

## Some limitations currently faced
-	To increase the site’s accessibility, I refactored text/info divs to allows user scaling however this can cause problems at large scaling factors. For example, Drei’s `scrollControlls` container sits behind the div in these situations, hiding the scrollbar.
-	When scrolling on text/info divs, no site scrolling occurs as the divs ‘eat’ all the events. This could  be refactored so when divs are at the bottom of their individual scrollbars it passes the event on to the site’s scrollbar.
-	The `scrollControlls` container is a child of the `Canvas` element so non-Canvas elements cannot be children of `scrollControlls`. To fix this issue, I currently use a ‘middleware’ element to control the scrollbar for the menu buttons. This could be refactored for better code style.
-	<b>[Fixed]</b> On Chrome the address bar causes issues with `innerHeight` so the menu buttons do not scroll to the correct positions.
-	<b>[Fixed]</b> The LinkedIn SVG does not display correctly on Firefox mobile.

## Project Structure
```
/MichaelMortlockChapman.github.io
|-- /development
|   |-- /ExampleProject (simple snake example project)
|   |   `-- ...
|   `-- /portfolio-site (main dev folder)
|       |-- public (public assets)
|       |-- src (scripts)
|       |   |-- components
|       |   |-- pages
|       |   |-- ...
|       |   `-- main.jsx (js entry)
|       |-- ...
|       |-- build_setup.sh
|       |-- index.html (main entry)
|       `-- package.json (npm packages)
|-- /docs (github hosted sites)
|   |-- /abmsim
|   |-- /ExampleProject
|   |-- /assets (main site assets)
|   |-- ...
|   |-- snake.html (ExampleProject page)
|   |-- abmsim.html (abmsim page)
|   `-- index.html (main page)
|-- ...
`-- README.md (you're here)
```

## Development Instructions
### Setup
1. Clone the repository
```
git clone https://github.com/MichaelMortlockChapman/MichaelMortlockChapman.github.io.git
```
2. Install dependencies
```
cd development/portfolio-site/
npm install
```
3. Start the development server
```
npm run dev
```

### Build
Run bash script
```
cd development/portfolio-site/
bash build_setup.sh 
```
#### Or
 
Build site and copy to `./docs`
```
cd development/portfolio-site/
npm run build
cp -TRv 'dist/' '../../docs' 
```

## Contact
If you have any questions, suggestions, or anything else, feel free to reach out to me:
- Email: mmortlockchapman@gmail.com
- LinkedIn: https://www.linkedin.com/in/m-mortlock-chapman/

Thank you for visiting my portfolio website repository!
