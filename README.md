## Random Joke Generator

### Objective:
Create an app that shows a random joke when a button is clicked.

---

### Requirements:
1. **Joke Display:**
   - Show a placeholder message like "Click the button to get a joke!" when the app loads.
   - Replace the placeholder with a random joke when the button is clicked.

2. **Button:**
   - Add a button labeled "Get Joke" that fetches and displays a new random joke.

---

### Tasks:
1. Use `useState` to:
   - Store and update the displayed joke.
2. Use a predefined array of jokes to fetch a random joke on each button click.
3. Add an `onClick` event handler to update the joke when the button is clicked.

---

### Example Joke Array:
```javascript
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call fake spaghetti? An impasta!",
];
