// describing all the varibles used in the frontend part
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let alertt = document.getElementById('alert');
let pass = document.getElementById('pass');
let x = document.getElementById('x');
let xx = document.getElementById('xx');
let nt = document.getElementById('nt');
let spade = document.getElementById('spade');
let heart = document.getElementById('heart');
let diamond = document.getElementById('diamond');
let tree = document.getElementById('tree');
let out_1 = document.getElementById('out_1');
let out_2 = document.getElementById('out_2');
let out_3 = document.getElementById('out_3');
let play = document.getElementById('play');
let row_1 = document.getElementById('row_value_one');
let row_2 = document.getElementById('row_value_two');
let row_3 = document.getElementById('row_value_three');
let row_4 = document.getElementById('row_value_four');
let row_5 = document.getElementById('row_value_five');
let row_6 = document.getElementById('row_value_six');
let row_7 = document.getElementById('row_value_seven');
let row_8 = document.getElementById('row_value_8');
let row_9 = document.getElementById('row_value_9');
let row_10 = document.getElementById('row_value_10');
let row_11 = document.getElementById('row_value_11');
let row_12 = document.getElementById('row_value_12');
let row_13 = document.getElementById('row_value_13');
let row_14 = document.getElementById('row_value_14');
let row_15 = document.getElementById('row_value_15');
let row_16 = document.getElementById('row_value_16');

let row_17 = document.getElementById('row_value_17');
let row_18 = document.getElementById('row_value_18');
let row_19 = document.getElementById('row_value_19');
let row_20 = document.getElementById('row_value_20');
let stop = document.getElementById('stop');
let w = document.getElementById('w');
let n = document.getElementById('n');
let s = document.getElementById('s');
let e = document.getElementById('e');
let pre = document.getElementById('pre');
let ford = document.getElementById('ford');
let i,k,l,o;

// adding the event listner to the buttons which is used in the front end

one.addEventListener('click', ()=>{
    console.log("I am 1");
    out_2.innerText = 1;
})

two.addEventListener('click', ()=>{
    console.log("I am 2");
    out_2.innerText = 2;
})
three.addEventListener('click', ()=>{
    console.log("I am 3");
    out_2.innerText = 3;
})
four.addEventListener('click', ()=>{
    console.log("I am 4");
    out_2.innerText = 4;
})
five.addEventListener('click', ()=>{
    console.log("I am 5");
    out_2.innerText = 5;
})
six.addEventListener('click', ()=>{
    console.log("I am 6");
    out_2.innerText = 6;
})
seven.addEventListener('click', ()=>{
    console.log("I am 7");
    out_2.innerText = 7;
})
alertt.addEventListener('click', ()=>{
    console.log("I am alert");
})


nt.addEventListener('click', ()=>{
    console.log("I am NT");
    out_3.innerText = "NT";
})
heart.addEventListener('click', ()=>{
    console.log("I am heart");
    out_3.innerText = "❤️";
})
spade.addEventListener('click', ()=>{
    console.log("I am spade");
    out_3.innerText = "♠";
})
diamond.addEventListener('click', ()=>{
    console.log("I am diamond");
    out_3.innerText = "♦";
})

tree.addEventListener('click', ()=>{
    console.log("I am tree");
    out_3.innerText = "♣";
})

   
alertt.addEventListener('click', ()=>{
    alert("Alerting message goes here");
})


stop.addEventListener('click', ()=>{
    alert("Stop Playing This Game");
})

w.addEventListener('click', ()=>{
    console.log("W");
    alert("The Dealer Is W");
   let j = w.textContent;
   out_1.innerText = j;
   i = 0;
})

n.addEventListener('click', ()=>{
    console.log("N");
    alert("The Dealer Is N");
    let j = n.textContent;
   out_1.innerText = j;
   k =0;
})
s.addEventListener('click', ()=>{
    console.log("S");
    alert("The Dealer Is S");
    let j = s.textContent;
   out_1.innerText = j;
   l = 0;
})
e.addEventListener('click', ()=>{
    console.log("E");
    alert("The Dealer Is E");
    let j = e.textContent;
   out_1.innerText = j;
   o = 0;
})

// document.querySelectorAll(".row_value");


// let sideArray = ['W','N','E','S'];

// var index = 0;
// console.log(sideArray[index]);

// let gameArray = [];


