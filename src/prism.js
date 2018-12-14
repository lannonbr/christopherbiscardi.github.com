import theme from "@sens8/tokens";

//injectGlobal
`
code[class*="language-"] {
  font-size: 1rem;
margin-left: calc(50% - 38em + 300px);
margin-right: calc(50% - 38em + 300px);
}
pre[class*="language-"]{
  display: flex;
  margin-bottom: 1.5em;
}
code[class*="language-"],
pre[class*="language-"] {
  color: ${theme.colors.text};
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: ${theme.colors.backgroundLayers[3]};
}

/* Inline code */
:not(pre) > code {
	padding: 0.1em;
	border-radius: 0.3em;
	white-space: normal;
  color: #00e0e0;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #d4d0ab;
}

.token.punctuation {
	color: #fefefe;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #ffa07a;
}

.token.boolean,
.token.number {
	color: #00e0e0;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #abe338;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #00e0e0;
}

.token.atrule,
.token.attr-value,
.token.function {
	color: #ffd700;
}

.token.keyword {
	color: #00e0e0;
}

.token.regex,
.token.important {
	color: #ffd700;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

@media screen and (-ms-high-contrast: active) {
	code[class*="language-"],
	pre[class*="language-"] {
		color: windowText;
		background: window;
	}

	:not(pre) > code[class*="language-"],
	pre[class*="language-"] {
		background: window;
	}

	.token.important {
		background: highlight;
		color: window;
		font-weight: normal;
	}

	.token.atrule,
	.token.attr-value,
	.token.function,
	.token.keyword,
	.token.operator,
	.token.selector {
		font-weight: bold;
	}

	.token.attr-value,
	.token.comment,
	.token.doctype,
	.token.function,
	.token.keyword,
	.token.operator,
	.token.property,
	.token.string {
		color: highlight;
	}

	.token.attr-value,
	.token.url {
		font-weight: normal;
	}
}`;
