n = int(input())  # 수의 개수 입력
arr = list(map(int, input().split()))  # 정수 리스트 입력

sortArr = sorted(set(arr))  # set으로 중복 제거 후 sorted로 정렬

print(" ".join(map(str, sortArr)))  # 정렬된 리스트를 공백을 넣어 출력