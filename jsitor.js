
//#1 1 funkcija, I kuria paduosite varda
function showName(name = 'Laura'){
    alert(name);
  }
  showName();
  
  //#1 2 funkcija, kuri grazins random skaiciu, nuo 5 iki 1
  function showNumber(x){
    return Math.random()
  }
  let result = Math.floor(Math.random() * 5) + 1;
  console.log(result)
  
  //#1 3 suskaiciuoti zodziu sumos ilgi
  function countWords(name = "Laura", surname = "Krapauskaitė"){
    return name.length +surname.length;
  }
  console.log(countWords())
  
  //#1 4 funkcija, kuri pagal amziu leis arba neleis pirkti energetinio
  const legalAge = 18;
  let age = 12;
  
  function checkAge(age){
    if (age >= legalAge){
    alert ("Confirmed");
    return "You can buy the drink"
  }
    if(age < legalAge){
    alert ("Under 18");
    return "Parents consent"
  }
  }
   console.log (checkAge(age))
  
  //#1 5 fukcija, kuri pagal duota skaiciu grazina abeceles raide
  function letter(index){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet[index -1]
  }
  console.log(letter(2))
  
  //#1 6 parametrai, apskaiciuoti ir isvesti veiksmus
  function calculate(n1=11, n2=22, operator=''){
   switch (operator){
    case 'sum':
     return n1 + n2;
    case 'sub':
      return n1 - n2;
    case 'div':
      return n1 / n2;
    case 'multi':
      return n1 * n2;
   }
  }
  console.log (calculate(11,22,'sum'))
  console.log(calculate(11, 22, 'sub'))
  console.log(calculate(11, 22, 'div'))
  console.log(calculate(11, 22, 'multi'))
  
  //#1 6 random skaicius, nuo 1-10, o kitoj funkcijoj ji pakelia kvadratu
  function randomNumber(x){
    return Math.floor(Math.random()*10+1);
  }
  function squareNumber(){
    return (Math.floor(Math.random() * 10 + 1) ** 2);
  }
  const randomNum = randomNumber()
  console.log(squareNumber(randomNumber()))
  
  //#2 1 funkcija, I kuria paduosite varda
  const showName =  () => alert('Laura');
  showName()
  
  //#2 2 funkcija, kuri sugeneruos ir grazins random skaiciu tarp 1 ir 5
  const showNumber = (x) => Math.floor(Math.random() * 5) + 1;
  let result = showNumber();
  console.log(result)
  
  //#2 3
  let calculateNameLength = (name = 'Laura', surname = 'Krapauskaitė') => name.length + surname.length
  console.log(calculateNameLength())
  
  //masyvai
  //#1 1
  const fruits = ['Apple', 'Banana', 'Cherry'];
  console.log("Apple")
  
  //#1 2 access the second item in the array
  const fruits = ['Apple', 'Banana', 'Cherry'];
  console.log(fruits[1])
  
  //#1 3
  const fruits = ['Apple', 'Banana', 'Cherry', 'Durian'];
  console.log(fruits.length)
  
  //#1 4 panaikinti paskutini elementa
  const fruits = ['Apple', 'Banana', 'Cherry', 'Durian'];
  fruits.pop();
  console.log(fruits)
  
  //#1 5 panaikinti pirma elementa
  const fruits = ['Apple', 'Banana', 'Cherry', 'Durian'];
  fruits.shift();
  console.log(fruits)
  
  //#1 6 prideti nauja pirma elementa
  const fruits = ['Apple', 'Banana', 'Cherry', 'Durian'];
  fruits.unshift('Strawberry');
  console.log(fruits)
  
  //#1 7 pakeisti trecia elemnta i mango
  const fruits = ['Apple', 'Banana', 'Cherry', 'Durian'];
  fruits.unshift('Strawberry');
  fruits[2]='Mango';
  console.log(fruits)
  
