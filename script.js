const candyDatabase = {
    candies: [],
    totalCandies: 0,

    addCandy: function(name, rating, type) {
        const newCandy = {
            name: name,
            rating: rating,
            type: type,
            dateAdded: new Date().toLocaleDateString()
        };
        this.candies.push(newCandy);
        this.totalCandies++;
        return newCandy;
    },

    getAverage: function() {
        if (this.candies.length === 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < this.candies.length; i++) {
            sum = sum + this.candies[i].rating;
        }
        return sum / this.candies.length;
    },

    getTopRated: function() {
        if (this.candies.length === 0) {
            return null;
        }
        let top = this.candies[0];
        for (let i = 1; i < this.candies.length; i++) {
            if (this.candies[i].rating > top.rating) {
                top = this.candies[i];
            }
        }
        return top;
    },

    clearAll: function() {
        this.candies = [];
        this.totalCandies = 0;
    }
};

function checkInput(name, rating, type) {
    if (name === '' || rating === '' || type === '') {
        return false;
    }
    if (rating < 1 || rating > 10) {
        return false;
    }
    return true;
}

function fixName(name) {
    let words = name.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let fixed = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        result = result + fixed;
        if (i < words.length - 1) {
            result = result + ' ';
        }
    }
    return result;
}

function makeCard(candy) {
    const card = document.createElement('div');
    card.className = 'candy-card';
    
    const name = document.createElement('h3');
    name.textContent = candy.name;
    
    const type = document.createElement('p');
    type.textContent = 'Type: ' + candy.type;
    
    const date = document.createElement('p');
    date.textContent = 'Added: ' + candy.dateAdded;
    
    const badge = document.createElement('span');
    badge.className = 'rating-badge';
    badge.textContent = candy.rating + '/10';
    
    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(date);
    card.appendChild(badge);
    
    return card;
}

function showCandies() {
    const display = document.getElementById('candyDisplay');
    display.innerHTML = '';
    
    for (let i = 0; i < candyDatabase.candies.length; i++) {
        const card = makeCard(candyDatabase.candies[i]);
        display.appendChild(card);
    }
    
    updateStats();
}

function updateStats() {
    document.getElementById('totalCandies').textContent = 'Total Candies: ' + candyDatabase.totalCandies;
    
    const avg = candyDatabase.getAverage();
    document.getElementById('avgRating').textContent = 'Average Rating: ' + avg.toFixed(2);
    
    const top = candyDatabase.getTopRated();
    if (top) {
        document.getElementById('topCandy').textContent = 'Top Rated: ' + top.name + ' (' + top.rating + '/10)';
    } else {
        document.getElementById('topCandy').textContent = 'Top Rated: None';
    }
}

function clearInputs() {
    document.getElementById('candyName').value = '';
    document.getElementById('candyRating').value = '';
    document.getElementById('candyType').value = '';
}

document.getElementById('addBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('candyName').value;
    const ratingInput = document.getElementById('candyRating').value;
    const typeInput = document.getElementById('candyType').value;
    
    if (!checkInput(nameInput, ratingInput, typeInput)) {
        alert('Please fill all fields correctly');
        return;
    }
    
    const fixedName = fixName(nameInput);
    const ratingNumber = parseFloat(ratingInput);
    
    candyDatabase.addCandy(fixedName, ratingNumber, typeInput);
    showCandies();
    clearInputs();
});

document.getElementById('clearBtn').addEventListener('click', function() {
    if (candyDatabase.totalCandies === 0) {
        alert('No candies to clear');
        return;
    }
    
    candyDatabase.clearAll();
    showCandies();
});

updateStats();