function solution(A) {
    const n = A.length;
    const expectedSum = ((n + 1) * (n + 2)) / 2; 
    const actualSum = A.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}


console.log(solution([2, 3, 1, 5])); // Output: 4
console.log(solution([2, 3, 1, 5]));           // ➜ 4
console.log(solution([1, 2, 3, 4, 6]));        // ➜ 5
console.log(solution([2, 3, 1, 5]));