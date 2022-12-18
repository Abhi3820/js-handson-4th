const isAllPass = (N, Arr) => {
    Arr.sort();
    for (i=0; i<N; i++){
        if (Arr[i]>=32){
            return "YES";
        }
        else
        return "NO";
    } 
};