(function(){
	// This part checks for jQuery
	var version = "1.10.2";
	// Checks for prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
		// If there isn't an instance of jQuery, create one and append it to the head
		// Else run our bookmarklet!
		var done = false;
		var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initBookmarklet(window.jQuery);
			}
            else {
                console.log('error loading');
            }
		};
		document.getElementsByTagName("head")[0].appendChild(script);
        if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
            console.log(':::');
        }
        else {
            console.log('jquery loaded');
        }
	} else {
		initBookmarklet(window.jQuery);
	}
	function initBookmarklet($) {
		(window.bookmarklet = function() {
			// Replace this section with your own Information Overlay script
			var imageArray = ["https://rvrcamila.github.io/art167/overlay/part2/O18-.png", "https://rvrcamila.github.io/art167/overlay/part2/O11-A.png", "https://rvrcamila.github.io/art167/overlay/part2/O11-B.png", "https://rvrcamila.github.io/art167/overlay/part2/O11-C.png", "https://rvrcamila.github.io/art167/overlay/part2/O31-A.png", "https://rvrcamila.github.io/art167/overlay/part2/O5-.png", "https://rvrcamila.github.io/art167/overlay/part2/O4-.png", "https://rvrcamila.github.io/art167/overlay/part2/O28-.png"];
			var i = Math.floor(Math.random() * imageArray.length);
			var x = Math.random() * 120 - 20;
			var y = Math.random() * 120 - 20;
			var size = Math.random() * 20 + 10;


			$("*").css({"background-color": "transparent", "color": "white"});
			$(".mila-instructions").css("color", "black");
			$("html").css("background-color", "black");
			$("img:not(.overlay-img-mila)").css({"-webkit-filter": "grayscale(100%)", "filter": "grayscale(100%)"});
			$("a:not([position])").css("position", "relative");
			$("a[position=static]").css("position", "relative");
			$("a").css("z-index", "1000000002");
			$("a").parentsUntil("body").css("z-index", "1000000002");
	    $("body").append('<img class ="overlay-img-mila" style="all:unset; width:'+ size +'vw; position:fixed; z-index:1000000001; left:' + x + 'vw; top:'+ y +'vh;" src="' + imageArray[i] + '" />');

			/*Part 2*/

		})();
	}
})();

/*
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
*/
