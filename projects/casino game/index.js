// VARIABLES THAT I USE FOR WHEN I WANT TO ADD THE BET WITH IMG
var plus = $(".plus");
var minus=$(".minus")
var bet_box = $(".bet-box");
var count = 0;

//SPIN BUTTON
var spin_button=$(".spin-button");
// var spin_button1=$(".spin-button");
var spin_button_message=$(".spin-button-message")

// VARIABLES THAT I USE FOR WHEN I WANT TO ADD THE BET WITH PRESET BET BUTTONS
var zero_bet=$(".zero");
var ten_bet=$(".ten");
var twenty_bet=$(".twenty");
var fifty_bet=$(".fifty");
var hundred_bet=$(".hundred");

var fruit1=$(".fruit1");
var fruit2=$(".fruit2");
var fruit3=$(".fruit3");

var fruit4=$(".fruit4");
var fruit5=$(".fruit5");
var fruit6=$(".fruit6");

var fruit7=$(".fruit7");
var fruit8=$(".fruit8");
var fruit9=$(".fruit9");

//WIN OR LOSE MESSAGE

var message_win_lose=$(".message-win-lose");
var column=$(".column");
var win_box=$(".win-box");
var win_total=0;

//PAYTABLE
var paytable_button=$('.paytable');
var myVideo = $(".paper-unfolled")[0];
var ok_button=$('.ok-button');
var fruits_overlay=$('.fruits-overlay');



//WHEN THE BET BOX IS 0 AND THE PLAYER TRIES TO SPIN SHOW THE MESSAGE
spin_button.on("click", function() {
    if(bet_box.text().trim() === "0"){
        spin_button_message.css("visibility", "visible");
    }
});


//CREATE A FUNCTION WHEN TO ADD NUMBERS AND WHEN I PRESS THE PLUS IMG I WILL CALL THE FUNCTION THAT ADDS THE NUMBERS
plus.on("click", function(){

    spin_button_message.css("visibility", "hidden");
    count++;
    bet_box.html(count); 
    
});

//WITH THE NEXT TWO CLASSES I CHANGE THE SIZE OF THE IMG PLUS WHEN I CLICK ON IT
plus.on("mousedown", function() {
    plus.addClass("small-size"); // Adds the small size class on mousedown
});

plus.on("mouseup", function() {
    plus.removeClass("small-size"); // Removes the small size class on mouseup
});


//CREATE A FUNCTION WHEN TO REMOVE NUMBERS AND WHEN I PRESS THE MINUS IMG I WILL CALL THE FUNCTION THAT REDUCES THE NUMBERS
minus.on("click", function(){
    if(count==0)
        {
            bet_box.html("0"); 
        }
        else
        {
            count--;
            bet_box.html(count);
        }
    
        if (bet_box.text() !== "0"){
            spin_button_message.css("visibility", "hidden");
        }
});

//WITH THE NEXT TWO CLASSES I CHANGE THE SIZE OF THE IMG MINUS WHEN I CLICK ON IT
minus.on("mousedown", function() {
    minus.addClass("small-size"); // Adds the small size class on mousedown
});

minus.on("mouseup", function() {
    minus.removeClass("small-size"); // Removes the small size class on mouseup
});



//THE NEXT FUNCTIONS ADDS PRESSET BET NUMBERS AND THEN 


//ADD 0
zero_bet.on("click", function(){
    bet_box.html("0"); 
    count=0;
});

//ADD 10
//WHEN I CLICK ON THE BUTTON 10 THEN CALL THE FUNCTION addTen AND ADD TEN TO THE BET BOX
ten_bet.on("click", function(){
    spin_button_message.css("visibility", "hidden");
    count=count+10;
    bet_box.html(count); 
});



//ADD 20
twenty_bet.on("click", function(){
    spin_button_message.css("visibility", "hidden");
    count=count+20;
    bet_box.html(count); 
});

