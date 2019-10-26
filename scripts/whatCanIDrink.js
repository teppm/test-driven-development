function whatCanIDrink(age) {
    if (age < 0 || typeof(age) == 'number') {
        return 'Sorry. I can’t tell what drink because that age is incorrect!'
    }
    if (age < 14 || typeof(age) == 'number') {
        return 'Drink Toddy';
    }
    if (age < 18 || typeof(age) == 'number') {
        return 'Drink Coke';
    }
    if (age < 21 || typeof(age) == 'number') {
        return 'Drink Beer';
    }
    if (age < 130 || typeof(age) == 'number') {
        return 'Drink Whiskey'
    } else {
        return 'Sorry. I can’t tell what drink because that age is incorrect!'
    }
}

whatCanIDrink(10);