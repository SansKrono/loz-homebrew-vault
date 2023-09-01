/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => EditorWidthSlider
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  sliderPercentage: "20",
  sliderWidth: "150"
};
var EditorWidthSlider = class extends import_obsidian.Plugin {
  // most important function, this gets executed everytime the plugin is first 
  // loaded, e.g. when obsidian starts, or when the user just installed the 
  // plugin
  async onload() {
    await this.loadSettings();
    this.addStyle();
    this.createSlider();
    this.addSettingTab(new EditorWidthSliderSettingTab(this.app, this));
  }
  onunload() {
    this.cleanUpResources();
  }
  // ---------------------------- SLIDER -------------------------------------
  createSlider() {
    const slider = document.createElement("input");
    slider.classList.add("editor-width-slider");
    slider.type = "range";
    slider.min = "0";
    slider.max = "100";
    slider.value = this.settings.sliderPercentage;
    slider.style.width = this.settings.sliderWidth + "px";
    slider.addEventListener("input", (event) => {
      const value = parseInt(slider.value);
      this.settings.sliderPercentage = value.toString();
      this.saveSettings();
      this.updateEditorStyle();
      sliderValueText.textContent = value.toString();
      console.log("Slider value:", value);
    });
    const sliderValueText = document.createElement("span");
    sliderValueText.textContent = slider.value;
    sliderValueText.classList.add("editor-width-slider-value");
    sliderValueText.style.marginLeft = "5px";
    const statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.appendChild(slider);
    statusBarItemEl.appendChild(sliderValueText);
  }
  // ---------------------------- SLIDER -------------------------------------
  cleanUpResources() {
    this.resetEditorWidth();
  }
  resetEditorWidth() {
    const value = 0;
    this.settings.sliderPercentage = value.toString();
    this.saveSettings();
    this.updateEditorStyle();
  }
  // add the styling elements we need
  addStyle() {
    const css = document.createElement("style");
    css.id = "additional-editor-css";
    document.getElementsByTagName("head")[0].appendChild(css);
    document.body.classList.add("additional-editor-css");
    this.updateEditorStyle();
  }
  // update the styles (at the start, or as the result of a settings change)
  updateEditorStyle() {
    const styleElement = document.getElementById("additional-editor-css");
    if (!styleElement)
      throw "additional-editor-css element not found!";
    else {
      styleElement.innerText = `
			body {
			  	--file-line-width: calc(700px + 10 * ${this.settings.sliderPercentage}px);
			}
		`;
    }
  }
  // update the styles (at the start, or as the result of a settings change)
  updateSliderStyle() {
    const styleElements = document.getElementsByClassName("editor-width-slider");
    if (styleElements.length === 0) {
      throw new Error("editor-width-slider-value element not found!");
    } else {
      const styleElement = styleElements[0];
      styleElement.style.width = this.settings.sliderWidth + "px";
    }
  }
  // Method to load settings
  async loadSettings() {
    this.settings = Object.assign(
      {},
      DEFAULT_SETTINGS,
      await this.loadData()
    );
  }
  // Method to store settings
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var EditorWidthSliderSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  // this.settings.sliderWidth
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Slider Width").setDesc("How wide do you want your slider to be?").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.sliderWidth).onChange(async (value) => {
      this.plugin.settings.sliderWidth = value;
      this.plugin.updateSliderStyle();
      await this.plugin.saveSettings();
    }));
  }
};
