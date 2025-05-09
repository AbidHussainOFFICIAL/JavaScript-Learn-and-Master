# 🟢 What is JavaScript?

JavaScript (JS) is a **lightweight, interpreted programming language** used to make web pages interactive. It allows developers to:
- Add dynamic content (e.g., sliders, popups, live forms)
- Control browser behavior (like DOM manipulation)
- Communicate with servers via APIs (AJAX, Fetch)
- Build full web applications (frontend + backend using Node.js)

## 🔑 Key Features
- **Client-side and Server-side**: Runs in browsers and on servers (via Node.js)
- **Dynamically typed**: No need to declare variable types explicitly
- **Prototype-based**: Uses prototypes instead of classical inheritance
- **Event-driven**: Perfect for interactive UI/UX

## 💡 Simple Example
```html
<!DOCTYPE html>
<html>
  <body>
    <h2 id="demo">Hello JavaScript!</h2>
    <button onclick="changeText()">Click Me</button>

    <script>
      function changeText() {
        document.getElementById("demo").innerText = "You clicked the button!";
      }
    </script>
  </body>
</html>
