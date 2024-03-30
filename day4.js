//*-----------------------------------------------------
//*  Interview Question:
//*-----------------------------------------------------

//? Write a function called checkTriangleType that takes three parameters representing the lenghts of the sides of a triangle . The function should return a string indicating the type of triangle: "equilateral", "isosceles" , or "scalene".

const checkTriangleType = (a,b,c) => {
    if(a===b&&b===c){
         return ("equilateral");
    }
    else if (a===c&& c!==b || a==b && a!==c) {
        return ("isosceles");
    }
    else{
       return ("scalene"); 
    }
}

console.log(checkTriangleType(3,3,3)); // Output : "equilateral"
console.log(checkTriangleType(4,3,4)); // Output : "isosceles"
console.log(checkTriangleType(5,8,6)); // Output : "scalene"



//todo The function should adhere to the following rules:
//? If all three sides are of equal lenght, return "equilateral"
//? If only two sides are of equal lenght , return "isosceles"
//? If all three sides have different lenghts , return "scalene".
