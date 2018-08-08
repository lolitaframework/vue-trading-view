import { GlobalsOption } from '../../rollup/index';
import Graph from '../../Graph';
import { ModuleDeclarationDependency } from '../../Chunk';
export default function getGlobalNameMaker(globals: GlobalsOption, graph: Graph, fallback?: string): (dependency: ModuleDeclarationDependency) => string;
