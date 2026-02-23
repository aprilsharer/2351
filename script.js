// Candy analyzer project

// Get elements from HTML
const text = document.querySelector('.title');
const analyzeBtn = document.getElementById('analyzeBtn');

// You can change the style of elements
text.style.color = 'purple';

// Event listener for analyze button
analyzeBtn.addEventListener('click', analyzeCandy);

function analyzeCandy() {
    // Get the values from the form
    const userName = document.getElementById('userName').value;
    const candyName = document.getElementById('candyName').value;
    const candyPrice = document.getElementById('candyPrice').value;
    const candyType = document.getElementById('candyType').value;

    // Check if all fields are filled (if conditional)
    if (!userName || !candyName || !candyPrice || !candyType) {
        showError('Please fill out all fields!');
        return;
    }

    // Check if price is valid (if conditional)
    if (parseFloat(candyPrice) <= 0) {
        showError('Price must be greater than zero!');
        return;
    }

    // CONCATENATED STRING - combining multiple variables into one string
    const greeting = 'Hello ' + userName + '! ';
    const info = 'Your favorite candy is ' + candyName + ' and it costs $' + candyPrice + '.';
    const message = greeting + info;
    
    console.log(message);

    // STRING METHODS
    const upperCaseName = candyName.toUpperCase();
    const lowerCaseName = candyName.toLowerCase();
    const nameLength = candyName.length;
    
    console.log('Uppercase:', upperCaseName);
    console.log('Lowercase:', lowerCaseName);
    console.log('Length:', nameLength);

    // NUMBER METHODS
    const price = parseFloat(candyPrice);
    const fixedPrice = price.toFixed(2);
    const tenPieces = price * 10;
    const tenPiecesFixed = tenPieces.toFixed(2);
    
    console.log('Price:', fixedPrice);
    console.log('Ten pieces cost:', tenPiecesFixed);

    // IF/ELSE CONDITIONAL for price category
    let priceCategory = '';
    if (price < 1.00) {
        priceCategory = 'Budget candy';
    } else if (price >= 1.00 && price < 2.00) {
        priceCategory = 'Average price';
    } else {
        priceCategory = 'Premium candy';
    }

    // SWITCH STATEMENT for candy type
    let typeInfo = '';
    let suggestions = '';
    
    switch(candyType) {
        case 'chocolate':
            typeInfo = 'Chocolate candy';
            suggestions = 'You might also like: Hershey bars, Kit Kats';
            break;
        case 'gummy':
            typeInfo = 'Gummy candy';
            suggestions = 'You might also like: Gummy bears, Sour worms';
            break;
        case 'hard':
            typeInfo = 'Hard candy';
            suggestions = 'You might also like: Jolly Ranchers, Lifesavers';
            break;
        case 'sour':
            typeInfo = 'Sour candy';
            suggestions = 'You might also like: Sour Patch Kids, Warheads';
            break;
        case 'licorice':
            typeInfo = 'Licorice candy';
            suggestions = 'You might also like: Twizzlers, Red Vines';
            break;
        default:
            typeInfo = 'Other candy';
            suggestions = 'Try exploring different candy types!';
    }

    // Toggle a class on the button when clicked
    analyzeBtn.classList.toggle('change');

    // Display results
    showResults(message, upperCaseName, nameLength, fixedPrice, tenPiecesFixed, priceCategory, typeInfo, suggestions);
}

function showResults(message, upperName, length, price, bulk, category, type, suggestions) {
    const output = document.getElementById('output');
    
    let html = '<p><strong>Your Info:</strong> ' + message + '</p>';
    html += '<p><strong>Candy Name (uppercase):</strong> ' + upperName + '</p>';
    html += '<p><strong>Name has ' + length + ' letters</strong></p>';
    html += '<p><strong>Price:</strong> $' + price + '</p>';
    html += '<p><strong>Ten pieces:</strong> $' + bulk + '</p>';
    html += '<p><strong>Price Category:</strong> ' + category + '</p>';
    html += '<p><strong>Type:</strong> ' + type + '</p>';
    html += '<p><strong>Suggestions:</strong> ' + suggestions + '</p>';
    
    output.innerHTML = html;
    

    const priceValue = parseFloat(price);
    
    if (priceValue < 1.00) {
        output.style.backgroundColor = '#d4edda'; // light green for budget
        output.style.borderColor = '#28a745';
    } else if (priceValue >= 1.00 && priceValue < 2.00) {
        output.style.backgroundColor = '#fff3cd'; // light yellow for average
        output.style.borderColor = '#ffc107';
    } else {
        output.style.backgroundColor = '#f8d7da'; // light red for premium
        output.style.borderColor = '#dc3545';
    }
}

function showError(message) {
    const output = document.getElementById('output');
    output.innerHTML = '<div class="error">' + message + '</div>';
}

// LOOPS - Working with the candy list
const userList = document.querySelector('.name-list');
const userListItems = document.querySelectorAll('.name-list li');

// Loop through each list item and add click event
for (let user of userListItems) {
    user.addEventListener('click', function() {
        // Change the color when you click on a candy
        this.style.color = 'red';
        console.log(this);
    });
}
//MODULE 6 ADDITION
const candyCollection = {
    owner: 'My Collection',
    rating: 5,
    favorites: ['Snickers', 'KitKat', 'Reeses'],
    describe: function() {
        console.log(this.owner + ' has ' + this.favorites.length + ' favorites');
    }
};

candyCollection.describe();
candyCollection.favorites.push('Skittles');
console.log(candyCollection.favorites.indexOf('KitKat'));

// ADD NEW CANDY TO LIST
const listInput = document.querySelector('.list-input');
const addListButton = document.querySelector('.add-list-button');

addListButton.addEventListener('click', function() {
    // Create a new li element
    const newLi = document.createElement('li');
    
    // Create the text content from the input
    const liContent = document.createTextNode(listInput.value);
    
    // Attach the content to the li
    newLi.appendChild(liContent);
    
    // Attach the li to the user list
    userList.appendChild(newLi);
    
    // Add click event to the new item too
    newLi.addEventListener('click', function() {
        this.style.color = 'red';
        console.log(this);
    });
    
    // Clear the input
    listInput.value = '';
});

// EXAMPLE OF A WHILE LOOP - count candy loading
let loading = 0;
while (loading < 5) {
    console.log('Loading candy #' + loading);
    loading++;
}
console.log('All candies loaded!');