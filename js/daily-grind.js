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
    		 <img src="images/pumpkin-spice-latte.jpg" alt="Our Pumpkin Spice Latte tastes great on a Fall Day!" id="coffee" />
            <strong class="feature">Monday's Coffee Special:</strong> Monday's daily coffee special is <strong class="feature">Pumpkin Spice Latte</strong>, which makes us wish it was always Fall, as this is one of our top sellers!</p>

`;

  
}

let myDate = new Date();

let today = myDate.getDay();

//today =3;

switch(today){

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
    break;

    case 3:
        today = "Wednesday";
    break;

    default:
        today = "Not sure what day it is!";

}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);




//alert(today);
console.log(coffee);
