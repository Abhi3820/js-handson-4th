
const highAge = (N, Arr) => {
    let a = [];
    for (i=0; i<N; i++){
        if (Arr[i] >= 18){
            a.push(Arr[i]);
        }
    }
    return (a);
};