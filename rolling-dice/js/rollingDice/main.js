// Put your code here
console.log("Let's roll some dice, baby!");
console.log("---------------------------");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





  const dieString = (die) => {
    if (die === 1) {
        return "one"
    } else if (die === 2)
{
    return "two"
}  
    else if (die === 3) {
        return "three"
    }

    else if (die === 4) {
        return "four"
    }

    else if (die === 5) {
        return "five"
    }
    else if (die === 6) {
        return "6ix"
    }

}
for (let i = 0; i < 10; i++)
{
    let die1 = getRandomInt(1,6);
    let die2 = getRandomInt(1,6)

    let message = `${die1} + ${die2} == ${die1 + die2}`;
    if (die1 == die2)
    {
        message += " DOUBLES!";
    }

    console.log(message);
}