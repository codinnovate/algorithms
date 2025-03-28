// linear time also 0(n) is part of Big O notations
//  which means the time it's takes grows linearly with n
// where n is the size of the input.eg . length of an array 
// eg searching for a value in an unsorted array

function findValue(arr, target){
    for(i = 0; i < arr.length; i ++){
        if(arr[i] === target) return i;
    }
    return -1;
}  // Time: O(n), checks every element one after the other.


// Qudratic Time O(n²), n * (n-1)
function findPair(arr, sum){
    for(i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
           if(arr[i] + arr[j] === sum) return [i,j];
        }
    }
} //

// two sum prep..

function twoSum(nums, target){
    for(let i=0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]