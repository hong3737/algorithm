function solution(n)
{
    return String(n).split("").reduce((item, sum)=> parseInt(sum) + item, 0);
}