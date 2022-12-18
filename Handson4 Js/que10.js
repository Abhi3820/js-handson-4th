function arrayMin(arr) {
    min = 1000000;
    for (i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function arrayMax(arr) {
    max = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}