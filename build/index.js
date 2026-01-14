(()=>{"use strict";const t=window.wp.richText,e=window.wp.blockEditor,i=window.wp.i18n,a=window.wp.element,n=window.wp.components,o=window.ReactJSXRuntime;(0,t.registerFormatType)("fw/inline-quote",{title:(0,i.__)("Inline Quote","semantic-text-formats"),tagName:"q",className:null,attributes:{lang:"lang",cite:"cite"},edit({isActive:s,value:r,onChange:l,contentRef:c}){const[m,x]=(0,a.useState)(!1),[p,u]=(0,a.useState)(""),[d,f]=(0,a.useState)(""),v=()=>{const e={};p&&p.trim()&&(e.lang=p.trim()),d&&d.trim()&&(e.cite=d.trim()),l((0,t.applyFormat)(r,{type:"fw/inline-quote",attributes:Object.keys(e).length>0?e:void 0})),u(""),f(""),x(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.RichTextToolbarButton,{icon:"format-quote",title:(0,i.__)("Inline Quote","semantic-text-formats"),onClick:()=>{if(s){const e=(0,t.getActiveFormat)(r,"fw/inline-quote");e&&e.attributes?(u(e.attributes.lang||""),f(e.attributes.cite||"")):(u(""),f("")),x(!0)}else u(""),f(""),x(!0)},isActive:s}),m&&(0,o.jsx)(n.Popover,{anchor:c?.current,placement:"bottom",onClose:()=>{x(!1),u(""),f("")},className:"quote-attributes-popover",children:(0,o.jsxs)("div",{style:{padding:"16px",minWidth:"320px"},children:[(0,o.jsx)(n.TextControl,{label:(0,i.__)("Language code (optional):","semantic-text-formats"),value:p,onChange:u,placeholder:(0,i.__)("e.g., fr, es, de","semantic-text-formats"),help:(0,i.__)("Use ISO 639-1 language codes","semantic-text-formats")}),(0,o.jsx)(n.TextControl,{label:(0,i.__)("Citation URL (optional):","semantic-text-formats"),value:d,onChange:f,placeholder:(0,i.__)("e.g., https://example.com/source","semantic-text-formats"),help:(0,i.__)("URL pointing to the source of the quote","semantic-text-formats"),onKeyDown:t=>{"Enter"===t.key&&(t.preventDefault(),v())}}),(0,o.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"12px",justifyContent:"space-between"},children:[(0,o.jsx)("div",{children:s&&(0,o.jsx)(n.Button,{variant:"tertiary",isDestructive:!0,onClick:()=>{l((0,t.removeFormat)(r,"fw/inline-quote")),u(""),f(""),x(!1)},children:(0,i.__)("Remove","semantic-text-formats")})}),(0,o.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,o.jsx)(n.Button,{variant:"tertiary",onClick:()=>{x(!1),u(""),f("")},children:(0,i.__)("Cancel","semantic-text-formats")}),(0,o.jsx)(n.Button,{variant:"primary",onClick:v,children:(0,i.__)("Apply","semantic-text-formats")})]})]})]})})]})}}),(0,t.registerFormatType)("fw/citation",{title:(0,i.__)("Cite","semantic-text-formats"),tagName:"cite",className:null,edit:({isActive:a,value:n,onChange:s})=>(0,o.jsx)(e.RichTextToolbarButton,{icon:"media-document",title:(0,i.__)("Cite","semantic-text-formats"),onClick:()=>{s((0,t.toggleFormat)(n,{type:"fw/citation"}))},isActive:a})}),(0,t.registerFormatType)("fw/abbreviation",{title:(0,i.__)("Abbreviation","semantic-text-formats"),tagName:"abbr",className:null,attributes:{title:"title"},edit({isActive:s,value:r,onChange:l,contentRef:c}){const[m,x]=(0,a.useState)(!1),[p,u]=(0,a.useState)(""),d=()=>{p&&p.trim()&&l((0,t.applyFormat)(r,{type:"fw/abbreviation",attributes:{title:p.trim()}})),u(""),x(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.RichTextToolbarButton,{icon:"info",title:(0,i.__)("Abbreviation","semantic-text-formats"),onClick:()=>{if(s){const e=(0,t.getActiveFormat)(r,"fw/abbreviation");e&&e.attributes&&e.attributes.title?u(e.attributes.title):u(""),x(!0)}else u(""),x(!0)},isActive:s}),m&&(0,o.jsx)(n.Popover,{anchor:c?.current,placement:"bottom",onClose:()=>{x(!1),u("")},className:"abbr-popover",children:(0,o.jsxs)("div",{style:{padding:"16px",minWidth:"280px"},children:[(0,o.jsx)(n.TextControl,{label:(0,i.__)("Full form of abbreviation:","semantic-text-formats"),value:p,onChange:u,placeholder:(0,i.__)("e.g., HyperText Markup Language","semantic-text-formats"),onKeyDown:t=>{"Enter"===t.key&&(t.preventDefault(),d())}}),(0,o.jsxs)("div",{style:{display:"flex",gap:"8px",marginTop:"12px",justifyContent:"space-between"},children:[(0,o.jsx)("div",{children:s&&(0,o.jsx)(n.Button,{variant:"tertiary",isDestructive:!0,onClick:()=>{l((0,t.removeFormat)(r,"fw/abbreviation")),u(""),x(!1)},children:(0,i.__)("Remove","semantic-text-formats")})}),(0,o.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,o.jsx)(n.Button,{variant:"tertiary",onClick:()=>{x(!1),u("")},children:(0,i.__)("Cancel","semantic-text-formats")}),(0,o.jsx)(n.Button,{variant:"primary",onClick:d,disabled:!p||!p.trim(),children:(0,i.__)("Apply","semantic-text-formats")})]})]})]})})]})}}),(0,t.registerFormatType)("fw/definition",{title:(0,i.__)("Definition","semantic-text-formats"),tagName:"dfn",className:null,edit:({isActive:a,value:n,onChange:s})=>(0,o.jsx)(e.RichTextToolbarButton,{icon:"book",title:(0,i.__)("Definition","semantic-text-formats"),onClick:()=>{s((0,t.toggleFormat)(n,{type:"fw/definition"}))},isActive:a})})})();
;(function (wp) {
  if (!wp || !wp.richText || !wp.blockEditor || !wp.components || !wp.element || !wp.i18n) {
    return;
  }

  var registerFormatType = wp.richText.registerFormatType;
  var applyFormat = wp.richText.applyFormat;
  var removeFormat = wp.richText.removeFormat;
  var useAnchor = wp.richText.useAnchor;

  var RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;
  var Popover = wp.components.Popover;
  var TextControl = wp.components.TextControl;
  var Button = wp.components.Button;

  var useState = wp.element.useState;
  var Fragment = wp.element.Fragment;
  var el = wp.element.createElement;
  var __ = wp.i18n.__;

  var FORMAT_NAME = 'semantic-text-formats/inline-span';
  var BASE_CLASS = 'stf-inline-span';function parseClasses(str) {
  return (str || '').split(/\s+/).map(function (s) { return (s || '').trim(); }).filter(Boolean);
}
function uniqueClasses(list) {
  var out = [];
  (list || []).forEach(function (c) {
    if (c && out.indexOf(c) === -1) out.push(c);
  });
  return out;
}
function stripBaseClass(str) {
  return parseClasses(str).filter(function (c) { return c !== BASE_CLASS; }).join(' ');
}
// IMPORTANT: Do NOT include BASE_CLASS in the `class` attribute.
// Gutenberg will apply `className: BASE_CLASS` automatically, and adding it here
// would duplicate it (e.g., "stf-inline-span stf-inline-span testing").
function buildUserClass(userInput) {
  var user = parseClasses(userInput).filter(function (c) { return c !== BASE_CLASS; });
  return uniqueClasses(user).join(' ');
}

  function InlineSpanEdit(props) {
    var isActive = props.isActive;
    var value = props.value;
    var onChange = props.onChange;
    var contentRef = props.contentRef;
    var activeAttributes = props.activeAttributes || {};

    var _state1 = useState(false);
    var isOpen = _state1[0];
    var setIsOpen = _state1[1];

    var _state2 = useState('');
    var className = _state2[0];
    var setClassName = _state2[1];

    // Anchor popover to selection if possible (WP 6.3+), otherwise to editable element.
    var anchor = null;
    try {
      if (typeof useAnchor === 'function') {
        anchor = useAnchor({ editableContentElement: contentRef && contentRef.current ? contentRef.current : undefined });
      }
    } catch (e) {}

    if (!anchor && contentRef && contentRef.current) {
      anchor = contentRef.current;
    }

    function open() {
      setClassName(isActive ? stripBaseClass(activeAttributes['class'] || '') : '');
      setIsOpen(true);
    }

    function apply() {
      onChange(
        applyFormat(value, {
          type: FORMAT_NAME,
          attributes: {
            class: buildUserClass(className) || undefined,
          },
        })
      );
      setIsOpen(false);
    }

    function remove() {
      onChange(removeFormat(value, FORMAT_NAME));
      setIsOpen(false);
      setClassName('');
    }

    return el(
      Fragment,
      {},
      el(RichTextToolbarButton, {
        icon: 'html',
        title: __('Inline Span Class', 'semantic-text-formats'),
        onClick: open,
        isActive: isActive,
      }),
      isOpen &&
        el(
          Popover,
          {
            anchor: anchor,
            onClose: function () {
              setIsOpen(false);
            },
            className: 'stf-inline-span-popover',
          },
          el(
            'div',
            { style: { padding: '16px', minWidth: '260px' } },
            el(TextControl, {
              label: __('CSS Class Name', 'semantic-text-formats'),
              value: className,
              onChange: function (val) {
                setClassName(val);
              },
              help: __('Separate multiple classes with spaces.', 'semantic-text-formats'),
            }),
            el(
              'div',
              { style: { marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'space-between' } },
              el(
                Button,
                { variant: 'primary', onClick: apply },
                __('Apply', 'semantic-text-formats')
              ),
              isActive &&
                el(
                  Button,
                  { variant: 'secondary', isDestructive: true, onClick: remove },
                  __('Remove Span', 'semantic-text-formats')
                )
            )
          )
        )
    );
  }

  registerFormatType(FORMAT_NAME, {
    title: __('Inline Span', 'semantic-text-formats'),
    tagName: 'span',
    className: BASE_CLASS,
    attributes: {
      class: 'class',
    },
    edit: InlineSpanEdit,
  });
})(window.wp);
