/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let first = 0;
    let second = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        }
        if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    }
    return second;
}

let arr = [2, 3, 6, 6, 5, 9, 10, 11, 1, 0, 88, 12, 78, 2, 1, 4, 109, 2, 66, 211]
console.log(getSecondLargest(arr));