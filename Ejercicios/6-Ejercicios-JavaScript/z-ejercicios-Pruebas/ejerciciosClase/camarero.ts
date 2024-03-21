const dinner: Array<string> = [];
dinner.push("🍔");
dinner.push("🌭");
console.log(dinner);
dinner.push("🍟", "🍟");
console.log(dinner);
dinner[dinner.length] = "🍹";
dinner[dinner.length] = "🍹";
console.log(dinner);
// Utilizando .reverse.
const dinnerReverse: Array<string> = [];
dinner.forEach((element) => {
  dinnerReverse.push(element);
});
console.log(dinnerReverse.reverse());
//Utlizando bucle for con array auxiliar.
const dinnerForArray: Array<string> = [];
for (let i = dinner.length - 1; i >= 0; i--) {
  dinnerForArray.push(dinner[i]);
}
console.log(dinnerForArray);
// Utilizando bucle for sin array auxiliar.
const dinner2: Array<string> = [];
dinner.forEach((element) => {
  dinner2.push(element);
});
for (let i = 0; i < Math.floor(dinner2.length / 2); i++) {
  const temp = dinner2[i];
  dinner2[i] = dinner2[dinner2.length - 1 - i];
  dinner2[dinner2.length - 1 - i] = temp;
}
console.log(dinner2);
// Utilizando bucle forEach  sin array auxiliar.
dinner.forEach((element, index, array) => {
  const reversedIndex = array.length - 1 - index;
  if (index < reversedIndex) {
    [array[index], array[reversedIndex]] = [array[reversedIndex], array[index]];
  }
});
console.log(dinner);
dinner.unshift("🍸");
console.log(dinner.join(" - "));

// Parte de unir dos tickets.
const ticket01 = ["🍺", "🍺", "🥜"];
const ticket02 = ["🍺", "🥪", "🥙"];
// Utilizando el .concat().
const combinedTicket = ticket01.concat(ticket02);
console.log(combinedTicket);
// Utlizando spread operator.
const combinedTicket2 = [...ticket01, ...ticket02];
console.log(combinedTicket2);
// Utilizando push.
const combinedTicket3: Array<string> = [];
combinedTicket3.push.apply(combinedTicket3, ticket01);
combinedTicket3.push.apply(combinedTicket3, ticket02);
console.log(combinedTicket3);
// Utilizando bucle for
const combinedTicket4: Array<string> = [];
for (let i = 0; i < ticket01.length; i++) {
  combinedTicket4.push(ticket01[i]);
}
for (let i = 0; i < ticket02.length; i++) {
  combinedTicket4.push(ticket02[i]);
}
console.log(combinedTicket4);
// Utilizando forEach
const combinedTicket5: Array<string> = [];
ticket01.forEach((element) => combinedTicket5.push(element));
ticket02.forEach((element) => combinedTicket5.push(element));
console.log(combinedTicket5);

//Borrando el principio y final
combinedTicket.pop();
combinedTicket.shift();
console.log(combinedTicket);
