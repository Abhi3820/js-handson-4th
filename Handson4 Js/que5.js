
const Find_Num = (array,N,M) => {
    count = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] == M) {
            count++;
        }
    }
    if (count >= 1) {
        return "YES";
    } else return "NO";
};
