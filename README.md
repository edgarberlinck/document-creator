# Document Schema

## Basic schema

```
{
  "name": "The document human readible name"
  "items": [
    { name: "item id", type: one of above types }
  ]
}
```

## item type schema

### Paragraph

```
{
  title: "the paragraph title",
  paragraph: ["Some paragraph"]
}
```

### Bullet list

```
  {
    title: "the bulled list title (optional)",
    items: ["bullet"]
  }
```
