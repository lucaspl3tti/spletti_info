export default function (element: HTMLElement): void {
  const links = element.querySelectorAll('a')

  links.forEach((link: HTMLAnchorElement): void => {
    link.classList.add('hover-underline')
  })
}
