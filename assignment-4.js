// problem-1
function totalFine( fare ) {
          if(!(typeof fare === 'number') || fare<1 ){
            return "Invalid";
          }
          return fare+((fare * .2) + 30 )
}

// problem-2


function  onlyCharacter( str ) {
    if(!(typeof str === 'string')){return 'Invalid';}
    let newStr=str.split('');let string='';
    for(const a of newStr){
        if(a===' '){continue;}
        string= string.concat(a);
    }
    return string.toUpperCase();
}


// problem-3
function  bestTeam( player1, player2 ) {
       if(Array.isArray(player1) || player1 === null || Array.isArray(player2) || player2 === null){
        return "Invalid";
       }
       else if( typeof player1 !== 'object' || typeof player2 !== 'object'){
        return "Invalid";
       }
       let sum1=player1.foul + player1.cardY + player1.cardR;
       let sum2=player2.foul + player2.cardY + player2.cardR;
       if(sum1>sum2){return player2.name}
       else if (sum2>sum1){return player1.name}
       else if(sum1 === sum2){return 'Tie'}

}

// problem -4
function  isSame(arr1 , arr2 ) {
    if((Array.isArray(arr1)) && Array.isArray(arr2) ){
        for(const index in arr1){if(arr1[index] !== arr2[index]){return false;}};
        return true;
    }
    return "Invalid";
}

// problem-5
function  resultReport( marks ) {

}

