$("button.a1").click(function () {
  $(".slider-1 > section").each(function (index, node) {
    move($(node), 1);
  });
});

$("button.a2").click(function () {
  $(".slider-1 > section").each(function (index, node) {
    move($(node), -1);
  });
});

function move($node, no) {
  let currentNo;

  for (let i = 1; i <= 5; i++) {
    if ($node.hasClass("pos-" + i)) {
      currentNo = i;
      break;
    }
  }

  let postNo = currentNo + no;

  if (postNo < 1) {
    postNo = 5;
  } else if (postNo > 5) {
    postNo = 1;
  }

  $node.removeClass("pos-" + currentNo);
  $node.addClass("pos-" + postNo);

}


var isVisible = false;
var isStarVisible = false;

$(window).on('scroll',function() {
    if (checkVisible($('.b'))&&!isVisible) {
       
      $('.box>div:nth-child(2)').addClass('event');
      $('.moon-star-box>div').removeClass('moon-before');
      $('.moon-star-box>div').addClass('moon-after'); 
      $('.moon-star-box > span').addClass('block');
      
        isVisible=true;
    }
  
});

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top + $(elm).height(),
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}













