<h1 align="center" >Vue3 Log Proxy</h1>

<p align="center">A repo easy log proxy for Vue 3</p>

## Getting Started

```bash
$ yarn add @vt7/log-proxy
```

## Setup

```ts
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@vt7/log-proxy'

const app = createApp(App)

app.mount('#app')
```

```vue

<template>
  <div>
    {{ state }}
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({ a: 1 })

console._log('old log state', state)
console.log('new log state', state)

// old log state Proxy{a: 1}
//       [[Handler]]: Object
//       [[Target]]: Object
//       [[IsRevoked]]: false


// new log state {a: 1}
</script>
```


