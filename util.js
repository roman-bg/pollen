var mqtt = { hostname: "co2.quest", port: 9393 };
var topic_name = "light/dli";
var publish_cnt = 0;
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost: "+responseObject.errorMessage);
  }
}
// called when a message arrives
function onMessageArrived(message) {
  console.log(message.payloadString);
  var demo = document.getElementById("demo");
demo.innerHTML = message.payloadString;
} 
