function testCode(n){
    var arr = [];
    for(var i = 0; i < n; i++){
        var num = parseInt(Math.random()*123);
        if(num >= 0 && num <= 9){
            arr.push(num);
        }else if(num >= 97 && num <= 122 || num >= 65 && num <= 90){
            arr.push(String.fromCharCode(num));
        }else{
            i--;
        }
     }
     return arr.join("");
 }

 function numTestCode(n){
    var arr = [];
    for(var i = 0; i < n; i++){
        var num = parseInt(Math.random()*10);
        arr.push(num);
    }
    return arr.join("");
}

function isABC(charStr){
    if(charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z"){
        return true;
    }else{
        return false;
    }
}

//判断单个字符是否符合数字字母下划线
function isDEF(charStr){
    if(charStr >= 'a' & charStr <= 'z' || charStr >= 'A' && charStr <= "Z" || charStr >= '0' && charStr <= '9'  || charStr == '_'){
        return true;
    }else{
        return false;
    }
}