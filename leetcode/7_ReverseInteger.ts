function reverse(x: number): number {
    let result:number = 0
    while(x !== 0){
        result = result*10 + x%10;
        x = Math.trunc(x/10);
    }
    return (result < -(2**31) || result > 2**31-1) ? 0: result;
}
