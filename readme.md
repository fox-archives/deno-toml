# deno-toml

A deno "port" of [toml-node](https://github.com/BinaryMuse/toml-node)

Because Deno's toml parsing from std's `encoding` module was acting up

## Usage

```js
import { parse } from 'https://raw.githubusercontent.com/fox-land/deno-toml/master/mod.ts'

const tomlObj = parse(`commands = [
	[ 'sort-json' ]
]
`)
```
