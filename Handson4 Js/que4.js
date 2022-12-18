
const findEvenOdd = (N, Arr) => {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < N; i++) {
        if (Arr[i] % 2 === 0) {
            even = even + Arr[i];
        } else {
            odd = odd + Arr[i];
            }
    }
    return [even, odd];
};