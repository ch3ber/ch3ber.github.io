export const toggleNav = () => {
  const navModal = document.getElementById('navModal')
  const body = document.querySelector('body')
  const isOpen = navModal.classList.contains('h-screen')

  if (isOpen) {
    body.classList.remove('h-screen', 'overflow-hidden')
    navModal.classList.remove('h-screen')
    navModal.classList.add('h-0')
  }

  if (!isOpen) {
    body.classList.add('h-screen', 'overflow-hidden')
    navModal.classList.remove('h-0')
    navModal.classList.add('h-screen')
  }
}
