export const toggleNavShadow = (event) => {
  const isScrolled = window.scrollY > 10
  const haveDarkMode = document.querySelector('html').classList.contains('dark')

  let colorShadow = 'shadow-zinc-500/30'

  if (haveDarkMode) {
    document.getElementById('nav').classList.remove('shadow-zinc-500/30')
    colorShadow = 'shadow-zinc-800'
  }

  if (!haveDarkMode) {
    document.getElementById('nav').classList.remove('shadow-zinc-800')
  }

  if (isScrolled) {
    document.getElementById('nav').classList.add('shadow-md', colorShadow)
  }

  if (!isScrolled) {
    document.getElementById('nav').classList.remove('shadow-md', colorShadow)
  }
}
