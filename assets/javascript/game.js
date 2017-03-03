$(document).ready(function(){

var rand = function rand(low,high){
    console.log (low+"and"+high);
    var newval = ((Math.floor((Math.random()*high)+low)));
    return newval
  }

  var currentVal = 0;
  var totalWins = 0;
  var totalLosses = 0;
  var Goal = {
    Val: 0,
  };

  var Characters = {
    Cartman: {
      Name: "Cartman",
      Img: "assets/images/cartman.jpg",
      Val: 0,
    },
    Stan: {
      Name: "Stan",
      Img: "assets/images/stan.jpg",
      Val: 0,
    },
    Kyle: {
      Name: "Kyle",
      Img: "assets/images/kyle.jpg",
      Val: 0,
    },
    Kenny: {
      Name: "Kenny",
      Img: "assets/images/kenny.jpg",
      Val: 0,
    },
  }

function PopulatePage(){
  if(currentVal > 0){
    currentVal = 0
  };
  $("#CurrentNumber").html(currentVal);
  $("#TotalWinsNumber").html(totalWins);
  $("#TotalLossesNumber").html(totalLosses);
  Goal.Val = rand(19,120);
  $("#CurrentGoalNumber").html(Goal.Val);
  $.each(Characters, function(ke,va){
    va.Val = rand(1,12);
    var contentstring = "<div class='col-xs-12 col-md-3 acharacter name='"+va.Name+"' id="+va.Val+"><img src='"+va.Img+"' class='character' /></div>";
    $("#row3").append(contentstring);
  });
}

PopulatePage();

function TestDone(){
  if(currentVal > Goal.Val){
    alert("You Lose");
    totalLosses = totalLosses + 1;
    PopulatePage()
  }else if(currentVal == Goal.Val){
    alert("You Win")
    totalWins = totalWins + 1;
    PopulatePage()
  }
}

  $(".acharacter").click(function(){
    var theValue =($(this).attr('id'));
    var theValue = parseInt(theValue);
    currentVal = currentVal + theValue;
    $("#CurrentNumber").html(currentVal);
    TestDone();
  });
});
// function TestDone(){
//   if currentVal >
//
// }
