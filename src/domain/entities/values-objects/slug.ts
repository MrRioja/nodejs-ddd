export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Creates a new Slug object from the provided text.
   *
   * Example: `An example title` => `an-example-title`
   *
   * @param text - The text to convert into a Slug object.
   * @returns A new Slug object created from the provided text.
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
