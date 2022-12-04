export default function (element: HTMLElement) {
  const links = element.querySelectorAll('a')

  links.forEach((link) => {
    link.classList.add('hover-underline')
  })
}
