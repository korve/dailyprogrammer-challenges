function upcCheck(upc) {
    upc = upc.toString().padStart(11, '0');
    let sum = (+upc[0] + +upc[2] + +upc[4] + +upc[6] + +upc[8] + +upc[10]);
    const M = ((sum * 3) + +upc[1] + +upc[3] + +upc[5] + +upc[7] + +upc[9]) % 10;
    return M === 0 ? 0 : 10 - M;
}

console.log(upcCheck(4210000526));
console.log(upcCheck(3600029145));
console.log(upcCheck(12345678910));
console.log(upcCheck(1234567));
