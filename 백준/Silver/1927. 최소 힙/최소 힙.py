import sys
import heapq

input = sys.stdin.read  # 입력을 빠르게 받기 위해 sys.stdin.read 사용
data = input().split()  # 모든 입력을 한 번에 받아 공백으로 나누어 리스트로 만듭니다.

heap = []  # 최소 힙을 저장할 빈 리스트를 초기화합니다.
results = []  # 출력 결과를 저장할 리스트를 초기화합니다.

n = int(data[0])  # 첫 번째 요소는 연산의 개수 N입니다.

for i in range(1, n + 1):  # 두 번째 요소부터 N개의 연산을 처리합니다.
    x = int(data[i])  # 각 연산에 대한 입력값 x를 정수로 변환합니다.
    if x > 0:  # 만약 x가 자연수라면,
        heapq.heappush(heap, x)  # 최소 힙에 x를 추가합니다.
    elif x == 0:  # 만약 x가 0이라면,
        if heap:  # 힙이 비어있지 않다면,
            results.append(heapq.heappop(heap))  # 가장 작은 값을 꺼내어 results에 추가합니다.
        else:  # 힙이 비어있다면,
            results.append(0)  # 0을 results에 추가합니다.

print("\n".join(map(str, results)))  # 결과를 한 번에 출력합니다.