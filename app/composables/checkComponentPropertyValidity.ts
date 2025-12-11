import Utilities from '@helper/utilities.helper';

export default function (
  property: unknown,
  propertyName: string,
  componentName: string,
  required: boolean = false,
  propertyOptions: unknown[]|null = null,
): void {
  if (required && Utilities.isEmpty(property)) {
    throw new Error(`The ${propertyName} property for ${componentName} component is required and can not be empty!`); // eslint-disable-line max-len
  }

  if (propertyOptions && property && !propertyOptions.includes(property)) {
    throw new Error(`The ${propertyName} "${property}" is not valid for ${componentName} component!`); // eslint-disable-line max-len
  }
}
