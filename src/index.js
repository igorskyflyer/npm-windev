// find out more here,
// https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions
const WIN_DEVICES =
  /^\s*(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])\s*(?:\.[^.]*)*\s*$/i

/**
 * Checks whether the given directory
 * or file name is a legacy Windows device.
 * @param {string} name
 * @returns {boolean}
 */
function isWindowsDevice(name) {
  if (typeof name !== 'string') {
    return false
  }

  return WIN_DEVICES.test(name)
}

module.exports = { isWindowsDevice }