// play.addEventListener("click", () => {
//  if(out_1.textContent == sideArray[0]){
//   let j1 = out_2.textContent + out_3.textContent;
//   gameArray.push(j1);
  

//  }

// })

let bidValues = ["1NT", "1♠", "1❤️", "1♦", "1♣", "2NT", "2♠", "2❤️", "2♦", "2♣", "3NT", "3♠", "3❤️", "3♦", "3♣", "4NT", "4♠", "4❤️", "4♦", "4♣", "5NT", "5♠", "5❤️", "5♦", "5♣", "6NT", "6♠", "6❤️", "6♦", "6♣", "7NT", "7♠", "7❤️", "7♦", "7♣"];

let currentBid = ""; // This variable will hold the current bid value.

function makeBid(bid) {
  // Check if the bid is valid.
  if (bidValues.includes(bid)) {
    // Check if the bid is higher than the current bid.
    if (bidValues.indexOf(bid) > bidValues.indexOf(currentBid)) {
      // Update the current bid.
      currentBid = bid;
      // Display the current bid.
      console.log("Current bid: " + currentBid);
    } else {
      // Display an error message if the bid is not higher than the current bid.
      console.log("Invalid bid. Please make a higher bid.");
      alert("Invalid bid. Please make a higher bid.")
    }
  } else {
    // Display an error message if the bid is not valid.
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");
  }
}



// play.addEventListener('click', ()=>{



// })


// making the play event run through if else conditions
// making the conditions across it

// 1NT > 1♠ > 1❤️ > 1♦ > 1♣
// 2NT > 2♠ > 2❤️ > 2♦ > 2♣
// 3NT > 3♠ > 3❤️ > 3♦ > 3♣
// 4NT > 4♠ > 4❤️ > 4♦ > 4♣
// 5NT > 5♠ > 5❤️ > 5♦ > 5♣
// 6NT > 6♠ > 6❤️ > 6♦ > 6♣
// 7NT > 7♠ > 7❤️ > 7♦ > 7♣

x.addEventListener('click', ()=>{
  console.log("I am double the value");
  out_2.textContent = "X";
  
  
})
xx.addEventListener('click', ()=>{
    console.log("I am re double the value");
    out_2.textContent = "XX";
  
    
})
pass.addEventListener('click', ()=>{
  console.log("I am pass");
  
  out_2.textContent = "P";
  
  
})

let previousBid = null;
let zField = 0;
let yField = 0;

function makeBidXpXX(bidType) {
  let currentBid;

  switch (bidType) {
    case 'P':
      currentBid = 0;
      break;
    case 'X':
      currentBid = previousBid * 2;
      break;
    case 'XX':
      currentBid = previousBid * 4;
      break;
    default:
      // Handle error for invalid bid type
      break;
  }

  if (currentBid !== 0 && currentBid <= previousBid) {
    // Handle error for illegal bid
    return;
  }

  previousBid = currentBid;

  if (currentBid !== 0) {
    zField = 0;
    yField = currentBid;
  }

  // Update UI with new bid
}

function endAuction() {
  // Set zField to the winning bid value (1 to 35)
  // Update UI with winning bid and other auction results
}





