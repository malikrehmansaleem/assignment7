// 1-Personal Message: Store a person’s name in a variable, 
//and print a message to that person. Your message should be simple, such as, 
//“Hello Eric, would you like to learn some Python today?”
var eric:string = "Hello Eric, would you like to learn some Python today ";
console.log(eric);

//2-Name Cases: Store a person’s name in a variable, and then print that person’s name 
//in lowercase, uppercase, and titlecase.
var upperCase:string = "THE MUHAMMAD ALI JINNAH";
var lowerCase:string = "tHE muhammad ali jinnah";
var titleCase:string = "The Muhammad Ali Jinnah";
console.log("Uppercase ",upperCase);
console.log("Lowercase " ,lowerCase);
console.log("TitleCase",titleCase);
//3-Famous Quote: Find a quote from a famous person you admire. 
//Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Any sufficiently advance technology is indistinguishable from magic.
//Author C. Clarke
var famousQuote:string = '"Any sufficiently advance technology is indistinguishable form magic".';
console.log("Author C. Clarke once said,", famousQuote);
//4-famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name 
//in a variable
// called famous_person. Then compose your message and store it in a new variable 
//called message. Print your message.

var famous_person:string = "C. clarke"
var massege:string = " Any sufficiently advance technology is indistinguishable from magic.";
console.log(famous_person, massege)
//5-Stripping Names: Store a person’s name, and include some whitespace characters 
//at the beginning and end of the name. Make sure you use each character 
//combination, "\t" and "\n", at least once. Print the name once, so the whitespace 
//around the name is displayed. Then print the name after striping the white spaces.

var personName:string = '\t\n ahmad \t \n '
console.log("Name with whitespace", personName);
var stripName:string = personName.trim();
console.log("Strip Name",personName.trim());
 //6-Number Eight: Write addition, subtraction, multiplication, and division operations 
 //that each result in the number 8. Be sure to enclose your operations in print 
 //statements to see the results.
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.

console.log(4+4); //Addition: 4+4;
console.log(13-5);// Subtraction: 13-5;
console.log(2*4);// multiplication: 2 *4;
console.log(24/3);// DIVISION :24/3;
//7-Favorite Number: Store your favorite number in a variable. 
//Then, using that variable, create a message that reveals 
//your favorite number. Print that message.
// store favorite number in a variable
var favoriteNumber:number = 15; 
//create a message that reveals your favorite number.
var message:string = `My favorite Number is: ${favoriteNumber}`
// print the message
console.log(message);
//8-Adding Comments: Choose two of the programs you’ve written, 
//and add at least one comment to each. 
//If you don’t have anything specific to write because your programs 
//are too simple at this point, just add your name and the current date 
//at the top of each program file. Then write one sentence describing 
//what the program does.
// program 1 , my name is Rehman and current date.
//this two code is just add comments.
var message:string = "My Name is Rehman, Current Date = 16-03-2023"
console.log(message);
//program two
//this two code is just add comments.
var num:number = 15;
console.log(15);
//9-Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
//store few friends name in a array
var names:string[] = [ "Ali", "Irfan", "amir", "hassan", "musa"]
//console.log(names.length)
//console.log(names);
//print each person name by accessing each element in the list.
for (let i =0; i< names.length; i++) {
    console.log(names[i])
}
//Greetings: Start with the array you used in Exercise 11, but instead of just 
//printing each person’s name, print a message to them. The text of 
//each message should be the same, but each message should be personalized
//with the person’s name.
// store an array with name and personalized massage.
var greeting:string[] = [ "Ali", "Irfan", "amir", "hassan","musa"]
 //print each message personalized whith the person's name.
 for (let i=0; i<greeting.length; i++){
    console.log(`${greeting[i]}is my Best friend`)
 }
//Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”

