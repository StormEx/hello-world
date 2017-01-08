package ;

#if js
import js.html.CanvasElement;
import js.Browser;
#end

class Main {
	static var fullscreen:Fullscreen = null;

	public static function main() {
#if js
		var element:CanvasElement = Std.instance(Browser.document.getElementById("test"), CanvasElement);
		element.onclick = toggleFullscreen;

		fullscreen = new Fullscreen(element);
#else
		fullscreen = new Fullscreen();
#end
	}

	static function toggleFullscreen(e) {
		if(fullscreen != null) {
			fullscreen.setFullscreen(!fullscreen.getFullscreen());
		}
	}

	public function new() {
	}
}