play.addEventListener('click', ()=>{
   i++;
   k++;
   l++;
   o++;
   console.log(i);
   console.log(k);
   console.log(l);
   console.log(o);
  
   if(i <=20){
   if(out_1.textContent == 'W' && i==1 ){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
    
     // Check if the bid is valid.

     
  if (bidValues.includes(j1)) {
    // Check if the bid is higher than the current bid.
    if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
      // Update the current bid.
      currentBid = j1;
      // Display the current bid.
      console.log("Current bid: " + currentBid);
      row_1.innerText = j1;
    } else {
      // Display an error message if the bid is not higher than the current bid.
      console.log("Invalid bid. Please make a higher bid.");
      alert("Invalid bid. Please make a higher bid.")
      i--;
    }
  } else {
    // Display an error message if the bid is not valid.
    if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_1.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
  }

  
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==2){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_2.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_2.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      i--;
      }
    }
  
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==3){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_3.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_3.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      i--;
      }
    }
    out_2.innerText = "";
    out_3.innerText = "";
   }else if(i==4){
    
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_4.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_4.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==5){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_5.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_5.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==6){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_6.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_6.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==7){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
    
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_7.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_7.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==8){
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
    
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_8.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_8.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==9){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_9.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_9.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==10){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_10.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_10.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==11){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_11.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_11.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==12){
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_12.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_12.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==13){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_13.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_13.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==14){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_14.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_14.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==15){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_15.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_15.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==16){
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_16.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_16.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==17){
    out_1.innerText = "N";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_17.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_17.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==18){
    out_1.innerText = "S";
    let j1 = out_2.textContent + out_3.textContent;
    
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_18.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_18.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else if(i==19){
    out_1.innerText = "E";
    let j1 = out_2.textContent + out_3.textContent;
    
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_19.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_19.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
   }else {
    out_1.innerText = "W";
    let j1 = out_2.textContent + out_3.textContent;
   
    if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_20.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        i--;
      }
    } else {
      // Display an error message if the bid is not valid.
     if(j1 == "X" || j1 == "XX" || j1 == "P" ){
      row_20.innerText = j1;
    }else{
    console.log("Invalid bid. Please choose a valid bid from the bidding box.");
    alert("Invalid bid. Please choose a valid bid from the bidding box.");

    i--;
    }
    }
  out_2.innerText = "";
  out_3.innerText = "";
  i=0;

  row_1.innerText = "";
  row_2.innerText = "";
  row_3.innerText = "";
  row_4.innerText = "";
  row_5.innerText = "";
  row_6.innerText = "";
  row_7.innerText = "";
  row_8.innerText = "";
  row_9.innerText = "";
  row_10.innerText = "";
  row_11.innerText = "";
  row_12.innerText = "";
  row_13.innerText = "";
  row_14.innerText = "";
  row_15.innerText = "";
  row_16.innerText = "";
  row_17.innerText = "";
  row_18.innerText = "";
  row_19.innerText = "";
  row_20.innerText = "";
   }
}

