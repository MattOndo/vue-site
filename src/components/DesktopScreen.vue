<template>
  <div class="device">
    <div class="device-header flex flex-row items-center">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="device-screen">
      <div
        class="device-screen--image"
        v-bind:class="doScroll"
        v-if="type == 'image'"
        :style="imgStyle"
      ></div>
      <div class="device-screen--video" v-else-if="type == 'video'">
        <video class="w-100" controls>
          <source :src="src" type="video/mp4">Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopScreen',
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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.device-header {
  height: 1rem;
  padding: 0 0 5px 5px;
}
.device-header span {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #d3d3d3;
  margin-right: 5px;
}
.darkMode .device {
  background: #d3d3d3;
  border: 5px solid #d3d3d3;
}
.darkMode .device-header span {
  background: #333;
}
.device-screen--image {
  padding-bottom: 56.25%;
  background-size: cover;
  background-position: top center;
}
.device-screen--image.scale {
}
.device-screen--image.scroll {
  background-size: 100%;
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