const config = {
    overwrite: true,
    schema: "https://api.thegraph.com/subgraphs/name/somemoecoding/surgeswap-v2",
    documents: ['src/**/*.ts'],
    generates: {
        './src/gql/': {
            preset: 'client',
            config: {
                documentMode: 'string',
            },
        },
    },
};
export default config;
//# sourceMappingURL=codegen.js.map