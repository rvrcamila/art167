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
			//var image = "file:///C:/Users/Camila/Sites/interactive/overlay/part2/O18-.png";
			var imageArray = ["file:///C:/Users/Camila/Sites/interactive/overlay/part2/O18-.png", "file:///C:/Users/Camila/Sites/interactive/overlay/part2/O11-A.png", "file:///C:/Users/Camila/Sites/interactive/overlay/part2/O11-B.png", "file:///C:/Users/Camila/Sites/interactive/overlay/part2/O11-C.png", "file:///C:/Users/Camila/Sites/interactive/overlay/part2/O31-A.png", "file:///C:/Users/Camila/Sites/interactive/overlay/part2/O5-.png", "file:///C:/Users/Camila/Sites/interactive/overlay/part2/O4-.png"];
			var i = Math.floor(Math.random() * imageArray.length);
			var x = Math.floor(Math.random() * 100);
			var y = Math.floor(Math.random() * 100);
			var size =  Math.floor(Math.random() * 20) + 10;

			//$('head').append('<style> #overlay-image {all:none; position:fixed; top:15px; left: 30px;} </style>');
			$(":not(.overlay-image)").css("background-color", "black");
			$("*").css("color", "white");
	    $("body").append('<img class ="overlay-image" style="all:none; width:'+ size +'vw; position:fixed; left:' + x + 'vw; top:'+ y +'vh;" src="' + imageArray[i] + '" />');
			//$(".overlay-image").css("all", "none");
			//$(".overlay-image").css("position", "fixed");
			//$(".overlay-image").css("top", "300px");
			//$(".overlay-image").css("left","300px");



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
