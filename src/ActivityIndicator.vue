<template>
  <svg class="activity-indicator" xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${realSize} ${realSize}`" :width="realSize" :height="realSize">
    <g fill="transparent" class="activity-indicator--icon">
      <circle :cx="radius" :cy="radius" :r="radius - halfStroke" :stroke-width="realStroke" :stroke="color" :opacity="opacity * .35" />
      <path :d="`M ${halfStroke} ${radius} Q ${halfStroke * 1.5} ${halfStroke * 1.5} ${radius} ${halfStroke}`" :stroke-width="realStroke" :stroke="color" :opacity="opacity" />
    </g>
  </svg>
</template>

<script>
const namedSizes = {
  small: { size: 16, stroke: 3 },
  normal: { size: 24, stroke: 3.5 },
  large: { size: 48, stroke: 5 }
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
      default: 0.35
    }
  },

  computed: {
    realSize() {
      return (namedSizes[this.size] && namedSizes[this.size].size) || this.size
    },

    realStroke() {
      return this.stroke || (namedSizes[this.size] && namedSizes[this.size].stroke) || this.realSize / 10
    },

    halfStroke() {
      return this.realStroke / 2
    },

    radius() {
      return this.realSize / 2
    }
  }
}
</script>

<style scoped>
.activity-indicator {
  display: inline-block;
  vertical-align: middle;
}

.activity-indicator--icon {
  animation: loading-icon__animation .65s infinite linear;
  transform-origin: 50% 50%;
}

@keyframes loading-icon__animation {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
</style>