//store a arry with mode of transportation name,
var car:string [] = ["Honda Civic","toyota Carmry","mazda 3 turbo","tesla electric car","kia forte"]
// print series of statement of car mode of transportation.
for(let i=0; i < car.length; i++){
    console.log(`I would like to own a ${car[i]}`)
}
//Guest List: If you could invite anyone, living or deceased, 
//to dinner, who would you invite? Make a list that includes at least 
//three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
//store list of a my livig friends in array
var livingGuestFriend:string[] =["Ali","Irfan","amir","hassan","Kashif"];
//print the three living friend for invition to dinner
for (let i=0; i<3; i++){
    console.log(`${livingGuestFriend[i]}:you are cordially invited to dinner at my place on Friday evening.! `)
};
//Changing Guest List: You just heard that one of your guests 
//can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
// take a priouse arra of living friend
var livingGuestFriend:string[] =["Ali","Irfan","amir","hassan","Kashif"];
//print the change invitation print result, when i heard amir in not comming on dinner.
livingGuestFriend.splice(2,0, "ahmad");
for(let i=0; i<3; i++){
console.log(`${livingGuestFriend[i]}:Your are cordially invited to dinner at my place on Sundy evening`)
}
// Start with your program from Exercise 14. Add a print statement at the end of 
//your program stating the name of the guest who can’t make it.
var livingGuestFriend:string[] =["Ali","Irfan","amir","hassan","Kashif"];
var guestWhoCanNotMakeIt:string = "amir"
 livingGuestFriend.splice(2,1 ,"ahmad")
 for(let i=0; i<3; i++){
    console.log(`${livingGuestFriend[i]} You are cordially invited to dinner at my place on sunday evening`)
 }

//console.log(`${guestWhoCanNotMakeIt} is not comming on dinner`)
console.log(`${guestWhoCanNotMakeIt} can't make it to the dinner.`);
//14-Modify your list, replacing the name of the guest who can’t make 
//it with the name of the new person you are inviting.
var livingGuestFriendOne:string[] =["Ali","Irfan","amir","hassan","Kashif"];
var replaceGuestFreind:string = "ahmad"
livingGuestFriendOne.splice(2,1,replaceGuestFreind)
for(let i = 0; i<3; i++){
    console.log(`${livingGuestFriendOne[i]}: you are cordially invited to dinner at my place on sunday evening`)
}
//15-• Print a second set of invitation messages, 
//one for each person who is still in your list.
var livingNewFriend:string[] = [ "Touqeer", "Mazhar","Faisal"];
for(let i=0; i<3; i++){
    console.log(`${livingNewFriend[i]}:you are cordially invited to dinner at my place on Monday`)
};
//More Guests: You just found a bigger dinner table, 
//so now more space is available. Think of three more guests to invite to dinner.

var moreGuest:string[] = ["Ali","Irfan","Kashif"]
moreGuest.splice(3,0,"Touqeer","Mazhar","kashif");
console.log(moreGuest);
for (let i=0; i<6; i++){
    console.log(`${moreGuest[i]}:you are cordially invited to dinner at my place on Monday`)
}
//• Start with your program from Exercise 15. Add a print statement to the end of your 
//program informing people that you found a bigger dinner table.
var livingNewFriend:string[] = [ "Touqeer", "Mazhar","Faisal"];
for(let i=0; i<3; i++){
    console.log(`${livingNewFriend[i]} you are cordially invited tof dinner at my place on monday becouse 
    I have found a bigger dinner table`)
}
//• Add one new guest to the beginning of your array.
var livingNewFriend:string[] = [ "Touqeer", "Mazhar","Faisal"];
livingNewFriend.unshift("nadeem");
console.log(livingNewFriend);
//• Add one new guest to the middle of your array. • 
//Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
livingNewFriend.splice(2,0,"tayyab");

livingNewFriend.push("khuram");
for (let i=0; i<livingNewFriend.length; i++){
    console.log(`${livingNewFriend[i]} You ar cordially invited to dinner at my place on monday`)
};
//Shrinking Guest List: You just found out that your new dinner table won’t 
//arrive in time for the dinner, and you have space for only two guests.
console.log(livingNewFriend.length)
livingNewFriend.splice(2,4);
console.log(livingNewFriend," due to not arrive of new dinner table so, i have only space of only two people")
//• Start with your program from Exercise 16. Add a new line that prints a message saying that 
//you can invite only two people for dinner.
for (let i=0; i<2; i++){
    console.log(`${livingNewFriend[i]} you are cordially invited to dinner at my pleace`)
}
//• Remove the last two names from your list, so you have an empty list. 
livingNewFriend.splice(0,2)
//Print your list to make sure you actually have an empty list at the end of your program.
console.log(`${livingNewFriend} now I have a empty list of friend for invitation`)
//18. Seeing the World: Think of at least five places in the world you’d like to visit. 
  
 //• Store the locations in a array. Make sure the array is not in alphabetical order. 
  var beautifulLocation:string[] =[ "Pakistan","Azerbijan","Uzbakstan","Swizerlan","Englind"];
 //• Print your array in its original order. 
  console.log(beautifulLocation);
 //• Print your array in alphabetical order without modifying the actual list.
 var alphabeticalorder:string[] = beautifulLocation.slice().sort()
 console.log(alphabeticalorder);
