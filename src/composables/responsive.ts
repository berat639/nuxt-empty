import {ref,  Directive } from "vue"
 

const handleResize = (el: HTMLElement) => {
    const isMobile = window.innerWidth <= 768
    if (isMobile) {
      el.classList.add('mobile')
    } else {
      el.classList.remove('mobile')
    }
  }
type UseResponsiveReturnType = {
    vResponsive: Directive
}
export const useVResponsive = (): UseResponsiveReturnType => ({
 // recommend to use the same name in the whole app with a property
 vResponsive: {
    mounted(el: HTMLElement) {
        handleResize(el)
        window.addEventListener('resize', () => handleResize(el))
    },
    unmounted(el:HTMLElement) {
        window.removeEventListener('resize', () => handleResize(el))
      }
  }
})