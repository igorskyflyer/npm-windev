const chai = require('chai').assert
const { isWindowsDevice } = require('../main')

describe('🧪 WinDev tests 🧪', () => {
  it('#1 should return false', () => {
    // @ts-ignore
    chai.isFalse(isWindowsDevice())
  })

  it('#2 should return false', () => {
    chai.isFalse(isWindowsDevice(''))
  })

  it('#3 should return true', () => {
    chai.isTrue(isWindowsDevice('con'))
  })

  it('#4 should return true', () => {
    chai.isTrue(isWindowsDevice('con.txt'))
  })

  it('#5 should return true', () => {
    chai.isTrue(isWindowsDevice('cOm3'))
  })

  it('#6 should return true', () => {
    chai.isTrue(isWindowsDevice('COM7       '))
  })

  it('#7 should return true', () => {
    chai.isTrue(isWindowsDevice('    COM2        .txt.al'))
  })

  it('#8 should return false', () => {
    chai.isFalse(isWindowsDevice('CONnection'))
  })
})
