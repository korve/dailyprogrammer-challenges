function hexColor(...rgb) {
    let hex = '#';
    for (let i = 0; i < 3; i++) {
        let str = '';
        for (let j = 1; j >= 0; j--) {
            let color = rgb[i] >> (j * 4);
            if ((color & 0b1111) === 15) {
                str += 'F';
            } else if ((color & 0b1110) === 14) {
                str += 'E';
            } else if ((color & 0b1101) === 13) {
                str += 'D';
            } else if ((color & 0b1100) === 12) {
                str += 'C';
            } else if ((color & 0b1011) === 11) {
                str += 'B';
            } else if ((color & 0b1010) === 10) {
                str += 'A';
            } else {
                str += color;
            }
        }

        hex += str.padStart(2, '0');
    }
    return hex;
}

console.log(hexColor(100, 1, 255));
