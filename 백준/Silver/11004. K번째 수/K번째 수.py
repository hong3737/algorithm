import sys

input = sys.stdin.readline  # 빠른 입력을 위한 설정

N, K = map(int, input().split())  # N은 수의 개수, K는 찾을 K번째 수
numbers = list(map(int, input().split()))  # N개의 수를 리스트로 입력

# 리스트를 오름차순으로 정렬
numbers.sort()

# K번째 수 출력 (K는 1-based index이므로 K-1로 접근)
print(numbers[K - 1])