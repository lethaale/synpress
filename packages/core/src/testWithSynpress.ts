import type { Fixtures, TestType } from '@playwright/test'
import { mergeTests, test as base } from '@playwright/test'

export default function testWithSynpress<CustomFixtures extends Fixtures>(
  customFixtures: TestType<CustomFixtures, object>,
  useCache?: boolean
) {
  return mergeTests(base, customFixtures, {
    useCache: useCache ?? true
  })
}
