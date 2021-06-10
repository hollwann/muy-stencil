import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fm-button',
  styleUrl:"./fm-button.css",
  shadow: true,
})
export class MyComponent {
  /**
   * The label for the button
   */
  @Prop() label: string;

  /**
   * The flag for loading button
   */
   @Prop() loading: boolean;

  /** Emitted when the control loses focus. */
  @Event() buttonClick: EventEmitter;

  render() {
    return <button
              class="fm-button"
              onClick={()=>this.buttonClick.emit()}
            >{
              this.loading ?
                <div class="lds-dual-ring__button" />
                :
                this.label
            }
      </button>;
  }
}
