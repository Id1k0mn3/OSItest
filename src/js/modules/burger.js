const burgerButton = document.getElementById('burger')
const menu = document.getElementById('menu')
const body = document.getElementById('body')

export function burger() {
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger--active')
    menu.classList.toggle('menu--active')
    body.classList.toggle('blocked')
  })
}

document.addEventListener('click', e => {
  const targetBlock = e.target
  const clickOnMenu = targetBlock === menu || menu.contains(targetBlock)
  const hamburger = targetBlock === burgerButton || burgerButton.contains(targetBlock)
  const activeMenu = menu.classList.contains('menu--active')
  console.log(!clickOnMenu, hamburger, activeMenu)
  if (!clickOnMenu && !hamburger && activeMenu) {
    burgerButton.classList.toggle('burger--active')
    menu.classList.toggle('menu--active')
    body.classList.toggle('blocked')
  }
})
