# Documentation

Below, you can find all type declarations, including the events.
A more verbose and in-depth documentation will be provided soon.

```ts
declare class Color {
  constructor(from?: Color | number[] | string)
  string(format: ColorFormat): string
  toString(): string
  clone(): Color
}

declare interface Color {
  hue(): number
  hue(value: number): Color
  saturation(): number
  saturation(value: number): Color
  value(): number
  value(value: number): Color
  alpha(): number
  alpha(value: number): Color
}

declare type ColorFormat = 'hex' | 'rgb' | 'hsv' | 'hsl'

export declare class ColorPicker extends EventEmitter<{
  open: []
  pick: [Color | null]
  cancel: []
  close: []
}> {
  /**
   * Get whether the dialog is currently open.
   */
  get isOpen(): boolean
  /**
   * Get the picked color.
   */
  get color(): Color | null
  /**
   * Get the color currently selected in the dialog.
   */
  get selectedColor(): Color
  /**
   * Get the color output format.
   */
  get format(): ColorFormat
  /**
   * Get the root element for this picker.
   */
  get element(): HTMLElement
  /**
   * Get the input the picker is bound to.
   */
  get input(): HTMLInputElement

  /**
   * Create a new ColorPicker instance.
   * @param $from The element or query to bind to. (leave null to create one)
   * @param config The picker configuration.
   */
  constructor($from?: HTMLElement | string | null, config?: Partial<PickerConfig>)
  /**
   * Toggle whether the picker dialog is opened.
   * @param value Force open or closed?
   * @param emit Emit event?
   */
  toggle(value?: boolean, emit?: boolean): void
  /**
   * Open the picker dialog.
   * @param emit Emit event?
   */
  open(emit?: boolean): void
  /**
   * Close the picker dialog.
   * @param emit Emit event?
   */
  close(emit?: boolean): void
  /**
   * Clear the picker color value.
   * @param emit Emit event?
   */
  clear(emit?: boolean): void
  /**
   * Set the picker color value.
   * @param color The new color value.
   * @param emit Emit event?
   */
  setColor(color: Color | number[] | string | null, emit?: boolean): void
  /**
   * Set the picker color format.
   * @param format The color format.
   * @param update Update colors?
   */
  setFormat(format: ColorFormat, update?: boolean): void
}

declare interface PickerConfig {
  /**
   * Specifies the theme for the color picker.
   * If set to null, the theme is inferred from data attributes on the element.
   */
  theme: 'dark' | 'light' | null
  /**
   * Determines the appearance of the toggle element, either as a button or an input field.
   */
  toggleStyle: 'button' | 'input'
  /**
   * Duration of the toggle animation in milliseconds.
   */
  animationDuration: number
  /**
   * The default initial color.
   */
  defaultColor: string | null
  /**
   * A list of predefined color swatches available for selection.
   * Pass null or false to disable swatches.
   */
  swatches: string[] | null | false
  /**
   * Whether to enable the alpha (transparency) slider.
   */
  enableAlpha: boolean
  /**
   * Whether to enable the built-in eyedropper tool for selecting colors from the screen.
   */
  enableEyedropper: boolean
  /**
   * The set of color formats the user can choose from.
   * Pass null or false to disable format selection.
   */
  formats: ColorFormat[] | null | false
  /**
   * The default color format to use when multiple formats are enabled.
   */
  defaultFormat: ColorFormat
  /**
   * Determines how the chosen color is applied:
   * - 'instant': applies immediately as the user picks a color
   * - 'confirm': requires user confirmation (e.g., via a submit button)
   */
  commitMode: 'instant' | 'confirm'
  /**
   * Whether to show the submit button.
   */
  showSubmitButton: boolean
  /**
   * Whether to show the clear button for resetting the color.
   */
  showClearButton: boolean
  /**
   * Whether the color picker should close when clicking outside of it.
   */
  dismissOnOutsideClick: boolean
  /**
   * Whether the color picker should close when escape is pressed.
   */
  dismissOnEscape: boolean
}
```
