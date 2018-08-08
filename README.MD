# vue-trading-view

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/lolitaframework/vue-trading-view/master/LICENSE)

VueJS component for rendering the [TradingView Advanced Real-Time Chart Widget](https://www.tradingview.com/widget/advanced-chart/).

## Install
`yarn add vue-trading-view`
or
`npm install --save vue-trading-view`

## Usage
### Basic example
```javascript
import VueTradingView from 'vue-trading-view';

...
<template>
  <div class="hello">
    <VueTradingView />
  </div>
</template>

<script>
import VueTradingView from 'vue-trading-view';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    VueTradingView,
  }
}
</script>
```

All given props are passed on to the widget config. See [this page](https://www.tradingview.com/widget/advanced-chart/) for the TradingView Advanced Real-Time Chart API.

### Advanced example
```javascript
<template>
  <div class="hello">
    <VueTradingView :options="{
      symbol: 'NASDAQ:AAPL',
      theme: 'dark',
    }" />
  </div>
</template>

<script>
import VueTradingView from 'vue-trading-view';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    VueTradingView,
  }
}
</script>
```