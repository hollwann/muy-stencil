# muy-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                                                                                                                                   | Type                                                                        | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| `autocomplete`   | `autocomplete`    | The input's autocomplete attribute.                                                                                                                                                                           | `string`                                                                    | `undefined` |
| `autofocus`      | `autofocus`       | The input's autofocus attribute.                                                                                                                                                                              | `boolean`                                                                   | `undefined` |
| `clearable`      | `clearable`       | Set to true to add a clear button when the input is populated.                                                                                                                                                | `boolean`                                                                   | `false`     |
| `disabled`       | `disabled`        | Set to true to disable the input.                                                                                                                                                                             | `boolean`                                                                   | `false`     |
| `invalid`        | `invalid`         | This will be true when the control is in an invalid state. Validity is determined by props such as `type`, `required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API. | `boolean`                                                                   | `false`     |
| `label`          | `label`           | The input's label.                                                                                                                                                                                            | `string`                                                                    | `''`        |
| `max`            | `max`             | The input's maximum value.                                                                                                                                                                                    | `number`                                                                    | `undefined` |
| `maxlength`      | `maxlength`       | The maximum length of input that will be considered valid.                                                                                                                                                    | `number`                                                                    | `undefined` |
| `min`            | `min`             | The input's minimum value.                                                                                                                                                                                    | `number`                                                                    | `undefined` |
| `minlength`      | `minlength`       | The minimum length of input that will be considered valid.                                                                                                                                                    | `number`                                                                    | `undefined` |
| `name`           | `name`            | The input's name attribute.                                                                                                                                                                                   | `string`                                                                    | `''`        |
| `pattern`        | `pattern`         | A pattern to validate input against.                                                                                                                                                                          | `string`                                                                    | `undefined` |
| `placeholder`    | `placeholder`     | The input's placeholder text.                                                                                                                                                                                 | `string`                                                                    | `undefined` |
| `readonly`       | `readonly`        | Set to true to make the input readonly.                                                                                                                                                                       | `boolean`                                                                   | `false`     |
| `required`       | `required`        | Set to true to make the checkbox a required field.                                                                                                                                                            | `boolean`                                                                   | `undefined` |
| `size`           | `size`            | The input's size.                                                                                                                                                                                             | `"large" \| "medium" \| "small"`                                            | `'medium'`  |
| `step`           | `step`            | The input's step attribute.                                                                                                                                                                                   | `number`                                                                    | `undefined` |
| `togglePassword` | `toggle-password` | Set to true to add a password toggle button for password inputs.                                                                                                                                              | `boolean`                                                                   | `false`     |
| `type`           | `type`            | The input's type.                                                                                                                                                                                             | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`          | `value`           | The input's value attribute.                                                                                                                                                                                  | `string`                                                                    | `''`        |


## Events

| Event    | Description                              | Type               |
| -------- | ---------------------------------------- | ------------------ |
| `eBlur`  | Emitted when the control loses focus.    | `CustomEvent<any>` |
| `eFocus` | Emitted when the control gains focus.    | `CustomEvent<any>` |
| `eInput` | Emitted when the control receives input. | `CustomEvent<any>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the input.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the input.

#### Returns

Type: `Promise<void>`




## Slots

| Slot       | Description                                              |
| ---------- | -------------------------------------------------------- |
| `"prefix"` | Used to prepend an icon or similar element to the input. |
| `"suffix"` | Used to append an icon or similar element to the input.  |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"input"`  |             |
| `"prefix"` |             |
| `"suffix"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
