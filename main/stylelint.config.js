module.exports = {
	"extends": [
		"stylelint-config-recommended",
		"stylelint-config-recommended-scss"
	],
	"plugins": ["stylelint-scss"],
	"rules": {
		// --limited language feature--

		//  Specify percentage or number notation for alpha-values
		"alpha-value-notation": "number",
		// Specify number or angle notation for degree hues
		"hue-degree-notation": "angle",
		// Specify modern or legacy notation for applicable color-functions
		"color-named": "never",
		// Disallow hex colors.
		// "color-no-hex": true
		// Disallow units for zero lengths
		"length-zero-no-unit": true,
		// Require numeric or named (where possible) font-weight values.
		"font-weight-notation": "named-where-possible",
		// Specify a list of allowed functions
		"function-allowed-list": ["scale", "rgba", "linear-gradient"],
		// Specify a list of disallowed functions
		"function-disallowed-list": [],
		// Disallow scheme-relative urls
		"function-url-no-scheme-relative": true,
		// Specify a list of allowed URL schemes.
		// "function-url-scheme-allowed-list": ["data", "/^http/"]
		// Specify a list of disallowed URL schemes
		// "function-url-scheme-disallowed-list": ["ftp", "/^http/"]
		// Specify a pattern for keyframe names.
		"keyframes-name-pattern": new RegExp("keyframes-.+"),
		// Limit the number of decimal places allowed in numbers
		"number-max-precision": 2,
		// Specify the minimum number of milliseconds for time values.
		"time-min-milliseconds": 100,
		// Specify a list of allowed units.
		"unit-allowed-list": ["px", "%", "em", "deg", "s", "vh"],
		// Specify a list of disallowed units
		"unit-disallowed-list": [],
		// Disallow redundant values in shorthand properties
		// "shorthand-property-no-redundant-values": true
		// Disallow vendor prefixes for values
		// "value-no-vendor-prefix": true
		// Specify a pattern for custom properties
		// "custom-property-pattern": new RegExp("yourString")
		// Specify a list of allowed properties
		// "property-allowed-list": ["display", "animation", "/^background/"]
		// Specify a list of disallowed properties
		"property-disallowed-list": [],
		// Disallow vendor prefixes for properties
		// "property-no-vendor-prefix": true
		// Disallow longhand properties that can be combined into one shorthand property.
		"declaration-block-no-redundant-longhand-properties": true,
		// Disallow !important within declaration
		"declaration-no-important": true,
		// Specify a list of allowed property and unit pairs within declarations
		// "declaration-property-unit-allowed-list": {
		//   "font-size": ["em", "px"],
		//   "/^animation/": ["s"],
		//   "line-height": []
		// }
		// Specify a list of disallowed property and unit pairs within declarations
		// "declaration-property-unit-disallowed-list": {
		//   "font-size": ["em", "px"],
		//   "/^animation/": ["s"]
		// }
		// Specify a list of allowed property and value pairs within declarations
		// "declaration-property-value-allowed-list": {
		//   "transform": ["/scale/"],
		//   "whitespace": ["nowrap"],
		//   "/color/": ["/^green/"]
		// }
		// Specify a list of disallowed property and value pairs within declarations
		// "declaration-property-value-disallowed-list": {
		// 	"transform": ["/scale3d/", "/rotate3d/", "/translate3d/"],
		// 	"position": ["fixed"],
		// 	"color": ["/^green/"],
		// 	"/^animation/": ["/ease/"]
		// }
		// Limit the number of declarations within a single-line declaration block
		"declaration-block-single-line-max-declarations": 1,
		// Specify a list of disallowed attribute names
		// "selector-attribute-name-disallowed-list": ["class", "id", "/^data-/"]
		// Specify a list of allowed attribute operators
		"selector-attribute-operator-allowed-list": ["="],
		// Specify a list of disallowed attribute operators
		"selector-attribute-operator-disallowed-list": ["*="],
		// Specify a pattern for class selectors
		// "selector-class-pattern": "foo-[a-z]+"
		// Specify a list of allowed combinators
		"selector-combinator-allowed-list": [">", " "],
		// Specify a list of disallowed combinators
		// "selector-combinator-disallowed-list": [">", " "]
		// Specify a pattern for ID selectors
		"selector-id-pattern": "",
		// Limit the number of attribute selectors in a selector
		"selector-max-attribute": 2,
		// Limit the number of classes in a selector
		// "selector-max-class": 2,
		// Limit the number of combinators in a selector
		"selector-max-combinators": 2,
		// Limit the number of compound selectors in a selector
		"selector-max-compound-selectors": 3,
		// Limit the number of adjacent empty lines within selectors
		"selector-max-empty-lines": 0,
		// Limit the number of ID selectors in a selector
		"selector-max-id": 2,
		// Limit the number of pseudo-classes in a selector
		"selector-max-pseudo-class": 1,
		// Limit the specificity of selectors
		// "selector-max-specificity": "0,2,0",
		// Limit the number of type selectors in a selector
		"selector-max-type": 2,
		// Limit the number of universal selectors in a selector
		"selector-max-universal": 1,
		// Specify a pattern for the selectors of rules nested within rules
		// "selector-nested-pattern": "^&:(?:hover|focus)$",
		// Disallow qualifying a selector by type
		"selector-no-qualifying-type": true,
		// Disallow vendor prefixes for selectors
		"selector-no-vendor-prefix": true,
		// Specify a list of allowed pseudo-class selectors
		// "selector-pseudo-class-allowed-list": ["hover", "focus", "/^nth-/"],
		// Specify a list of disallowed pseudo-class selectors
		"selector-pseudo-class-disallowed-list": [],
		// Specify single or double colon notation for applicable pseudo-elements
		"selector-pseudo-element-colon-notation": "double",
		// Specify a list of disallowed pseudo-element selectors
		// "selector-pseudo-element-disallowed-list": ["before", "/^my-/i"],
		// Specify a list of allowed media feature names.
		"media-feature-name-allowed-list": ["max-width"],
		// Specify a list of disallowed media feature names
		"media-feature-name-disallowed-list": ["min-width"],
		// Disallow vendor prefixes for media feature names.
		"media-feature-name-no-vendor-prefix": true,
		// Specify a list of allowed media feature name and value pairs.
		"media-feature-name-value-allowed-list": {"max-width": ["768px", "1024px"]},
		// Specify a pattern for custom media query names.
		// "custom-media-pattern": "foo-.+",
		// Specify a list of allowed at-rules.
		"at-rule-allowed-list": ["import", "keyframes"],
		// Specify a list of disallowed at-rules.
		"at-rule-disallowed-list": ["extends"],
		// Disallow vendor prefixes for at-rules.
		"at-rule-no-vendor-prefix": true,
		// Specify a list of required properties for an at-rule.
		// "at-rule-property-required-list": {
		//   "font-face": ["font-display", "font-family", "font-style"]
		// }
		// Specify a pattern for comments.
		// "comment-pattern": "foo .+"
		// Specify a list of disallowed words within comments.
		// "comment-word-disallowed-list": ["/^TODO:/", "badword"]
		// Limit the depth of nesting.
		"max-nesting-depth": 3,
		// Disallow unknown animations.
		"no-unknown-animations": true,

		// --Stylistic issue--

		// Specify lowercase or uppercase for hex colors
		"color-hex-case": "lower",
		// Specify short or long notation for hex colors.
		"color-hex-length": "short",
		// Specify whether or not quotation marks should be used around font family names.
		"font-family-name-quotes": "always-where-required",
		// Require a newline or disallow whitespace after the commas of functions.
		"function-comma-newline-after": "always-multi-line",
		// Require a newline or disallow whitespace before the commas of functions.
		"function-comma-newline-before": "always-multi-line",
		// Require a single space or disallow whitespace after the commas of functions.
		"function-comma-space-after": "always",
		// Require a single space or disallow whitespace before the commas of functions.
		"function-comma-space-before": "never",
		// Limit the number of adjacent empty lines within functions.
		"function-max-empty-lines": 0,
		// Specify lowercase or uppercase for function names.
		"function-name-case": "lower",
		// Require a newline or disallow whitespace on the inside of the parentheses of functions.
		"function-parentheses-newline-inside": "always-multi-line",
		// Require a single space or disallow whitespace on the inside of the parentheses of functions.
		"function-parentheses-space-inside": "never",
		// Require or disallow quotes for urls.
		"function-url-quotes": "always",
		// Require or disallow whitespace after functions.
		"function-whitespace-after": "always",
		// Require or disallow a leading zero for fractional numbers less than 1.
		"number-leading-zero": "never",
		// Disallow trailing zeros in numbers.
		"number-no-trailing-zeros": true,
		// Specify single or double quotes around strings.
		"string-quotes": "double",
		// Specify lowercase or uppercase for units
		"unit-case": "lower",
		// Specify lowercase or uppercase for keywords values.
		"value-keyword-case": "lower",
		// Require a newline or disallow whitespace after the commas of value lists.
		"value-list-comma-newline-after": "always-multi-line",
		// Require a newline or disallow whitespace before the commas of value lists.
		"value-list-comma-newline-before": "never-multi-line",
		// Require a single space or disallow whitespace after the commas of value lists.
		"value-list-comma-space-after": "always",
		// Require a single space or disallow whitespace before the commas of value lists.
		"value-list-comma-space-before": "never",
		// Limit the number of adjacent empty lines within value lists.
		"value-list-max-empty-lines": 0,
		// Require or disallow an empty line before custom properties.
		"custom-property-empty-line-before": "never",
		// Specify lowercase or uppercase for properties
		"property-case": "lower",
		// Require a single space or disallow whitespace after the bang of declarations.
		"declaration-bang-space-after": "never",
		// Require a single space or disallow whitespace before the bang of declarations.
		"declaration-bang-space-before": "always",
		// Require a newline or disallow whitespace after the colon of declarations.
		"declaration-colon-newline-after": "always-multi-line",
		// Require a single space or disallow whitespace after the colon of declarations.
		"declaration-colon-space-after": "always",
		// Require a single space or disallow whitespace before the colon of declarations.
		"declaration-colon-space-before": "never",
		// Require or disallow an empty line before declarations.
		"declaration-empty-line-before": "never",
		// Require a newline or disallow whitespace after the semicolons of declaration blocks.
		"declaration-block-semicolon-newline-after": "always",
		// Require a newline or disallow whitespace before the semicolons of declaration blocks.
		"declaration-block-semicolon-newline-before": "never-multi-line",
		// Require a single space or disallow whitespace after the semicolons of declaration blocks.
		// "declaration-block-semicolon-space-after": "always",
		// Require a single space or disallow whitespace before the semicolons of declaration blocks.
		"declaration-block-semicolon-space-before": "never",
		// Require or disallow a trailing semicolon within declaration blocks.
		"declaration-block-trailing-semicolon": "always",
		// Require or disallow an empty line before the closing brace of blocks
		"block-closing-brace-empty-line-before": "never",
		// Require a newline or disallow whitespace after the closing brace of blocks
		"block-closing-brace-newline-after": "always",
		// Require a newline or disallow whitespace before the closing brace of blocks
		"block-closing-brace-newline-before": "always",
		// Require a single space or disallow whitespace after the closing brace of blocks
		// "block-closing-brace-space-after": "always",
		// Require a single space or disallow whitespace before the closing brace of blocks.
		// "block-closing-brace-space-before": "always",
		// Require a newline after the opening brace of blocks.
		"block-opening-brace-newline-after": "always",
		// Require a newline or disallow whitespace before the opening brace of blocks.
		// "block-opening-brace-newline-before": "always-multi-line",
		//  Require a single space or disallow whitespace after the opening brace of blocks.
		// "block-opening-brace-space-after": "always",
		// Require a single space or disallow whitespace before the opening brace of blocks.
		"block-opening-brace-space-before": "always",
		// Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
		"selector-attribute-brackets-space-inside": "never",
		// Require a single space or disallow whitespace after operators within attribute selectors.
		"selector-attribute-operator-space-after": "never",
		// Require a single space or disallow whitespace before operators within attribute selectors.
		"selector-attribute-operator-space-before": "never",
		// Require or disallow quotes for attribute values.
		"selector-attribute-quotes": "always",
		// Require a single space or disallow whitespace after the combinators of selectors.
		"selector-combinator-space-after": "always",
		// Require a single space or disallow whitespace before the combinators of selectors.
		"selector-combinator-space-before": "always",
		// Disallow non-space characters for descendant combinators of selectors.
		"selector-descendant-combinator-no-non-space": true,
		// Specify lowercase or uppercase for pseudo-class selectors.
		"selector-pseudo-class-case": "lower",
		// Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
		"selector-pseudo-class-parentheses-space-inside": "never",
		// Specify lowercase or uppercase for pseudo-element selectors.
		"selector-pseudo-element-case": "lower",
		// Specify lowercase or uppercase for type selectors.
		"selector-type-case": "lower",
		// Require a newline or disallow whitespace after the commas of selector lists.
		// "selector-list-comma-newline-after": "always",
		// Require a newline or disallow whitespace before the commas of selector lists
		// "selector-list-comma-newline-before": "always"
		// Require a single space or disallow whitespace after the commas of selector lists.
		// "selector-list-comma-space-after": "always",
		// Require a single space or disallow whitespace before the commas of selector lists.
		"selector-list-comma-space-before": "never",
		// Require or disallow an empty line before rules
		// "rule-empty-line-before": "always",
		// Require a single space or disallow whitespace after the colon in media features.
		"media-feature-colon-space-after": "always",
		// Require a single space or disallow whitespace before the colon in media features.
		"media-feature-colon-space-before": "never",
		// Specify lowercase or uppercase for media feature names.
		"media-feature-name-case": "lower",
		// Require a single space or disallow whitespace on the inside of the parentheses within media features.
		"media-feature-parentheses-space-inside": "never",
		// Require a single space or disallow whitespace after the range operator in media features.
		"media-feature-range-operator-space-after": "always",
		// Require a single space or disallow whitespace before the range operator in media features.
		"media-feature-range-operator-space-before": "always",
		// Require a newline or disallow whitespace after the commas of media query lists.
		// "media-query-list-comma-newline-after": "always-multi-line",
		// Require a newline or disallow whitespace before the commas of media query lists.
		// "media-query-list-comma-newline-before": "never-multi-line",
		// Require a single space or disallow whitespace after the commas of media query lists.
		"media-query-list-comma-space-after": "always",
		// Require a single space or disallow whitespace before the commas of media query lists.
		"media-query-list-comma-space-before": "never",
		// Require or disallow an empty line before at-rules.
		// "at-rule-empty-line-before": "always",
		// Specify lowercase or uppercase for at-rules names.
		"at-rule-name-case": "lower",
		// Require a newline after at-rule names.
		// "at-rule-name-newline-after": "always-multi-line",
		// Require a single space after at-rule names.
		"at-rule-name-space-after": "always",
		// Require a newline after the semicolon of at-rules.
		"at-rule-semicolon-newline-after": "always",
		// Require a single space or disallow whitespace before the semicolons of at-rules.
		"at-rule-semicolon-space-before": "never",
		// Require or disallow an empty line before comments.
		// "comment-empty-line-before": "always",
		// Require or disallow whitespace on the inside of comment markers.
		"comment-whitespace-inside": "always",
		// Specify indentation
		"indentation": "tab",
		// Specify unix or windows linebreaks.
		// "linebreaks": "windows",
		// Limit the number of adjacent empty lines.
		"max-empty-lines": 2,
		// Limit the length of a line.
		// "max-line-length": 20,
		// Disallow end-of-line whitespace.
		"no-eol-whitespace": true,
		// Disallow missing end-of-source newlines.
		// "no-missing-end-of-source-newline": "true",
		// Disallow empty first lines.
		"no-empty-first-line": true,
		// Require or disallow the Unicode Byte Order Mark
		"unicode-bom": "never"
	}
}
