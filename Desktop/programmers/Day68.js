/*
Lv. 2 연습문제
- 예상 대진표
*/

/*
예상 대진표
*/
function solution(n,a,b)
{
    var answer = 1;
    let player = new Array(n).fill(0);
    player = player.map((item,index)=>index+1);

    let num = 2;
    let c = 0;
    while(1){
        for(let i=0;i<n;i+=num){
            if(player.slice(i,i+num).includes(a)&&player.slice(i,i+num).includes(b)) {
                c=1;
                break;
            }
        }
        if(c==1) break;
        answer++;
        num *=2;
    }
    
    return answer;
}