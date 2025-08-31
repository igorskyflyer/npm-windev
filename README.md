<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-windev/main/media/windev.png" alt="Icon of \\.\WinDev" width="256" height="256">
  <h1>\\.\WinDev</h1>
</div>

<br>

<h4 align="center">
  🍃 Determines whether a path is a legacy Windows device. 💾
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 💾 Detects instantly if a name is a legacy Windows device
- 🖥 Works with both file and folder names
- 🎯 Ignores case so matches are reliable
- 🧹 Handles extra spaces or extensions gracefully
- ⚡ Gives a simple `true` or `false` result for quick decisions

<br>

> ### ℹ️ NOTE
>
> #### Legacy filesystem names
>
> When creating files or folders on Windows there are some rules about naming them, one of which is that te usage of legacy Windows devices' names as the folder/file name is prohibited, i.e.:
>
> “Do not use the following reserved names for the name of a file:
>
> `CON`, `PRN`, `AUX`, `NUL`, `COM1`, `COM2`, `COM3`, `COM4`, `COM5`, `COM6`, `COM7`, `COM8`, `COM9`, `LPT1`, `LPT2`, `LPT3`, `LPT4`, `LPT5`, `LPT6`, `LPT7`, `LPT8`, and `LPT9`.
> Also avoid these names followed immediately by an extension; for example, `NUL.txt` is not recommended.”.
>
> Source: [Microsoft Docs](https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file?redirectedfrom=MSDN#Naming_Conventions)
>

<br>

> ### ℹ️ NOTE
>
> #### Edge-cases
>
> Be aware that there are some edge-cases that this module also handles, examples #4 and #7 illustrate that. Technically the provided strings in those two examples are not legacy devices but you are still not allowed to create files/directories with those names.
>

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/windev
```

```bash
yarn add @igorskyflyer/windev
```

```bash
npm i @igorskyflyer/windev
```

<br>
<br>

## 🤹🏼 API

```ts
function isWindowsDevice(name: string) => boolean
```

Checks whether the given directory or file name is a legacy Windows device.

<br>
<br>

## 🗒️ Examples

```ts
import { isWindowsDevice } from '@igorskyflyer/windev'

console.log(isWindowsDevice()) // prints false
console.log(isWindowsDevice('')) // prints false
console.log(isWindowsDevice('con')) // prints true
console.log(isWindowsDevice('con.txt')) // prints true
console.log(isWindowsDevice('cOm3')) // prints true
console.log(isWindowsDevice('COM7 ')) // prints true
console.log(isWindowsDevice(' COM2 .txt.al')) // prints true
console.log(isWindowsDevice('CONnection')) // prints false
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-windev/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-windev/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/windows-packages](https://www.npmjs.com/package/@igorskyflyer/windows-packages)

> _💻 A Node.js module for reading the Packages registry key on Windows 10+. Useful for retrieving Windows 10+ installed Store applications. 📦_

<br>

[@igorskyflyer/astro-post-excerpt](https://www.npmjs.com/package/@igorskyflyer/astro-post-excerpt)

> _⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown and MDX files. Astro v2+ collections are supported as well! 💎_

<br>

[@igorskyflyer/mapped-replacer](https://www.npmjs.com/package/@igorskyflyer/mapped-replacer)

> _🗺 Zero-dependency Map and RegExp based string replacer with Unicode support. 🍁_

<br>

[@igorskyflyer/astro-saferesource](https://www.npmjs.com/package/@igorskyflyer/astro-saferesource)

> _🎐 Adds CSP-compliant inline scripts and styles to Astro! 🎠_

<br>

[@igorskyflyer/pathexists](https://www.npmjs.com/package/@igorskyflyer/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
