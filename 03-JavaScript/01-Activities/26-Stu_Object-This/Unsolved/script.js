//this grabs the window object
console.log(this);
//window
function helloThis() {
  //this grabs the window object 
  console.log('Inside this function, this is ' + this);
}
//the child, 20
var child = {
  age: 10,
  ageTenYears: function () {
    //this grabs age inside of child object
    console.log(this.age + 10);
  },
};
//investment
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
