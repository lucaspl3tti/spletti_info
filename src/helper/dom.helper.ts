import type { ElementCreateOptions } from '../interfaces/helpers.interface';
import { Utilities } from './utilities.helper';
import { Selector } from './selector.helper';

/**
 * ##### Element helper functions
 */
export class Dom {
  /**
   * ## Helper function to check if a given element is an HTML node
   */
  static isNode<Element extends HTMLElement | Document>(
    element: Element | null,
  ): boolean {
    return element instanceof Node;
  }

  /**
   * ## Helper function to query element by selector
   */
  // eslint-disable-next-line max-len
  static get<Parent extends HTMLElement | Document, Element extends HTMLElement>(
    parent: Parent,
    selector: string,
    strict = true,
  ): Element | null {
    // when strict is enabled check if parent node is a valid element
    if (strict && !this.isNode(parent)) {
      throw new Error('The parent element is not a valid HTML Node!');
    }

    /**
     * get element with searched selector by using querySelector if no elements
     * were found set it to false
     */
    const element = parent.querySelector<Element>(selector);

    // when strict is enabled throw an error when no elements were found
    if (strict && !element) {
      // eslint-disable-next-line max-len
      throw new Error(`The required element "${selector}" does not exist in parent node!`);
    }

    return element;
  }

  /**
   * ## Helper function to query all elements of given selector and turn
   * NodeList into Array
   */
  // eslint-disable-next-line max-len
  static getAll<Parent extends HTMLElement | Document, Element extends HTMLElement>(
    parent: Parent,
    selector: string,
    strict = true,
  ): Element[] {
    // when strict is enabled check if parent node is a valid element
    if (strict && !this.isNode(parent)) {
      throw new Error('The parent element is not a valid HTML Node!');
    }

    // get all elements with searched selector by using querySelectorAll
    const nodeList = parent.querySelectorAll<Element>(selector);
    const elements = [...nodeList];

    // when strict is enabled throw an error when no elements were found
    if (strict && elements.length === 0) {
      // eslint-disable-next-line max-len
      throw new Error(`At least one item of "${selector}" must exist in parent node!`);
    }

    return elements;
  }

  /**
   * ## Helper function to create a new element in the DOM
   */
  static createElement<Parent extends HTMLElement, Element extends HTMLElement>(
    type: keyof HTMLElementTagNameMap,
    options: ElementCreateOptions,
    appendTo: Parent | null = null,
  ): Element {
    if (Utilities.isEmpty(type)) {
      throw new Error('Element type for new element must not be empty');
    }

    // create new element of given type
    const element = document.createElement(type) as Element;

    // Loop over options obejct
    Object.entries(options).forEach(([key, value]) => {
      switch (key) {
        case 'id':
          if (Utilities.isEmpty(value)) {
            break;
          }

          element.id = value;
          break;
        case 'classes':
          if (Utilities.isEmpty(value)) {
            break;
          }

          this.addClass(element, value);
          break;
        case 'text':
          if (Utilities.isEmpty(value)) {
            break;
          }

          element.textContent = value;
          break;
        case 'html':
          if (Utilities.isEmpty(value)) {
            break;
          }

          element.innerHTML = value;
          break;
        case 'dataset':
          if (Utilities.isEmpty(value)) {
            break;
          }

          Object.entries(value).forEach(([dataKey, dataValue]) => {
            if (typeof dataValue === 'string') {
              element.dataset[dataKey] = dataValue;
            }
          });
          break;
        default:
          element.setAttribute(key, value as string);
          break;
      }
    });

    if (appendTo) {
      appendTo.appendChild(element);
    }

    return element;
  }

  /**
   * ## Helper function to hide an element in the dom
   */
  static hideElement<Element extends HTMLElement>(
    element: Element,
    hiddenClass = '',
  ): void {
    if (hiddenClass === '') {
      return this.setStyle(element, 'display', 'none');
    }

    element.classList.add(hiddenClass);
  }

  /**
   * ## Helper function to show an element in the dom
   */
  static showElement<Element extends HTMLElement>(
    element: Element,
    showClass = '',
    displayStyle: CSSStyleDeclaration['display'] = 'block',
  ): void {
    if (Utilities.isEmpty(showClass)) {
      return this.setStyle(element, 'display', displayStyle);
    }

    element.classList.add(showClass);
  }

