# GoogleMapSample

---
# Local Serve
### Project setup

```
yarn install
```

### [IMPORTANT] add api key file

[src/constants/apikey.js]
```
export default Object.freeze({ 
  API_KEY: "XXXXX", 
})
```

### Compiles and hot-reloads for development
Use https protocol(see package.json)
```
yarn serve
```

---
## install module

```
vue add vuetify
yarn add google-maps-api-loader
yarn add axios
```

---
# Firebase
## Firebase initialize

```
firebase login
```

---
## local hosting

```
firebase serve
```

---
## deploy hosting

```
yarn build
firebase deploy
```

---
# Another
### color
https://vuetifyjs.com/en/styles/colors/

example
```
<v-row class="purple lighten-4">
```

### padding
https://vuetifyjs.com/ja/styles/spacing/

example
```
set top margin and top padding 5point(20px)
<v-row class="mt-5">

centering
<v-row class="mx-auto">
```


