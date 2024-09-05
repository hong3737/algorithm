function solution(n) {
    // n × n 크기의 이차원 배열 생성 (모든 값 0으로 초기화)
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));

    // 방향을 정의: 오른쪽(0,1), 아래(1,0), 왼쪽(0,-1), 위(-1,0)
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let directionIndex = 0;  // 현재 진행 방향을 나타내는 인덱스
    let row = 0, col = 0;    // 시작 좌표
    let currentNumber = 1;   // 1부터 n^2까지 채울 숫자

    // 1부터 n^2까지의 숫자를 순차적으로 채움
    for (let i = 0; i < n * n; i++) {
        // 현재 좌표에 숫자 배치
        matrix[row][col] = currentNumber;
        currentNumber++;

        // 다음 좌표 계산
        let nextRow = row + directions[directionIndex][0];
        let nextCol = col + directions[directionIndex][1];

        // 경계를 넘었거나, 이미 숫자가 채워진 곳이면 방향 전환
        if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || matrix[nextRow][nextCol] !== 0) {
            directionIndex = (directionIndex + 1) % 4;  // 방향을 바꿈 (오른쪽 -> 아래 -> 왼쪽 -> 위)
            nextRow = row + directions[directionIndex][0];
            nextCol = col + directions[directionIndex][1];
        }

        // 좌표 업데이트
        row = nextRow;
        col = nextCol;
    }

    return matrix;
}