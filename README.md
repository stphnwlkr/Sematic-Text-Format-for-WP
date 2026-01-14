# Semantic Text Format for WordPress

- Contributors:      Telex - https://telex.automattic.ai/projects/85965f99
- Tags:              semantic, quote, citation, abbreviation, definition
- Tested up to:      6.8
- Stable tag:        1.6.0
- License:           GPLv2 or later
- License URI:       https://www.gnu.org/licenses/gpl-2.0.html
- Author:            Stephen Walker
- Plugin URI:        https://flyingw.press


**Semantic Text Format** extends the WordPress Block Editor (Gutenberg) with additional **semantic inline text formats**, so authors can mark up content correctly without custom blocks, shortcodes, or inline styles.

This plugin improves **accessibility**, **clarity**, and **editorial quality** by encouraging semantic HTML that works well with screen readers, search engines, and modern CSS.

---

## Features

Adds the following inline formats to the RichText toolbar in supported blocks (Paragraph, Heading, List, etc.):

- **Abbreviation** (`<abbr>`)
- **Cite** (`<cite>`)
- **Definition** (`<dfn>`)
- **Inline Quote** (`<q>`)
- **Inline Span (Custom Class)** (`<span class="…">`)

All formats are implemented using the native Gutenberg `registerFormatType` API and integrate into the standard editor toolbar.

---

## Format guide: proper use, accessibility, best practices

### Abbreviation (`<abbr>`)

**Use for:** acronyms/abbreviations that benefit from an expansion, especially on first use.

**Example output**

```html
<abbr title="the Department of Veterans Affairs">VA</abbr>
```

**Accessibility / best practices**

- Always provide a meaningful `title` (the expansion).
- Don’t use `<abbr>` just to style text.
- Avoid repeating the same expansion on every instance—use it where it helps comprehension.

---

### Cite (`<cite>`)

**Use for:** **titles of works** (books, reports, publications, articles, journals, films, etc.).

**Example output**

```html
<cite>The Federal Register</cite>
```

**Accessibility / best practices**

- Use for a work’s title, not an author name or URL.
- Don’t use `<cite>` as a general “italic” style.

---

### Definition (`<dfn>`)

**Use for:** the term being defined in context (often the first time a term is introduced).

**Example output**

```html
<dfn>Eligibility determination</dfn> is the process by which benefits are assessed.
```

**Accessibility / best practices**

- Use for the *defining instance* of the term.
- Don’t wrap every repeat occurrence of the term.

---

### Inline Quote (`<q>`)

**Use for:** short quotations that sit *within* a sentence/paragraph.

**Example output**

```html
<q>Service before self</q>
```

**Accessibility / best practices**

- Prefer `<q>` for short inline quotes; use `<blockquote>` for longer standalone quotes.
- Avoid adding manual quotation marks—HTML handles quoting semantics.

---

### Inline Span (Custom Class) (`<span>`)

**Use for:** when no semantic element fits and you need a CSS/JS hook.

**Example output**

```html
<span class="stf-inline-span highlight">Important phrase</span>
```

**Important note**

This format uses an internal base class (`stf-inline-span`) so Gutenberg can reliably recognize the format and to avoid collisions with core formats that also use `<span>`. You only manage your custom classes in the UI.

**Accessibility / best practices**

- `<span>` adds **no meaning**. Prefer semantic elements first (`<abbr>`, `<dfn>`, `<q>`, etc.).
- Don’t rely on color alone to convey meaning; ensure adequate contrast.
- Keep custom classes purposeful and documented.

---

## Author style guide snippet

Use this snippet in your editorial/style documentation to guide consistent authoring:

### Inline semantics quick rules

- Use **Abbreviation** for acronyms the first time they appear (e.g., “VA” → “Department of Veterans Affairs”).
- Use **Definition** when you’re introducing a term and immediately defining it.
- Use **Inline Quote** for short quotes inside a sentence; use a block quote pattern for longer quotes.
- Use **Cite** only for the *title of a work* (report, book, article), not the author or website name.
- Use **Inline Span (Class)** only when you need a styling or scripting hook and **no semantic element applies**.

### Accessibility checklist for inline styling

- Don’t communicate meaning with **color alone** (add text, icons with labels, or other cues).
- Ensure any highlighted text maintains **sufficient contrast**.
- Avoid adding extra punctuation or quote marks for visual effect—use the proper semantic format instead.
- Keep class names short, consistent, and reusable (e.g., `highlight`, `callout`, `flag`, `kbd`).

---

## Requirements

- **WordPress:** 6.8 or later  
- **Tested up to:** 6.9  
- **PHP:** 7.4 or later  
- **Editor:** Block Editor (Gutenberg)

Classic Editor is not supported.

---

## Installation

1. Upload the plugin folder to `/wp-content/plugins/`
2. Activate **Semantic Text Format** from the Plugins screen
3. Open the Block Editor and select text in a supported block
4. Use the RichText toolbar dropdown to apply a format

---

## Accessibility commitment

This plugin is designed with accessibility as a core principle:

- Uses native semantic HTML elements
- Keyboard accessible
- Screen reader compatible
- No front-end JavaScript required
- Encourages WCAG-aligned authoring practices

---

## Development notes

- Formats register client-side via the Gutenberg API.
- Editor assets should be cache-busted to prevent stale builds.
- No server-side content filtering is performed.

---

## Changelog

### 1.1.6
- Fixed duplicate Inline Span base class behavior
- Avoided conflicts with core underline format registration
- Improved class handling and editor behavior
- Documentation expanded with accessibility and best practices

---

## License

GPL-2.0-or-later

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
