<template>
  <ul class="vue-tailwind-pagination flex items-center">
    <li
        v-if="hasFirstLastButtons"
        class="vue-tailwind-pagination-first w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100"
        :class="[
          $props.currentPage === 1 ? 'cursor-default' : 'cursor-pointer',
          theme === 'rounded' ? 'rounded-full' : 'rounded'
        ]"
        :style="generateStyles(0)"
        @click="goToFirstPage"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11">
        <g fill="none" fill-rule="evenodd" stroke-linecap="square">
          <g :stroke="$props.currentPage === 1 ? $props.disabledColor : $props.iconColor">
            <g>
              <g>
                <path d="M6.5 12L2.326 8.243c-.41-.37-.444-1.001-.074-1.412.023-.026.048-.05.074-.074L6.5 3h0m-6 0v9" transform="translate(-619 -931) translate(80 208) translate(539 721)"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </li>

    <li
        v-if="hasNextPrevButtons"
        class="vue-tailwind-pagination-prev w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100"
        :class="[
          $props.currentPage === 1 ? 'cursor-default' : 'cursor-pointer',
          theme === 'rounded' ? 'rounded-full' : 'rounded'
        ]"
        :style="generateStyles(0)"
        @click="goToPreviousPage"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
        <g fill="none" fill-rule="evenodd" stroke-linecap="square">
          <g :stroke="$props.currentPage === 1 ? $props.disabledColor : $props.iconColor">
            <g>
              <g>
                <path d="M20.5 10l3.757-4.174c.37-.41 1.001-.444 1.412-.074.026.023.05.048.074.074L29.5 10h0" transform="translate(-641 -931) translate(80 208) translate(539 721) rotate(-90 25 7.5)"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </li>

    <li
        v-for="(page, index) in this.paginationRange"
        :key="index"
        class="vue-tailwind-pagination-page w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100"
        :class="[
          page === '...' ? 'cursor-default' : 'cursor-pointer',
          theme === 'rounded' ? 'rounded-full' : 'rounded'
        ]"
        :style="generateStyles(page)"
        @click="changePage(page)"
    >
      {{ page }}
    </li>

    <li
        v-if="hasNextPrevButtons"
        class="vue-tailwind-pagination-next w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100"
        :class="[
          $props.currentPage === this.totalPagesCount ? 'cursor-default' : 'cursor-pointer',
          theme === 'rounded' ? 'rounded-full' : 'rounded'
        ]"
        :style="generateStyles(0)"
        @click="goToNextPage"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" class="transform rotate-180">
        <g fill="none" fill-rule="evenodd" stroke-linecap="square">
          <g :stroke="$props.currentPage === totalPagesCount ? $props.disabledColor : $props.iconColor">
            <g>
              <g>
                <path d="M20.5 10l3.757-4.174c.37-.41 1.001-.444 1.412-.074.026.023.05.048.074.074L29.5 10h0" transform="translate(-641 -931) translate(80 208) translate(539 721) rotate(-90 25 7.5)"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </li>

    <li
        v-if="hasFirstLastButtons"
        class="vue-tailwind-pagination-last w-8 h-8 flex justify-center items-center m-0.5 p-2 border text-xs transition duration-100"
        :class="[
          $props.currentPage === this.totalPagesCount ? 'cursor-default' : 'cursor-pointer',
          theme === 'rounded' ? 'rounded-full' : 'rounded'
        ]"
        :style="generateStyles(0)"
        @click="goToLastPage"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" class="transform rotate-180">
        <g fill="none" fill-rule="evenodd" stroke-linecap="square">
          <g :stroke="$props.currentPage === totalPagesCount ? $props.disabledColor : $props.iconColor">
            <g>
              <g>
                <path d="M6.5 12L2.326 8.243c-.41-.37-.444-1.001-.074-1.412.023-.026.048-.05.074-.074L6.5 3h0m-6 0v9" transform="translate(-619 -931) translate(80 208) translate(539 721)"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'vueTailwindPagination',
  props: {
    totalItemsCount: {
      type: Number,
      required: true,
      validator: (totalItemsCount) => {
        return totalItemsCount >= 0
      }
    },
    itemsPerPage: {
      type: Number,
      required: true,
      validator: (itemsPerPage) => {
        return itemsPerPage > 0
      }
    },
    siblingCount: {
      type: Number,
      default: 2,
      validator: (siblingCount) => {
        return siblingCount > 0
      }
    },
    currentPage: {
      type: Number,
      default: 1,
      validator: (currentPage) => {
        return currentPage >= 1
      }
    },
    loading: {
      type: Boolean,
      default: false,
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
      validator: (theme) => {
        return ['basic', 'rounded', 'outlined'].includes(theme)
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
    return {

    }
  },
  computed: {
    totalPagesCount () {
      if (this.itemsPerPage === 0) {
        return 0
      }
      return Math.ceil(this.totalItemsCount / this.itemsPerPage)
    },
    paginationRange () {
      const DOTS = '...'

      // The bellow `totalPagesNumbers` is determined as { siblingCount + (firstPage + lastPage + currentPage + 2*DOTS) }
      const totalVisiblePages = this.siblingCount + 5

      if (totalVisiblePages >= this.totalPagesCount) {
        return this.range(1, this.totalPagesCount)
      }

      const leftSiblingIndex = Math.max(this.currentPage - this.siblingCount, 1)
      const rightSiblingIndex = Math.min(this.currentPage + this.siblingCount, this.totalPagesCount)

      const shouldShowLeftDots = leftSiblingIndex > this.siblingCount + 2
      const shouldShowRightDots = rightSiblingIndex < this.totalPagesCount - this.siblingCount - 1

      const firstPageIndex = 1
      const lastPageIndex = this.totalPagesCount

      if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * this.siblingCount
        let leftRange = this.range(1, leftItemCount)

        return [...leftRange, DOTS, lastPageIndex]
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        let rightItemCount = 3 + 2 * this.siblingCount
        let rightRange = this.range(this.totalPagesCount - rightItemCount + 1, this.totalPagesCount)
        return [firstPageIndex, DOTS, ...rightRange]
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = this.range(leftSiblingIndex, rightSiblingIndex)
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
      }
    }
  },
  methods: {
    range (start, end) {
      let length = end - start + 1
      return Array.from({ length }, (_, idx) => idx + start)
    },
    goToFirstPage () {
      if (this.currentPage !== 1) {
        this.$emit('pageChanged', 1)
      }
    },
    goToLastPage () {
      if (this.currentPage !== this.totalPagesCount) {
        this.$emit('pageChanged', this.totalPagesCount)
      }
    },
    goToPreviousPage () {
      if (this.currentPage !== 1) {
        this.$emit('pageChanged', this.currentPage - 1)
      }
    },
    goToNextPage () {
      if (this.currentPage !== this.totalPagesCount) {
        this.$emit('pageChanged', this.currentPage + 1)
      }
    },
    changePage (page) {
      if (page !== '...') {
        this.$emit('pageChanged', page)
      }
    },
    generateStyles (page) {
      return {
        backgroundColor: (page === this.currentPage && this.theme !== 'basic') ? this.activeBackgroundColor : this.inactiveBackgroundColor,
        color: page === this.currentPage ? this.activeColor : this.inactiveColor,
        borderColor: (page === this.currentPage && this.theme !== 'basic') ? this.activeBorderColor : this.inactiveBorderColor
      }
    }
  }
}
</script>
