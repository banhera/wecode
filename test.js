const getnum = ()=> {
    let numnum = []
    for(let num = 1; num <= 50; num++) {
        if (num%2 === 0)
            numnum.push(num);
    } return numnum;
}
console.log(getnum());