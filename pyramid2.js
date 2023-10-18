function printRectangle(rows, cols) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 1; j <= cols; j++) {
            line += '* ';
        }
        console.log(line);
    }
}

printRectangle(5, 5);
