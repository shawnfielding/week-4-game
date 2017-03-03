$(document).ready(function () {
    var rand = function rand(low, high) {
        console.log(low + typeof low + "and" + high+ typeof high);
        
        var newval = Math.floor(Math.random() * (high - low) + low);
        return newval;
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
            Val: 0,
        },
        Stan: {
            Name: "Stan",
            Val: 0,
        },
        Kyle: {
            Name: "Kyle",
            Val: 0,
        },
        Kenny: {
            Name: "Kenny",
            Val: 0,
        },
    }

    function populatePage() {
        if(currentVal > 0){
            currentVal = 0
        }
        $("#CurrentNumber").html(currentVal);
        $("#TotalWinsNumber").html(totalWins);
        $("#TotalLossesNumber").html(totalLosses);
        Goal.Val = rand(19,120);
        $("#CurrentGoalNumber").html(Goal.Val);
        $.each(Characters, function (ke, va) {
            va.Val = rand(1,12);
            $("."+va.Name).attr("id",va.Val);
        });
    }
    
        populatePage();

    function TestDone() {
        if (currentVal > Goal.Val) {
            alert("You Lose. You ended up with "+currentVal);
            totalLosses = totalLosses + 1;
            populatePage();
        } else if (currentVal == Goal.Val) {
            alert("You got " + Goal.Val + "! RIGHT ON! You Win! ")
            totalWins = totalWins + 1;
            populatePage();
        }
    };
    $(".thecharacter").click(function() {
        var theValue = ($(this).attr('id'));
        console.log(this);
        console.log(theValue);
        var theValue = parseInt(theValue);
        console.log(theValue);
        currentVal = currentVal + theValue;
        $("#CurrentNumber").html(currentVal);
        TestDone();
    });
});