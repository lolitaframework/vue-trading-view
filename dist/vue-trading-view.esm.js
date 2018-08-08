(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




var SCRIPT_ID = 'tradingview-widget-script';
var CONTAINER_ID = 'vue-trading-view';

var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.container_id}})},staticRenderFns: [],
  name: 'VueTradingView',
  data: function data() {
    return {
      container_id: CONTAINER_ID
    };
  },
  props: {
    options: String
  },
  methods: {
    canUseDOM: function canUseDOM() {
      return typeof window !== 'undefined' && window.document && window.document.createElement;
    },
    getScriptElement: function getScriptElement() {
      return document.getElementById(SCRIPT_ID);
    },
    updateOnloadListener: function updateOnloadListener(onload) {
      var script = this.getScriptElement();
      var oldOnload = script.onload;
      return script.onload = function () {
        oldOnload();
        onload();
      };
    },
    scriptExists: function scriptExists() {
      return this.getScriptElement() !== null;
    },
    appendScript: function appendScript(onload) {
      if (!this.canUseDOM()) {
        onload();
        return;
      }

      if (this.scriptExists()) {
        if (typeof TradingView === 'undefined') {
          this.updateOnloadListener(onload);
          return;
        }
        onload();
        return;
      }
      var script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/tv.js';
      script.onload = onload;
      document.getElementsByTagName('head')[0].appendChild(script);
    },
    initWidget: function initWidget() {
      if (typeof TradingView === 'undefined') {
        return;
      }

      new window.TradingView.widget(
        Object.assign({ container_id: this.container_id }, this.options)
      );
    },
  },
  mounted: function mounted() {
    this.appendScript(this.initWidget);
  },
}

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('VueTradingView', component);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
export { install };
