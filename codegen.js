module.exports = {
    schema: [
        {
            'https://mosu.hasura.app/v1/graphql': {
                headers: {
                    'x-hasura-admin-secret': "15bEv9zrWd30zSqRVACAwYqdxuGvqJuQQ8P2xHgynyGGdx3MOPFYJo6STvkNPWPW"
                },
            },
        },
    ],
    overwrite: true,
    documents: ['./src/graphql/**/*.tsx', './src/graphql/**/*.ts'],
    generates: {
        './src/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};
