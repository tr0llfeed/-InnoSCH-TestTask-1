var z;
var x = 30;
if(x<=20){
var temp  = x*x;
console.log('[x <= 20]\nРешение через x*x\n('+x+' * '+x+') = '+temp);
}else if(x>=100){
var temp  = x+10;
console.log('[x >= 100]\nРешение через x+10\n('+x+' + 10) = '+temp);
}else if(x > 20 && x < 100){
var temp  = x/5;
console.log('[20 < x > 100]\nРешение через x/5\n('+x+' / 5) = '+temp);
}else{
    console.log('error debug\n var temp='+temp+'');
}
