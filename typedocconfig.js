module.exports = {
    src: [
      './src',
    ],
    mode: 'modules',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: './docs',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    excludeNotExported: true,
    name: 'hyperoop',
    ignoreCompilerErrors: true,
    listInvalidSymbolLinks: true,
  };