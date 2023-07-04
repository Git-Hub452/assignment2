//Question1

function a(num) {
  if (num < 0) console.log("positive");
  else console.log("negative");
}
a();

//Question2

largestNum = (para) => {
  let large = para[0];
  for (let i = 0; i < para.length; i++) {
    if (para[i] > large) {
      large = para[i];
    }
  }
  console.log(large);
};

let arr = [20, 30, 40, 50];
largestNum(arr);
         //Question 3
         let obj={
            area(r,h){
                return(3.14*r*r*h)
            }
        }
           console.log(obj.area(2,4));
             //Question4
             //the output of above code is undefined
//In JavaScript, variable declarations are hoisted to the top of their scope, but not their initializations. This means that the var temp declaration inside the display function is hoisted to the top, but its assignment (var temp = 'bye';) remains in place.
//Therefore, when you call the display function, the first console.log(temp) statement is executed before the temp variable inside the function is assigned the value 'bye'. Since temp is not yet defined at that point, it is undefined
        
