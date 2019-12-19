
$(document).ready(function(){
  $('.category_item').click(function(){
    var category = $(this).attr('id');

    if(category == 'all'){
      $('.card').addClass('hide');
      setTimeout(function(){
          $('.card').removeClass('hide');
      },  300);
    } else {
        $('.card').addClass('hide');
        setTimeout(function(){
            $('.' + category).removeClass('hide');
        },  300);
    }
  });
});

$(document).ready(function(){
  $('.category_item').click(function(){
    var category = $(this).attr('id');

    if(category == 'all'){
      $('.undertitletwo').addClass('hide');
    } else {
        $('.undertitletwo').addClass('hide').removeClass('testclass');
        setTimeout(function(){
            $('.' + category).removeClass('hide');
        },  300);
    }
  });
});

$(document).on('click','.category_item', function(){
  $(this).addClass('activetest').siblings().removeClass('activetest')
})
