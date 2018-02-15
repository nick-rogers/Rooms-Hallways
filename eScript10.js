$(document).ready(function(){

  var howMany = Math.round(Math.random()*10);
  var thisPage = $('#filler').attr('class');
  thisPage = thisPage.substring(6,8);
  //console.log(thisPage);
  var theNum = 9;

  console.log(theNum);


  for(var i = 0; i < 8; i++){

    var arrayChoice = imageArray[i];
    var image = arrayChoice[theNum];

    console.log(arrayChoice);
    
    if(i == 0 ){
      var theHref = 'index.html';
    }
    else if (i == 1){
      var theHref = 'a2.html';
    }
    else if (i == 2){
      var theHref = 'a4.html';
    }
    else if (i == 3){
      var theHref = 'a6.html';
    }
    else if (i == 7){
      var theHref = 'schematic.html';
    }
    else {
      var theHref = 'a'+(i+3)+".html";
    }

    var div = document.createElement("a");
    div.className = "boxes";
    div.style.width = "200px";
    div.style.height = "110px";
    div.style.background = "white";
    div.style.backgroundImage = image;
    $(div).attr("href", theHref);
    document.getElementById("filler").appendChild(div);

  }




});


var e1Images = ["url('img-e01-01.gif')", "url('img-e01-02.gif')", "url('img-e01-03.gif')", "url('img-e01-04.gif')", "url('img-e01-05.gif')", "url('img-e01-06.gif')", "url('img-e01-07.gif')", "url('img-e01-08.gif')", "url('img-e01-09.gif')", "url('img-e01-10.gif')"];
var e2Images = ["url('img-e02-01.gif')", "url('img-e02-02.gif')", "url('img-e02-03.gif')", "url('img-e02-04.gif')", "url('img-e02-05.gif')", "url('img-e02-06.gif')", "url('img-e02-07.gif')", "url('img-e02-08.gif')", "url('img-e02-09.gif')", "url('img-e02-10.gif')"];
var e3Images = ["url('img-e03-01.gif')", "url('img-e03-02.gif')", "url('img-e03-03.gif')", "url('img-e03-04.gif')", "url('img-e03-05.gif')", "url('img-e03-06.gif')", "url('img-e03-07.gif')", "url('img-e03-08.gif')", "url('img-e03-09.gif')", "url('img-e03-10.gif')"];
var e4Images = ["url('img-e04-01.gif')", "url('img-e04-02.gif')", "url('img-e04-03.gif')", "url('img-e04-04.gif')", "url('img-e04-05.gif')", "url('img-e04-06.gif')", "url('img-e04-07.gif')", "url('img-e04-08.gif')", "url('img-e04-09.gif')", "url('img-e04-10.gif')"];
var e5Images = ["url('img-e05-01.gif')", "url('img-e05-02.gif')", "url('img-e05-03.gif')", "url('img-e05-04.gif')", "url('img-e05-05.gif')", "url('img-e05-06.gif')", "url('img-e05-07.gif')", "url('img-e05-08.gif')", "url('img-e05-09.gif')", "url('img-e05-10.gif')"];
var e6Images = ["url('img-e06-01.gif')", "url('img-e06-02.gif')", "url('img-e06-03.gif')", "url('img-e06-04.gif')", "url('img-e06-05.gif')", "url('img-e06-06.gif')", "url('img-e06-07.gif')", "url('img-e06-08.gif')", "url('img-e06-09.gif')", "url('img-e06-10.gif')"];
var e7Images = ["url('img-e07-01.gif')", "url('img-e07-02.gif')", "url('img-e07-03.gif')", "url('img-e07-04.gif')", "url('img-e07-05.gif')", "url('img-e07-06.gif')", "url('img-e07-07.gif')", "url('img-e07-08.gif')", "url('img-e07-09.gif')", "url('img-e07-10.gif')"];
var e8Images = ["url('img-e08-01.gif')", "url('img-e08-02.gif')", "url('img-e08-03.gif')", "url('img-e08-04.gif')", "url('img-e08-05.gif')", "url('img-e08-06.gif')", "url('img-e08-07.gif')", "url('img-e08-08.gif')", "url('img-e08-09.gif')", "url('img-e08-10.gif')"];
var e9Images = ["url('img-e09-01.gif')", "url('img-e09-02.gif')", "url('img-e09-03.gif')", "url('img-e09-04.gif')", "url('img-e09-05.gif')", "url('img-e09-06.gif')", "url('img-e09-07.gif')", "url('img-e09-08.gif')", "url('img-e09-09.gif')", "url('img-e09-10.gif')"];
var e10Images = ["url('img-e10-01.gif')", "url('img-e10-02.gif')", "url('img-e10-03.gif')", "url('img-e10-04.gif')", "url('img-e10-05.gif')", "url('img-e10-06.gif')", "url('img-e10-07.gif')", "url('img-e10-08.gif')", "url('img-e10-09.gif')", "url('img-e10-10.gif')"];

var imageArray = [e1Images,e2Images,e4Images,e6Images,e7Images,e8Images,e9Images,e10Images];