// • Show that your array is still in its original order by printing it. 
console.log(beautifulLocation);  
 //• Print your array in reverse alphabetical order without changing the order of the original list. 
  var reverseAlphabeticalOrder:string[] = beautifulLocation.slice().reverse()
  console.log(reverseAlphabeticalOrder);
 //• Show that your array is still in its original order by printing it again. 
  console.log(beautifulLocation);
 //• Reverse the order of your list. Print the array to show that its 
 //oorder has changed. 
 var reverseTwo:string[] = beautifulLocation.reverse()
 console.log("Reverse two:",reverseTwo);
  
 //• Reverse the order of your list again. Print the list to show it’s back to 
 //its original order. 
 var originalOrderTwo:string[] = reverseTwo.reverse();
 console.log("Orignal Order Two:",originalOrderTwo)
  
 //• Sort your array so it’s stored in alphabetical order. 
 //Print the array to show that its order has been changed. 
var alphabeticalOrderOne:string[] = originalOrderTwo.sort();
console.log("Alphabeticalorder One is:", alphabeticalOrderOne);
  
 //• Sort to change your array so it’s stored in reverse alphabetical order. 
 //Print the list to show that its order has changed. 
 var reverseOrderThree:string[] = alphabeticalOrderOne.reverse();
 console.log("reverse Order Three:", reverseOrderThree);
 //19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
 //print a message indicating the number 
 //of people you are inviting to dinner. 
 var inviteOnDinner:string [] = ["ali","irfan","ahmad" ];
 console.log(`${inviteOnDinner.length} are inviting on dinner on monday evening` )
 //20. Think of something you could store in a array. 
 //For example, you could make a list of mountains, rivers, countries, cities, 
 //languages, or anything else you’d like. 
 //Write a program that creates a list containing these items. 
 
 var nameOfCountries:string[] = ["Pakistan","India","Afghanistan","China","Sri Lanka"];
 console.log(nameOfCountries);
// 21. They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items. 
var person  ={name:"Ali",
age:25,
mobileNo:3008747433,
nationNo: 333020202020,
}
console.log(person.mobileNo)
console.log(person.age);
console.log(person.name);
console.log(person)
//22. Intentional Error: If you haven’t received an array index error in one of your programs 
//yet, try to make one happen. Change an index in one of your programs 
//to produce an index error. Make sure you correct the error before closing the program. 
var newArray:number[] = [1,2,3,4,5]
if(newArray[5]){
    console.log(newArray)
}
else{
    console.log("The 5 index is not defined it a error")
}

//23-Conditional Tests: Write a series of conditional tests. Print a statement 
 //describing each test and your prediction for the results of each test. Your code 
 //should look something like this: 
  
 var carOne:string = "subaru"; 
  
 console.log("Is car == 'subaru'? I predict True.") 
  
 console.log(carOne == 'subaru') 
 console.log(carOne != 'subaru') 
  
 //• Look closely at your results, and make sure you understand why each line evaluates to True
 // or False. 
  
 //• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests 
 //evaluate to False. 
 let myName:string = "Rehman"
 console.log("My Name",myName == "Rehman");
 console.log(myName != "Rehman");
 let myJobCompany:string = "The Bank Of Punjab"
 console.log("Job",myJobCompany == "The Bank Of Punjab");
 console.log(myJobCompany != "The Bank of Pujab");
 let age:number = 31;
 console.log("age",age == 31);
 console.log(age != 31);
 let education:string = "Master In Commerce"
 console.log("education",education == "Master In Commerce");
 console.log(education != "Master In Commerce");
 let myBike:string = "honda";
 console.log("mybike", myBike == "honda");
 console.log(myBike != "honda")
 





 