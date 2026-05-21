# VS Code Extension GSAP Studio

This repository hosts a VS Code extension that provides a visual interface for creating GSAP animations. 

## Features
- Visual drag-and-drop animation builder
- Full GSAP plugins support
  - `ScrollTrigger`, `Draggable`, `MorphSVG`, `MotionPath`, and more.
- Export configurable animations to HTML/JS
- Include customizable properties: `class`, `id`, text, images, and more

## How to Use
1. Download and open the extension in VS Code.
2. Open the animation builder using the command `GSAP Studio: Open Animation Editor`.
3. Add elements (div, text, or images) to your canvas.
4. Customize animations visually with timelines and GSAP tools.
5. Preview animations in real-time.
6. Export animation configurations to share in projects.

## Development Setup
### Prerequisites
- Node.js (v16 or higher)
- npm

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/Flo230277/VS-code-extension-Gsap-view.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the webpack build:
    ```bash
    npm run build
    ```
4. Launch the extension debug in VS Code.

## Publishing
To publish the extension in the VS Code Marketplace:
1. Package the extension:
    ```bash
    npx vsce package
    ```
2. Publish it to the VS Code marketplace.