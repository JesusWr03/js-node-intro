function fn(value) {
    num = value.toString().split('');
    result = num.map((n) => Math.pow(Number(n), num.length)).reduce((a,b)=>a+b);
       return result === value
  }
  console.log(fn(153))