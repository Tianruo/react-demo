module.exports = function (api) {
    api.cache(true)

    const presets = ['@babel/preset-react']
    const plugins = [
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css',
            },
        ],

        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
    ]

    return {
        presets,
        plugins,
    }
}
