'use strict';function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
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
      validator: function validator(totalItemsCount) {
        return totalItemsCount >= 0;
      }
    },
    itemsPerPage: {
      type: Number,
      required: true,
      validator: function validator(itemsPerPage) {
        return itemsPerPage > 0;
      }
    },
    siblingCount: {
      type: Number,
      default: 2,
      validator: function validator(siblingCount) {
        return siblingCount > 0;
      }
    },
    currentPage: {
      type: Number,
      default: 1,
      validator: function validator(currentPage) {
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
      validator: function validator(theme) {
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
  data: function data() {
    return {};
  },
  computed: {
    totalPagesCount: function totalPagesCount() {
      if (this.itemsPerPage === 0) {
        return 0;
      }

      return Math.ceil(this.totalItemsCount / this.itemsPerPage);
    },
    paginationRange: function paginationRange() {
      var DOTS = '...'; // The bellow `totalPagesNumbers` is determined as { siblingCount + (firstPage + lastPage + currentPage + 2*DOTS) }

      var totalVisiblePages = this.siblingCount + 5;

      if (totalVisiblePages >= this.totalPagesCount) {
        return this.range(1, this.totalPagesCount);
      }

      var leftSiblingIndex = Math.max(this.currentPage - this.siblingCount, 1);
      var rightSiblingIndex = Math.min(this.currentPage + this.siblingCount, this.totalPagesCount);
      var shouldShowLeftDots = leftSiblingIndex > this.siblingCount + 2;
      var shouldShowRightDots = rightSiblingIndex < this.totalPagesCount - this.siblingCount - 1;
      var firstPageIndex = 1;
      var lastPageIndex = this.totalPagesCount;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        var leftItemCount = 3 + 2 * this.siblingCount;
        var leftRange = this.range(1, leftItemCount);
        return [].concat(_toConsumableArray(leftRange), [DOTS, lastPageIndex]);
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        var rightItemCount = 3 + 2 * this.siblingCount;
        var rightRange = this.range(this.totalPagesCount - rightItemCount + 1, this.totalPagesCount);
        return [firstPageIndex, DOTS].concat(_toConsumableArray(rightRange));
      }

      if (shouldShowLeftDots && shouldShowRightDots || !shouldShowLeftDots && !shouldShowRightDots) {
        var middleRange = this.range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS].concat(_toConsumableArray(middleRange), [DOTS, lastPageIndex]);
      }
    }
  },
  methods: {
    range: function range(start, end) {
      var length = end - start + 1;
      return Array.from({
        length: length
      }, function (_, idx) {
        return idx + start;
      });
    },
    goToFirstPage: function goToFirstPage() {
      if (this.currentPage !== 1) {
        this.$emit('pageChanged', 1);
      }
    },
    goToLastPage: function goToLastPage() {
      if (this.currentPage !== this.totalPagesCount) {
        this.$emit('pageChanged', this.totalPagesCount);
      }
    },
    goToPreviousPage: function goToPreviousPage() {
      if (this.currentPage !== 1) {
        this.$emit('pageChanged', this.currentPage - 1);
      }
    },
    goToNextPage: function goToNextPage() {
      if (this.currentPage !== this.totalPagesCount) {
        this.$emit('pageChanged', this.currentPage + 1);
      }
    },
    changePage: function changePage(page) {
      if (page !== '...') {
        this.$emit('pageChanged', page);
      }
    },
    generateStyles: function generateStyles(page) {
      return {
        backgroundColor: page === this.currentPage && this.theme !== 'basic' ? this.activeBackgroundColor : this.inactiveBackgroundColor,
        color: page === this.currentPage ? this.activeColor : this.inactiveColor,
        borderColor: page === this.currentPage && this.theme !== 'basic' ? this.activeBorderColor : this.inactiveBorderColor
      };
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    staticClass: "vue-tailwind-pagination flex items-center"
  }, [_vm._ssrNode((_vm.hasFirstLastButtons ? "<li" + _vm._ssrClass("vue-tailwind-pagination-first w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100", [_vm.$props.currentPage === 1 ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded']) + _vm._ssrStyle(null, _vm.generateStyles(0), null) + "><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"7\" height=\"11\" viewBox=\"0 0 7 11\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\"><g" + _vm._ssrAttr("stroke", _vm.$props.currentPage === 1 ? _vm.$props.disabledColor : _vm.$props.iconColor) + "><g><g><path d=\"M6.5 12L2.326 8.243c-.41-.37-.444-1.001-.074-1.412.023-.026.048-.05.074-.074L6.5 3h0m-6 0v9\" transform=\"translate(-619 -931) translate(80 208) translate(539 721)\"></path></g></g></g></g></svg></li>" : "<!---->") + " " + (_vm.hasNextPrevButtons ? "<li" + _vm._ssrClass("vue-tailwind-pagination-prev w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100", [_vm.$props.currentPage === 1 ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded']) + _vm._ssrStyle(null, _vm.generateStyles(0), null) + "><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6\" height=\"11\" viewBox=\"0 0 6 11\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\"><g" + _vm._ssrAttr("stroke", _vm.$props.currentPage === 1 ? _vm.$props.disabledColor : _vm.$props.iconColor) + "><g><g><path d=\"M20.5 10l3.757-4.174c.37-.41 1.001-.444 1.412-.074.026.023.05.048.074.074L29.5 10h0\" transform=\"translate(-641 -931) translate(80 208) translate(539 721) rotate(-90 25 7.5)\"></path></g></g></g></g></svg></li>" : "<!---->") + " " + _vm._ssrList(this.paginationRange, function (page, index) {
    return "<li" + _vm._ssrClass("vue-tailwind-pagination-page w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100", [page === '...' ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded']) + _vm._ssrStyle(null, _vm.generateStyles(page), null) + ">" + _vm._ssrEscape("\n    " + _vm._s(page) + "\n  ") + "</li>";
  }) + " " + (_vm.hasNextPrevButtons ? "<li" + _vm._ssrClass("vue-tailwind-pagination-next w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100", [_vm.$props.currentPage === this.totalPagesCount ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded']) + _vm._ssrStyle(null, _vm.generateStyles(0), null) + "><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6\" height=\"11\" viewBox=\"0 0 6 11\" class=\"transform rotate-180\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\"><g" + _vm._ssrAttr("stroke", _vm.$props.currentPage === _vm.totalPagesCount ? _vm.$props.disabledColor : _vm.$props.iconColor) + "><g><g><path d=\"M20.5 10l3.757-4.174c.37-.41 1.001-.444 1.412-.074.026.023.05.048.074.074L29.5 10h0\" transform=\"translate(-641 -931) translate(80 208) translate(539 721) rotate(-90 25 7.5)\"></path></g></g></g></g></svg></li>" : "<!---->") + " " + (_vm.hasFirstLastButtons ? "<li" + _vm._ssrClass("vue-tailwind-pagination-last w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100", [_vm.$props.currentPage === this.totalPagesCount ? 'cursor-default' : 'cursor-pointer', _vm.theme === 'rounded' ? 'rounded-full' : 'rounded']) + _vm._ssrStyle(null, _vm.generateStyles(0), null) + "><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"7\" height=\"11\" viewBox=\"0 0 7 11\" class=\"transform rotate-180\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\"><g" + _vm._ssrAttr("stroke", _vm.$props.currentPage === _vm.totalPagesCount ? _vm.$props.disabledColor : _vm.$props.iconColor) + "><g><g><path d=\"M6.5 12L2.326 8.243c-.41-.37-.444-1.001-.074-1.412.023-.026.048-.05.074-.074L6.5 3h0m-6 0v9\" transform=\"translate(-619 -931) translate(80 208) translate(539 721)\"></path></g></g></g></g></svg></li>" : "<!---->"))]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-7a6f2685";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var component$1 = __vue_component__;// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = component$1; // Attach install function executed by Vue.use()

  installable.install = function (Vue) {
    Vue.component('vueTailwindPagination', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;