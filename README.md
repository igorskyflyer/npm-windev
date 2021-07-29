# \\\\.\\WinDev

🎡 Provides ways of checking whether a path is a legacy Windows device. 💾

<br>

When creating files or folders on Windows there are some rules about naming them, one of which is that te usage of legacy Windows devices' names as the folder/file name is prohibited, i.e.:

> “Do not use the following reserved names for the name of a file:
>
> `CON`, `PRN`, `AUX`, `NUL`, `COM1`, `COM2`, `COM3`, `COM4`, `COM5`, `COM6`, `COM7`, `COM8`, `COM9`, `LPT1`, `LPT2`, `LPT3`, `LPT4`, `LPT5`, `LPT6`, `LPT7`, `LPT8`, and `LPT9`. Also avoid these names followed immediately by an extension; for example, `NUL.txt` is not recommended.”

<p align="right"><sub>source: <a href="https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file?redirectedfrom=MSDN#Naming_Conventions">Microsot Docs</a>.</sub></p>

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
