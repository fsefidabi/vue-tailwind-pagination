//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'vueTailwindPagination',
  props: {
    totalItemsCount: {
      type: Number,
      required: true,
      validator: totalItemsCount => {
        return totalItemsCount >= 0;
      }
    },
    itemsPerPage: {
      type: Number,
      required: true,
      validator: itemsPerPage => {
        return itemsPerPage > 0;
      }
    },
    siblingCount: {
      type: Number,
      default: 2,
      validator: siblingCount => {
        return siblingCount > 0;
      }
    },
    currentPage: {
      type: Number,
      default: 1,
      validator: currentPage => {
        return currentPage >= 1;
      }
    },
    hasFirstLastButtons: {
      type: Boolean,
      default: true
    },
    hasNextPrevButtons: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'basic',
      validator: theme => {
        return ['basic', 'rounded', 'outlined'].includes(theme);
      }
    },
    disabledColor: {
      type: String,
      default: '#a8a8a8'
    },
    iconColor: {
      type: String,
      default: '#000'
    },
    activeColor: {
      type: String,
      default: '#000'
    },
    activeBorderColor: {
      type: String,
      default: 'transparent'
    },
    activeBackgroundColor: {
      type: String,
      default: 'transparent'
    },
    inactiveColor: {
      type: String,
      default: '#acacac'
    },
    inactiveBorderColor: {
      type: String,
      default: 'transparent'
    },
    inactiveBackgroundColor: {
      type: String,
      default: 'transparent'
    }
  },

  data() {
    return {};
  },

  computed: {
    totalPagesCount() {
      if (this.itemsPerPage === 0) {
        return 0;
      }

      return Math.ceil(this.totalItemsCount / this.itemsPerPage);
    },

    paginationRange() {
      const DOTS = '...'; // The bellow `totalPagesNumbers` is determined as { siblingCount + (firstPage + lastPage + currentPage + 2*DOTS) }

      const totalVisiblePages = this.siblingCount + 5;

      if (totalVisiblePages >= this.totalPagesCount) {
        return this.range(1, this.totalPagesCount);
      }

      const leftSiblingIndex = Math.max(this.currentPage - this.siblingCount, 1);
      const rightSiblingIndex = Math.min(this.currentPage + this.siblingCount, this.totalPagesCount);
      const shouldShowLeftDots = leftSiblingIndex > this.siblingCount + 2;
      const shouldShowRightDots = rightSiblingIndex < this.totalPagesCount - this.siblingCount - 1;
      const firstPageIndex = 1;
      const lastPageIndex = this.totalPagesCount;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * this.siblingCount;
        let leftRange = this.range(1, leftItemCount);
        return [...leftRange, DOTS, lastPageIndex];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        let rightItemCount = 3 + 2 * this.siblingCount;
        let rightRange = this.range(this.totalPagesCount - rightItemCount + 1, this.totalPagesCount);
        return [firstPageIndex, DOTS, ...rightRange];
      }

      if (shouldShowLeftDots && shouldShowRightDots || !shouldShowLeftDots && !shouldShowRightDots) {
        let middleRange = this.range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
      }
    }

  },
  methods: {
    range(start, end) {
      let length = end - start + 1;
      return Array.from({
        length
      }, (_, idx) => idx + start);
    },

    goToFirstPage() {
      if (this.currentPage !== 1) {
        this.$emit('pageChanged', 1);
      }
    },

    goToLastPage() {
      if (this.currentPage !== this.totalPagesCount) {
        this.$emit('pageChanged', this.totalPagesCount);
      }
    },

    goToPreviousPage() {
      if (this.currentPage !== 1) {
        this.$emit('pageChanged', this.currentPage - 1);
      }
    },

    goToNextPage() {
      if (this.currentPage !== this.totalPagesCount) {
        this.$emit('pageChanged', this.currentPage + 1);
      }
    },

    changePage(page) {
      if (page !== '...') {
        this.$emit('pageChanged', page);
      }
    },

    generateStyles(page) {
      return {
        backgroundColor: page === this.currentPage && this.theme !== 'basic' ? this.activeBackgroundColor : this.inactiveBackgroundColor,
        color: page === this.currentPage ? this.activeColor : this.inactiveColor,
        borderColor: page === this.currentPage && this.theme !== 'basic' ? this.activeBorderColor : this.inactiveBorderColor
      };
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    staticClass: "vue-tailwind-pagination flex items-center"
  }, [_vm.hasFirstLastButtons ? _c('li', {
    staticClass: "vue-tailwind-pagination-first w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100",
    class: [_vm.$props.currentPage === 1 ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded'],
    style: _vm.generateStyles(0),
    on: {
      "click": _vm.goToFirstPage
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "7",
      "height": "11",
      "viewBox": "0 0 7 11"
    }
  }, [_c('g', {
    attrs: {
      "fill": "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "square"
    }
  }, [_c('g', {
    attrs: {
      "stroke": _vm.$props.currentPage === 1 ? _vm.$props.disabledColor : _vm.$props.iconColor
    }
  }, [_c('g', [_c('g', [_c('path', {
    attrs: {
      "d": "M6.5 12L2.326 8.243c-.41-.37-.444-1.001-.074-1.412.023-.026.048-.05.074-.074L6.5 3h0m-6 0v9",
      "transform": "translate(-619 -931) translate(80 208) translate(539 721)"
    }
  })])])])])])]) : _vm._e(), _vm._v(" "), _vm.hasNextPrevButtons ? _c('li', {
    staticClass: "vue-tailwind-pagination-prev w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100",
    class: [_vm.$props.currentPage === 1 ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded'],
    style: _vm.generateStyles(0),
    on: {
      "click": _vm.goToPreviousPage
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "6",
      "height": "11",
      "viewBox": "0 0 6 11"
    }
  }, [_c('g', {
    attrs: {
      "fill": "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "square"
    }
  }, [_c('g', {
    attrs: {
      "stroke": _vm.$props.currentPage === 1 ? _vm.$props.disabledColor : _vm.$props.iconColor
    }
  }, [_c('g', [_c('g', [_c('path', {
    attrs: {
      "d": "M20.5 10l3.757-4.174c.37-.41 1.001-.444 1.412-.074.026.023.05.048.074.074L29.5 10h0",
      "transform": "translate(-641 -931) translate(80 208) translate(539 721) rotate(-90 25 7.5)"
    }
  })])])])])])]) : _vm._e(), _vm._v(" "), _vm._l(this.paginationRange, function (page, index) {
    return _c('li', {
      key: index,
      staticClass: "vue-tailwind-pagination-page w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100",
      class: [page === '...' ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded'],
      style: _vm.generateStyles(page),
      on: {
        "click": function ($event) {
          return _vm.changePage(page);
        }
      }
    }, [_vm._v("\n    " + _vm._s(page) + "\n  ")]);
  }), _vm._v(" "), _vm.hasNextPrevButtons ? _c('li', {
    staticClass: "vue-tailwind-pagination-next w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100",
    class: [_vm.$props.currentPage === this.totalPagesCount ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded'],
    style: _vm.generateStyles(0),
    on: {
      "click": _vm.goToNextPage
    }
  }, [_c('svg', {
    staticClass: "transform rotate-180",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "6",
      "height": "11",
      "viewBox": "0 0 6 11"
    }
  }, [_c('g', {
    attrs: {
      "fill": "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "square"
    }
  }, [_c('g', {
    attrs: {
      "stroke": _vm.$props.currentPage === _vm.totalPagesCount ? _vm.$props.disabledColor : _vm.$props.iconColor
    }
  }, [_c('g', [_c('g', [_c('path', {
    attrs: {
      "d": "M20.5 10l3.757-4.174c.37-.41 1.001-.444 1.412-.074.026.023.05.048.074.074L29.5 10h0",
      "transform": "translate(-641 -931) translate(80 208) translate(539 721) rotate(-90 25 7.5)"
    }
  })])])])])])]) : _vm._e(), _vm._v(" "), _vm.hasFirstLastButtons ? _c('li', {
    staticClass: "vue-tailwind-pagination-last w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100",
    class: [_vm.$props.currentPage === this.totalPagesCount ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded'],
    style: _vm.generateStyles(0),
    on: {
      "click": _vm.goToLastPage
    }
  }, [_c('svg', {
    staticClass: "transform rotate-180",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "7",
      "height": "11",
      "viewBox": "0 0 7 11"
    }
  }, [_c('g', {
    attrs: {
      "fill": "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "square"
    }
  }, [_c('g', {
    attrs: {
      "stroke": _vm.$props.currentPage === _vm.totalPagesCount ? _vm.$props.disabledColor : _vm.$props.iconColor
    }
  }, [_c('g', [_c('g', [_c('path', {
    attrs: {
      "d": "M6.5 12L2.326 8.243c-.41-.37-.444-1.001-.074-1.412.023-.026.048-.05.074-.074L6.5 3h0m-6 0v9",
      "transform": "translate(-619 -931) translate(80 208) translate(539 721)"
    }
  })])])])])])]) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var component = __vue_component__;

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = component; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('vueTailwindPagination', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export { entry_esm as default };
