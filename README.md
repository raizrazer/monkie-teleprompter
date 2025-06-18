# 🐵 Monkie Teleprompter

> A smooth, customizable, and lightweight teleprompter built with vanilla JavaScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Dependencies](https://img.shields.io/badge/Dependencies-None-green.svg)](https://github.com/raizrazer/monkie-teleprompter)

## ✨ Features

- 🎬 **Smooth Auto-Scrolling**: Buttery smooth text scrolling with requestAnimationFrame
- ⚡ **Variable Speed Control**: Adjustable scrolling speed from 1x to 10x
- 🔄 **Bidirectional Scrolling**: Forward and reverse scrolling modes
- ⏯️ **Play/Pause Controls**: Easy playback control with intuitive buttons
- 🖱️ **Smart Scroll Detection**: Auto-pause when manually scrolling, auto-resume after 500ms
- 📝 **Editable Content**: Built-in contenteditable support for real-time text editing
- 🎨 **Fully Customizable**: Easy to style and integrate into any project
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🚀 **Zero Dependencies**: Pure vanilla JavaScript, no external libraries required
- 🔧 **Debug Mode**: Built-in debugging for development

## 🚀 Quick Start

### 1. Download the Files

Clone or download the repository:

```bash
git clone https://github.com/raizrazer/monkie-teleprompter.git
cd monkie-teleprompter
```

### 2. Try the Demo

Open the sample file in your browser:

```bash
# Open sample/index.html in your browser
open sample/index.html
```

### 3. Basic HTML Setup

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Teleprompter</title>
  </head>
  <body>
    <!-- Teleprompter Container -->
    <div id="my-teleprompter">
      <!-- Control Panel -->
      <div id="controls">
        <button id="mtp-play">Play</button>
        <button id="mtp-pause">Pause</button>
        <button id="mtp-reverse">⬆️Reverse</button>
        <input type="range" id="mtp-speed" min="1" max="10" value="1" />
        <label>Speed:<span id="speed-value">1</span></label>
      </div>

      <!-- Your Script Content -->
      <div class="content" contenteditable="true">
        Welcome to Monkie Teleprompter! This is where your script goes. You can
        edit this text directly. The teleprompter will scroll smoothly at your
        desired speed.
      </div>
    </div>

    <!-- Include the Script -->
    <script src="monkie-telepromter.js"></script>
    <script>
      // Initialize the teleprompter
      const teleprompter = new monkieTelePrompter(
        document.getElementById("my-teleprompter")
      );
    </script>
  </body>
</html>
```

### 4. Add Some Styling (Optional)

```css
#my-teleprompter {
  height: 100vh;
  position: relative;
  font-family: Arial, sans-serif;
}

#controls {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px;
  border-radius: 10px;
}

#controls button {
  font-size: 1rem;
  padding: 8px 16px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #4caf50;
  color: white;
}

#controls button:hover {
  background: #45a049;
}

.content {
  font-size: 3rem;
  line-height: 1.5;
  padding: 50px;
  color: #333;
}
```

## 📖 API Reference

### Constructor

```javascript
const teleprompter = new monkieTelePrompter(container);
```

**Parameters:**

- `container` (HTMLElement): The DOM element that will contain the teleprompter

**Throws:**

- Error if container is null with message: "Container not found, Add a container with id monkieprompter or any '#id' then pass it to the new monkieTelePrompter('#id')"

### Methods

#### `play()`

Starts the auto-scrolling teleprompter.

```javascript
teleprompter.play();
```

#### `pause()`

Pauses the teleprompter scrolling.

```javascript
teleprompter.pause();
```

#### `reverse()`

Toggles between forward and reverse scrolling modes.

```javascript
teleprompter.reverse();
```

### Properties

#### Core Settings

- `MULTIPLIER`: Speed calculation multiplier (default: 0.25)
- `DEBUG`: Enable/disable debug logging (default: false)

#### Runtime Properties

- `speed`: Current scrolling speed (calculated as slider value × MULTIPLIER)
- `scrollPosition`: Current scroll position in pixels
- `reverseMode`: Boolean indicating reverse mode status
- `rafId`: RequestAnimationFrame ID for controlling animation loop

## 🎛️ Control Elements

The teleprompter automatically binds to these HTML elements within your container:

| Element ID     | Purpose                | Type        |
| -------------- | ---------------------- | ----------- |
| `#mtp-play`    | Play button            | Button      |
| `#mtp-pause`   | Pause button           | Button      |
| `#mtp-reverse` | Reverse/Forward toggle | Button      |
| `#mtp-speed`   | Speed control slider   | Range Input |
| `#speed-value` | Speed display          | Span        |

## 🎯 Advanced Usage

### Custom Speed Range

```javascript
// Create custom speed control
const speedSlider = document.getElementById("mtp-speed");
speedSlider.min = "0.5";
speedSlider.max = "20";
speedSlider.step = "0.5";
```

### Enable Debug Mode

```javascript
const teleprompter = new monkieTelePrompter(container);
teleprompter.DEBUG = true; // Enable debug logging
```

### Programmatic Control

```javascript
const teleprompter = new monkieTelePrompter(container);

// Start playing
teleprompter.play();

// Change speed programmatically (remember to account for MULTIPLIER)
teleprompter.speed = 2.5; // This is the final speed, not slider value

// Toggle reverse mode
teleprompter.reverse();

// Check current state
console.log("Is playing:", teleprompter.rafId !== null);
console.log("Is in reverse:", teleprompter.reverseMode);

// Pause after 10 seconds
setTimeout(() => {
  teleprompter.pause();
}, 10000);
```

### Working with the Sample

The repository includes a complete working example in the `sample/` directory:

```bash
# Navigate to sample directory
cd sample

# Open index.html in your browser
# The sample demonstrates all features with Lorem Ipsum text
```

## 🎨 Styling Tips

### Large Text for Presentations

```css
.content {
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.6;
}
```

### Teleprompter Mirror Effect

```css
.content {
  transform: scaleX(-1); /* Mirror text horizontally */
}
```

### High Contrast Mode

```css
body {
  background: black;
  color: white;
}

.content {
  color: #00ff00; /* Green text on black background */
  font-family: "Courier New", monospace;
}
```

## � Project Structure

```
monkie-teleprompter/
├── README.md                 # This documentation
├── monkie-telepromter.js     # Main teleprompter class
└── sample/
    └── index.html           # Working demo example
```

## �🔧 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

**Required Features:**

- requestAnimationFrame
- addEventListener
- querySelector/querySelectorAll
- ES6 Classes

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues & Support

Found a bug or need help? Please [open an issue](https://github.com/raizrazer/monkie-teleprompter/issues) on GitHub.

## 🙏 Acknowledgments

- Built with vanilla JavaScript for maximum compatibility
- Inspired by professional teleprompter software
- Designed for content creators, presenters, and developers

---

**Peace and God Bless!**
