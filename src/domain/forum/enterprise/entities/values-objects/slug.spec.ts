import { Slug } from './slug'

test('Should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('An example title')

  expect(slug.value).toBe('an-example-title')
})
