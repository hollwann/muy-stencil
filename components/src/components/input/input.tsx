import { Component, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';

let id = 0;

/**
 * @slot prefix - Used to prepend an icon or similar element to the input.
 * @slot suffix - Used to append an icon or similar element to the input.
 */

@Component({
  tag: 'muy-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input {

  inputId = `input-${++id}`;
  labelId = `input-label-${id}`;
  helpTextId = `input-help-text-${id}`;
  input: HTMLInputElement;

  @State() hasFocus = false;

  /** The input's type. */
  @Prop({ reflect: true }) type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' = 'text';

  /** The input's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** The input's name attribute. */
  @Prop({ reflect: true }) name = '';

  /** The input's value attribute. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** The input's label. */
  @Prop() label = '';

  /** The input's placeholder text. */
  @Prop() placeholder: string;

  /** Set to true to disable the input. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true to make the input readonly. */
  @Prop({ reflect: true }) readonly = false;

  /** The minimum length of input that will be considered valid. */
  @Prop({ reflect: true }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @Prop({ reflect: true }) maxlength: number;

  /** The input's minimum value. */
  @Prop({ reflect: true }) min: number;

  /** The input's maximum value. */
  @Prop({ reflect: true }) max: number;

  /** The input's step attribute. */
  @Prop({ reflect: true }) step: number;

  /** A pattern to validate input against. */
  @Prop({ reflect: true }) pattern: string;

  /** Set to true to make the checkbox a required field. */
  @Prop({ reflect: true }) required: boolean;

  /** The input's autocomplete attribute. */
  @Prop() autocomplete: string;

  /** The input's autofocus attribute. */
  @Prop() autofocus: boolean;

  /**
   * This will be true when the control is in an invalid state. Validity is determined by props such as `type`,
   * `required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API.
   */
  @Prop({ mutable: true, reflect: true }) invalid = false;

  /** Set to true to add a clear button when the input is populated. */
  @Prop() clearable = false;

  /** Set to true to add a password toggle button for password inputs. */
  @Prop() togglePassword = false;

  @Watch('value')
  handleValueChange() {
    this.invalid = !this.input.checkValidity();
  }

  /** Emitted when the control receives input. */
  @Event() eInput: EventEmitter;

  /** Emitted when the control gains focus. */
  @Event() eFocus: EventEmitter;

  /** Emitted when the control loses focus. */
  @Event() eBlur: EventEmitter;

  connectedCallback() {
    this.handleInput = this.handleInput.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  /** Sets focus on the input. */
  @Method()
  async setFocus() {
    this.input.focus();
  }

  /** Removes focus from the input. */
  @Method()
  async removeFocus() {
    this.input.blur();
  }

  handleInput() {
    this.value = this.input.value;
    this.eInput.emit();
  }

  handleInvalid() {
    this.invalid = true;
  }

  handleBlur() {
    this.hasFocus = false;
    this.eBlur.emit();
  }

  handleFocus() {
    this.hasFocus = true;
    this.eFocus.emit();
  }

  render() {
    return (
      <div>
        <label
          class={{
            label: true,
            'label--small': this.size === 'small',
            'label--medium': this.size === 'medium',
            'label--large': this.size === 'large',
            'label--invalid': this.invalid
          }}
          htmlFor={this.inputId}
        >
          {this.label}
        </label>

        <div
          class={{
            input: true,
            'input--small': this.size === 'small',
            'input--medium': this.size === 'medium',
            'input--large': this.size === 'large',
            'input--disabled': this.disabled,
            'input--focused': this.hasFocus,
          }}
        >
          <span part="prefix" class="input__prefix">
            <slot name="prefix"/>
          </span>

          <input
            part="input"
            ref={el => (this.input = el)}
            id={this.inputId}
            class="input__control"
            type={this.type}
            name={this.name}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readonly={this.readonly}
            minLength={this.minlength}
            maxLength={this.maxlength}
            min={this.min}
            max={this.max}
            step={this.step}
            value={this.value}
            autoComplete={this.autocomplete}
            autoFocus={this.autofocus}
            pattern={this.pattern}
            required={this.required}
            aria-labelledby={this.labelId}
            aria-describedby={this.helpTextId}
            aria-invalid={this.invalid}
            onInput={this.handleInput}
            onInvalid={this.handleInvalid}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />

          <span part="suffix" class="input__suffix">
            <slot name="suffix"/>
          </span>
        </div>
      </div>
    );
  }
}
