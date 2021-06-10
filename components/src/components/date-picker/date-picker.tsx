import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'muy-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
})
export class DatePicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
