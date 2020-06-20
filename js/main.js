$(document).ready(function(){
    $('span').removeClass('night')
//day N night
let dMode=$('#d-mode')
let ballSlider=$('#ball-slider')

dMode.click(function(){
if(ballSlider.hasClass('night') ){
    ballSlider.removeClass('night')
    dMode.removeClass('night')
    $('body').removeClass('night')
    $('#wrappernav').removeClass('night')
    $('#wrappernav a').removeClass('night')
    $('span').removeClass('night')
    $('header').removeClass('night')
    $('.box').removeClass('night')
    $('#boxwrapper .box p').removeClass('night')
    $('p').removeClass('night')
    $('h3').removeClass('night')
    $('.support-wrapper h2').removeClass('night')
    $('.support-wrapper .tekstuitleg').removeClass('night')
    $('.support-wrapper .knopje').removeClass('night')
    $('#accordionwrapper h2').removeClass('night')
    $('.footer-contact').removeClass('night')
    $('.knopjetwee').removeClass('night')
    $('.contact').removeClass('night')
    $('.inhoudcontacten h4').removeClass('night')
    $('.inhoudcontacten .hoofdsupport').removeClass('night')
    $('.mail').removeClass('night')
    $('.backward').removeClass('night')
    $('.forward').removeClass('night')
    $('.pop-up').removeClass('night')
    $('.ani').removeClass('night')

} else{
    ballSlider.addClass('night')
    dMode.addClass('night')
    $('body').addClass('night')
    $('#wrappernav').addClass('night')
    $('#wrappernav a').addClass('night')
    $('span').addClass('night')
    $('header').addClass('night')
    $('.box').addClass('night')
    $('#boxwrapper .box p').addClass('night')
    $('p').addClass('night')
    $('h3').addClass('night')
    $('.support-wrapper h2').addClass('night')
    $('.support-wrapper .tekstuitleg').addClass('night')
    $('.support-wrapper .knopje').addClass('night')
    $('#accordionwrapper h2').addClass('night')
    $('.footer-contact').addClass('night')
    $('.knopjetwee').addClass('night')
    $('.contact').addClass('night')
    $('.inhoudcontacten h4').addClass('night')
    $('.inhoudcontacten .hoofdsupport').addClass('night')
    $('.mail').addClass('night')
    $('.backward').addClass('night')
    $('.forward').addClass('night')
    $('.pop-up').addClass('night')
    $('.ani').addClass('night')
}
}); //einde click dMode
    
    //accordion
    $( "#accordion" ).accordion({ animate: 0, heightStyle: "content" ,}); // de accordion functie van jQuery UI
    
    $('#accordion').css({
        'margin-bottom': '1em',
        'margin-top': '1em',
       
    })
   

//einde accordion

//begin video
var plyr = $('.video-player');
var playerPop= $('.video-player');
$('body').click(function(event){
    event.preventDefault();
});



plyr.each(function(i){
    var players = videojs('my-video-'+i);
    
    
   

    
    players.ready(function(){
        var duration = players.duration();
        
       
    players.on('timeupdate',function(){
        $('.forward').click(function(event){
            players.currentTime(players.currentTime() + 0.8);
            
        });
        $('.backward').click(function(event){
            players.currentTime(players.currentTime() - 0.8);
            
        });
        if(this.player_.paused()){
            $('.forward').css({
                'display':'block',
            })
            $('.backward').css({
                'display':'block',
            })
        } else{
            $('.forward').css({
                'display':'none',
            })
            $('.backward').css({
                'display':'none',
            })
        }



        var times= players.currentTime();
        
       
       if(times>=duration){
           
        playerPop.append('<div class= "pop-up">  <div class= "ok-button" ></div><div class="clear"></div><div class="ani"></div> <p class=tekst-pop-up> Einde, klik zeker op de volgende video!</p> </div>')
        $(".ok-button").click(function(){
            
            
        $('.pop-up').css({
            'display':'none'
        })
        
        });

        
    }
    
        
    
    
      
}); 

});
    });//einde each

  

    let dropDown= $('#drop-down');
let dropDownContent=$('#content-drop-down');

$(dropDown).click(function(){
    if(dropDown.hasClass('active-drop') ){
        dropDown.removeClass('active-drop')
        dropDownContent.removeClass('active-drop')
        $('#workshop-dropdown').removeClass('active-drop')
    }else{
        dropDown.addClass('active-drop')
        dropDownContent.addClass('active-drop')
        $('#workshop-dropdown').addClass('active-drop')
    }
});











});