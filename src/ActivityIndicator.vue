<template>
  <svg class="activity-indicator" xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${realSize} ${realSize}`" :width="realSize" :height="realSize">
    <mask :id="maskName">
      <circle :cx="radius" :cy="radius" :r="radius" fill="white"/>
      <circle :cx="radius" :cy="radius" :r="radius - realStroke" fill="black"/>
    </mask>

    <g :mask="`url(${maskPath})`" :fill="color" class="_icon">
      <rect :width="realSize" :height="realSize" :opacity="opacity * .35"/>
      <path :d="`M0,0 L${realSize},0 L${radius},${radius} Z`" :opacity="opacity"/>
    </g>
  </svg>
</template>

<script>
let instanceId = 0

const namedSizes = {
  small: {size: 16, stroke: 3},
  normal: {size: 24, stroke: 3.5},
  large: {size: 48, stroke: 5}
}

export default {
  props: {
    size: {
      type: [Number, String],
      default: 'normal'
    },

    color: {
      type: String,
      default: 'black'
    },

    stroke: {
      type: Number
    },

    opacity: {
      type: Number,
      default: .35
    },
  },

  data() {
    return {
      maskName: `_activity-indicator-mask-${instanceId++}`
    }
  },

  computed: {
    realSize() {
      return (namedSizes[this.size] && namedSizes[this.size].size) || this.size
    },

    realStroke() {
      return this.stroke || (namedSizes[this.size] && namedSizes[this.size].stroke) || this.realSize / 10
    },

    radius() {
      return this.realSize / 2
    },

    maskPath() {
      return `${window.location.href || ''}#${this.maskName}`
    }
  }
}
</script>

<style scoped>
._icon {
  animation: loading-icon__animation .65s infinite linear;
  transform-origin: 50% 50%;
}

@keyframes loading-icon__animation {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
</style>
