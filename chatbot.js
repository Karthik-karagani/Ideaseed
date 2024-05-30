function talk(){
    var know = { 
    "i'd like to invest in this idea, i hope it works" : "thats great!let me share my contact details with you, lets catch up soon and discuss about it.",
    "can't we complete this in some little wages than your expecting?" : "we'll try to do it, once if we go on a collab as we can discuss later on" ,
    "how can you sure about this idea as it makes good profits?" : "this is an innovative idea which has no compitetion in the market in this field, as of new it works accordingly." ,
    "what is your expectation on this project regarding budget?" : "this might take nearly 200$ to start and developing takes further."  ,
    "your idea looks good" : "thanks! do you like to move forward on that?",
    "hi" : "hello",
    "Do you like the project" : "yeah! that's great",
    "Shall we continue by collabing the project" : "sure:)",
    "Do you want to invest" : "Yes.!",
    "How much will you invest i this project" : "$20 ",
    "ok" : "Done with the deal",
    "Bye" : "Okay! Will meet soon.."



    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I dont get you <br>";
    }
    }
    