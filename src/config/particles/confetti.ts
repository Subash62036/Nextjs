export const confettiParticlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: -20,
  },
  particles: {
    color: {
      value: ['#1E00FF', '#FF0061', '#E1FF00', '#00FF9E'],
      animation: {
        enable: true,
        speed: 15,
      },
    },
    move: {
      direction: 'top',
      enable: true,
      outModes: {
        default: 'out',
      },
      size: true,
      speed: {
        min: 1,
        max: 3,
      },
    },
    number: {
      value: 10,
      density: {
        enable: true,
        area: 800,
      },
    },
    opacity: {
      value: 1,
      animation: {
        enable: false,
        startValue: 'max',
        destroy: 'min',
        speed: 0.3,
        sync: true,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: 'random',
      // move: true,
      animation: {
        enable: true,
        speed: 60,
      },
    },
    tilt: {
      direction: 'random',
      enable: true,
      // move: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 60,
      },
    },
    shape: {
      type: ['circle', 'square', 'triangle', 'polygon'],
      options: {
        // image: [
        //   src: './img/flying-message.png',
        //   width: 32,
        //   height: 32
        // ],
        polygon: [
          {
            sides: 5,
            fill: false,
          },
          {
            sides: 6,
            fill: false,
          },
        ],
      },
    },
    size: {
      value: {
        min: 3,
        max: 15,
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 30,
      },
      enlighten: {
        enable: true,
        value: 30,
      },
      enable: true,
      speed: {
        min: 15,
        max: 25,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      // move: true,
      speed: {
        min: -15,
        max: 15,
      },
    },
  },
};
