/*

    here are the items we believe we need to produce for each days coffee

    pic - image src
    alt - the alt tag for the image
    color - color to match the image
    desc - description of coffee
    name - name of the coffee
    day - the day of the week

*/

function coffeeTemplate(coffee){
return `

<p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
             <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>

`;
}

let myDate = new Date();

let today = myDate.getDay();

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

//today =6;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 } 

today = parseInt(today);
 
 //console.log(today);

switch(today){

    case 0:
        today = "Sunday";
        coffee = {
          name:"Caramel Latte",
          color: "green",
          pic: "images/caramel-latte.jpg",
          alt: "A picture of a Caramel Latte",
          day: "Sunday",
          desc: `I want some Caramel!`
        };
    break;

    case 1:
        today = "Monday";
        coffee = {
          name:"Bubble Tea",
          color: "pink",
          pic: "images/bubble-tea.jpg",
          alt: "A picture of a bubble tea",
          day: "Wednesday",
          desc: `I like me some bubble tea!`
        };
    break;
    
    case 2:
        today = "Tuesday";

        coffee = {
            name:"Drip",
            color: "black",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee",
            day: "Tuesday",
            desc: `Give it to me staright!`
          };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            name:"cold brew",
            color: "gray",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold-brew coffee",
            day: "Wednesday",
            desc: `I like it cold!`
          };
    break;

    case 4:
        today = "Thursday";
        coffee = {
          name:"Frappaccino",
          color: "red",
          pic: "images/frappaccino.jpg",
          alt: "A picture of a frappaccino",
          day: "Thusday",
          desc: `I Want something sweat!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
          name:"Mocha",
          color: "lightbrown",
          pic: "images/mocha.jpg",
          alt: "A picture of a mocha",
          day: "Friday",
          desc: `I like me some mocha!`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
          name:"Pumpkin Spice Latte",
          color: "orange",
          pic: "images/pumpkin-spice-latte.jpg",
          alt: "A picture of a pumpkin spice latte",
          day: "Saturday",
          desc: `Give me the special!`
        };
    break;

    default:
        today = "Not sure what day it is!";

}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;





//alert(today);
console.log(coffee);
