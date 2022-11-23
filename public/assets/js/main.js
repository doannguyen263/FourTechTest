jQuery(function ($) {

	// var wow = new WOW(
	// {
	// 	boxClass:     'wow',
	// 	animateClass: 'animated',
	// 	offset:       0,
	// 	mobile:       true,
	// 	live:         true
	// }
	// );
	// wow.init();
	/**
	 * Sticky navbar
	 */
	// Custom function which toggles between sticky class (is-sticky)
	var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
		var stickyTop = stickyWrapper.offset().top;
		if (scrollElement.scrollTop() >= stickyTop && scrollElement.scrollTop() > 0 ) {
			sticky.addClass("is-sticky");
		}
		else {
			sticky.removeClass("is-sticky");
		}
	};
	$('[data-toggle="sticky-onscroll"]').each(function () {
		var sticky = $(this);
		var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
		sticky.before(stickyWrapper);
		sticky.addClass('sticky');
		// Scroll & resize events
		$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
			stickyToggle(sticky, stickyWrapper, $(this));
		});

		// On page load
		stickyToggle(sticky, stickyWrapper, $(window));
		// Check scroll top
		var winSt_t = 0;
		$(window).scroll(function() {
			var winSt = $(window).scrollTop();
			if (winSt >= winSt_t) {
				sticky.removeClass("top_show")
			} else {
				sticky.addClass("top_show")
			}
			winSt_t = winSt
		});
	});

	/**
	 * Back to top
	 */
	var back_to_top=$(".back-to-top"),offset=220,duration=500;

	if($(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active"))

	$(window).scroll(function(){
		$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")
	}),
	$(document).on("click",".back-to-top",function(o){
		return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1
	});

	/**
	 * Menu
	 */
	$.fn.dnmenu = function() {

		let thiz = this
		let menu = $(this).attr('id')
		let menu_id = '#'+menu
		var button = $('a[href="#'+menu+'"]')

		// Default options
		// var settings = $.extend({
		// 	name: 'John Doe'
		// }, options );

		// Button click
		button.click(function(e){
			e.preventDefault()
			console.log(button)
			if(button.hasClass('active')){
				$('body').removeClass('modal-open').css("padding-right","")
				button.removeClass('active')
				$(menu_id).removeClass('active')

			} else {
				// $('body').addClass('modal-open').css("padding-right",ScrollBarWidth)
				$('body').addClass('modal-open').css("overflow:hidden")
				button.addClass('active')
				$(menu_id).addClass('active')

			}
		});

		// Menu
		var el= $(thiz).find(".nav__mobile--ul");
		el.find(".menu-item-has-children>a").after('<button class="nav__mobile__btn"><i></i></button>'),

		el.find(".nav__mobile__btn").on("click",function(e){
			e.stopPropagation(),
			$(this).parent().find('.sub-menu').first().is(":visible")?$(this).parent().removeClass("sub-active"):
			$(this).parent().addClass("sub-active"),
			$(this).parent().find('.sub-menu').first().slideToggle()
		})

		// Apply options
		return;
	};
	$('#menu__mobile').dnmenu()


 // Page Scroll
    var lastId,
        topMenu = $(".main__nav, .nav__mobile--ul"),
        topMenuHeight = 88 ,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $(this).attr("href");
            if(item != '#') {
                return $(item)
            }
        });


    // Bind click handler to menu items
    // so we can get a fancy scroll animation
     menuItems.on("click",function(e) {
    	e.preventDefault();
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);

        $('.mburger').removeClass('active')
        $('body').removeClass('modal-open')
        $('#menu__mobile').removeClass('active')
    });

    // Bind to scroll
    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight + 100;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id && id != '') {
            lastId = id;

            // console.log(lastId)
            // Set/remove active class

            menuItems
                .closest('li').removeClass("active")
                .end().filter("[href='#" + id + "']").closest('li').addClass("active");

        }
    });

 });