# ActivityIndicator

Minimalistic activity indicator (loading icon) in shape of a spinning wheel.

# Installation

`yarn add vue-activity-indicator`

## Make it available globaly...

Add to the main app file

```javascript
import ActivityIndicator from 'vue-activity-indicator'
Vue.use(ActivityIndicator)
```

...and then use directly

```html
<activity-indicator />
```

## ...Or import it directly into components

```javascript
import ActivityIndicator from 'vue-activity-indicator'

export default {
  components: {
    ActivityIndicator
  }
}
```

```html
<ActivityIndicator />
```

# Attributes

### `size` (String | Number)
Size of the icon in pixels or one of the named sizes (`large`, `small`, `normal`). 

*Default: `"normal"`*

### `stroke` (Number)
Width of the icons stroke. If not defined, it will be resolved based on the size.

*Default: `undefined`*

### `color` (String)
Color of the icon. An CSS color value.

*Default: `"black"`*

### `opacity` (Number)
Opacity of the icon, in range from 0 to 1.

*Default: `.35`*








