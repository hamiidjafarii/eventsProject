$('#navbar-nav a').click(function(e) {
e.preventDefault();
$("#navbar-nav a").removeClass('active');
$(this).addClass('active');
});

$('#menu .btn').click(function(event) {
    event.preventDefault();
    $("#menu .btn").removeClass('all');
    $(this).addClass('all');
});

var portfolioItems = document.querySelectorAll('.gallery-item')
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
        
    })
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
        
    })
})


// var classes = ['w-1', 'w-2', 'w-3', 'w-4', 'w-5', 'w-6'];

// $(".gallery-container").each(function() {
//   if (classes.length === 0) return false; // break jQuery each

//   var index = Math.floor(Math.random() * classes.length);
//   var className = classes[index];
  
//   console.log(className);
//   $(this).addClass(className);
//   classes.splice(index, 1);
// });
