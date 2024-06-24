import { bytesToMegabytes } from '@synthetixio/synpress-cache'
import { describe, expect, it } from 'vitest'

describe('bytesToMegabytes', () => {
  it('converts bytes to megabytes and rounds the result', async () => {
    const result = bytesToMegabytes(21_260_893)

    expect(result).to.equal(20.3)
  })
})
