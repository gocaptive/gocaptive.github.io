!function(){try{document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.className="engine";a.innerHTML='<a href="https://mobirise.info">Mobirise Website Builder</a> v4.8.0';document.body.insertBefore(a,document.body.childNodes[0])}}();

(function(a){function m(c){c=a(c);var b=c.attr("ID")+"-carousel";c.find(".carousel").attr("id",b);c.find(".carousel-controls a").attr("href","#"+b);c.find(".carousel-indicators li").attr("data-target","#"+b);a(c).find(".carousel-item:first").addClass("active")}function p(c){c=a(c);var b=c.find(".carousel-item").length,d=c.find(".carousel-inner").attr("data-visible");b<d&&(d=b);c.find(".carousel-inner").attr("class","carousel-inner slides"+d);c.find(".clonedCol").remove();c.find(".carousel-item .col-md-12").each(function(){2>
d?a(this).attr("class","col-md-12"):"5"==d?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/d)});c.find(".carousel-item").each(function(){for(var b=a(this),c=1;c<d;c++){b=b.next();b.length||(b=a(this).siblings(":first"));var e=b.index();b.find(".col-md-12:first").clone().addClass("cloneditem-"+c).addClass("clonedCol").attr("data-cloned-index",e).appendTo(a(this).children().eq(0))}})}var e=a("html").hasClass("is-builder");a.extend(a.easing,{easeInOutCubic:function(a,
b,d,f,e){return 1>(b/=e/2)?f/2*b*b*b+d:f/2*((b-=2)*b*b+2)+d}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};a.fn.footerReveal=function(){function c(){b.outerHeight()<=f.outerHeight()?(b.css({"z-index":-999,position:"fixed",bottom:0}),b.css({width:d.outerWidth()}),d.css({"margin-bottom":b.outerHeight()})):(b.css({"z-index":"",position:"",bottom:""}),b.css({width:""}),d.css({"margin-bottom":""}))}var b=a(this),d=b.prev(),f=a(window);c();f.on("load resize",function(){c()});return this};
(function(a,b){var d=function(a,b,c){var d;return function(){var e=this,k=arguments;d?clearTimeout(d):c&&a.apply(e,k);d=setTimeout(function(){c||a.apply(e,k);d=null},b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",d(a)):this.trigger(b)}})(jQuery,"smartresize");a.isMobile=function(c){var b=[],d={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};c="undefined"==a.type(c)?"*":c.toLowerCase();"*"==c?b=a.map(d,function(a){return a}):c in
d&&b.push(d[c]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),"i")))};var q=function(){var c=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),b=c[0],d=parseInt(window.innerHeight/2,10),b=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).height,10);c.remove();return b==d}();a(function(){function c(){a(this).css("height",9*a(this).parent().width()/16)}function b(b){setTimeout(function(){a(b).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position",
"relative")},0)}function d(b){a(b).outerFind("[data-bg-video]").each(function(){var b=a(this).attr("data-bg-video"),c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),d=a('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});a("> *:eq(0)",this).before(d);if(c&&(/youtube/g.test(c[3])||/vimeo/g.test(c[3])))if(c&&/youtube/g.test(c[3]))b=
"http"+("https:"===location.protocol?"s":"")+":",b+="//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg",a("<img>").on("load",function(){if(120===(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case "maxresdefault.jpg":this.src=this.src.replace(a,"sddefault.jpg");break;case "sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg");break;default:e&&d.css("background-image",'url("images/no-video.jpg")').show()}}else d.css("background-image",'url("'+this.src+'")').show()}).attr("src",
b),!a.fn.YTPlayer||e||a.isMobile()||a("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({videoURL:c[6],containment:"self",showControls:!1,mute:!0});else{if(c&&/vimeo/g.test(c[3])){var k=new XMLHttpRequest;k.open("GET","https://vimeo.com/api/v2/video/"+c[6]+".json",!0);k.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);d.css("background-image",'url("'+a[0].thumbnail_large+'")').show()}else e&&
d.css("background-image",'url("images/no-video.jpg")').show()};k.send();k=null;!a.fn.vimeo_player||e||a.isMobile()||a("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({videoURL:b,containment:"self",showControls:!1,mute:!0})}}else e&&d.css("background-image",'url("images/video-placeholder.jpg")').show()})}a("html").addClass(a.isMobile()?"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var b=10<a(window).scrollTop()?"addClass":
"removeClass";a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")})});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(b,c){var d=[b,b];d[c>b?0:1]=c;a(window).smartresize(function(){var b=a(window).height();0>a.inArray(b,d)&&(b=d[a(window).width()>b?1:0]);a(".mbr-section--full-height").css("height",b+"px")})}(a(window).width(),a(window).height()):q||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",a(window).height()+"px")}),a(document).on("add.cards",
function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(c)});a(document).on("add.cards changeParameter.cards",function(b){var d=a(b.target).outerFind(".mbr-section--16by9");d.length?d.attr("data-16by9","true").each(c):a(b.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")});a.fn.jarallax&&!a.isMobile()&&(a(window).on("update.parallax",
function(b){setTimeout(function(){var b=a(".mbr-parallax-background");b.jarallax("coverImage");b.jarallax("clipContainer");b.jarallax("onScroll")},0)}),e?(a(document).on("add.cards",function(c){b(c.target);a(window).trigger("update.parallax")}),a(document).on("changeParameter.cards",function(c,d,f,e){if("bg"===d)switch(a(c.target).jarallax("destroy").css("position",""),e){case "type":!0===f.parallax&&b(c.target);break;case "value":"image"===f.type&&!0===f.parallax&&b(c.target);break;case "parallax":!0===
f.parallax&&b(c.target)}a(window).trigger("update.parallax")})):b(document.body),a(window).on("shown.bs.tab",function(b){a(window).trigger("update.parallax")}));var f,l,n=0,g=null,h=!a.isMobile();a(window).scroll(function(){l&&clearTimeout(l);var b=a(window).scrollTop(),c=b<=n||h;n=b;if(g){var d=b>g.breakPoint;c?d!=g.fixed&&(h?(g.fixed=d,a(g.elm).toggleClass("is-fixed")):l=setTimeout(function(){g.fixed=d;a(g.elm).toggleClass("is-fixed")},40)):(g.fixed=!1,a(g.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",
function(b){f&&clearTimeout(f);f=setTimeout(function(){g&&(g.fixed=!1,a(g.elm).removeClass("is-fixed"));a(".mbr-fixed-top:first").each(function(){g={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},650)});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&
a(b.target).outerFind("iframe").length&&a(window).resize()});if(e)a(document).on("add.cards",function(a){d(a.target)});else d(document.body);a(document).on("changeParameter.cards",function(b,c,f,e){if("bg"===c)switch(e){case "type":a(b.target).find(".mbr-background-video-preview").remove();"video"===f.type&&d(b.target);break;case "value":"video"===f.type&&(a(b.target).find(".mbr-background-video-preview").remove(),d(b.target))}});e||a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");
a(window).resize().scroll();e||a(document).click(function(b){try{var c=b.target;if(!a(c).parents().hasClass("carousel")){do if(c.hash){var d=/#bottom|#top/g.test(c.hash);a(d?"body":c.hash).each(function(){b.preventDefault();var d=a(c).parents().hasClass("navbar-fixed-top")?60:0,d="#bottom"==c.hash?a(this).height()-a(window).height():a(this).offset().top-d;a(this).hasClass("panel-collapse")||a(this).hasClass("tab-pane")||a("html, body").stop().animate({scrollTop:d},800,"easeInOutCubic")});break}while(c=
c.parentNode)}}catch(f){}});a(".cols-same-height .mbr-figure").each(function(){function b(){d.css({width:"",maxWidth:"",marginLeft:""});if(g&&e){var a=g/e;c.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var l=f.height()/f.width();l>a&&(a=100*(l-a)/a,d.css({width:a+100+"%",maxWidth:a+100+"%",marginLeft:-a/2+"%"}))}}var c=a(this),d=c.children("img"),f=c.parent(),e=d[0].width,g=d[0].height;d.one("load",function(){e=d[0].width;g=d[0].height;b()});a(window).on("resize",b);b()})});if(!e){if(a.fn.socialLikes)a(document).on("add.cards",
function(c){a(c.target).outerFind(".mbr-social-likes").on("counter.social-likes",function(b,c,f){999<f&&a(".social-likes__counter",b.target).html(Math.floor(f/1E3)+"k")}).socialLikes({initHtml:!1})});a(document).on("add.cards",function(c){a(c.target).hasClass("mbr-reveal")&&a(c.target).footerReveal()});a(document).ready(function(){if(!a.isMobile()&&a("input[name=animation]").length){var c=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};a("input[name=animation]").remove();
var b=a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return a(this).parents().is(".navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop")}).addClass("hidden animated"),
d=a(window);d.on("scroll resize",function(){var d=document.documentElement.scrollTop||document.body.scrollTop,e=d+window.innerHeight-50;a.each(b,function(){var b=a(this),g=b[0],h=g.offsetHeight,g=c(g);if(g+h>=d&&g<=e&&b.hasClass("hidden"))b.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){b.removeClass("animated fadeInUp")})})});d.trigger("scroll")}});a(".nav-dropdown").length&&a(".nav-dropdown").swipe({swipeLeft:function(c,
b,d,f,e){a(".navbar-close").click()}})}a(document).ready(function(){if(a(".mbr-arrow-up").length){var c=a("#scrollToTop"),b=a("body,html"),d=a(window);c.css("display","none");d.scroll(function(){0<a(this).scrollTop()?c.fadeIn():c.fadeOut()});c.click(function(){b.animate({scrollTop:0},400);return!1})}});if(!e)a(".mbr-arrow").on("click",function(c){c=a(c.target).closest("section").next();c.hasClass("engine")&&(c=c.closest("section").next());c=c.offset();a("html, body").stop().animate({scrollTop:c.top},
800,"linear")});if(a("nav.navbar").length){var h=a("nav.navbar").height();a(".mbr-after-navbar.mbr-fullscreen").css("padding-top",h+"px")}if(!e&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))a(document).on("add.cards",function(c){var b=a(c.target);if(b.hasClass("mbr-fullscreen"))a(window).on("load resize",function(){b.css("height","auto");b.outerHeight()<=a(window).height()&&b.css("height","1px")});if(b.hasClass("mbr-slider")||b.hasClass("mbr-gallery"))b.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",
width:"30px"}),b.hasClass("mbr-slider")&&b.find(".full-screen .slider-fullscreen-image").css("height","1px")});a(document).ready(function(){if(!e){var c=function(b){var c=a(b).parents("section").find("iframe")[0],f=a(c).attr("src");b.parents("section").css("z-index","1");-1!==f.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");if(-1!==f.indexOf("vimeo")){var e=new Vimeo.Player(a(c));e.play()}a(b).parents("section").find(a(b).attr("data-modal")).css("display",
"table").click(function(){-1!==f.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");-1!==f.indexOf("vimeo")&&e.pause();a(this).css("display","none").off("click");b.parents("section").css("z-index","0")})};a(".modalWindow-video iframe").each(function(){var b=a(this).attr("data-src");a(this).removeAttr("data-src");var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);
-1!==b.indexOf("youtu")?a(this).attr("src","https://youtube.com/embed/"+c[6]+"?rel=0&enablejsapi=1"):-1!==b.indexOf("vimeo")&&a(this).attr("src","https://player.vimeo.com/video/"+c[6]+"?autoplay=0&loop=0")});a("[data-modal]").click(function(){c(a(this))})}});if(!e&&!a.isMobile()){var h=a("section.menu"),r=a(window).width();!h.find(".navbar").hasClass("collapsed")&&991<r&&(h.find("ul.navbar-nav li.dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&
a(this).find("a")[0].click()}),h.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}))}e||("undefined"===typeof window.initClientPlugin&&0!=a(document.body).find(".clients").length&&(window.initClientPlugin=!0,a(document.body).find(".clients").each(function(c,b){a(this).attr("data-isinit")||(m(a(this)),p(a(this)))})),"undefined"===typeof window.initTestimonialsPlugin&&
0!=a(document.body).find(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,a(".testimonials-slider").each(function(){m(this)})),0!=a(".mbr-slider.carousel").length&&a(".mbr-slider.carousel").each(function(){var c=a(this),b=c.find(".carousel-control"),d=c.find("carousel-indicators li");c.on("slide.bs.carousel",function(){b.bind("click",function(a){a.stopPropagation();a.preventDefault()});d.bind("click",function(a){a.stopPropagation();a.preventDefault()});c.carousel({keyboard:!1})}).on("slid.bs.carousel",
function(){b.unbind("click");d.unbind("click");c.carousel({keyboard:!0});1<c.find(".carousel-item.active").length&&(c.find(".carousel-item.active").eq(1).removeClass("active"),c.find(".carousel-control li.active").eq(1).removeClass("active"))})}))})(jQuery);
