/*
 * Complete the 'findNumberWithNOccurrences' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. INTEGER n
 */

function findNumberWithNOccurrences(numbers, n) {
    let count = {}
    numbers.map((number) => {
        if (number in count) {
            count[number] = count[number] + 1
        } else {
            count[number] = 1
        }
    })
    return Object.keys(count).find(key => count[key] === n)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = [];

    for (let i = 0; i < numbersCount; i++) {
        const numbersItem = parseInt(readLine().trim(), 10);
        numbers.push(numbersItem);
    }

    const n = parseInt(readLine().trim(), 10);

    const result = findNumberWithNOccurrences(numbers, n);

    ws.write(result + '\n');

    ws.end();
}