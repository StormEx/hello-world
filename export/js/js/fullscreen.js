VDSExtern = {};

VDSExtern.Fullscreen = class {
	constructor(element) {
		this.element = element;
	}

	setFullscreen(value, callback) {
		if(!!this.element) {
			if(value) {
				if(this.element.requestFullscreen) {
					this.element.requestFullscreen();
				} else if(this.element.mozRequestFullScreen) {
					this.element.mozRequestFullScreen();
				} else if(this.element.webkitRequestFullscreen) {
					this.element.webkitRequestFullscreen();
				} else if(this.element.msRequestFullscreen) {
					this.element.msRequestFullscreen();
				}
			}
			else {
				if(document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if(document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if(document.msRequestFullscreen) {
					document.msRequestFullscreen();
				}
			}
		}
	}

	getFullscreen() {
		return document.fullscreenEnabled || document.mozFullscreenEnabled || document.msFullscreenEnabled || document.webkitIsFullScreen ? true : false;
	}
}