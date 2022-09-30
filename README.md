# wjst

[Wjst](https://webartwork.github.io/wjst) is an awesome, Django/Jinja-like template engine for node.js.

Features
--------

* Available for node.js **and** major web browsers!
* [Express](http://expressjs.com/) compatible.
* Object-Oriented template inheritance.
* Apply filters and transformations to output in your templates.
* Automatically escapes all output for safe HTML rendering.
* Lots of iteration and conditionals supported.
* Robust without the bloat.
* Extendable and customizable. See [Wjst-Extras](https://github.com/WebArtWork/wjst-extras) for some examples.
* Great [code coverage](http://webartwork.github.io/wjst/coverage.html).

Need Help? Have Questions? Comments?
------------------------------------

* [Mailing List/Google Group](http://groups.google.com/forum/#!forum/swig-templates)
* [StackOverflow](https://stackoverflow.com/questions/tagged/wjst)

Installation
------------

    npm install wjst

Documentation
-------------

All documentation can be viewed online on the [Wjst Website](https://webartwork.github.io/wjst).

Basic Example
-------------

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
const wjst  = require('wjst');
const template = wjst.compileFile('./index.html');
const output = template({
    pagename: 'awesome people',
    authors: ['Den', 'Paul', 'Jane']
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

For working example see [examples/basic](https://github.com/webartwork/wjst/tree/master/examples/basic)

How it works
------------

Wjst reads template files and translates them into cached javascript functions. When we later render a template we call the evaluated function, passing a context object as an argument.
