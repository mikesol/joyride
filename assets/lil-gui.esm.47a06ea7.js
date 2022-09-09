/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.1
 * @author George Michael Brower
 * @license MIT
 */
class Controller {
  constructor(parent, object, property, className, widgetTag = "div") {
    this.parent = parent;
    this.object = object;
    this.property = property;
    this._disabled = false;
    this.initialValue = this.getValue();
    this.domElement = document.createElement("div");
    this.domElement.classList.add("controller");
    this.domElement.classList.add(className);
    this.$name = document.createElement("div");
    this.$name.classList.add("name");
    Controller.nextNameID = Controller.nextNameID || 0;
    this.$name.id = `lil-gui-name-${++Controller.nextNameID}`;
    this.$widget = document.createElement(widgetTag);
    this.$widget.classList.add("widget");
    this.$disable = this.$widget;
    this.domElement.appendChild(this.$name);
    this.domElement.appendChild(this.$widget);
    this.parent.children.push(this);
    this.parent.controllers.push(this);
    this.parent.$children.appendChild(this.domElement);
    this._listenCallback = this._listenCallback.bind(this);
    this.name(property);
  }
  name(name) {
    this._name = name;
    this.$name.innerHTML = name;
    return this;
  }
  onChange(callback) {
    this._onChange = callback;
    return this;
  }
  _callOnChange() {
    this.parent._callOnChange(this);
    if (this._onChange !== void 0) {
      this._onChange.call(this, this.getValue());
    }
    this._changed = true;
  }
  onFinishChange(callback) {
    this._onFinishChange = callback;
    return this;
  }
  _callOnFinishChange() {
    if (this._changed) {
      this.parent._callOnFinishChange(this);
      if (this._onFinishChange !== void 0) {
        this._onFinishChange.call(this, this.getValue());
      }
    }
    this._changed = false;
  }
  reset() {
    this.setValue(this.initialValue);
    this._callOnFinishChange();
    return this;
  }
  enable(enabled = true) {
    return this.disable(!enabled);
  }
  disable(disabled = true) {
    if (disabled === this._disabled)
      return this;
    this._disabled = disabled;
    this.domElement.classList.toggle("disabled", disabled);
    this.$disable.toggleAttribute("disabled", disabled);
    return this;
  }
  options(options) {
    const controller = this.parent.add(this.object, this.property, options);
    controller.name(this._name);
    this.destroy();
    return controller;
  }
  min(min) {
    return this;
  }
  max(max) {
    return this;
  }
  step(step) {
    return this;
  }
  listen(listen = true) {
    this._listening = listen;
    if (this._listenCallbackID !== void 0) {
      cancelAnimationFrame(this._listenCallbackID);
      this._listenCallbackID = void 0;
    }
    if (this._listening) {
      this._listenCallback();
    }
    return this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const curValue = this.save();
    if (curValue !== this._listenPrevValue) {
      this.updateDisplay();
    }
    this._listenPrevValue = curValue;
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(value) {
    this.object[this.property] = value;
    this._callOnChange();
    this.updateDisplay();
    return this;
  }
  updateDisplay() {
    return this;
  }
  load(value) {
    this.setValue(value);
    this._callOnFinishChange();
    return this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(false);
    this.parent.children.splice(this.parent.children.indexOf(this), 1);
    this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1);
    this.parent.$children.removeChild(this.domElement);
  }
}
class BooleanController extends Controller {
  constructor(parent, object, property) {
    super(parent, object, property, "boolean", "label");
    this.$input = document.createElement("input");
    this.$input.setAttribute("type", "checkbox");
    this.$input.setAttribute("aria-labelledby", this.$name.id);
    this.$widget.appendChild(this.$input);
    this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked);
      this._callOnFinishChange();
    });
    this.$disable = this.$input;
    this.updateDisplay();
  }
  updateDisplay() {
    this.$input.checked = this.getValue();
    return this;
  }
}
function normalizeColorString(string) {
  let match, result;
  if (match = string.match(/(#|0x)?([a-f0-9]{6})/i)) {
    result = match[2];
  } else if (match = string.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) {
    result = parseInt(match[1]).toString(16).padStart(2, 0) + parseInt(match[2]).toString(16).padStart(2, 0) + parseInt(match[3]).toString(16).padStart(2, 0);
  } else if (match = string.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) {
    result = match[1] + match[1] + match[2] + match[2] + match[3] + match[3];
  }
  if (result) {
    return "#" + result;
  }
  return false;
}
const STRING = {
  isPrimitive: true,
  match: (v) => typeof v === "string",
  fromHexString: normalizeColorString,
  toHexString: normalizeColorString
};
const INT = {
  isPrimitive: true,
  match: (v) => typeof v === "number",
  fromHexString: (string) => parseInt(string.substring(1), 16),
  toHexString: (value) => "#" + value.toString(16).padStart(6, 0)
};
const ARRAY = {
  isPrimitive: false,
  match: Array.isArray,
  fromHexString(string, target, rgbScale = 1) {
    const int = INT.fromHexString(string);
    target[0] = (int >> 16 & 255) / 255 * rgbScale;
    target[1] = (int >> 8 & 255) / 255 * rgbScale;
    target[2] = (int & 255) / 255 * rgbScale;
  },
  toHexString([r, g, b], rgbScale = 1) {
    rgbScale = 255 / rgbScale;
    const int = r * rgbScale << 16 ^ g * rgbScale << 8 ^ b * rgbScale << 0;
    return INT.toHexString(int);
  }
};
const OBJECT = {
  isPrimitive: false,
  match: (v) => Object(v) === v,
  fromHexString(string, target, rgbScale = 1) {
    const int = INT.fromHexString(string);
    target.r = (int >> 16 & 255) / 255 * rgbScale;
    target.g = (int >> 8 & 255) / 255 * rgbScale;
    target.b = (int & 255) / 255 * rgbScale;
  },
  toHexString({ r, g, b }, rgbScale = 1) {
    rgbScale = 255 / rgbScale;
    const int = r * rgbScale << 16 ^ g * rgbScale << 8 ^ b * rgbScale << 0;
    return INT.toHexString(int);
  }
};
const FORMATS = [STRING, INT, ARRAY, OBJECT];
function getColorFormat(value) {
  return FORMATS.find((format) => format.match(value));
}
class ColorController extends Controller {
  constructor(parent, object, property, rgbScale) {
    super(parent, object, property, "color");
    this.$input = document.createElement("input");
    this.$input.setAttribute("type", "color");
    this.$input.setAttribute("tabindex", -1);
    this.$input.setAttribute("aria-labelledby", this.$name.id);
    this.$text = document.createElement("input");
    this.$text.setAttribute("type", "text");
    this.$text.setAttribute("spellcheck", "false");
    this.$text.setAttribute("aria-labelledby", this.$name.id);
    this.$display = document.createElement("div");
    this.$display.classList.add("display");
    this.$display.appendChild(this.$input);
    this.$widget.appendChild(this.$display);
    this.$widget.appendChild(this.$text);
    this._format = getColorFormat(this.initialValue);
    this._rgbScale = rgbScale;
    this._initialValueHexString = this.save();
    this._textFocused = false;
    this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    });
    this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    });
    this.$text.addEventListener("input", () => {
      const tryParse = normalizeColorString(this.$text.value);
      if (tryParse) {
        this._setValueFromHexString(tryParse);
      }
    });
    this.$text.addEventListener("focus", () => {
      this._textFocused = true;
      this.$text.select();
    });
    this.$text.addEventListener("blur", () => {
      this._textFocused = false;
      this.updateDisplay();
      this._callOnFinishChange();
    });
    this.$disable = this.$text;
    this.updateDisplay();
  }
  reset() {
    this._setValueFromHexString(this._initialValueHexString);
    return this;
  }
  _setValueFromHexString(value) {
    if (this._format.isPrimitive) {
      const newValue = this._format.fromHexString(value);
      this.setValue(newValue);
    } else {
      this._format.fromHexString(value, this.getValue(), this._rgbScale);
      this._callOnChange();
      this.updateDisplay();
    }
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(value) {
    this._setValueFromHexString(value);
    this._callOnFinishChange();
    return this;
  }
  updateDisplay() {
    this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale);
    if (!this._textFocused) {
      this.$text.value = this.$input.value.substring(1);
    }
    this.$display.style.backgroundColor = this.$input.value;
    return this;
  }
}
class FunctionController extends Controller {
  constructor(parent, object, property) {
    super(parent, object, property, "function");
    this.$button = document.createElement("button");
    this.$button.appendChild(this.$name);
    this.$widget.appendChild(this.$button);
    this.$button.addEventListener("click", (e) => {
      e.preventDefault();
      this.getValue().call(this.object);
    });
    this.$button.addEventListener("touchstart", () => {
    }, { passive: true });
    this.$disable = this.$button;
  }
}
class NumberController extends Controller {
  constructor(parent, object, property, min, max, step) {
    super(parent, object, property, "number");
    this._initInput();
    this.min(min);
    this.max(max);
    const stepExplicit = step !== void 0;
    this.step(stepExplicit ? step : this._getImplicitStep(), stepExplicit);
    this.updateDisplay();
  }
  min(min) {
    this._min = min;
    this._onUpdateMinMax();
    return this;
  }
  max(max) {
    this._max = max;
    this._onUpdateMinMax();
    return this;
  }
  step(step, explicit = true) {
    this._step = step;
    this._stepExplicit = explicit;
    return this;
  }
  updateDisplay() {
    const value = this.getValue();
    if (this._hasSlider) {
      let percent = (value - this._min) / (this._max - this._min);
      percent = Math.max(0, Math.min(percent, 1));
      this.$fill.style.width = percent * 100 + "%";
    }
    if (!this._inputFocused) {
      this.$input.value = value;
    }
    return this;
  }
  _initInput() {
    this.$input = document.createElement("input");
    this.$input.setAttribute("type", "number");
    this.$input.setAttribute("step", "any");
    this.$input.setAttribute("aria-labelledby", this.$name.id);
    this.$widget.appendChild(this.$input);
    this.$disable = this.$input;
    const onInput = () => {
      const value = parseFloat(this.$input.value);
      if (isNaN(value))
        return;
      this.setValue(this._clamp(value));
    };
    const increment = (delta) => {
      const value = parseFloat(this.$input.value);
      if (isNaN(value))
        return;
      this._snapClampSetValue(value + delta);
      this.$input.value = this.getValue();
    };
    const onKeyDown = (e) => {
      if (e.code === "Enter") {
        this.$input.blur();
      }
      if (e.code === "ArrowUp") {
        e.preventDefault();
        increment(this._step * this._arrowKeyMultiplier(e));
      }
      if (e.code === "ArrowDown") {
        e.preventDefault();
        increment(this._step * this._arrowKeyMultiplier(e) * -1);
      }
    };
    const onWheel = (e) => {
      if (this._inputFocused) {
        e.preventDefault();
        increment(this._step * this._normalizeMouseWheel(e));
      }
    };
    let testingForVerticalDrag = false, initClientX, initClientY, prevClientY, initValue, dragDelta;
    const DRAG_THRESH = 5;
    const onMouseDown = (e) => {
      initClientX = e.clientX;
      initClientY = prevClientY = e.clientY;
      testingForVerticalDrag = true;
      initValue = this.getValue();
      dragDelta = 0;
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };
    const onMouseMove = (e) => {
      if (testingForVerticalDrag) {
        const dx = e.clientX - initClientX;
        const dy = e.clientY - initClientY;
        if (Math.abs(dy) > DRAG_THRESH) {
          e.preventDefault();
          this.$input.blur();
          testingForVerticalDrag = false;
          this._setDraggingStyle(true, "vertical");
        } else if (Math.abs(dx) > DRAG_THRESH) {
          onMouseUp();
        }
      }
      if (!testingForVerticalDrag) {
        const dy = e.clientY - prevClientY;
        dragDelta -= dy * this._step * this._arrowKeyMultiplier(e);
        if (initValue + dragDelta > this._max) {
          dragDelta = this._max - initValue;
        } else if (initValue + dragDelta < this._min) {
          dragDelta = this._min - initValue;
        }
        this._snapClampSetValue(initValue + dragDelta);
      }
      prevClientY = e.clientY;
    };
    const onMouseUp = () => {
      this._setDraggingStyle(false, "vertical");
      this._callOnFinishChange();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    const onFocus = () => {
      this._inputFocused = true;
    };
    const onBlur = () => {
      this._inputFocused = false;
      this.updateDisplay();
      this._callOnFinishChange();
    };
    this.$input.addEventListener("input", onInput);
    this.$input.addEventListener("keydown", onKeyDown);
    this.$input.addEventListener("wheel", onWheel, { passive: false });
    this.$input.addEventListener("mousedown", onMouseDown);
    this.$input.addEventListener("focus", onFocus);
    this.$input.addEventListener("blur", onBlur);
  }
  _initSlider() {
    this._hasSlider = true;
    this.$slider = document.createElement("div");
    this.$slider.classList.add("slider");
    this.$fill = document.createElement("div");
    this.$fill.classList.add("fill");
    this.$slider.appendChild(this.$fill);
    this.$widget.insertBefore(this.$slider, this.$input);
    this.domElement.classList.add("hasSlider");
    const map = (v, a, b, c, d) => {
      return (v - a) / (b - a) * (d - c) + c;
    };
    const setValueFromX = (clientX) => {
      const rect = this.$slider.getBoundingClientRect();
      let value = map(clientX, rect.left, rect.right, this._min, this._max);
      this._snapClampSetValue(value);
    };
    const mouseDown = (e) => {
      this._setDraggingStyle(true);
      setValueFromX(e.clientX);
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    };
    const mouseMove = (e) => {
      setValueFromX(e.clientX);
    };
    const mouseUp = () => {
      this._callOnFinishChange();
      this._setDraggingStyle(false);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
    let testingForScroll = false, prevClientX, prevClientY;
    const beginTouchDrag = (e) => {
      e.preventDefault();
      this._setDraggingStyle(true);
      setValueFromX(e.touches[0].clientX);
      testingForScroll = false;
    };
    const onTouchStart = (e) => {
      if (e.touches.length > 1)
        return;
      if (this._hasScrollBar) {
        prevClientX = e.touches[0].clientX;
        prevClientY = e.touches[0].clientY;
        testingForScroll = true;
      } else {
        beginTouchDrag(e);
      }
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onTouchEnd);
    };
    const onTouchMove = (e) => {
      if (testingForScroll) {
        const dx = e.touches[0].clientX - prevClientX;
        const dy = e.touches[0].clientY - prevClientY;
        if (Math.abs(dx) > Math.abs(dy)) {
          beginTouchDrag(e);
        } else {
          window.removeEventListener("touchmove", onTouchMove);
          window.removeEventListener("touchend", onTouchEnd);
        }
      } else {
        e.preventDefault();
        setValueFromX(e.touches[0].clientX);
      }
    };
    const onTouchEnd = () => {
      this._callOnFinishChange();
      this._setDraggingStyle(false);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
    const callOnFinishChange = this._callOnFinishChange.bind(this);
    const WHEEL_DEBOUNCE_TIME = 400;
    let wheelFinishChangeTimeout;
    const onWheel = (e) => {
      const isVertical = Math.abs(e.deltaX) < Math.abs(e.deltaY);
      if (isVertical && this._hasScrollBar)
        return;
      e.preventDefault();
      const delta = this._normalizeMouseWheel(e) * this._step;
      this._snapClampSetValue(this.getValue() + delta);
      this.$input.value = this.getValue();
      clearTimeout(wheelFinishChangeTimeout);
      wheelFinishChangeTimeout = setTimeout(callOnFinishChange, WHEEL_DEBOUNCE_TIME);
    };
    this.$slider.addEventListener("mousedown", mouseDown);
    this.$slider.addEventListener("touchstart", onTouchStart, { passive: false });
    this.$slider.addEventListener("wheel", onWheel, { passive: false });
  }
  _setDraggingStyle(active, axis = "horizontal") {
    if (this.$slider) {
      this.$slider.classList.toggle("active", active);
    }
    document.body.classList.toggle("lil-gui-dragging", active);
    document.body.classList.toggle(`lil-gui-${axis}`, active);
  }
  _getImplicitStep() {
    if (this._hasMin && this._hasMax) {
      return (this._max - this._min) / 1e3;
    }
    return 0.1;
  }
  _onUpdateMinMax() {
    if (!this._hasSlider && this._hasMin && this._hasMax) {
      if (!this._stepExplicit) {
        this.step(this._getImplicitStep(), false);
      }
      this._initSlider();
      this.updateDisplay();
    }
  }
  _normalizeMouseWheel(e) {
    let { deltaX, deltaY } = e;
    if (Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta) {
      deltaX = 0;
      deltaY = -e.wheelDelta / 120;
      deltaY *= this._stepExplicit ? 1 : 10;
    }
    const wheel = deltaX + -deltaY;
    return wheel;
  }
  _arrowKeyMultiplier(e) {
    let mult = this._stepExplicit ? 1 : 10;
    if (e.shiftKey) {
      mult *= 10;
    } else if (e.altKey) {
      mult /= 10;
    }
    return mult;
  }
  _snap(value) {
    const r = Math.round(value / this._step) * this._step;
    return parseFloat(r.toPrecision(15));
  }
  _clamp(value) {
    if (value < this._min)
      value = this._min;
    if (value > this._max)
      value = this._max;
    return value;
  }
  _snapClampSetValue(value) {
    this.setValue(this._clamp(this._snap(value)));
  }
  get _hasScrollBar() {
    const root = this.parent.root.$children;
    return root.scrollHeight > root.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class OptionController extends Controller {
  constructor(parent, object, property, options) {
    super(parent, object, property, "option");
    this.$select = document.createElement("select");
    this.$select.setAttribute("aria-labelledby", this.$name.id);
    this.$display = document.createElement("div");
    this.$display.classList.add("display");
    this._values = Array.isArray(options) ? options : Object.values(options);
    this._names = Array.isArray(options) ? options : Object.keys(options);
    this._names.forEach((name) => {
      const $option = document.createElement("option");
      $option.innerHTML = name;
      this.$select.appendChild($option);
    });
    this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]);
      this._callOnFinishChange();
    });
    this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    });
    this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    });
    this.$widget.appendChild(this.$select);
    this.$widget.appendChild(this.$display);
    this.$disable = this.$select;
    this.updateDisplay();
  }
  updateDisplay() {
    const value = this.getValue();
    const index = this._values.indexOf(value);
    this.$select.selectedIndex = index;
    this.$display.innerHTML = index === -1 ? value : this._names[index];
    return this;
  }
}
class StringController extends Controller {
  constructor(parent, object, property) {
    super(parent, object, property, "string");
    this.$input = document.createElement("input");
    this.$input.setAttribute("type", "text");
    this.$input.setAttribute("aria-labelledby", this.$name.id);
    this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    });
    this.$input.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        this.$input.blur();
      }
    });
    this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    });
    this.$widget.appendChild(this.$input);
    this.$disable = this.$input;
    this.updateDisplay();
  }
  updateDisplay() {
    this.$input.value = this.getValue();
    return this;
  }
}
const stylesheet = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function _injectStyles(cssContent) {
  const injected = document.createElement("style");
  injected.innerHTML = cssContent;
  const before = document.querySelector("head link[rel=stylesheet], head style");
  if (before) {
    document.head.insertBefore(injected, before);
  } else {
    document.head.appendChild(injected);
  }
}
let stylesInjected = false;
class GUI {
  constructor({
    parent,
    autoPlace = parent === void 0,
    container,
    width,
    title = "Controls",
    injectStyles = true,
    touchStyles = true
  } = {}) {
    this.parent = parent;
    this.root = parent ? parent.root : this;
    this.children = [];
    this.controllers = [];
    this.folders = [];
    this._closed = false;
    this._hidden = false;
    this.domElement = document.createElement("div");
    this.domElement.classList.add("lil-gui");
    this.$title = document.createElement("div");
    this.$title.classList.add("title");
    this.$title.setAttribute("role", "button");
    this.$title.setAttribute("aria-expanded", true);
    this.$title.setAttribute("tabindex", 0);
    this.$title.addEventListener("click", () => this.openAnimated(this._closed));
    this.$title.addEventListener("keydown", (e) => {
      if (e.code === "Enter" || e.code === "Space") {
        e.preventDefault();
        this.$title.click();
      }
    });
    this.$title.addEventListener("touchstart", () => {
    }, { passive: true });
    this.$children = document.createElement("div");
    this.$children.classList.add("children");
    this.domElement.appendChild(this.$title);
    this.domElement.appendChild(this.$children);
    this.title(title);
    if (touchStyles) {
      this.domElement.classList.add("allow-touch-styles");
    }
    if (this.parent) {
      this.parent.children.push(this);
      this.parent.folders.push(this);
      this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root");
    if (!stylesInjected && injectStyles) {
      _injectStyles(stylesheet);
      stylesInjected = true;
    }
    if (container) {
      container.appendChild(this.domElement);
    } else if (autoPlace) {
      this.domElement.classList.add("autoPlace");
      document.body.appendChild(this.domElement);
    }
    if (width) {
      this.domElement.style.setProperty("--width", width + "px");
    }
    this.domElement.addEventListener("keydown", (e) => e.stopPropagation());
    this.domElement.addEventListener("keyup", (e) => e.stopPropagation());
  }
  add(object, property, $1, max, step) {
    if (Object($1) === $1) {
      return new OptionController(this, object, property, $1);
    }
    const initialValue = object[property];
    switch (typeof initialValue) {
      case "number":
        return new NumberController(this, object, property, $1, max, step);
      case "boolean":
        return new BooleanController(this, object, property);
      case "string":
        return new StringController(this, object, property);
      case "function":
        return new FunctionController(this, object, property);
    }
    console.error(`gui.add failed
	property:`, property, `
	object:`, object, `
	value:`, initialValue);
  }
  addColor(object, property, rgbScale = 1) {
    return new ColorController(this, object, property, rgbScale);
  }
  addFolder(title) {
    return new GUI({ parent: this, title });
  }
  load(obj, recursive = true) {
    if (obj.controllers) {
      this.controllers.forEach((c) => {
        if (c instanceof FunctionController)
          return;
        if (c._name in obj.controllers) {
          c.load(obj.controllers[c._name]);
        }
      });
    }
    if (recursive && obj.folders) {
      this.folders.forEach((f) => {
        if (f._title in obj.folders) {
          f.load(obj.folders[f._title]);
        }
      });
    }
    return this;
  }
  save(recursive = true) {
    const obj = {
      controllers: {},
      folders: {}
    };
    this.controllers.forEach((c) => {
      if (c instanceof FunctionController)
        return;
      if (c._name in obj.controllers) {
        throw new Error(`Cannot save GUI with duplicate property "${c._name}"`);
      }
      obj.controllers[c._name] = c.save();
    });
    if (recursive) {
      this.folders.forEach((f) => {
        if (f._title in obj.folders) {
          throw new Error(`Cannot save GUI with duplicate folder "${f._title}"`);
        }
        obj.folders[f._title] = f.save();
      });
    }
    return obj;
  }
  open(open = true) {
    this._closed = !open;
    this.$title.setAttribute("aria-expanded", !this._closed);
    this.domElement.classList.toggle("closed", this._closed);
    return this;
  }
  close() {
    return this.open(false);
  }
  show(show = true) {
    this._hidden = !show;
    this.domElement.style.display = this._hidden ? "none" : "";
    return this;
  }
  hide() {
    return this.show(false);
  }
  openAnimated(open = true) {
    this._closed = !open;
    this.$title.setAttribute("aria-expanded", !this._closed);
    requestAnimationFrame(() => {
      const initialHeight = this.$children.clientHeight;
      this.$children.style.height = initialHeight + "px";
      this.domElement.classList.add("transition");
      const onTransitionEnd = (e) => {
        if (e.target !== this.$children)
          return;
        this.$children.style.height = "";
        this.domElement.classList.remove("transition");
        this.$children.removeEventListener("transitionend", onTransitionEnd);
      };
      this.$children.addEventListener("transitionend", onTransitionEnd);
      const targetHeight = !open ? 0 : this.$children.scrollHeight;
      this.domElement.classList.toggle("closed", !open);
      requestAnimationFrame(() => {
        this.$children.style.height = targetHeight + "px";
      });
    });
    return this;
  }
  title(title) {
    this._title = title;
    this.$title.innerHTML = title;
    return this;
  }
  reset(recursive = true) {
    const controllers = recursive ? this.controllersRecursive() : this.controllers;
    controllers.forEach((c) => c.reset());
    return this;
  }
  onChange(callback) {
    this._onChange = callback;
    return this;
  }
  _callOnChange(controller) {
    if (this.parent) {
      this.parent._callOnChange(controller);
    }
    if (this._onChange !== void 0) {
      this._onChange.call(this, {
        object: controller.object,
        property: controller.property,
        value: controller.getValue(),
        controller
      });
    }
  }
  onFinishChange(callback) {
    this._onFinishChange = callback;
    return this;
  }
  _callOnFinishChange(controller) {
    if (this.parent) {
      this.parent._callOnFinishChange(controller);
    }
    if (this._onFinishChange !== void 0) {
      this._onFinishChange.call(this, {
        object: controller.object,
        property: controller.property,
        value: controller.getValue(),
        controller
      });
    }
  }
  destroy() {
    if (this.parent) {
      this.parent.children.splice(this.parent.children.indexOf(this), 1);
      this.parent.folders.splice(this.parent.folders.indexOf(this), 1);
    }
    if (this.domElement.parentElement) {
      this.domElement.parentElement.removeChild(this.domElement);
    }
    Array.from(this.children).forEach((c) => c.destroy());
  }
  controllersRecursive() {
    let controllers = Array.from(this.controllers);
    this.folders.forEach((f) => {
      controllers = controllers.concat(f.controllersRecursive());
    });
    return controllers;
  }
  foldersRecursive() {
    let folders = Array.from(this.folders);
    this.folders.forEach((f) => {
      folders = folders.concat(f.foldersRecursive());
    });
    return folders;
  }
}
export {
  BooleanController,
  ColorController,
  Controller,
  FunctionController,
  GUI,
  NumberController,
  OptionController,
  StringController,
  GUI as default
};
