
function janken(myHand){
    let handArray = ['ぐー','ちょき','ぱー'];

    let resultArray = ['アイコです.','あなたの負けです.','あなたの勝ちです.'];

    let computerHand = 0

    let result = 0

    console.log('あなたの手は:' + handArray[myHand]);

    let rand = Math.random() * 100
    console.log('乱数 :' + rand);

    let rand_int = Math.floor(rand);
    console.log('乱数(整数):' + rand_int);


    computerHand = rand_int % 3;
    console.log('computerHand:' + computerHand);
    console.log('コンピュータの手は:' + handArray[computerHand]);

    if(myHand === 0){
        if (computerHand === 0){
            result = 0;
        }else if (computerHand === 1){
            result = 2;
        }else if (computerHand === 2){
            result = 1;
        }

    }else if (myHand === 1){
        if (computerHand === 0){
            result = 1;
        }else if (computerHand === 1){
            result = 0;
        }else if (computerHand === 2){
            result = 2;
        }

    }else if (myHand === 2){
        if (computerHand === 0){
            result = 2;
        }else if (computerHand === 1){
            result = 1;
        }else if (computerHand === 2){
            result = 0;
        }

    }

    result = (myHand - computerHand + 3) % 3

    console.log(resultArray[result])
    console.log('------------------------------------------')

    const janken_result = document.querySelector('#result');
    janken_result.textContent = resultArray[result];

}