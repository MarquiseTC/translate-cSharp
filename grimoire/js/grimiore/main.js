// Put your code here
console.log("Do you believe in magic?")
console.log("------------------------")

const allSpells = [ 
    {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
   
]

const displaySpellBooks = () => {
    const goodBooks = []
    const evilBooks = []
let message = ""
for( let singleSpell of allSpells){
   if(singleSpell.IsEvil === true){
    singleSpell.title = "Evil Book"
   } 
   else{
    singleSpell.title = "Good Book"
} 
if (singleSpell.IsEvil === false){
    goodBooks.push(singleSpell)
}
else {
    evilBooks.push(singleSpell)
}
}
console.log("Good Books")
for (let singleGoodBook of goodBooks){
    console.log(`${singleGoodBook.Name}`)
}
console.log("Evil Books")
for(let singleEvilBook of evilBooks){
    console.log(`${singleEvilBook.Name}`)
}
}
displaySpellBooks()