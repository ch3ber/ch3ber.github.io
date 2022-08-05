import './index.css'

import { toggleNav } from './utils/toggleNav'
import { toggleNavShadow } from './utils/toggleNavShadow'
import { toggleDarkMode } from './utils/toggleDarkMode'

document.getElementById('toggleNav').addEventListener('click', toggleNav)
document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode)

document.addEventListener('scroll', toggleNavShadow)
