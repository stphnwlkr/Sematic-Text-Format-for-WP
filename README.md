=== Semantic Text Formats ===

Contributors:      Telex
Tags:              block, semantic, quote, citation, abbreviation, span, definition
Tested up to:      6.8
Stable tag:        1.0.0
License:           GPLv2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html
Author:            Stephen Walker
Plugin URI:        https://flyingw.press
Enhance your content with semantic HTML elements for quotes, citations, abbreviations, spans, and definitions.

== Description ==

Semantic Text Formats extends WordPress with proper semantic HTML elements for better content structure and SEO. This plugin provides:

**Paragraph Block Enhancements:**
- Inline Quote (`<q>`) formatting option
- Citation (`<cite>`) formatting option
- Abbreviation (`<abbr>`) formatting option with title attribute
- Span (`<span>`) formatting option
- Definition (`<dfn>`) formatting option

These options appear in the paragraph block toolbar alongside bold, italic, and other text formatting controls, allowing you to wrap selected text with proper semantic markup.

== Features ==

* **Inline Quote**: Wrap text in `<q>` tags for short inline quotations with proper semantic meaning
* **Citation**: Mark up titles of works, authors, or sources using `<cite>` tags
* **Abbreviation**: Add abbreviations with their full forms using `<abbr>` tags with title attributes - click on existing abbreviations to edit or remove them
* **Span**: Wrap text in `<span>` tags for generic inline styling or scripting hooks
* **Definition**: Mark up terms being defined using `<dfn>` tags
* **Fully Accessible**: All elements use proper ARIA labels and semantic HTML
* **No Front-end Styling**: Clean markup without any forced styles, letting your theme handle the presentation

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/semantic-text-formats` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. The inline formatting options will automatically appear in the paragraph block toolbar

== Usage ==

**Adding an Inline Quote:**
1. Select text in a paragraph block
2. Click the "Quote" button in the toolbar (quotation mark icon)
3. The text will be wrapped in `<q>` tags

**Adding a Citation:**
1. Select text in a paragraph block
2. Click the "Cite" button in the toolbar (document icon)
3. The text will be wrapped in `<cite>` tags

**Adding a Span:**
1. Select text in a paragraph block
2. Click the "Span" button in the toolbar (text icon)
3. The text will be wrapped in `<span>` tags

**Adding a Definition:**
1. Select text in a paragraph block
2. Click the "Definition" button in the toolbar (book icon)
3. The text will be wrapped in `<dfn>` tags

**Adding an Abbreviation:**
1. Select text in a paragraph block
2. Click the "Abbreviation" button in the toolbar (info icon)
3. Enter the full form of the abbreviation in the popup
4. Click "Apply"
5. The text will be wrapped in `<abbr>` tags with the full form as the title attribute
6. To edit an existing abbreviation, click on it again and update the title or remove it

== Frequently Asked Questions ==

= Why use semantic HTML elements? =

Semantic HTML improves accessibility, SEO, and content structure. Elements like `<q>`, `<cite>`, `<abbr>`, `<span>`, and `<dfn>` provide meaningful context to browsers, search engines, and assistive technologies.

= Can I style these elements? =

Yes! The plugin doesn't add any front-end styles, so you have complete control. Add custom CSS targeting `q`, `cite`, `abbr`, `span`, and `dfn` elements to match your theme.

= Do the formatting options work with existing paragraph blocks? =

Yes! Once activated, the options are available in all paragraph blocks throughout your site.

= How do I edit an existing abbreviation? =

Simply click on the abbreviation in the editor (the button will be highlighted), and the popup will appear with the current title text. You can update it or remove the abbreviation entirely.

== Screenshots ==

1. Inline formatting buttons in the paragraph block toolbar
2. Abbreviation popup for entering or editing the full form
3. Front-end display of semantic text formats

== Changelog ==

= 1.0.0 =
* Updated to version 1.0.0
* Updated author and contributor information
* Removed definition list block to focus on inline formats only
* Added span and dfn inline format options
* Removed front-end styling
* Added ability to edit existing abbreviations by clicking on them

== Upgrade Notice ==

= 1.0.0 =
Major update focusing on inline text formatting with new span and dfn options, plus improved abbreviation editing.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.