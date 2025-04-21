$(document).ready(function() {
    $('#action').click(function() {

        var letterGrade = $('#letter-grade').val().toUpperCase();
        var myFavoriteThings = [];
            myFavoriteThings.push("Listening to Music");   
            myFavoriteThings.push("Making Art and Crafts"); 
            myFavoriteThings.push("Reading Fairy and Folk Tales"); 
            myFavoriteThings.push("Playing Video Games"); 

        //Write your decision structure between this comment...

        if (letterGrade === "A") {
            $('#percent-range').text("The percent range is 90% to 100%");
        } else if (letterGrade === "B") {
            $('#percent-range').text("The percent range is 80% to 89%");
        } else if (letterGrade === "C") {
            $('#percent-range').text("The percent range is 70% to 79%");
        } else if (letterGrade === "D") {
            $('#percent-range').text("The percent range is 60% to 69%");
        } else if (letterGrade === "F") {
            $('#perent-range').text("The percent range is Less than 60%");
        } else {
            $('#percent-range').text("Error! Invalid value entered");
        }

        //...and this comment



        //Now, write a for loop between this comment...

        for (var i = 0; i < myFavoriteThings.length; i++) {
            $('#my-favorites').append(myFavoriteThings[i] + "<br>");
        }

        //...and this comment

    });
});

