function commonArr(arr1: any, arr2: any) {
    const finalArray = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] in arr2) {
            finalArray.push(arr[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in arr1 == true && arr2[i] in finalArray != true) {
            finalArray.push(arr2[i])
        }
    }
    return finalArray
}


const checker = commonArr([1, 2, 3, 45, 29], [423, 54, 642, 1, 2, 29])
console.log(checker)