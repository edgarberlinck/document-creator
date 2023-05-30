export interface DocumentSchema {
  name: string
  items: ArrayLike<BulletList | Paragraph>
}

export interface Paragraph {
  title: string
  paragraphs: string[]
}

export interface BulletList {
  title: string
  items: string[]
}
