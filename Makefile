JSOBJECTS := utils.min.js Timer.min.js TimerError.min.js CanvasTask.min.js CanvasObject.min.js CanvasObjectError.min.js KeyListener.min.js Canvas.min.js

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
