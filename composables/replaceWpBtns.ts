export default function (element: HTMLElement): void {
  const wpBtns = element.querySelectorAll('.wp-element-button')

  wpBtns.forEach((wpBtn: Element): void => {
    const downloadable = wpBtn.hasAttribute('download');
    const isLink = wpBtn.hasAttribute('href');
    let href = '';
    const btnText = wpBtn.textContent;
    let btn = null;

    if (isLink) {
      href = wpBtn.getAttribute('href') || '';
      btn = document.createElement('a');
      btn.href = href;
    } else {
      btn = document.createElement('button');
    }

    btn.classList.add('btn', 'btn-primary');

    /* eslint-disable */
    btn.innerHTML = `
      <div class="btn-content">
        ${btnText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z
          />
        </svg>
      </div>
    `;
    /* eslint-enable */

    if (downloadable) {
      btn.setAttribute('download', '');
    }

    wpBtn.replaceWith(btn);
  })
}
