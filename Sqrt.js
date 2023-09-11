function sqrt(x){
    let l = 0;
    let r = x;
    let m = 0;
    for(let i = 0; i < 100; i++){
        m = (l+r)/2;
        if(m*m < x){
            l = m
        } else {
            r = m
        }
    }
    return l
}

console.log(sqrt(9))