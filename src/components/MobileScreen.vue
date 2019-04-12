<template>
  <div class="device">
    <div class="device-header"></div>
    <div class="device-screen" v-bind:class="doScroll" v-if="type == 'image'" :style="imgStyle"></div>
    <div class="device-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'MobileScreen',
  props: {
    src: String,
    type: String,
    scroll: Boolean,
    duration: Number
  },
  data: function() {
    return {
      imgStyle: {
        'background-image': 'url(' + this.src + ')',
        '-webkit-animation-duration': this.duration + 's',
        'animation-duration': this.duration + 's'
      }
    }
  },
  computed: {
    doScroll: function() {
      return this.scroll ? 'scroll' : ''
    }
  }
}
</script>

<style scoped>
@-webkit-keyframes device_scroll {
  0% {
    background-position: top center;
  }
  10% {
    background-position: top center;
  }
  50% {
    background-position: center center;
  }
  90% {
    background-position: bottom center;
  }
  100% {
    background-position: bottom center;
  }
}
@keyframes device_scroll {
  0% {
    background-position: top center;
  }
  10% {
    background-position: top center;
  }
  50% {
    background-position: center center;
  }
  90% {
    background-position: bottom center;
  }
  100% {
    background-position: bottom center;
  }
}
.device {
  background: #333;
  width: 100%;
  border: 5px solid #333;
  border-radius: 25px;
}
.darkMode .device {
  background: #d0d0d0;
  border: 5px solid #d0d0d0;
}
.device-header,
.device-footer {
  height: 30px;
}
.device-screen {
  padding-bottom: calc(2960 / 1440 * 100%);
  background-size: 100%;
}
.device-screen.scroll {
  -webkit-animation-name: device_scroll;
  animation-name: device_scroll;
  -webkit-animation-duration: 20s;
  animation-duration: 20s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-delay: 1500ms;
  animation-delay: 1500ms;
}
</style>