  /**
   * ## Helper function to find parent of an element by a given selector
   * (either id or class)
   */
  static findParent<Child extends HTMLElement, Parent extends HTMLElement>(
    childElement: Child,
    searchedSelector: string,
    iterationLimit = 5,
    currentIterationCount = 0,
  ): Parent | null {
    if (iterationLimit <= ++currentIterationCount) {
      return null;
    }

    const { parentElement } = childElement;
    let isSearchedElement = false;

    // check if given selector is either an id or a class, if not throw error
    if (Selector.isClassSelector(searchedSelector)) {
      // remove trailing dot from class selector
      const searchedClassName =
        Selector.removeClassTrailingSymbol(searchedSelector);

      // check if current element in iteration has selector in classList
      isSearchedElement = parentElement?.classList.contains(searchedClassName) || false; // eslint-disable-line max-len
    } else if (Selector.isIdSelector(searchedSelector)) {
      // remove trailing hash sing from id selector
      const searchedIdName = Selector.removeIdTrailingSymbol(searchedSelector);

      // check if current element in iteration has given id
      isSearchedElement = parentElement?.id === searchedIdName;
    } else {
      throw new Error('The given selector is not valid, please check if it is an id or class selector') // eslint-disable-line
    }

    // if searched element was found or if parent element is null return parent
    if (isSearchedElement || !parentElement) {
      return parentElement as Parent | null;
    }

    // if element was not found in current iteration run next iteration
    return this.findParent(
      parentElement,
      searchedSelector,
      iterationLimit,
      currentIterationCount,
    );
  }

  /**
   * ## Helper function to get a parent by going up in the document by a
   * given number of iterations
   */
  static getParent<Child extends HTMLElement, Parent extends HTMLElement>(
    childElement: Child,
    iterationLimit = 5,
    currentIterationCount = 0,
  ): Parent | null {
    ++currentIterationCount;
    const { parentElement } = childElement;

    // if last iteration was run or if parent element is null return parent
    if (currentIterationCount >= iterationLimit || !parentElement) {
      return parentElement as Parent | null;
    }

    // if last iteration was not reached run next iteration
    return this.getParent(parentElement, iterationLimit, currentIterationCount);
  }

  static isInViewport<Element extends HTMLElement>(element: Element): boolean {
    const rect = element.getBoundingClientRect();

    /* eslint-disable max-len */
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    /* eslint-enable max-len */
  }

  static addClass<Element extends HTMLElement>(
    element: Element,
    classes: string | string[],
  ): void {
    if (Array.isArray(classes)) {
      element.classList.add(...classes);
    } else {
      element.classList.add(classes);
    }
  }

  static removeClass<Element extends HTMLElement>(
    element: Element,
    classes: string|string[],
  ): void {
    if (Array.isArray(classes)) {
      element.classList.remove(...classes);
    } else {
      element.classList.remove(classes);
    }
  }

  // eslint-disable-next-line max-len
  static listenTo <Element extends HTMLElement | Document | Window, EventName extends keyof HTMLElementEventMap>(
    target: Element,
    event: EventName,
    callback: (eventDetails: HTMLElementEventMap[EventName]) => void,
  ): void {
    target.addEventListener(
      event,
      callback as EventListener,
    );
  }

  // eslint-disable-next-line max-len
  static setStyle<Element extends HTMLElement, StyleProperty extends keyof CSSStyleDeclaration>(
    element: Element,
    property: StyleProperty,
    value: CSSStyleDeclaration[StyleProperty],
  ): void {
    element.style[property] = value;
  }

  // eslint-disable-next-line max-len
  static removeStyle<Element extends HTMLElement, StyleProperty extends keyof CSSStyleDeclaration>(
    element: Element,
    property: StyleProperty,
  ): void {
    element.style[property] = '' as CSSStyleDeclaration[StyleProperty];
  }

  static scrollToElement<Element extends HTMLElement>(
    element: Element,
    offset: number,
    callback?: (() => void)|null,
  ): void {
    const elementPosition = element.getBoundingClientRect();
    const scrollPosition = (elementPosition.y || elementPosition.top)
      + (document.scrollingElement || document.documentElement).scrollTop
      - offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });

    if (callback && callback instanceof Function) {
      callback();
    }
  }
}
