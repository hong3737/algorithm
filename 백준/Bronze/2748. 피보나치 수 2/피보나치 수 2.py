n = int(input()) # 몇 번째 피보나치 수를 구할 지 입력받음

fibo =[] #피보나치 수를 저장하는 리스트
fibo.append(0) #0과 1을 미리 저장
fibo.append(1)

for i in range(2,n+1): #위에서 0, 1 미리 저장했기 때문에 2부터 시작
    fibo.append(fibo[i-1]+fibo[i-2]) #리스트에 피보나치 수를 계산하여 저장

print(fibo[n])