
const findCount = (N, K, Arr) => {
    count=0;
    for (i=0; i<N; i++){
        if (K==Arr[i]){
        count++;
        }
    }
    return count;
};