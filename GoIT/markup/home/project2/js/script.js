var zoomButtons = document.getElementsByClassName('gallery_img_thumb_btns_zoom_btn');
var closeButtons = document.getElementsByClassName('gallery_img_prview_close_btn');

var zoomImage = function() {
	var zoomBtnId = this.getAttribute("id");
	var prevewId = zoomBtnId + '_prev';
        document.getElementById(prevewId).className += ' gallery_img_prview_img_active';
		document.getElementById("paranja").style.display = "block";
};

var closeImage = function(){	
	this.parentElement.className = 'gallery_img_prview_img';
	document.getElementById("paranja").style.display = "none";
};

for(var i=0;i<zoomButtons.length;i++){
        zoomButtons[i].addEventListener('click', zoomImage, false);
    }

for(var i=0;i<closeButtons.length;i++){
        closeButtons[i].addEventListener('click', closeImage, false);
    }