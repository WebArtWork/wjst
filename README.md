# wjst

[Wjst](https://wjst.webart.work) is an awesome, Django/Jinja-like template engine for node.js.

## Features

-   Available for node.js **and** major web browsers!
-   [Express](http://expressjs.com/) compatible.
-   Object-Oriented template inheritance.
-   Apply filters and transformations to output in your templates.
-   Automatically escapes all output for safe HTML rendering.
-   Lots of iteration and conditionals supported.
-   Robust without the bloat.
-   Extendable and customizable. See [Wjst-Extras](https://github.com/WebArtWork/wjst-extras) for some examples.
-   Great [code coverage](http://webartwork.github.io/wjst/coverage.html).

## Need Help? Have Questions? Comments?

-   [StackOverflow](https://stackoverflow.com/questions/tagged/wjst)
-   [Telegram](http://t.me/wawceo)

## Installation

    npm install wjst

## Documentation

All documentation can be viewed online on the [Wjst Website](https://wjst.webart.work).

## Basic Example

### Template code `index.html`

```html
<h1>{{ pagename|title }}</h1>
<ul>
{% for author in authors %}
    <li{% if loop.first %} class="first"{% endif %}>{{ author }}</li>
{% endfor %}
</ul>
```

### node.js code

```js
const wjst = require("wjst");
const template = wjst.compileFile("./index.html");
const output = template({
	pagename: "awesome people",
	authors: ["Den", "Paul", "Jane"],
});
```

### Output

```html
<h1>Awesome People</h1>
<ul>
	<li class="first">Den</li>
	<li>Paul</li>
	<li>Jane</li>
</ul>
```

For working examples you can checkup at [examples/basic](https://github.com/WebArtWork/wjst/tree/examples)


## How it works

Wjst reads template files and translates them into cached javascript functions. When we later render a template we call the evaluated function, passing a context object as an argument.

## Filters
Wjst includes many useful filters to transform your data:

- **addslashes** – Escape quotes with backslashes.

  ```html
  {{ '"quoted"'|addslashes }}
  <!-- "quoted" -->
  ```

- **capitalize** – Capitalize the first letter of a string.

  ```html
  {{ 'i like Burritos'|capitalize }}
  <!-- I like burritos -->
  ```

- **date** – Format JavaScript Date objects.

  ```html
  {{ now|date('Y-m-d') }}
  ```

- **default** – Provide a default value when a variable is falsy.

  ```html
  {{ missing|default('Tacos') }}
  ```

- **escape (e)** – HTML escape text. Pass `"js"` to escape for JavaScript.

  ```html
  {{ '<div>'|escape }}
  {{ '<div>'|e('js') }}
  ```

- **first** – Return the first item in an array.

  ```html
  {{ my_list|first }}
  ```

- **groupBy** – Group an array of objects by a key.

  ```html
  {% for group in users|groupBy('age') %}
    <h2>{{ loop.key }}</h2>
  {% endfor %}
  ```

- **join** – Join array elements with a delimiter.

  ```html
  {{ my_list|join(', ') }}
  ```

- **json (json_encode)** – JSON encode a value.

  ```html
  {{ data|json(2) }}
  ```

- **last** – Return the last item in an array.

  ```html
  {{ my_list|last }}
  ```

- **length** – Output the length of an array or string.

  ```html
  {{ my_list|length }}
  ```

- **lower** – Convert a string to lowercase.

  ```html
  {{ 'FOO'|lower }}
  ```

- **raw** – Mark the value as already safe.

  ```html
  {{ value|raw }}
  ```

- **safe** – Alias of `raw` to bypass auto‑escaping.

  ```html
  {{ value|safe }}
  ```

- **sort** – Sort an array.

  ```html
  {{ nums|sort }}
  ```

- **reverse** – Reverse an array.

  ```html
  {{ nums|reverse }}
  ```

- **striptags** – Remove HTML tags from a string.

  ```html
  {{ '<p>foo</p>'|striptags }}
  ```

- **title** – Convert text to title case.

  ```html
  {{ 'this is text'|title }}
  ```

- **uniq** – Remove duplicate values from an array.

  ```html
  {{ [1,2,2,3]|uniq|join(',') }}
  ```

- **upper** – Convert a string to uppercase.

  ```html
  {{ 'tacos'|upper }}
  ```

- **url_encode / url_decode** – Encode or decode URL components.

  ```html
  {{ 'param=1'|url_encode }}
  {{ 'param%3D1'|url_decode }}
  ```

## Tags
Templates can also use tags that provide flow control and inheritance:

- **autoescape** – Toggle automatic escaping.

  ```html
  {% autoescape false %}{{ html }}{% endautoescape %}
  ```

- **block** – Define an overridable block in a template.

  ```html
  {% block content %}...{% endblock %}
  ```

- **else**, **elseif**/**elif** – Used with `if` for conditional logic.

  ```html
  {% if a %}A{% elseif b %}B{% else %}C{% endif %}
  ```

- **extends** – Inherit from another template.

  ```html
  {% extends "./layout.html" %}
  ```

- **filter** – Apply a filter to a block of template code.

  ```html
  {% filter upper %}hi{% endfilter %}
  ```

- **for** – Iterate over objects and arrays.

  ```html
  {% for item in list %}{{ item }}{% endfor %}
  ```

- **if** – Basic conditional tag.

  ```html
  {% if logged_in %}Welcome{% endif %}
  ```

- **import** – Import macros from another file.

  ```html
  {% import './macros.html' as m %}
  {{ m.foo() }}
  ```

- **include** – Include another template with optional context.

  ```html
  {% include './partial.html' %}
  ```

- **macro** – Declare reusable template functions.

  ```html
  {% macro input(type, name) %}<input type="{{ type }}" name="{{ name }}">{% endmacro %}
  ```

- **parent** – Render the content from the parent block.

  ```html
  {% block content %}Before {% parent %}{% endblock %}
  ```

- **raw** – Output text exactly as written.

  ```html
  {% raw %}{{ not_evaluated }}{% endraw %}
  ```

- **set** – Set or update a template variable.

  ```html
  {% set count = 1 %}
  ```

- **spaceless** – Remove whitespace between HTML tags.

  ```html
  {% spaceless %}<p> A </p>{% endspaceless %}
  ```
