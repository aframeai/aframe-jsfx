import jsfx from "loov-jsfx";

if (typeof AFRAME === "undefined") {
  throw new Error(
    "Component attempted to register before AFRAME was available."
  );
}

AFRAME.registerComponent("jsfx", {
  schema: {
    src: { type: "asset" },
    sound: {},
    event: { default: "click" },
  },

  update: function (old) {

    // update src
    if (!this.data.sound || old.src != this.data.src) {
      // get json from asset
      let config = JSON.parse(THREE.Cache.files[this.data.src]);

      // create sound configuration from json entries
      let sounds = Object.keys(config);
      this.schema.sound.oneOf = sounds;
      this.schema.sound.default = sounds[0];

      // use first sound as default sound
      if (!this.data.sound) {
        this.el.setAttribute("jsfx", "sound", this.schema.sound.default);
      }

      // init jsfx
      this.jsfx = jsfx.Sounds(config);
    }

    // update current sound
    this.sound = this.data.sound || sounds[0];
    // update event handler when playing
    if (this.playing) {
      this.removeEvent(old.event);
      this.addEvent();
    }
  },

  playSound(sound) {
    this.jsfx[sound]();
  },

  addEvent: function () {
    if (this.event) return;
    this.event = () => {
      this.playSound(this.sound);
    };
    this.el.addEventListener(this.data.event, this.event);
  },

  removeEvent: function (name) {
    if (!this.event) return;
    this.el.removeEventListener(name, this.event);
    this.event = null;
  },

  pause: function () {
    this.playing = false;
    this.remove();
  },

  play: function () {
    this.playing = true;
    this.addEvent();
  },

  remove: function () {
    this.removeEvent(this.data.event);
  },
});
