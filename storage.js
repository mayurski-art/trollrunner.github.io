// storage.js

// Load drops from localStorage or use default DATA
function loadDrops(defaultData) {
    const stored = localStorage.getItem('drops');
    return stored ? JSON.parse(stored) : defaultData;
}

// Save drops to localStorage
function saveDrops(data) {
    localStorage.setItem('drops', JSON.stringify(data));
}

// Add a new drop
function addDrop(city, name, date, count, px, py, DATA) {
    const newDrop = {city, name, date, count, px, py};
    DATA.push(newDrop);
    saveDrops(DATA);
}
