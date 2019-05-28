$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('.navbar').addClass("navbar-custom");
    $('.navbar .navbar-brand img').attr('src','static/images/logo.png');
    $('#desktop-logo').attr('height','60');
    $('#desktop-logo').attr('style','margin-top:0');        
  }
  else {
    $('.navbar').removeClass("navbar-custom");
    $('#desktop-logo').attr('src','static/images/logo-white.png');
    $('#desktop-logo').attr('height','180');    
    $('#desktop-logo').attr('style','margin-top:4em');    
  }
});
