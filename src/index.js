import './index.css'

import { toggleNav } from './utils/toggleNav'
import { toggleNavShadow } from './utils/toggleNavShadow'
import { toggleDarkMode } from './utils/toggleDarkMode'

document.querySelectorAll('[data-showNav]')
  .forEach((el) => el.addEventListener('click', toggleNav))

document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode)

document.addEventListener('scroll', toggleNavShadow)
