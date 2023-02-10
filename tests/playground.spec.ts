import type { Config } from '@micro-lc/interfaces/schemas/v2'

import type { PlaywrightTestArgs, PlaywrightWorkerOptions } from '@playwright/test'
import test, { expect } from '@playwright/test'

type Helpers = Pick<PlaywrightTestArgs, 'page'> & Pick<PlaywrightWorkerOptions, 'browserName'>

const base = 'http://localhost:3000'
const playground = `${base}/playground/`

test(`
  [playground]
  should render a playground with the default
  micro-lc configuration
`, async ({ page }) => {
  await page.goto(playground)

  await expect(page.getByRole('button', { name: 'Apply' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'JSON' })).toBeVisible()

  const preview = page.frameLocator('iframe[title=preview]')

  await expect(preview.getByText('welcome to the micro-lc playground')).toBeVisible()

  await preview.getByRole('menuitem', { name: 'About' }).click()

  await expect(preview.getByText('mia-platform')).toBeVisible()
})

test(`
  [playground]
  should render a playground with the default
  micro-lc configuration and then attempt to
  navigate using the sidebar menu and the back arrow
  inside the preview frame
`, async ({ page }) => {
  await page.goto(playground)

  const preview = page.frameLocator('iframe[title=preview]')
  await preview.getByRole('menuitem', { name: 'About' }).click()

  await expect(preview.getByText('About 📯')).toBeVisible()
  await expect(preview.getByText('Check out what we do at Mia-Platform!')).toBeVisible()

  await preview.getByRole('button').click()
  await expect(preview.getByRole('textbox')).toHaveJSProperty('value', 'https://my-domain/home')
})

test(`
  [playground]
  should change model type to YAML
  and persist it across reloads
`, async ({ page }) => {
  await page.goto(playground)

  await page.getByRole('button', { name: 'JSON' }).click()
  await page.getByRole('option', { name: 'YAML' }).click()

  await page.reload()

  await expect(page.getByRole('button', { name: 'YAML' })).toBeVisible()
})


const isMac = process.platform.match(/darwin/i) !== null
const getModifier = (browserName: Helpers['browserName']) => {
  switch (browserName) {
  case 'webkit': return 'Meta'
  case 'firefox': return 'Control'
  default: return isMac ? 'Meta' : 'Control'
  }
}


const writeToEditor = async ({ page, browserName }: Helpers, config: Config) => {
  await page.getByRole('code').click()

  await page.waitForTimeout(1000)

  await page.keyboard.press(`${getModifier(browserName)}+KeyA`)
  await page.keyboard.press('Backspace')
  const lines = JSON.stringify(config).split('\n')
  await Promise.all(lines.map((text) => page.keyboard.type(text)))

  await page.getByRole('button', { name: 'Apply' }).click()
}

test(`
  [playground]
  should change content
  and persist it across reloads
  then it should be able to reset
`, async ({ page, browserName }) => {
  await page.goto(playground)

  // unfold settings
  await page.locator('div:nth-child(6) > .cldr').click()
  // go to `defaultUrl` value
  await expect(page.getByText('"/home"')).toBeVisible()

  await writeToEditor({ browserName, page }, { version: 2 })

  // micro-lc 404
  let preview = page.frameLocator('iframe[title=preview]')
  await expect(preview.getByText('Application cannot be found')).toBeVisible()
  await expect(preview.getByText('Page / cannot be found')).toBeVisible()

  await page.reload()

  // micro-lc 404 again
  preview = page.frameLocator('iframe[title=preview]')
  await expect(preview.getByText('Application cannot be found')).toBeVisible()
  await expect(preview.getByText('Page / cannot be found')).toBeVisible()

  await page.getByRole('button', { name: 'Reset' }).click()
  await expect(preview.getByText('welcome to the micro-lc playground')).toBeVisible()
})

test.describe('tests with smaller viewport', () => {
  test.use({ viewport: { height: 700, width: 400 } })

  test.skip(`
  [playground]
  should overflow on x-axis on viewports
  smaller than 800px
`, async ({ page }) => {
    await page.goto(playground)

    const preview = page.frameLocator('iframe[title=preview]')
    await expect(preview.getByText('welcome to the micro-lc playground')).toBeVisible()

    await page.mouse.wheel(400, 0)
  })
})
