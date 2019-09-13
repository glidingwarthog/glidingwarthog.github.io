/*功能性执行代码*/

$(function(){
	// 插件启动 owl
	// $('.owl-carousel').owlCarousel({
	//     stagePadding: 50,
	//     loop:true,
	//     margin:10,
	//     nav:true,
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         600:{
	//             items:3
	//         },
	//         1000:{
	//             items:5
	//         }
	//     }
	// })
	$(".language span").click(function(){
		$(".language-div").stop().slideToggle();
	})
	$(".language-div a").click(function(){
		$(".language-div").stop().slideUp();
	})


	$(".vip-login").click(function(){
		$(".vip-wp").fadeIn();
		$("#nav-2-heidi").hide();
		$(".nav-2").slideUp();

	})
	$(".youxiang-top span").click(function(){
		$(this).addClass("cur").siblings("span").removeClass("cur");
		
		$(".youxiang-bottom").hide()
		$(".youxiang-bottom").eq($(this).index()).show();
	})
	$("#close-33").click(function(){
		$(".vip-wp").fadeOut();
	})

	$('.main1-list').owlCarousel({
	    margin:41,
	    nav:true,
	    smartSpeed:800,
	    loop:true,
	    mouseDrag:false,
	    autoplay:true,
	    autoplayTimeout:8000,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2

	        },
	        1000:{
	            items:2

	        },
	        1200:{
	            items:3
	        },
	        1400:{
	            items:4
	        }
	    }
	})
	$('.zhongdian-dl').owlCarousel({
	    margin:0,
	    nav:false,
	    smartSpeed:800,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2

	        },
	        1000:{
	            items:3

	        },
	        1200:{
	            items:5
	        }
	    }
	})
	$('.erji-nav2-list').owlCarousel({
	    margin:9,
	    nav:true,
	    autoWidth:true,
	    smartSpeed:800,
	    mouseDrag:false,
	   
	})

	$(".main1-a a").mouseenter(function(){
		$(this).addClass("cur").siblings("a").removeClass("cur");
		$(this).parents(".main1-a").next(".main1-list-wp").find(".main1-list-wp-div").removeClass("cur");
		$(this).parents(".main1-a").next(".main1-list-wp").find(".main1-list-wp-div").eq($(this).index()).addClass("cur");
		$(this).parents(".main1-a").next(".news-div-wp").find(".news-div").hide()
		$(this).parents(".main1-a").next(".news-div-wp").find(".news-div").eq($(this).index()).show();
	})

	$(".rongyu-gun li").click(function(){
		$(this).addClass("cur").siblings("li").removeClass("cur");
		
		$(".zhengshu-pic").hide()
		$(".zhengshu-pic").eq($(this).index()).show();
	})

	$("#sanlan").click(function(){
		$("#nav-2-heidi").fadeToggle();
		$(".nav-2").slideToggle();
		$(".jiaspan").removeClass("cur");
		$(".nav-xia-a").slideUp();
	})
	$("#nav-2-heidi").click(function(){
		$(this).fadeOut();
		$(".nav-2").slideUp();
	})



	$(".jiaspan").click(function(){
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
			$(".nav-2>ul>li>ul").slideUp();	
		}else{
			$(".jiaspan").removeClass("cur");
			$(this).addClass("cur");
			$(".nav-2>ul>li>ul").slideUp();	
			$(this).next(".nav-2>ul>li>ul").slideDown();
		}
		
	})


	$(".job-table table.table tr.tr11").click(function(){
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
			$(".tr22").hide();	
		}else{
			$(".job-table table.table tr.tr11").removeClass("cur");
			$(this).addClass("cur");
			$(".tr22").hide();	
			$(this).next(".tr22").show();
		}
		
	})



	$(".sel").click(function(){
		$(this).next("dl").stop().slideToggle();
	})

	$(".nav>ul>li").hover(function(){

		$(this).find("ul").stop(false,true).slideDown();
	},function(){
		$(this).find("ul").stop(false,true).slideUp();

	})


	$(".yxa").click(function(){
		$(".youxiang").fadeIn();
	})

	$(".youxiang-con .close").click(function(){
		$(".youxiang").fadeOut();
	})
	


})/*function结束括号，JS代码请放此上！！！*/


/*功能性执行代码*/