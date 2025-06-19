def solution(A):
    n = len(A)
    expected_sum = (n + 1) * (n + 2) // 2
    actual_sum = sum(A)
    return expected_sum - actual_sum


print(solution([2, 3, 1, 5]))  # Output: 4
