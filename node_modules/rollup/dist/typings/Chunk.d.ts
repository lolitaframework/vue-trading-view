import { SourceMap } from 'magic-string';
import Module, { ModuleJSON } from './Module';
import { OutputOptions } from './rollup/index';
import Graph from './Graph';
import ExternalModule from './ExternalModule';
import Variable from './ast/variables/Variable';
export interface ModuleDeclarations {
    exports: ChunkExports;
    dependencies: ModuleDeclarationDependency[];
}
export interface ModuleDeclarationDependency {
    id: string;
    name: string;
    isChunk: boolean;
    exportsDefault: boolean;
    exportsNames: boolean;
    exportsNamespace: boolean;
    reexports?: ReexportSpecifier[];
    imports?: ImportSpecifier[];
}
export declare type ChunkDependencies = ModuleDeclarationDependency[];
export declare type ChunkExports = {
    local: string;
    exported: string;
    hoisted: boolean;
}[];
export interface ReexportSpecifier {
    reexported: string;
    imported: string;
}
export interface ImportSpecifier {
    local: string;
    imported: string;
}
export interface DynamicImportMechanism {
    left: string;
    right: string;
    interopLeft?: string;
    interopRight?: string;
}
export default class Chunk {
    id: string;
    name: string;
    graph: Graph;
    private orderedModules;
    private exportedVariableNames;
    private imports;
    private exports;
    private dependencies;
    entryModule: Module;
    isEntryModuleFacade: boolean;
    constructor(graph: Graph, orderedModules: Module[]);
    setId(id: string): void;
    ensureExport(module: Module | ExternalModule, variable: Variable, exportName: string): string;
    generateEntryExports(entryModule: Module, onlyIncluded?: boolean): void;
    collectDependencies(entryFacade?: Module): void;
    generateImports(): void;
    populateImport(variable: Variable, tracedExport: {
        name: string;
        module: Module | ExternalModule;
    }): void;
    getImportIds(): string[];
    getExportNames(): string[];
    getJsonModules(): ModuleJSON[];
    traceImport(module: Module | ExternalModule, exportName: string): {
        name: string;
        module: ExternalModule | Module;
    };
    traceExport(module: Module | ExternalModule, name: string): {
        name: string;
        module: Module | ExternalModule;
    };
    collectAddon(initialAddon: string, addonName: 'banner' | 'footer' | 'intro' | 'outro', sep?: string): Promise<string>;
    private setDynamicImportResolutions({format});
    private setIdentifierRenderResolutions(options);
    private getCheckReexportDeclarations();
    private getChunkDependencyDeclarations();
    private getChunkExportDeclarations();
    getModuleDeclarations(): ModuleDeclarations;
    render(options: OutputOptions): Promise<{
        code: string;
        map: SourceMap;
    }>;
    private createGetPath(options);
}
