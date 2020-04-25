$(function () {
  // jQuery goes here...
  //$('.bluebox').css("background","red");
  //$('#list').find('li').css("background","yellow");

  // To select all children of selected element
  //$('#list').children().css("background","yellow");

  // To select all parent of selected element
  //$('#list').parent().css("background","yellow");

  // To select all siblings of selected element 
  //$('#list').siblings('p').css("background","yellow");
  //$('#list').siblings(':header').css("background","yellow");
  // $('#list').prevAll(':header').css("background","yellow");

  // $('p').append('<h1>Hello Andhero</h1>')
  // $('p').prepend('<h1>Hello Andhero</h1>')
  // $('#list').appendTo('p')
  // $('.bluebox').before($('.green-box'))

  // To replace element with another one
  // $('p').replaceWith("<div>HelloAndheron</div>")
  // $("<div>HelloAndheron</div>").replaceAll('.blue-box,h1');

  // To remove elements without event listeners
  //  $('p:last').remove();
  // $('#list').children().not('li:last').remove()
  //  To remove elements with event listeners
  //  var x = $('p:last').detach();
  // $('h1').append(x);
  //  To empty the content
  // $('p').empty();


  // We focus on attr(),prop() and val()
  // To get value of input type text
  // console.log($('input:text').val());
  // To set value of input field
  // $('input:text').val("Hello Andhero")
  // To get attribute of element
  // console.log($('input:text').attr("type"));
  // To modify attribute of element
  // $('input:text').attr("type","password");
  // To get property of element
  // console.log($('input:text').prop("disabled"));
  // To change property of element
  // $('input:text').prop("disabled", true);

  // To make a custom image slide-show
  //   var galleryImg = $('.gallery').find('img').first();
  //   var images = ['images/laptop-mobile_small.jpg', 'images/laptop-on-table_small.jpg', 'images/people-office-group-team_small.jpg'];

  //   var i = 0;
  //   setInterval(function () {
  //     i = (i + 1) % images.length;
  //     galleryImg.fadeOut(function () {
  //       $(this).attr("src", images[i]);
  //       $(this).fadeIn();
  //     })
  // console.log(galleryImg.attr("src"));
  //   }, 2000)


  // Some css data manipulations
  // console.log($('.red-box').width());
  // console.log($('.red-box').css("width","100px"));
  // console.log($('.red-box').css("width","+=110px"));

  //  To get css properties from tag
  // var property = $('p').css(['font-size','margin','color']);
  // console.log(property);
  // console.log(property['font-size']);
  // To apply css via function
  // $('p').css("font-size",function(){
  //   return '22px'
  // })

  //  To add and remove class
  // $('p').addClass("large");
  // $('div').removeClass('blue-box');
  // $('div').addClass(function(index,currentClass){
  //   if(currentClass=='test'){
  //     return 'red-box'
  //   }
  // })
  // $('.test').removeClass('red-box').addClass('blue-box')

  //  Getting and Setting data in jquery
  // var h1 = $('h1');
  // h1.data("name","Hello Adhero");
  // console.log(h1.data("name"));
  // h1.data("age",45);
  // console.log(h1.data());
  // var pi = $('p');
  // console.log(pi.data());

  // To modify data of the elements
  //  $('p').text('<b>Hello brother</b>');           
  //  $('p').html('<b>Hello brother</b>'); 
  // $('p').html($('p').html() + '<b>Hello brother</b>');  

  // Events in query
  // $('#my-btn').click(function(event){
  //   alert("Hello Andheron");
  // })
  // $('.blue-box').click(function(){
  //   $(this).fadeTo(1000, 0.5)
  // })
  //  To call a click event on page load
  // $('.blue-box').click();

  // For mousehover , mouseenter and mouseleave
  // $('.blue-box').hover(function(){
  //   $(this).fadeTo(1000,0.5);
  // })

  // $('.blue-box').mouseenter(function(){
  //   $(this).fadeTo(1000,0.5);
  // })
  // $('.blue-box').mouseleave(function(){
  //   $(this).fadeTo(1000,1);
  // })
  // $('.blue-box').hover(function(){
  //   $(this).fadeTo(1000,0.5);
  // },function(){
  //   $(this).fadeTo(1000,1);
  // })

  // on function in jquery
  // $('body').on('click keyup keyenter',function(){
  //   console.log("Mouse clicked or key is pressed");
  // })

  // click event to change image from image gallery
  //var galleryImg = $('.gallery').find('img');
//   var images = ['images/laptop-mobile_small.jpg', 'images/laptop-on-table_small.jpg',
//    'images/people-office-group-team_small.jpg'];
// var i=0;
// $('.gallery').find('img').on('click', function(){
//   i=(i+1) % images.length;
//   $(this).fadeOut(function(){
//     $(this).attr("src",images[i]).fadeIn();
//     console.log(i);
//   })

// })
// function doSomething(){
//   console.log("I am here");
// }
// passing reference to on event
// $('.blue-box').on('click',doSomething)

// delegate events passing the event from parent to all the childs and dynamic childs.

// $('#content').on('click','p',function(){
//   $(this).slideUp();
// })
// $('#content').append('<p>Hello Andheron</p>');

// passing data to the function
// $('#my-btn').click({
//   name: "Ashok",
//   age: 32
// },function(event){
// greetUser(event.data);
// })

// make gallery with light-box
// var galleryImgs = $('.gallery').find('img');
// galleryImgs.css({'width':'33%','opacity':'0.7'});

// galleryImgs.mouseenter(function(){
// $(this).stop().fadeTo(1000,1);
// })

// galleryImgs.mouseleave(function(){
//   $(this).stop().fadeTo(1000,0.7);
//   })

// galleryImgs.click(function(){
//   var source = $(this).attr("src");
//   var image = $('<img>').attr("src",source).css("Width","100%");
//   $('.lightbox').empty().append(image).fadeIn(2000);
// })

// to get value of a keyevent
// $('html').keydown(function(event){
// console.log(event.which);
// })

// var RIGHT_ARROW = 39;
// $('html').keydown(function(event){
//  if(event.which == RIGHT_ARROW){
//     $('.blue-box').stop().animate({"margin-left": "+=20px"},50);      //stop is used to stop earlier event
//  }
//   })

// focus and blur events
// $('input:text').focus(function(){
//   $(this).css("box-shadow", " 5px 10px #888888");
// })

// $('input:text').blur(function(){
//   $(this).css("box-shadow","none");
// })

// $('input:text').blur(function(){
//   console.log($(this).text());
//   console.log($(this).val());
// var t = $(this).val();
// if(t.length>3){
//   $(this).css({"border": "5px solid green"});
// }else{
//   $(this).css({"border": "5px solid red"});
// }
// })

// select ,radios ,checkbox events


// $('#selection').change(function(){
// var selected = $(this).find(':selected').text();
// alert(selected);
// })

// $('#checkbox').change(function(){
//   var checkedStatus = $(this).is(':checked');
//   if(checkedStatus){
//     $(this).css({"margin": "20px"});
//   }
//   else{
//     $(this).css({"box-shadow": "5px solid red"});
//   }
// })

// submiting form with validations in jquery
// $('#form').submit(function(){
//   var name = $('#name').val();
//   var password = $('#password').val();
//   var textarea = $('#textarea').val();
//   var checked = $('#checkbox').is(':checked');
//   validateNameField(name);
//   validatePasswordField(password);
// })

// function validateNameField(name){
// if(!isValidName(name)){
//   $('#name-feedback').text('Please enter at least two characters');
//   event.preventDefault();
// }else{
//   $('#name-feedback').text('');
// }
// }

// function validatePasswordField(name){
//   if(!isValidName(name)){
//     $('#password-feedback').text('Please enter at least two characters');
//     event.preventDefault();
//   }else{
//     $('#password-feedback').text('');
//   }
//   }

// function isValidName(name){
//   return name.length>=2
// }

// ajax in jquery
// $('#code').load("js/script.js"); 
// $('#code').load("js/script.js",function(response,status){
//   console.log(response,status);
// if(status=="error"){
//   alert("Something issue");
// }
// })

// To get data from ajax call
var flickrApi = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
$.getJSON(flickrApi,{
  tags: 'sun, beach',
  tagmode: "any",
  format:"json"
}).done(function(data){
$.each(data.items,function(index,item){
  console.log("dd",index,item);
})
}).fail(function(err){
console.log("err",err,"failed");
})

})

//  some imp are eq(),filter(),first(),last(),not()
// function greetUser(userdata){
// alert("Hello " + userdata.name + " age = " + userdata.age );
// }

// function doSomething(){
//   console.log("I am here");
// }