if(l <= 20){
    if(out_1.textContent == 'S'  && l==1 ){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_4.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        l--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_4.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      l--;
      }
    }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==2){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_5.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        l--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_5.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      l--;
      }
    }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==3){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_6.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        l--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_6.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      l--;
      }
    }
        out_2.innerText = "";
        out_3.innerText = "";
       }else if(l==4){
        
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_7.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        l--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_7.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      l--;
      }
    }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==5){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_8.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        l--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_8.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      l--;
      }
    }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==6){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
      if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_9.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        l--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_9.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      l--;
      }
    }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==7){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
     if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_10.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        l--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_10.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      l--;
      }
    }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==8){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
      if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_11.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        l--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_11.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      l--;
      }
    }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==9){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
      if (bidValues.includes(j1)) {
      // Check if the bid is higher than the current bid.
      if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
        // Update the current bid.
        currentBid = j1;
        // Display the current bid.
        console.log("Current bid: " + currentBid);
        row_12.innerText = j1;
      } else {
        // Display an error message if the bid is not higher than the current bid.
        console.log("Invalid bid. Please make a higher bid.");
        alert("Invalid bid. Please make a higher bid.")
        l--;
      }
    } else {
      // Display an error message if the bid is not valid.
      if(j1 == "X" || j1 == "XX" || j1 == "P" ){
        row_12.innerText = j1;
      }else{
      console.log("Invalid bid. Please choose a valid bid from the bidding box.");
      alert("Invalid bid. Please choose a valid bid from the bidding box.");
  
      l--;
      }
    }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==10){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_13.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_13.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==11){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_14.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_14.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==12){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_15.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_15.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==13){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_16.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_16.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==14){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_17.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_17.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==15){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_18.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_18.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==16){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_19.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_19.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==17){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_20.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_20.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==18){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_1.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_1.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(l==19){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_2.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_2.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else {
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_3.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            l--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_3.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          l--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
      l=0;
    
      row_1.innerText = "";
      row_2.innerText = "";
      row_3.innerText = "";
      row_4.innerText = "";
      row_5.innerText = "";
      row_6.innerText = "";
      row_7.innerText = "";
      row_8.innerText = "";
      row_9.innerText = "";
      row_10.innerText = "";
      row_11.innerText = "";
      row_12.innerText = "";
      row_13.innerText = "";
      row_14.innerText = "";
      row_15.innerText = "";
      row_16.innerText = "";
      row_17.innerText = "";
      row_18.innerText = "";
      row_19.innerText = "";
      row_20.innerText = "";
       }
}

if(o <=20){
    if(out_1.textContent == 'E'  && o==1){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_3.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_3.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==2){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_4.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_4.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==3){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_5.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_5.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }
        out_2.innerText = "";
        out_3.innerText = "";
       }else if(o==4){
        
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_6.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_6.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==5){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_7.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_7.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==6){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_8.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_8.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==7){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_9.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_9.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==8){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_10.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_10.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }
      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==9){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_11.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_11.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==10){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_12.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_12.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==11){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_13.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_13.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==12){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_14.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_14.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==13){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_15.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_15.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==14){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_16.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_16.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==15){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_17.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_17.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==16){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_18.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_18.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==17){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_19.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_19.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==18){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_20.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_20.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(o==19){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_1.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_1.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else {
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_2.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            o--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_2.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          o--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
      o=0;
    
      row_1.innerText = "";
      row_2.innerText = "";
      row_3.innerText = "";
      row_4.innerText = "";
      row_5.innerText = "";
      row_6.innerText = "";
      row_7.innerText = "";
      row_8.innerText = "";
      row_9.innerText = "";
      row_10.innerText = "";
      row_11.innerText = "";
      row_12.innerText = "";
      row_13.innerText = "";
      row_14.innerText = "";
      row_15.innerText = "";
      row_16.innerText = "";
      row_17.innerText = "";
      row_18.innerText = "";
      row_19.innerText = "";
      row_20.innerText = "";
       }
}

if(k <=20){
    if(out_1.textContent == 'N'  && k==1){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_2.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
          if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_2.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }      out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==2){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_3.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_3.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==3){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_4.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_4.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }         out_2.innerText = "";
        out_3.innerText = "";
       }else if(k==4){
        
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_5.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_5.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==5){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_6.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_6.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==6){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_7.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_7.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==7){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_8.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_8.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==8){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_9.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_9.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==9){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_10.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_10.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==10){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_11.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_11.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==11){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_12.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_12.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==12){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_13.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_13.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==13){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_14.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_14.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==14){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_15.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_15.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==15){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_16.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_16.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==16){
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_17.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_17.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==17){
        out_1.innerText = "E";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_18.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_18.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==18){
        out_1.innerText = "S";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_19.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_19.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else if(k==19){
        out_1.innerText = "W";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_20.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_20.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
       }else{
        out_1.innerText = "N";
        let j1 = out_2.textContent + out_3.textContent;
        if (bidValues.includes(j1)) {
          // Check if the bid is higher than the current bid.
          if (bidValues.indexOf(j1) > bidValues.indexOf(currentBid)) {
            // Update the current bid.
            currentBid = j1;
            // Display the current bid.
            console.log("Current bid: " + currentBid);
            row_1.innerText = j1;
          } else {
            // Display an error message if the bid is not higher than the current bid.
            console.log("Invalid bid. Please make a higher bid.");
            alert("Invalid bid. Please make a higher bid.")
            k--;
          }
        } else {
          // Display an error message if the bid is not valid.
         if(j1 == "X" || j1 == "XX" || j1 == "P" ){
            row_1.innerText = j1;
          }else{
          console.log("Invalid bid. Please choose a valid bid from the bidding box.");
          alert("Invalid bid. Please choose a valid bid from the bidding box.");
      
          k--;
          }
        }       out_2.innerText = "";
      out_3.innerText = "";
      k=0;
    
      row_1.innerText = "";
      row_2.innerText = "";
      row_3.innerText = "";
      row_4.innerText = "";
      row_5.innerText = "";
      row_6.innerText = "";
      row_7.innerText = "";
      row_8.innerText = "";
      row_9.innerText = "";
      row_10.innerText = "";
      row_11.innerText = "";
      row_12.innerText = "";
      row_13.innerText = "";
      row_14.innerText = "";
      row_15.innerText = "";
      row_16.innerText = "";
      row_17.innerText = "";
      row_18.innerText = "";
      row_19.innerText = "";
      row_20.innerText = "";
       }
}
}



)


// previous and froward btn event listner

pre.addEventListener('click', ()=>{
  console.log("this is the previous button");
 
})

ford.addEventListener('click', ()=>{
  console.log("this is the forward button");
  if(row_20.textContent = ""){
    console.log("this is the previous button under the if statement");
}else {
console.log("this else part pevious");
}
})


