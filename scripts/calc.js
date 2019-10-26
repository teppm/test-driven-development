function addition(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Error!';
    }
    return a + b;
}

addition(20, 22);