$(function() 
{
  let header = $('.header');
  let btns = $('.btn-reset');

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1) 
      {
        header.css
        ({
          'background': '#fff',
          'color': '#4b5f6d',
          'border-bottom' : '#4b5f6d solid 5px'
        });
        btns.css({'color': '#4b5f6d'});
      } 
    else
    {
      header.css
      ({
        'background': 'none',
        'color': '#fff',
        'border-bottom' : 'none'
      });
      btns.css({'color': '#fff'});
    } 
  });
});