//ADD 50
fifty_bet.on("click", function(){
    spin_button_message.css("visibility", "hidden");
    count=count+50;
    bet_box.html(count); 
});

//ADD 100

hundred_bet.on("click", function(){
    spin_button_message.css("visibility", "hidden");
    count=count+100;
    bet_box.html(count); 
});


//DOWN IS THE CODE THAT IS ABOUT SPINING THE FRUITS
spin_button.on("mousedown",function(){
    spin_button.addClass("spin-button-size")
});

spin_button.on("mouseup",function(){
    spin_button.removeClass("spin-button-size")
});


//USE THIS FUNCTION TO CHANGE THE FRUITS IN THE IMAGES

    
spin_button.on("click", function() {

    if(bet_box.text().trim() !== "0"){
            let spinInterval1 = setInterval(function () {
                // Move the fruits down one position
                let fruit2Src = fruit2.attr('src');
                fruit3.attr('src', fruit2Src);

                let fruit1Src = fruit1.attr('src');
                fruit2.attr('src', fruit1Src);

                // Set a random fruit for fruit1
                let randomFruit1 = Math.floor(Math.random() * 7) + 1;

                // let randomFruit2 = Math.floor(Math.random() * 7) + 1;

                switch(randomFruit1) {
                    case 1:
                        fruit1.attr('src', './pictures/fruits/cherry.png');
                        break;
                    case 2:
                        fruit1.attr('src', './pictures/fruits/plum.png');
                        break;
                    case 3:
                        fruit1.attr('src', './pictures/fruits/raspberry.png');
                        break;
                    case 4:
                        fruit1.attr('src', './pictures/fruits/grape.png');
                        break;
                    case 5:
                        fruit1.attr('src', './pictures/fruits/strawberry.png');
                        break;
                    case 6:
                        fruit1.attr('src', './pictures/fruits/bell.png');
                        break;
                    case 7:
                        fruit1.attr('src', './pictures/fruits/blueberry.png');
                        break;
                }

                
                // fruit2.attr('src', './pictures/fruits/cherry.png');


                
            }, 100); // Change every 100ms for fast spinning effect


            let spinInterval2 = setInterval(function () {
                // Move the fruits down one position
                let fruit5Src = fruit5.attr('src');
                fruit6.attr('src', fruit5Src);

                let fruit4Src = fruit4.attr('src');
                fruit5.attr('src', fruit4Src);



                let randomFruit2 = Math.floor(Math.random() * 7) + 1;



                
                switch(randomFruit2) {
                    case 1:
                        fruit4.attr('src', './pictures/fruits/cherry.png');
                        break;
                    case 2:
                        fruit4.attr('src', './pictures/fruits/plum.png');
                        break;
                    case 3:
                        fruit4.attr('src', './pictures/fruits/raspberry.png');
                        break;
                    case 4:
                        fruit4.attr('src', './pictures/fruits/grape.png');
                        break;
                    case 5:
                        fruit4.attr('src', './pictures/fruits/strawberry.png');
                        break;
                    case 6:
                        fruit4.attr('src', './pictures/fruits/bell.png');
                        break;
                    case 7:
                        fruit4.attr('src', './pictures/fruits/blueberry.png');
                        break;
                }
                // fruit5.attr('src', './pictures/fruits/cherry.png');
               
            }, 100); // Change every 100ms for fast spinning effect

            let spinInterval3 = setInterval(function () {
                // Move the fruits down one position
                let fruit8Src = fruit8.attr('src');
                fruit9.attr('src', fruit8Src);

                let fruit7Src = fruit7.attr('src');
                fruit8.attr('src', fruit7Src);

                let randomFruit3 = Math.floor(Math.random() * 7) + 1;


                switch(randomFruit3) {
                    case 1:
                        fruit7.attr('src', './pictures/fruits/cherry.png');
                        break;
                    case 2:
                        fruit7.attr('src', './pictures/fruits/plum.png');
                        break;
                    case 3:
                        fruit7.attr('src', './pictures/fruits/raspberry.png');
                        break;
                    case 4:
                        fruit7.attr('src', './pictures/fruits/grape.png');
                        break;
                    case 5:
                        fruit7.attr('src', './pictures/fruits/strawberry.png');
                        break;
                    case 6:
                        fruit7.attr('src', './pictures/fruits/bell.png');
                        break;
                    case 7:
                        fruit7.attr('src', './pictures/fruits/blueberry.png');
                        break;
                }
                // fruit8.attr('src', './pictures/fruits/cherry.png');
            }, 100); // Change every 100ms for fast spinning effect


            // Stop spinning after 5 seconds
            setTimeout(function() {
                clearInterval(spinInterval1);
            }, 5000); // 5000ms = 5 seconds

            setTimeout(function() {
                clearInterval(spinInterval2);
            }, 7000); // 7 seconds

            setTimeout(function() {
                clearInterval(spinInterval3);
                //RANDOM SOUND WHEN THE PLAYER LOSES
                var randomLoserSound=Math.floor(Math.random()*4)+1;
                //RANDOM MESSAGE WHEN THE PLAYER LOSES 
                var randomLoserMessage=Math.floor(Math.random()*5)+1;

                // CHERRY
                if (fruit2.attr('src') === "./pictures/fruits/cherry.png" &&fruit5.attr('src') === "./pictures/fruits/cherry.png" &&fruit8.attr('src') === "./pictures/fruits/cherry.png") 
                {
                            // Assuming bet_box is a jQuery object and contains the bet value as text
                            var betAmount = parseInt(bet_box.text().trim()); // Convert bet box text to an integer
                            var newWin = betAmount * 3; 
                            
                            // THE MESSAGE THAT SAYS THE PLAYER WON AND THE TOTAL THE WON
                                message_win_lose.css("visibility", "visible");
                                message_win_lose.html("BIG WIN !!! +" + newWin);
                            
                            //ADD MUSIC EFFECT COINS FALLING
                                var audio = new Audio("./sounds/winning.mp3");
                                audio.play();
            
                                //CHANGE THE SIZE OF COLUMNS
                                column.css('height','450px')

                                //TO THE CENTER FRUITS ADD A CLASS THAT CHANGES THE SIZE AND CHANGE THE PICTURE
                                fruit2.addClass('win-img-size');
                                fruit2.attr('src', './pictures/fruits_shine/cherry_shine.png');
            
                                fruit5.addClass('win-img-size');
                                fruit5.attr('src', './pictures/fruits_shine/cherry_shine.png');
            
                                fruit8.addClass('win-img-size');
                                fruit8.attr('src', './pictures/fruits_shine/cherry_shine.png');


                                $('.box-fuit').css('margin-bottom','120px')                           
    
                            //WAIT 6 SECONDS AND THEN HIDE THE MESSAGE ,REMOVE THE CHANGES FROM THE CENTER FRUITS AND MAKE THE BOTTOM FRUITS LIKE THE BEGGINING
                            setTimeout(function() {
                                message_win_lose.css("visibility", "hidden");

                                column.css('height','400px')

                                fruit2.removeClass('win-img-size');
                                fruit2.attr('src', './pictures/fruits/cherry.png');
            
                                fruit5.removeClass('win-img-size');
                                fruit5.attr('src', './pictures/fruits/cherry.png');
            
                                fruit8.removeClass('win-img-size');
                                fruit8.attr('src', './pictures/fruits/cherry.png');

                                $('.box-fuit').css('margin-bottom','0px') 
                                
                            }, 6000);
                            
                            //AFTER 7 SECONDS PUT TO THE WIN BOX THE TOTAL MONEY
                            setTimeout(function() {

                                win_total=win_total+newWin;
                                win_box.attr('win-box', win_total); // Store in the attribute
                                win_box.text(win_total);

                            }, 7000);

        
                }
                //BLUEBERRY
                else if (fruit2.attr('src') === "./pictures/fruits/blueberry.png" &&fruit5.attr('src') === "./pictures/fruits/blueberry.png" &&fruit8.attr('src') === "./pictures/fruits/blueberry.png") 
                {
                    
                            // Assuming bet_box is a jQuery object and contains the bet value as text
                            var betAmount = parseInt(bet_box.text().trim()); // Convert bet box text to an integer
                            var newWin = betAmount * 4; 
                           
                            // THE MESSAGE THAT SAYS THE PLAYER WON AND THE TOTAL THE WON
                                message_win_lose.css("visibility", "visible");
                                message_win_lose.html("BIG WIN !!! +" + newWin);
                            
                            //ADD MUSIC EFFECT COINS FALLING
                                var audio = new Audio("./sounds/winning.mp3");
                                audio.play();
            
                               //CHANGE THE SIZE OF COLUMNS
                                column.css('height','450px')

                                //TO THE CENTER FRUITS ADD A CLASS THAT CHANGES THE SIZE AND CHANGE THE PICTURE
                                fruit2.addClass('win-img-size');
                                fruit2.attr('src', './pictures/fruits_shine/blueberry_shine.png');
            
                                fruit5.addClass('win-img-size');
                                fruit5.attr('src', './pictures/fruits_shine/blueberry_shine.png');
            
                                fruit8.addClass('win-img-size');
                                fruit8.attr('src', './pictures/fruits_shine/blueberry_shine.png');


                                $('.box-fuit').css('margin-bottom','120px')                           
    
                           //WAIT 6 SECONDS AND THEN HIDE THE MESSAGE ,REMOVE THE CHANGES FROM THE CENTER FRUITS AND MAKE THE BOTTOM FRUITS LIKE THE BEGGINING
                            setTimeout(function() {
                                message_win_lose.css("visibility", "hidden");

                                column.css('height','400px')

                                fruit2.removeClass('win-img-size');
                                fruit2.attr('src', './pictures/fruits/blueberry.png');
            
                                fruit5.removeClass('win-img-size');
                                fruit5.attr('src', './pictures/fruits/blueberry.png');
            
                                fruit8.removeClass('win-img-size');
                                fruit8.attr('src', './pictures/fruits/blueberry.png');

                                $('.box-fuit').css('margin-bottom','0px') 
                                
                            }, 6000);
                            
                           //AFTER 7 SECONDS PUT TO THE WIN BOX THE TOTAL MONEY
                            setTimeout(function() {

                                win_total=win_total+newWin;
                                win_box.attr('win-box', win_total); // Store in the attribute
                                win_box.text(win_total);

                            }, 7000);

          
                }
                //PLUM
                else if (fruit2.attr('src') === "./pictures/fruits/plum.png" &&fruit5.attr('src') === "./pictures/fruits/cplum.png" &&fruit8.attr('src') === "./pictures/fruits/plum.png") 
                {
                            // Assuming bet_box is a jQuery object and contains the bet value as text
                            var betAmount = parseInt(bet_box.text().trim()); // Convert bet box text to an integer
                            var newWin = betAmount * 6; 
                           
                            // THE MESSAGE THAT SAYS THE PLAYER WON AND THE TOTAL THE WON
                                message_win_lose.css("visibility", "visible");
                                message_win_lose.html("BIG WIN !!! +" + newWin);
                            
                            //ADD MUSIC EFFECT COINS FALLING
                                var audio = new Audio("./sounds/winning.mp3");
                                audio.play();
            
                               //CHANGE THE SIZE OF COLUMNS
                                column.css('height','450px')

                                //TO THE CENTER FRUITS ADD A CLASS THAT CHANGES THE SIZE AND CHANGE THE PICTURE
                                fruit2.addClass('win-img-size');
                                fruit2.attr('src', './pictures/fruits_shine/plum_shine.png');
            
                                fruit5.addClass('win-img-size');
                                fruit5.attr('src', './pictures/fruits_shine/plum_shine.png');
            
                                fruit8.addClass('win-img-size');
                                fruit8.attr('src', './pictures/fruits_shine/plum_shine.png');


                                $('.box-fuit').css('margin-bottom','120px')                           
    
                           //WAIT 6 SECONDS AND THEN HIDE THE MESSAGE ,REMOVE THE CHANGES FROM THE CENTER FRUITS AND MAKE THE BOTTOM FRUITS LIKE THE BEGGINING
                            setTimeout(function() {
                                message_win_lose.css("visibility", "hidden");

                                column.css('height','400px')

                                fruit2.removeClass('win-img-size');
                                fruit2.attr('src', './pictures/fruits/plum.png');
            
                                fruit5.removeClass('win-img-size');
                                fruit5.attr('src', './pictures/fruits/plum.png');
            
                                fruit8.removeClass('win-img-size');
                                fruit8.attr('src', './pictures/fruits/plum.png');

                                $('.box-fuit').css('margin-bottom','0px') 
                                
                            }, 6000);
                            
                           //AFTER 7 SECONDS PUT TO THE WIN BOX THE TOTAL MONEY
                            setTimeout(function() {

                                win_total=win_total+newWin;
                                win_box.attr('win-box', win_total); // Store in the attribute
                                win_box.text(win_total);

                            }, 7000);

        
                }
                //STRAWBERRY
                else if (fruit2.attr('src') === "./pictures/fruits/strawberry.png" &&fruit5.attr('src') === "./pictures/fruits/strawberry.png" &&fruit8.attr('src') === "./pictures/fruits/strawberry.png") 
                    {
                                // Assuming bet_box is a jQuery object and contains the bet value as text
                                var betAmount = parseInt(bet_box.text().trim()); // Convert bet box text to an integer
                                var newWin = betAmount * 8; 
                               
                                // THE MESSAGE THAT SAYS THE PLAYER WON AND THE TOTAL THE WON
                                    message_win_lose.css("visibility", "visible");
                                    message_win_lose.html("BIG WIN !!! +" + newWin);
                                
                                //ADD MUSIC EFFECT COINS FALLING
                                    var audio = new Audio("./sounds/winning.mp3");
                                    audio.play();
                
                                   //CHANGE THE SIZE OF COLUMNS
                                    column.css('height','450px')
    
                                    //TO THE CENTER FRUITS ADD A CLASS THAT CHANGES THE SIZE AND CHANGE THE PICTURE
                                    fruit2.addClass('win-img-size');
                                    fruit2.attr('src', './pictures/fruits_shine/strawberry_shine.png');
                
                                    fruit5.addClass('win-img-size');
                                    fruit5.attr('src', './pictures/fruits_shine/strawberry_shine.png');
                
                                    fruit8.addClass('win-img-size');
                                    fruit8.attr('src', './pictures/fruits_shine/strawberry_shine.png');
    
    
                                    $('.box-fuit').css('margin-bottom','120px')                           
        
                               //WAIT 6 SECONDS AND THEN HIDE THE MESSAGE ,REMOVE THE CHANGES FROM THE CENTER FRUITS AND MAKE THE BOTTOM FRUITS LIKE THE BEGGINING
                                setTimeout(function() {
                                    message_win_lose.css("visibility", "hidden");
    
                                    column.css('height','400px')
    
                                    fruit2.removeClass('win-img-size');
                                    fruit2.attr('src', './pictures/fruits/strawberry.png');
                
                                    fruit5.removeClass('win-img-size');
                                    fruit5.attr('src', './pictures/fruits/strawberry.png');
                
                                    fruit8.removeClass('win-img-size');
                                    fruit8.attr('src', './pictures/fruits/strawberry.png');
    
                                    $('.box-fuit').css('margin-bottom','0px') 
                                    
                                }, 6000);
                                
                               //AFTER 7 SECONDS PUT TO THE WIN BOX THE TOTAL MONEY
                                setTimeout(function() {
    
                                    win_total=win_total+newWin;
                                    win_box.attr('win-box', win_total); // Store in the attribute
                                    win_box.text(win_total);
    
                                }, 7000);
    
            
                }
                //RASPBERRY
                else if (fruit2.attr('src') === "./pictures/fruits/raspberry.png" &&fruit5.attr('src') === "./pictures/fruits/raspberry.png" &&fruit8.attr('src') === "./pictures/fruits/raspberry.png") 
                    {
                                // Assuming bet_box is a jQuery object and contains the bet value as text
                                var betAmount = parseInt(bet_box.text().trim()); // Convert bet box text to an integer
                                var newWin = betAmount * 10; 
                                
                                // THE MESSAGE THAT SAYS THE PLAYER WON AND THE TOTAL THE WON
                                    message_win_lose.css("visibility", "visible");
                                    message_win_lose.html("BIG WIN !!! +" + newWin);
                                
                                //ADD MUSIC EFFECT COINS FALLING
                                    var audio = new Audio("./sounds/winning.mp3");
                                    audio.play();
                
                                    //CHANGE THE SIZE OF COLUMNS
                                    column.css('height','450px')
    
                                    //TO THE CENTER FRUITS ADD A CLASS THAT CHANGES THE SIZE AND CHANGE THE PICTURE
                                    fruit2.addClass('win-img-size');
                                    fruit2.attr('src', './pictures/fruits_shine/raspberry_shine.png');
                
                                    fruit5.addClass('win-img-size');
                                    fruit5.attr('src', './pictures/fruits_shine/raspberry_shine.png');
                
                                    fruit8.addClass('win-img-size');
                                    fruit8.attr('src', './pictures/fruits_shine/raspberry_shine.png');
    
    
                                    $('.box-fuit').css('margin-bottom','120px')                           
        
                                //WAIT 6 SECONDS AND THEN HIDE THE MESSAGE ,REMOVE THE CHANGES FROM THE CENTER FRUITS AND MAKE THE BOTTOM FRUITS LIKE THE BEGGINING
                                setTimeout(function() {
                                    message_win_lose.css("visibility", "hidden");
    
                                    column.css('height','400px')
    
                                    fruit2.removeClass('win-img-size');
                                    fruit2.attr('src', './pictures/fruits/raspberry.png');
                
                                    fruit5.removeClass('win-img-size');
                                    fruit5.attr('src', './pictures/fruits/raspberry.png');
                
                                    fruit8.removeClass('win-img-size');
                                    fruit8.attr('src', './pictures/fruits/raspberry.png');
    
                                    $('.box-fuit').css('margin-bottom','0px') 
                                    
                                }, 6000);
                                
                                //AFTER 7 SECONDS PUT TO THE WIN BOX THE TOTAL MONEY
                                setTimeout(function() {
    
                                    win_total=win_total+newWin;
                                    win_box.attr('win-box', win_total); // Store in the attribute
                                    win_box.text(win_total);
    
                                }, 7000);
    
            
                }
                //GRAPES
                else if (fruit2.attr('src') === "./pictures/fruits/grape.png" &&fruit5.attr('src') === "./pictures/fruits/grape.png" &&fruit8.attr('src') === "./pictures/fruits/grape.png") 
                    {
                                // Assuming bet_box is a jQuery object and contains the bet value as text
                                var betAmount = parseInt(bet_box.text().trim()); // Convert bet box text to an integer
                                var newWin = betAmount * 15; 
                                
                                // THE MESSAGE THAT SAYS THE PLAYER WON AND THE TOTAL THE WON
                                    message_win_lose.css("visibility", "visible");
                                    message_win_lose.html("BIG WIN !!! +" + newWin);
                                
                                //ADD MUSIC EFFECT COINS FALLING
                                    var audio = new Audio("./sounds/winning.mp3");
                                    audio.play();
                
                                    //CHANGE THE SIZE OF COLUMNS
                                    column.css('height','450px')
    
                                    //TO THE CENTER FRUITS ADD A CLASS THAT CHANGES THE SIZE AND CHANGE THE PICTURE
                                    fruit2.addClass('win-img-size');
                                    fruit2.attr('src', './pictures/fruits_shine/grape_shine.png');
                
                                    fruit5.addClass('win-img-size');
                                    fruit5.attr('src', './pictures/fruits_shine/grape_shine.png');
                
                                    fruit8.addClass('win-img-size');
                                    fruit8.attr('src', './pictures/fruits_shine/grape_shine.png');
    
    
                                    $('.box-fuit').css('margin-bottom','120px')                           
        
                                //WAIT 6 SECONDS AND THEN HIDE THE MESSAGE ,REMOVE THE CHANGES FROM THE CENTER FRUITS AND MAKE THE BOTTOM FRUITS LIKE THE BEGGINING
                                setTimeout(function() {
                                    message_win_lose.css("visibility", "hidden");
    
                                    column.css('height','400px')
    
                                    fruit2.removeClass('win-img-size');
                                    fruit2.attr('src', './pictures/fruits/grape.png');
                
                                    fruit5.removeClass('win-img-size');
                                    fruit5.attr('src', './pictures/fruits/grape.png');
                
                                    fruit8.removeClass('win-img-size');
                                    fruit8.attr('src', './pictures/fruits/grape.png');
    
                                    $('.box-fuit').css('margin-bottom','0px') 
                                    
                                }, 6000);
                                
                                //AFTER 7 SECONDS PUT TO THE WIN BOX THE TOTAL MONEY
                                setTimeout(function() {
    
                                    win_total=win_total+newWin;
                                    win_box.attr('win-box', win_total); // Store in the attribute
                                    win_box.text(win_total);
    
                                }, 7000);
    
            
                }
                //BELL
                else if (fruit2.attr('src') === "./pictures/fruits/bell.png" &&fruit5.attr('src') === "./pictures/fruits/bell.png" &&fruit8.attr('src') === "./pictures/fruits/bell.png") 
                    {
                                // Assuming bet_box is a jQuery object and contains the bet value as text
                                var betAmount = parseInt(bet_box.text().trim()); // Convert bet box text to an integer
                                var newWin = betAmount * 50; 
                                
                                // THE MESSAGE THAT SAYS THE PLAYER WON AND THE TOTAL THE WON
                                    message_win_lose.css("visibility", "visible");
                                    message_win_lose.html("BIG WIN !!! +" + newWin);
                                
                                //ADD MUSIC EFFECT COINS FALLING
                                    var audio = new Audio("./sounds/winning.mp3");
                                    audio.play();
                
                                    //CHANGE THE SIZE OF COLUMNS
                                    column.css('height','450px')
    
                                    //TO THE CENTER FRUITS ADD A CLASS THAT CHANGES THE SIZE AND CHANGE THE PICTURE
                                    fruit2.addClass('win-img-size');
                                    fruit2.attr('src', './pictures/fruits_shine/bell_shine.png');
                
                                    fruit5.addClass('win-img-size');
                                    fruit5.attr('src', './pictures/fruits_shine/bell_shine.png');
                
                                    fruit8.addClass('win-img-size');
                                    fruit8.attr('src', './pictures/fruits_shine/bell_shine.png');
    
    
                                    $('.box-fuit').css('margin-bottom','120px')                           
        
                                //WAIT 6 SECONDS AND THEN HIDE THE MESSAGE ,REMOVE THE CHANGES FROM THE CENTER FRUITS AND MAKE THE BOTTOM FRUITS LIKE THE BEGGINING
                                setTimeout(function() {
                                    message_win_lose.css("visibility", "hidden");
    
                                    column.css('height','400px')
    
                                    fruit2.removeClass('win-img-size');
                                    fruit2.attr('src', './pictures/fruits/bell.png');
                
                                    fruit5.removeClass('win-img-size');
                                    fruit5.attr('src', './pictures/fruits/bell.png');
                
                                    fruit8.removeClass('win-img-size');
                                    fruit8.attr('src', './pictures/fruits/bell.png');
    
                                    $('.box-fuit').css('margin-bottom','0px') 
                                    
                                }, 6000);
                                
                                //AFTER 7 SECONDS PUT TO THE WIN BOX THE TOTAL MONEY
                                setTimeout(function() {
    
                                    win_total=win_total+newWin;
                                    win_box.attr('win-box', win_total); // Store in the attribute
                                    win_box.text(win_total);
    
                                }, 7000);
    
            
                }
                //WHEN THE PLAYER LOSES
                else{
                    

                    if (randomLoserSound===1){
                        var audio = new Audio("./sounds/loser1.mp3");
                        audio.play();
                    }else if (randomLoserSound===2){
                        var audio = new Audio("./sounds/loser2.mp3");
                        audio.play();
                    }else if(randomLoserSound===3){
                        var audio = new Audio("./sounds/loser3.mp3");
                        audio.play();
                    }else{
                        var audio = new Audio("./sounds/loser4.mp3");
                        audio.play();
                    }

                    if(randomLoserMessage===1){
                        message_win_lose.css("visibility", "visible");
                        message_win_lose.css("color","#FFA500");
                        message_win_lose.html("No luck this time, but the forest is full of surprises!");
                    }else if(randomLoserMessage===2){
                        message_win_lose.css("visibility", "visible");
                        message_win_lose.css("color","#FFA500");
                        message_win_lose.html("Keep exploring, treasures await");
                    }else if(randomLoserMessage===3){
                        message_win_lose.css("visibility", "visible");
                        message_win_lose.css("color","#FFA500");
                        message_win_lose.html("The jackpot’s still hiding in the forest!");
                    }else if(randomLoserMessage===4){
                        message_win_lose.css("visibility", "visible");
                        message_win_lose.css("color","#FFA500");
                        message_win_lose.html("You missed the trail—spin again!");
                    }else if(randomLoserMessage===5){
                        message_win_lose.css("visibility", "visible");
                        message_win_lose.css("color","#FFA500");
                        message_win_lose.html("A quiet forest... but the next spin could be wild!");
                    }

                    setTimeout(function(){
                        message_win_lose.css("visibility", "hidden");
                    },5000);
                }
            }, 9000); //9 seconds

        }

});




// PAYTABLE

//WHEN I CLICK ON PAYTABLE BUTTON 
paytable_button.on('click', function() {
    //SHOW ME THE CONTAINER THAT CONTAINS EVERYTHING ABOUT THE VIDEO AND THE PLAYTABLE FRUITS AND VALUES
   $('.video-container').css('visibility','visible');
   myVideo.play(); // Play the video
   var audio = new Audio("./sounds/Epic Open Map SFX - Free Audio Assets (mp3cut.net).mp3");
   audio.play();
    // Set a timeout to trigger an action after 5 seconds of video play
    //AND WHEN THE VIDEO ENDS WHICH IS 5 SECONDS LONG SHOW THE FRUITS AND VALUES
    setTimeout(() => {
        fruits_overlay.css('visibility',' visible');
    }, 5000); // 5000 milliseconds = 5 seconds

});

//WHEN I CLICK ON THE OK BUTTON ON THE VIDEO
ok_button.on('click',function(){
//HIDE THE FRUITS ,THE VALUES AND THE CONTAINER THAT CONTAINS THE VIDEO
    fruits_overlay.css('visibility','hidden');
    $('.video-container').css('visibility','hidden');
});

