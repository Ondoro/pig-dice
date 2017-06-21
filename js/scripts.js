function gamer1(points){
    this.points = points;
}
gamer1.prototype.computeScores = function(randomValue){
    while (randomValue > 0){
       $('#name1').prop('disabled', true);
    if (randomValue === 1){
        alert("You have burnt");
        $('#Button').prop('disabled', true);
        $('#Button1').prop('disabled', false);
        //scores.push(this.points);
        break;

    }else{
        return this.points += randomValue;
        }
    }
};

gamer1.prototype.holdCards = function(){
     $('#Button').prop('disabled', true);
     $('#Button1').prop('disabled', false);
     alert("You have hold your cards at "+ this.points);
};
gamer1.prototype.winner = function(){
   if(this.points >= 100){
        alert("You are the winner");
        $('#Button').prop('disabled', true);
        $('#Button1').prop('disabled', true);

    }
};
function gamer2(points){
    this.points = points;
}
gamer2.prototype.computeScores = function(randomValue){
    while(randomValue > 0){
         $('#name2').prop('disabled', true);
        if (randomValue ===1){
            alert("You have Burnt");
            $('#Button').prop('disabled', false);
            $('#Button1').prop('disabled', true);
            break;
        }else{
            return this.points += randomValue;
        }
    }
};
gamer2.prototype.holdCards = function(){
     $('#Button').prop('disabled', false);
     $('#Button1').prop('disabled', true);
     alert("You have hold your cards at "+ this.points);
};
gamer2.prototype.winner = function(){
   if(this.points >= 100){
        alert("You are the winner");
        $('#Button').prop('disabled', true);
        $('#Button1').prop('disabled', true);

    }
};

//User Interface
$(document).ready(function(){
    //An object for player1
    var result  = new gamer1(0);
    //An object of player2
    var result1  = new gamer2(0);
    $('form#gamer1').submit(function(event){
        event.preventDefault();
        var randomm = Math.floor(Math.random() * 6) + 1;
        var name1 = $('input#name1').val();



        $('#name11').text("Name: " + name1);
        $('#numbers1').text(result.points);

        result.computeScores(randomm);
        result.winner();

        });
    $('form#gamer2').submit(function(event){
        event.preventDefault();
        var random2 = Math.floor(Math.random() * 6) + 1;
        var name2 = $('input#name2').val();


        $('#name12').text("Name: " + name2);
        $('#numbers2').text(result1.points);

        result1.computeScores(random2);
         result1.winner();
        });
    $('form#hold').submit(function(event){
        event.preventDefault();

        result.holdCards();
        });
    $('form#hold1').submit(function(event){
        event.preventDefault();

        result1.holdCards();
        });
    });
