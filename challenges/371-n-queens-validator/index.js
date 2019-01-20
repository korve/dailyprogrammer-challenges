function printField(input) {
    const n = input.length;

    for (let i = n; i > 0; i--) {
        process.stdout.write(`${i}`);
        for (let j = 0; j < n; j++) {
            if (input[j] === i) {
                process.stdout.write(' Q');
            } else {
                process.stdout.write(' .');
            }
        }
        process.stdout.write('\n');
    }

    process.stdout.write(` `);
    for (let j = 0; j < n; j++) {
        let char = String.fromCharCode(65 + j);
        process.stdout.write(` ${char}`);
    }
    process.stdout.write('\n');
}

function qcheck(input) {
    const errors = [];
    const n = input.length;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            const a = {x: i, y: input[i]};
            const b = {x: j, y: input[j]};

            if (a.x === b.x && b.y === b.y) {
                continue;
            }

            const angle = Math.abs(Math.atan((a.x - b.x) / (a.y - b.y)) * (180 / Math.PI));
            if (angle % 45 === 0) {
                errors.push([b.x, b.y]);
            }
        }
    }

    return errors;
}

const inputs = [
    [4, 2, 7, 3, 6, 8, 5, 1],
    [2, 5, 7, 4, 1, 8, 6, 3],
    [5, 3, 1, 4, 2, 8, 6, 3],
    [5, 8, 2, 4, 7, 1, 3, 6],
    [4, 3, 1, 8, 1, 3, 5, 2]
];

inputs.forEach((input) => {
    console.log(`testing ${input}`);
    printField(input);
    const result = qcheck(input);
    if (result.length) {
        result.forEach((err) => {
            const char = String.fromCharCode(65 + err[0]);
            process.stdout.write(`err at: ${char + err[1]}\n`);
        });
    } else {
        console.log('ok');
    }
});
