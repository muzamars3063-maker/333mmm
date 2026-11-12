const scripts = [
  '/js/vendors.js',
  '/plugins/aos/aos.min.js',
  '/plugins/counter-up/jquery.counterup.min.js',
  '/plugins/slick/slick.min.js',
  '/plugins/countdown/jquery.countdown.min.js',
  '/plugins/nice-select/jquery.nice-select.min.js',
  '/js/custom.js',
  '/js/menu.js',
]

let loader

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.onload = resolve
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(script)
  })
}

export function loadThemeScripts() {
  if (!loader) {
    loader = scripts.reduce(
      (chain, src) => chain.then(() => loadScript(src)),
      Promise.resolve(),
    )
  }
  return loader
}
