# Example Project (Simple Snake Game)
A React implementation of Snake. Find it [here](https://michaelmortlockchapman.github.io/snake). This simple project was built to demonstrate my knowledge and skills with ReactJS as an example project. The webpage mimics Nintendo’s Gameboy Colour as the game controller. The game uses the dpad for movement and the menu/start buttons for opening the pause menu (the A and B buttons are unutilised for this project). Furthermore the 'Game Boi' was built as a component, so other games/projects could reuse the asset.

The game starts with a simple option menu. Which allows the user to enable portals (allow the snake to teleport from the sides of the screen rather than getting a game over) and different game speeds for varying difficulties. The game follows the normal snake gameplay of trying to 'eat' as many apples (red tiles) as possible without a game over. Additionally, the pause menu allows the user to restart the game or return to the options menu (press menu/start to resume game).

## Possible Project Improvements
- Scoreboard
- Keyboard controls

## Development Instructions
### Setup
1. Clone the repository
```
git clone https://github.com/MichaelMortlockChapman/MichaelMortlockChapman.github.io.git
```
2. Install dependencies
```
cd development/ExampleProject
npm install
```
3. Start the development server
```
npm run dev
```
### Build
1.  Build site
```
cd development/portfolio-site/
npm run build
```
2. Replace `/assets` in built index.html with `/ExampleProject/assets` and rename to snake.html
3. Copy `dist` to `docs/ExampleProject` without `dist/index.html`
4. Rename `dist/index.html` to `snake.html` and replace `docs/snake.html`
assets with `dist/assets`