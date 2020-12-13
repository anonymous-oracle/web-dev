// var jqueryElement = $('h1')
// jqueryElement.css('color','red');

// // selecting a list of buttons with jquery
// var buttonList = $('button')

// // get the styles of elements
// alert($('h1').css('font-size'))
// alert($('h1').css('display'))

// // for styling using jQuery, set styling classses in the .css file and add that class to the desired element
// $('h1').addClass('big-title margin-50') // adding multiple classes
// setTimeout(function(){$('h1').removeClass('big-title margin-50')}, 1000);

// // check if an element has a class
// alert($('h1').hasClass('margin-50')); // returns a boolean

// // changing the text content of an HTML element
// $('h1').text('bye!');

// // changing the html of the element
// $('h1').html('<em>bye!</em>')
// jQuery('button').text('Don\'t Click Me'); // applies to all buttons
// setTimeout(function() {$('h1').text('Hello'); $('button').text('Click Me')}, 2000)

// // getting the attribute of an element
// alert(jQuery('a').attr('href'));

// // setting the value of the attribute
// jQuery('a').attr('href','https://www.bing.com')
// jQuery('a').text('Bing Search')
// setTimeout(function() {jQuery('a').attr('href','https://www.google.com');jQuery('a').text('Google Search')}, 5000)

// // adding event listeners
// jQuery('button').click(function(){jQuery('button').text('Don\'t Click Me')})
// setTimeout(function() {jQuery('button').text('Click Me')}, 2000)

// jQuery(document).keypress(function(e){alert(e.key)})

// jQuery(document).keypress(function(e){jQuery('h1').text(e.key)
// setTimeout(function(){jQuery('h1').text('Hello')}, 2000)
// })

// // another way for event listening
// jQuery('h1').on( 'mouseover' ,function(e){jQuery('h1').addClass('big-title')
// setTimeout(function(){jQuery('h1').removeClass('big-title')}, 100)
// })

// // ADDING AND REMOVING ELEMENTS
// jQuery('h1').before('<h4>New Heading Before</h4>')
// jQuery('h1').after('<h4>New Heading After</h4>')
// jQuery('h1').prepend('<h4>New Heading Prepend</h4>')
// jQuery('h1').append('<h4>New Heading Append</h4>')

// // ANIMATIONS USING JQUERY

// jQuery(document).on('click',function() {jQuery('h1').hide(); setTimeout(function(){jQuery('h1').show()}, 1000) })

// jQuery(document).on('click',function() {jQuery('h1').toggle()})

// jQuery(document).on('click',function() {jQuery('h1').fadeOut(); setTimeout(function(){jQuery('h1').fadeIn()}, 1000) })

// jQuery(document).on('click',function() {jQuery('h1').fadeToggle()})

// jQuery(document).on('click',function() {jQuery('h1').slideUp(); setTimeout(function(){jQuery('h1').slideDown()}, 1000) })

// jQuery(document).on('click',function() {jQuery('h1').slideToggle()})



// // ANIMATION USING THE .animate() FUNCTION

// jQuery(document).on('click',function(){jQuery('h1').animate({margin: "20%"}); 
// setTimeout(function(){jQuery('h1').animate({margin: "21"})}, 1000)
// })

// // CHAINING ANIMATIONS
// jQuery(document).on('click',function() {jQuery('h1').fadeOut().fadeIn().animate({opacity: 0.5})})
