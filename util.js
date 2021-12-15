var mqtt = { hostname: "co2.quest", port: 9393 };
var topic_name = "vt/dd";
var topic1_name = "sf/dd";
var topic2_name = "pl/dd";
var publish_cnt = 0;
var dataTopics = new Array();
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost: "+responseObject.errorMessage);
  }
}
// called when a message arrives
function onMessageArrived(message) { if(message.destinationName == "vt/dd")

demo.innerHTML = "  "+message.payloadString;

  console.log("  "+ message.payloadString);
  
    if(message.destinationName == "sf/dd")
      demo1.innerHTML = "  "+ message.payloadString;
      console.log(" "+ message.payloadString);
  
     if(message.destinationName == "pl/dd")
      demo2.innerHTML = "  "+ message.payloadString;
      console.log(" "+ message.payloadString)
}


