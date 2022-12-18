const Inc_Arr = (array, N) => {
    let a = [];
    for (i = 0; i < N; i++) {
        a.push((array[i] += 1));
    }
    console.log(a.join(" "));
};