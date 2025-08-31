import { assert, describe, it } from 'vitest'
import { isWindowsDevice } from '../src/index.js'

describe('🧪 WinDev tests 🧪', () => {
  it('#1 should return false', () => {
    // @ts-expect-error
    assert.isFalse(isWindowsDevice())
  })

  it('#2 should return false', () => {
    assert.isFalse(isWindowsDevice(''))
  })

  it('#3 should return true', () => {
    assert.isTrue(isWindowsDevice('con'))
  })

  it('#4 should return true', () => {
    assert.isTrue(isWindowsDevice('con.txt'))
  })

  it('#5 should return true', () => {
    assert.isTrue(isWindowsDevice('cOm3'))
  })

  it('#6 should return true', () => {
    assert.isTrue(isWindowsDevice('COM7       '))
  })

  it('#7 should return true', () => {
    assert.isTrue(isWindowsDevice('    COM2        .txt.al'))
  })

  it('#8 should return false', () => {
    assert.isFalse(isWindowsDevice('CONnection'))
  })
})
