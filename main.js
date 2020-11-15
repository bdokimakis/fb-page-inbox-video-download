$(document).ready(function() {
	setInterval(function() {
		$(document).find("video").each(function() {
			if (!$(document).find("#videoDownloadLink-" + $(this).attr('id')).length) {
				$(this).parent().append('<a id="videoDownloadLink-'  + $(this).attr('id') + '" href="' + $(this).attr('src') + '" download="' + $(this).attr('src') + '" style="position: absolute;top: 10px;left: 6px; color: white; background-color: black; height: 20px; line-height: 20px; padding: 3px;">Download</a>');
			}
		});
	}, 1000);
});