//Isaac Peterson

//nrempel.com/posts/using-udp-multicast-with-nodejs/
//defining port/address and binding them
const PORT = 0001;
const MULTICAST_ADDR = "233.255.255.255";
const dgram = require("dgram");
const process = require("process");
const socket = dgram.createSocket({ type: "udp4", reuseAddr: true });
socket.bind(PORT);

//help text
var help = "\nFor Help.................help\n" + 
           "To Change Username....setname\n" +
           "To Quit..................quit\n\n";

console.log(help);

//For IO
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

socket.on("listening", function() {
  socket.addMembership(MULTICAST_ADDR);
  const address = socket.address();
});

socket.on("message", function(msg, rinfo) {
  //clear the current line and reset the cursor to the left
  process.stdout.clearLine();
  console.log(`\r${msg}`);

  //get the next message
  sendMessage();
});

//declare username and get user input
var username = "";
GetUsername();

function GetUsername(){
  rl.question('What is your Username: ', (answer) => {
  username = answer;

  //display login message
  LoggedOn(username);
  });

}

function LoggedOn(name){
    ans = name + " has joined the party... yay?";
    socket.send(ans, 0, ans.length, PORT, MULTICAST_ADDR);
}

//gets user input and tests for various conditions, otherwise sends it
function sendMessage(message) {
  rl.question('Text: ', (ans) => {
    if(ans == "quit"){
      socket.close();
      process.exit();
    }
    if(ans == "setname"){
      GetUsername();
    }
    if(ans == "help"){
      console.log(help);
      sendMessage();
    }
    else{
      ans = username + ": " + ans;
      socket.send(ans, 0, ans.length, PORT, MULTICAST_ADDR);
    }

  });
}











