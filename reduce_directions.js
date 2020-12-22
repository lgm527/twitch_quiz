/*
 * Complete the 'directionReduction' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY directions as parameter.
 */

function directionReduction(directions) {
    const oppositeDirectionPairs = {NORTH: 'SOUTH', SOUTH: 'NORTH', WEST: 'EAST', EAST: 'WEST'}
    return directions.reduce((finalDirections, direction) => {
        const oppositeDirectionIndex = finalDirections.indexOf(oppositeDirectionPairs[direction])
        if (oppositeDirectionIndex > -1) {
            finalDirections.splice(oppositeDirectionIndex, 1)
        } else {
            finalDirections.push(direction)
        }
        return finalDirections
    }, [])
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const directionsCount = parseInt(readLine().trim(), 10);

    let directions = [];

    for (let i = 0; i < directionsCount; i++) {
        const directionsItem = readLine();
        directions.push(directionsItem);
    }

    const result = directionReduction(directions);

    ws.write(result.join('\n') + '\n');

    ws.end();
}