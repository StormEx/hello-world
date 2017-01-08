package ;

#if flash
typedef Fullscreen = impl.FlashFullscreen;
#else
import js.html.Element;

@:native("VDSExtern.Fullscreen")
extern class Fullscreen {
	public function new(element:Element):Void;

	public function setFullscreen(value:Bool, resultCallback:Bool->Void = null):Void;
	public function getFullscreen():Bool;
}
#end