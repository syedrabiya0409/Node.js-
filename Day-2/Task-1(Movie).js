console.log("🎬 Soorarai Pottru Movie Starts!");

// Scene 1: Maara dreams of starting an airline
setTimeout(() => {
    console.log("Scene 1: Maara has a dream to start a low-cost airline ✈️");
}, 1000);

// Scene 2: Maara faces challenges from big airline companies
setTimeout(() => {
    console.log("Scene 2: Big airline executives laugh at Maara's idea 😏");
}, 3000);

// Scene 3: Maara struggles with bank loans
setTimeout(() => {
    console.log("Scene 3: Maara struggles to get a bank loan 💸");
}, 5000);

// Scene 4: Maara gathers a team to start the airline
setTimeout(() => {
    console.log("Scene 4: Maara recruits his loyal team 👨‍✈️👩‍✈️");
}, 7000);

// Scene 5: The airline takes off successfully
setTimeout(() => {
    console.log("Scene 5: Flight takes off! ✈️ Success at last 🎉");
}, 9000);

// Background action: Clock ticking throughout the movie
let clockInterval = setInterval(() => {
    console.log("🕒 Time passes...");
}, 2000);

// Stop the clock after the movie ends
setTimeout(() => {
    clearInterval(clockInterval);
    console.log("🎬 Movie Ends! Applause 👏👏");
}, 11000);
