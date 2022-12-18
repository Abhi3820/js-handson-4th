function Birthday_Game(arr, D, M) {
    let count = 0;
    let sum = 0;
    let n = arr.length;
    for (let i = 0; i < n - M + 1; i++) {
        for (let j = 0; j < M; j++) {
        sum += arr[i + j];
        }
        if (sum == D) {
            count++;
        }
        sum = 0;
    }
    return count;
}