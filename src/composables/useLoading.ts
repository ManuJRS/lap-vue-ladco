import { ref, nextTick } from 'vue'

const isLoading = ref(true)

export function useLoading() {
  const startLoading = () => {
    isLoading.value = true
  }

  const stopLoading = () => {
    // Adding a slight delay to ensure smooth transition
    setTimeout(() => {
      isLoading.value = false
    }, 400)
  }

  const stopLoadingWhenReady = async () => {
    await nextTick()
    
    // We use requestAnimationFrame to make sure the browser has had a chance 
    // to layout the DOM elements inserted by Vue
    requestAnimationFrame(() => {
      const images = Array.from(document.querySelectorAll('img'))
      
      if (images.length === 0) {
        stopLoading()
        return
      }

      let loadedCount = 0
      let isStopped = false

      const checkFinished = () => {
        if (isStopped) return
        loadedCount++
        if (loadedCount >= images.length) {
          isStopped = true
          stopLoading()
        }
      }

      images.forEach((img) => {
        if (img.complete) {
          checkFinished()
        } else {
          img.addEventListener('load', checkFinished, { once: true })
          img.addEventListener('error', checkFinished, { once: true })
        }
      })

      // Fallback timeout in case some image network request hangs indefinitely (5 seconds)
      setTimeout(() => {
        if (!isStopped) {
          isStopped = true
          stopLoading()
        }
      }, 5000)
    })
  }

  return {
    isLoading,
    startLoading,
    stopLoading,
    stopLoadingWhenReady
  }
}

