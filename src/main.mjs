/**
 * Checks whether the given directory
 * or file name is a legacy Windows device.
 * @param {string} name
 * @returns {boolean}
 */
export function isWindowsDevice(name) {
  if (typeof name !== 'string') {
    return false
  }

  // find out more here,
  // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file?redirectedfrom=MSDN#Naming_Conventions
  const winDevicesMatcher = new RegExp(
    '^\\s*(?:CON|PRN|AUX|NUL|COM1|COM2|COM3|COM4|COM5|COM6|COM7|COM8|COM9|LPT1|LPT2|LPT3|LPT4|LPT5|LPT6|LPT7|LPT8|LPT9)\\s*(?:\\.{1}[^\\.]*)*\\s*$',
    'i'
  )

  return winDevicesMatcher.test(name)
}
