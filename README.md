# hyperoop

[![Build Status](https://travis-ci.org/algebraic-brain/hyperoop.svg?branch=master)](https://travis-ci.org/algebraic-brain/hyperoop)
[![npm version](https://badge.fury.io/js/hyperoop.svg)](https://badge.fury.io/js/hyperoop)
[![codecov](https://codecov.io/gh/algebraic-brain/hyperoop/branch/master/graph/badge.svg)](https://codecov.io/gh/algebraic-brain/hyperoop)
[![GitHub top language](https://img.shields.io/github/languages/top/algebraic-brain/hyperoop.svg)](https://github.com/algebraic-brain/hyperoop)


Hyperoop is OOP-style SPA micro-framework over [hyperapp](https://github.com/jorgebucaran/hyperapp)

## Status

Under development

## Install

```bash
npm i --save hyperoop
```

## Examples

See [examples](https://github.com/algebraic-brain/hyperoop/tree/master/examples).

### Run example

To run `todo-hist` example:

```bash
git clone https://github.com/algebraic-brain/hyperoop
cd hyperoop
npm i && npm run build
cd examples/todo-hist
npm i && npm run serve
```

Then open localhost:10001 in browser. Or simply [try it online](https://codepen.io/algebrain/pen/GwZWLg)

### Example `counter`

`TypeScript` code ([try online](https://codepen.io/algebrain/pen/OaNgMv)):

```typescript
import * as ui from 'hyperoop';

class Counter extends ui.Actions<{count: number}> {}

const counter = new Counter({ count: 0 });

const view = ui.view(counter, () => (
<div>
    <h1>{counter.State.count}</h1>
    <button onclick={() => counter.State.count--}>-</button>
    <button onclick={() => counter.State.count++}>+</button>
</div>
))

ui.init(document.body, view);
```
