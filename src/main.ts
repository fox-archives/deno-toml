import { parseString } from './parser.js'
import { compile } from './compiler.js'

export function parse(input: string): any {
    var nodes = parseString().parse(input.toString());
    return compile(nodes);
}
