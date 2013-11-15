JSOBJECTS := utils.min.js CanvasEvent.min.js TargetedEvent.min.js \
	PointedEvent.min.js KeyUpEvent.min.js KeyDownEvent.min.js \
	KeyPressEvent.min.js MouseDownEvent.min.js MouseUpEvent.min.js \
	MouseClickEvent.min.js MouseDoubleClickEvent.min.js MouseMoveEvent.min.js \
	EventDispatcher.min.js EventDispatcherError.min.js Signal.min.js \
	Timer.min.js TimerError.min.js CanvasTask.min.js CanvasObject.min.js \
	CanvasObjectError.min.js ImageObject.min.js PathObject.min.js \
	RectangleObject.min.js TextObject.min.js InputListener.min.js \
	Canvas.min.js

JSOUTPUT := canvas.min.js

COMPILER := yui-compressor

VPATH := ./src/
FLAGS := --charset utf-8

all: js

js: $(JSOBJECTS)
	cat $(JSOBJECTS) > $(JSOUTPUT)

%.min.js: %.js
	$(COMPILER) $(FLAGS) -o $@ $<

clean:
	rm ./*.min.js
	rm ./*.min.css
 
.PHONY: clean
