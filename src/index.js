// change the function to return the sum if a > b or the difference otherwise



const sum = (a, b) => {
    
    if(typeof(a) !== "number" || typeof(b) !== "number") {
        return "bad input"
    }

    if(a < b) {
        return b - a;
    }
    
    return a + b;
}

// write a function that raises a number to the third power

function num(base, exp) {
    return Math.power(a, 3);
    
}

export default sum;