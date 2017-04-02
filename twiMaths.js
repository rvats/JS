function WriteTable (number) {
    for(i = 1; i <= 10; i++) {
        console.log(number + ' * ' + i + ' = ' + number*i);
    }
}

function SieveOfEratosthenes(N) {
    var arrayOfPrimeNumbers = [];
    for(var i = 0; i < parseInt(N); i++) {
        if(i < 2) {
            arrayOfPrimeNumbers[i] = false;
        } else {
            arrayOfPrimeNumbers[i] = true;
        }
    }
    for (var p=2; p*p<=N; p++)
    {
        if (arrayOfPrimeNumbers[p] == true)
        {
            for (var i=p*2; i<=N; i += p)
                arrayOfPrimeNumbers[i] = false;
        }
    }
    for (var p=2; p<=N; p++) {
       if (arrayOfPrimeNumbers[p]) {
           arrayOfPrimeNumbers[p] = p;
       } 
    }
	arrayOfPrimeNumbers = arrayOfPrimeNumbers.remove(false);
    return arrayOfPrimeNumbers;
}

