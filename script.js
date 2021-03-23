









alert(`Choose the type of data bundle of your choice:\n
1. Data Bundle (NO EXPIRY DATE)\n
2. Calls & Sms (NO EXPIRY)\n
3. Normal Data bundle (WITH EXPIRY)\n
4. Join Postpay\n
5. Check Balance\n
`)

var rawchcoice=prompt("Enter your choice")
var cleanchoice=Number(rawchcoice)
switch(cleanchoice){
    case 1:alert(`Get data (NO EXPIRY DATE):\n 
1. Buy for my number\n
2. Buy for other number\n 
3. Okoa data\n
4. Stop autorenew\n


`)
        Databundle()
        break;
    case 2:alert(`For Calls & SMS, Get 50% EXTRA Airtime (NO EXPIRY DATE)\n
1. Buy for my number\n
2. Buy for another number\n
3. Balance\n
4. Stop Autorenew\n
`)
        break;
    case 3: alert(`Choose your normal data bundle (WITH EXPIRY)\n
1. All in one bundle\n
2. Daily bundle\n
3. 7Day Bundle\n
4. 30Day Bundle\n
5. Giga Bundle\n
6. Platinum\n
7. My data manager\n
8. more\n

`)
        break;
    case 4: alert(`Dear customer,your request was unsuccessful. Your blaze line does not qualifyfor migration. Dial *544# to unsubscribe from Blaze and try again. Thank you
`)
        break;
    case 5:alert(`You will receive SMS shortly
`)
        break;
    default:alert("Invalid choice. Try again")
}

function Databundle(){
    var rawDatabundle=prompt("Enter amount of choice you wish to spend")
    var cleanDatabundle=Number(rawDatabundle)
    switch (cleanDatabundle){
        case 1: alert(`Enter amount you wish to spend\n
1. Kshs 10\n
2. Kshs 20\n
3. Kshs 30\n
4. Kshs 40\n 
5. Kshs 50\n 
6. More\n
`)
            break;
        case 2:alert(`Choose the Number\n
1. 0707718142\n
2. 0715899407\n
3. 0721392276\n
4. 0720483176\n
`)
            break;
        case 3:alert(`Choose okoa amount\n 
1. Kshs 5\n 
2. Kshs 10\n 
3. Kshs 20\n 
4. Kshs 50\n 
5. Kshs 100\n
`)
            break;
        case 4:alert("You have successfully stoped autorenew")
            
    }
}

function calls(){
    var rawcalls=prompt("Enter amount You wish to spend")
    var cleancalls=Number(rawcalls)
    switch(cleancalls){
        case 1: alert
    }
}
