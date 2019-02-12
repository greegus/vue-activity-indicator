# VueActivityIndicator

Minimalistic activity indicator (loading icon) in shape of spinning wheel.

# Instalation

Add to your project dependencies.

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

// ...

// Add localy to the list of used components
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
Size of the icon in pixels or one of the named sized (`large`, `small`, `normal`). 

*Default: `"normal"`*

### `stroke` (Number)
Width of the icons stroke. If not defined, it will be resolved based on the size.

*Default: `undefined`*

### `color` (String)
Color of the icon. An CSS color value.

*Default: `"black"`*

### `opacity` (Number)
An opacity of the icon, in range from 0 to 1.

*Default: `.35`*








