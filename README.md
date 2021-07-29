# \\\\.\\WinDev

🍃 Provides ways of checking whether a path is a legacy Windows device. 💾

<br>

When creating files or folders on Windows there are some rules about naming them, one of which is that te usage of legacy Windows devices' names as the folder/file name is prohibited, i.e.:

> “Do not use the following reserved names for the name of a file:
>
> `CON`, `PRN`, `AUX`, `NUL`, `COM1`, `COM2`, `COM3`, `COM4`, `COM5`, `COM6`, `COM7`, `COM8`, `COM9`, `LPT1`, `LPT2`, `LPT3`, `LPT4`, `LPT5`, `LPT6`, `LPT7`, `LPT8`, and `LPT9`. Also avoid these names followed immediately by an extension; for example, `NUL.txt` is not recommended.”

<p align="right"><sub>source: <a href="https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file?redirectedfrom=MSDN#Naming_Conventions">Microsot Docs</a></sub></p>

<br>

Be aware that there are some edge-cases that this module also handles, examples #4 and #7 illustrate that. Technically the provided strings in those two examples are not legacy devices but you are still not allowed to create files/directories with those names.

<br>

### Usage

Install it by running

```shell
npm i "@igor.dvlpr/windev"
```

<br>

### API

```ts
function isWindowsDevice(name: string) => boolean
```

Checks whether the given directory or file name is a legacy Windows device.

<br>

### Examples

<br>

```js
const { isWindowsDevice } = require('@igor.dvlpr/windev')

console.log(isWindowsDevice()) // prints false
console.log(isWindowsDevice('')) // prints false
console.log(isWindowsDevice('con')) // prints true
console.log(isWindowsDevice('con.txt')) // prints true
console.log(isWindowsDevice('cOm3')) // prints true
console.log(isWindowsDevice('COM7 ')) // prints true
console.log(isWindowsDevice(' COM2 .txt.al')) // prints true
console.log(isWindowsDevice('CONnection')) // prints false
```
