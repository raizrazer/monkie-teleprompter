class monkieTelePrompter {
  constructor(container) {
    if (container === null) {
      throw new Error(
        "Container not found, Add a container with id monkieprompter or any '#id' then pass it to the new monkieTelePrompter('#id')"
      );
    }

    //   CORE SETTINGS
    this.MULTIPLIER = 0.25;
    this.DEBUG = false;

    // VARIABLES
    this.container = container;
    this.speed = 1 * this.MULTIPLIER;
    this.scrollPosition = 0;
    this.container.style.overflowY = "scroll";
    this.container.style.maxHeight = "100%";
    this.container.style.scrollBehavior = "auto";
    this.reverseMode = false;
    this.rafId = null;
    this.container.querySelector("#mtp-play")?.addEventListener("click", () => {
      this.play();
    });
    this.container
      .querySelector("#mtp-pause")
      ?.addEventListener("click", () => {
        this.pause();
      });
    this.container
      .querySelector("#mtp-reverse")
      ?.addEventListener("click", (e) => {
        this.reverse();
        this.reverseMode
          ? (e.target.innerHTML = "⬇️Forward")
          : (e.target.innerHTML = "⬆️Reverse");
      });
    this.container
      .querySelector("#mtp-speed")
      ?.addEventListener("input", (e) => {
        this.ifDebug(e.target.value);
        this.container.querySelector(
          "#speed-value"
        ).innerHTML = `${e.target.value}`;
        this.speed = e.target.value * this.MULTIPLIER;
      });

    this.onScrollPauseAndPlay();
  }

  ifDebug(...props) {
    this.DEBUG && console.log(...props);
  }

  //   FUNCTION which controls the play of the monkieprompter
  play() {
    this.ifDebug("Playing");
    if (this.rafId === null) {
      const step = () => {
        if (this.reverseMode) {
          this.scrollPosition -= this.speed;
        } else {
          this.scrollPosition += this.speed;
        }

        const maxScroll =
          this.container.scrollHeight - this.container.clientHeight;
        this.scrollPosition = Math.max(
          0,
          Math.min(this.scrollPosition, maxScroll)
        );
        this.container.scrollTop = this.scrollPosition;

        this.rafId = requestAnimationFrame(step);
      };
      step();
    }
  }

  pause() {
    this.ifDebug("Paused");
    cancelAnimationFrame(this.rafId);
    this.rafId = null;
  }

  reverse() {
    this.ifDebug("Reversed");
    this.reverseMode = !this.reverseMode;
  }

  onScrollPauseAndPlay() {
    this.container.addEventListener("wheel", (e) => {
      let currentStatus = this.rafId === null ? "Paused" : "Playing";
      console.log("Scrolling");
      this.pause();
      this.scrollPosition = this.scrollPosition + e.deltaY;
      if (currentStatus === "Paused") return;
      let timeOut = setTimeout(() => {
        this.play();
        clearTimeout(timeOut);
      }, 500);
    });
  }
}

export default monkieTelePrompter;
