function printHollowPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = ' '.repeat(rows - i);
        let stars = '';
        
        if (i === 1 || i === rows) {
            stars = '*'.repeat(2 * i - 1);
        } else {
            stars = '*' + ' '.repeat(2 * (i - 1) - 1) + '*';
        }
        
        console.log(spaces + stars);
    }
}

printHollowPyramid(5);
