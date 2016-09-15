$(document).ready(function(){

  $(window).scroll(function() {
		$('.1st').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1500) {
				$(this).addClass("fadeIn");
			}
		});
	});

  $(window).scroll(function() {
    $('.2nd').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1450) {
        $(this).addClass("fadeIn");
      }
    });
  });

  $(window).scroll(function() {
    $('.3rd').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1400) {
        $(this).addClass("fadeIn");
      }
    });
  });

  $(window).scroll(function() {
    $('.4th').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1350) {
        $(this).addClass("fadeIn");
      }
    });
  });

  $(window).scroll(function() {
    $('.5th').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1300) {
        $(this).addClass("fadeIn");
      }
    });
  });


  $(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});




}); //end
