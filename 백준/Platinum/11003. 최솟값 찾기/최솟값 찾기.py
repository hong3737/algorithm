import sys
from collections import deque

input = sys.stdin.readline  # 빠른 입력을 위한 설정

N, L = map(int, input().split())  # N은 숫자의 개수, L은 구간의 최대 길이
nums = list(map(int, input().split()))  # 입력된 숫자들을 리스트로 저장
result = []  # 최솟값을 저장할 리스트
d = deque()  # 인덱스를 저장할 deque 생성

for i in range(N):  # 0부터 N-1까지 반복
    # Deque에서 범위 밖의 인덱스 제거
    if d and d[0] < i - L + 1:
        d.popleft()  # 현재 인덱스가 L 범위를 벗어나면 맨 앞 요소 제거

    # Deque에서 현재 값보다 큰 인덱스 제거
    while d and nums[d[-1]] > nums[i]:
        d.pop()  # 현재 숫자보다 큰 숫자를 가진 인덱스는 필요 없으므로 제거

    d.append(i)  # 현재 인덱스 추가

    # Deque의 맨 앞 요소가 구간의 최솟값
    result.append(nums[d[0]])  # 최솟값을 결과 리스트에 추가

print(' '.join(map(str, result)))  # 결과 리스트를 공백으로 구분하여 출력