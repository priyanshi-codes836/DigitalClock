# Digital Clock ⏰

A stylish, live-updating digital clock web application. This project demonstrates mastery of JavaScript time-based events and DOM manipulation.

## 🌟 Features

* **Real-Time Updates:** Displays the current time accurate to the second.
* **Smart Formatting:** Automatically adds leading zeros (e.g., showing `09:05` instead of `9:5`).
* **AM/PM Indicator:** clear distinction between morning and afternoon/evening.
* **Dynamic Background:** (Optional: Add this if you changed colors based on time, otherwise delete).
* **Responsive:** Looks good on mobile and desktop.

## 🛠️ Technologies Used

* **HTML5** - Structure.
* **CSS3** - Styling and fonts (Digital-7 font / Google Fonts).
* **JavaScript** - Logic for time calculation and DOM updates.

## 🧠 How It Works

The clock relies on the `Date()` object in JavaScript.
1.  **`setInterval`**: A function triggers every 1000 milliseconds (1 second) to refresh the time.
2.  **Time Extraction**: We extract Hours, Minutes, and Seconds using `getHours()`, `getMinutes()`, and `getSeconds()`.
3.  **Formatting Logic**: Conditional logic checks if a number is less than 10; if so, it appends a "0" string to the front to maintain the digital clock aesthetic.

## 📸 Screenshot
![Digital Clock Interface]
<img width="1824" height="880" alt="Screenshot 2025-12-03 130701" src="https://github.com/user-attachments/assets/7f67ff65-ed60-4a44-adf0-88da85ecd619" />

## 🔮 Future Improvements

* Add a toggle for 12-hour vs 24-hour format.
* Display the current Date (Day, Month, Year).
* Add an Alarm feature.

# JavaScript Digital Clock

I built this project to understand how JavaScript handles time and asynchronous events. It was a great exercise in working with the `Date` object and interval timers.

## 📚 Key Concepts Learned

* **The `Date` Object:** How to instantiate `new Date()` and retrieve specific time units.
* **`setInterval()` vs `setTimeout()`:** I learned to use `setInterval` to run the clock function continuously every second.
* **String Manipulation:** I implemented logic to handle "Leading Zeros."
    * *Problem:* The clock would show "1:5" instead of "01:05".
    * *Solution:* I added a ternary operator/if-statement to prepend a '0' string when values are below 10.
* **DOM Updates:** efficiently querying elements and updating `innerText`.

## 💻 Code Snippet

The core logic that runs every second:

```javascript
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    // Logic to fix 0-9 display issue...
}
setInterval(updateClock, 1000);

🚀 Usage
Clone the repo.

Open clock.html.
