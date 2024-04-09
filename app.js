//1. დაწერეთ for ციკლი, 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i //
for (let i = 0; i <= 20; i++) {
    console.log(i);
}


//2. დაწერეთ while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i/


let i = 0;
while (i <= 30) {
    console.log(i);
    i++;
}

//3. დაწერეთ do while ციკლი 0 დან 40 - მდე console.log ში დაბეჭდეთ ინდექსი i//

let b = 0;
do {
    console.log(b);
    b++;
} while (b <= 40);



//3. დაწერეთ do while ციკლი 0 დან 40 - მდე console.log ში დაბეჭდეთ ინდექსი i//

let c = 0;
do {
    console.log(c);
    c++;
} while (c <= 40);


//4. მოცემული გვაქვს მასივი const numbers = [1,2,5,7,8,10,23,24,26]. for ლუპის დახმარებით შეამოწმეთ მასივის ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.
//

const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}



//5//

const currentDay = new Date().getDay();

switch (currentDay) {
    case 0:
        console.log("კვირა");
        break;
    case 1:
        console.log("ორშაბათი");
        break;
    case 2:
        console.log("სამშაბათი");
        break;
    case 3:
        console.log("ოთხშაბათი");
        break;
    case 4:
        console.log("ხუთშაბათი");
        break;
    case 5:
        console.log("პარასკევი");
        break;
    case 6:
        console.log("შაბათი");
        break;
    default:
        console.log("არასწორი დღე");
}
