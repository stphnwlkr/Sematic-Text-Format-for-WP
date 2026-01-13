=== Semantic Text Formats for WP ===

Contributors:      Telex - https://telex.automattic.ai/projects/85965f99
Tags:              semantic, quote, citation, abbreviation, definition
Tested up to:      6.8
Stable tag:        1.1.0
License:           GPLv2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html
Author:            Stephen Walker
Plugin URI:        https://flyingw.press
Enhance your content with semantic HTML elements for quotes, citations, abbreviations, and definitions.

== Description ==

Semantic Text Formats extends WordPress with proper semantic HTML elements for better content structure and SEO. This plugin provides:

**Paragraph Block Enhancements:**
- Inline Quote (`<q>`) formatting option with optional language attribute and citation URL
- Citation (`<cite>`) formatting option
- Abbreviation (`<abbr>`) formatting option with title attribute
- Definition (`<dfn>`) formatting option

These options appear in the paragraph block toolbar alongside bold, italic, and other text formatting controls, allowing you to wrap selected text with proper semantic markup.

== Features ==

* **Inline Quote**: Wrap text in `<q>` tags for short inline quotations with proper semantic meaning, with optional language attribute and citation URL for internationalization
* **Citation**: Mark up titles of works, authors, or sources using `<cite>` tags
* **Abbreviation**: Add abbreviations with their full forms using `<abbr>` tags with title attributes - click on existing abbreviations to edit or remove them
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
4. A popup will appear where you can optionally add a language code and citation URL
5. Click "Apply" to save or "Cancel" to close

**Adding a Citation:**
1. Select text in a paragraph block
2. Click the "Cite" button in the toolbar (document icon)
3. The text will be wrapped in `<cite>` tags

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

Semantic HTML improves accessibility, SEO, and content structure. Elements like `<q>`, `<cite>`, `<abbr>`, and `<dfn>` provide meaningful context to browsers, search engines, and assistive technologies.

= Can I style these elements? =

Yes! The plugin doesn't add any front-end styles, so you have complete control. Add custom CSS targeting `q`, `cite`, `abbr`, and `dfn` to match your theme.

= Do the formatting options work with existing paragraph blocks? =

Yes! Once activated, the options are available in all paragraph blocks throughout your site.

= How do I edit an existing abbreviation? =

Simply click on the abbreviation in the editor (the button will be highlighted), and the popup will appear with the current title text. You can update it or remove the abbreviation entirely.

= How do I add a language to a quote? =

When you apply the quote format to your text, a popup will appear where you can enter an ISO 639-1 language code (e.g., 'fr' for French, 'es' for Spanish) and optionally a citation URL.

== Screenshots ==

1. Inline formatting buttons in the paragraph block toolbar
2. Abbreviation popup for entering or editing the full form
3. Quote language and citation popup for internationalization
4. Front-end display of semantic text formats

== Changelog ==

= 1.1.0 =
* Added language attribute support for inline quotes
* Added citation URL support for inline quotes
* Fixed quote format not preserving when adding attributes
* Improved quote popup workflow

= 1.0.0 =
* Updated to version 1.0.0
* Changed namespace from telex to fw
* Updated author and contributor information
* Removed definition list block to focus on inline formats only
* Added dfn inline format option
* Removed front-end styling
* Added ability to edit existing abbreviations by clicking on them

== Upgrade Notice ==

= 1.1.0 =
Adds language attribute and citation URL support for inline quotes.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.