$(document).ready(function(){
    updatePage();
    $("#generate_button").on("click", function(){
        updatePage();
    }); 
});

function updatePage(){
    $.getJSON("https://cors-anywhere.herokuapp.com/quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30", function(response){
        let quote = getRandomQuote(response);
        $("#quote").html(quote.content);
        $("#author").html(quote.title);
        $("#tweet a").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURI($("#quote p").text()) + encodeURI(quote.title));        });
};

function getRandomQuote(response){
    let max = response.length;
    let quoteIndex = Math.floor((Math.random() * max) + 1)
    return response[quoteIndex];
};