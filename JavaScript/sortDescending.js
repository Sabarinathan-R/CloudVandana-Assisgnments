function sortDescending(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
}

const inputArray = [4, 9, 1, 7, 3, 8, 5];
sortDescending(inputArray);
console.log(inputArray);
