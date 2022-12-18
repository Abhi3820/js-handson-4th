function Unique_Shirts (arr,N) {
    arr1 = [];
    count = 0;
    for (i =0; i<arr.length; i++){
        for (j=0; j<arr.length; j++){
            if (i!=j){
                if (arr[i]===arr[j]){
                    count+=1;
                }
            }
        }
        arr1.push(count);
        count = 0;
    }
    count1=0;
    for (i=0; i<arr1.length; i++){
        if (arr1[i]===0){
            count1+=1;
        }
    }
    return count1;
}