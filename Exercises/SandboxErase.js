// *  example: let x = [8,3,8,4,9,2,8,9,8,5] and expected output 8(4 times)

function freq(array){
    let hm = {};

    for(let i = 0; i < array.length; i++){
        if(!hm[array[i]]){
            hm[array[i]] = 1;
        }
        else{
            hm[array[i]] = hm[array[i]] + 1;
        }
    }
    let high = 0;
    let highnum = null;
    for(let i in hm){
        if(high === 0 && highnum === null){
            high = hm[i];
            highnum = i;
        }
        if(hm[i] > high){
            high = hm[i];
            highnum = i;
        }
    }
    console.log(high, parseInt(highnum));
        
}
freq([8,3,8,4,9,2,8,9,8,5]);