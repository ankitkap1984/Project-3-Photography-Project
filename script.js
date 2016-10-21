var r=1;
for (i=2;i<=61;i++){
	
	if (i>=45){r=5}
	else if(i>=27){r=4}
	else if(i>=10){r=3}
	else if(i>=6){r=2}
	else {r=1};
	
	$(".range"+r).append("<div class='card'><a data-lightbox='gallery' href='images/"+i+".jpg'><img class='imgsizemain' src='images/"+i+".jpg'/></a><button class='buynow btn btn-default col-sm-4 col-sm-offset-4 btn-sm' type='default' data-toggle='modal' data-target='#modal"+i+"'>Buy Now</button><div class='modal fade' id='modal"+i+"'><div class='modal-dialog'><div class='modal-content'><div class='modal-header header_body_text_style text-center'>Please provide details below<button class='close' data-dismiss='modal'>&times;</button></div><div class='modal-body'><span class='text-muted'><form class='form-horizontal'><div class='row'><div class='col-sm-5 col-sm-offset-1'><img class='imgsizemain' src='images/"+i+".jpg'/></div><br><div class='col-sm-5'><div class='form-group has-feedback'><input type='text' placeholder='Name*' class='form-control'><div class='glyphicon glyphicon-asterisk form-control-feedback'></div></div><div class='form-group has-feedback'><input type='email' placeholder='Email*' class='form-control'><div class='glyphicon glyphicon-envelope form-control-feedback'></div></div><div class='form-group has-feedback'><input type='text' placeholder='Phone' class='form-control'><div class='glyphicon glyphicon-phone form-control-feedback'></div></div><div class='form-group has-feedback'><textarea placeholder='Message' class='form-control' rows='3'></textarea></div></div></div></form></span></div><div class='modal-footer'><button class='btn btn-success btn-block' data-dismiss='modal'>Submit</button></div></div></div></div></div>");}

var $animation_elements = $('img');
var $window = $(window);
$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('pulse');
    } else {
      $element.removeClass('pulse');
    }
  });
};




/*
$(document).scroll(function(){
	
	if ($(window).scrollTop()>200){
        $("img").toggleClass("animated pulse");
		//$("img").fadeToggle();
		console.log('Event Fired');}
    });
*/
/*
$(document).scroll(function(){
        $("img").addClass("animated zoomIn");
		
    });

$("img").hover(function(){
        $("img").addClass("animated pulse");
		console.log('Event Fired');
    });*/
//$("div").on('scroll',function(){ console.log('Event Fired'); })