import Chunk from '../Chunk';
import { Bundle as MagicStringBundle } from 'magic-string';
import { OutputOptions } from '../rollup/index';
export default function amd(chunk: Chunk, magicString: MagicStringBundle, {exportMode, getPath, indentString, intro, outro, dynamicImport}: {
    exportMode: string;
    indentString: string;
    getPath: (name: string) => string;
    intro: string;
    outro: string;
    dynamicImport: boolean;
}, options: OutputOptions): MagicStringBundle;
