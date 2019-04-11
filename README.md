# searchparamify

Create
[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams)
from a JavaScript object.

## Installation

### Method 1: CDN

Include the script on your page via UNPKG.

```html
<script src="https://unpkg.com/searchparamify"></script>
```

### Method 2: Download

Download [dist/searchparamify.js](dist/searchparamify.js).

Include it on your page.

```html
<script src="searchparamify.js"></script>
```

### Method 3: ES6 Module using npm and webpack (or similar)

Install via npm.

```
> npm install searchparamify
```

Include it in your scripts.

```javascript
import searchparamify from "searchparamify";
```

## Usage

Create
[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams)
from a JavaScript object.

```javascript
const params = searchparamify({
  name: "Jimmy",
  favoriteAnimal: "cat"
});
```

The result of the code above is identical to...

```javascript
const params = new URLSearchParams();
params.append("name", "Jimmy");
params.append("favoriteAnimal", "cat");
```

In both cases, `params.toString()` would return

```
"name=Jimmy&favoriteAnimal=cat"
```
