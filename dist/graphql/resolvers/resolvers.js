module.exports = {
    Query: {
        books: {
            description: 'Book query',
            resolver(_parent, _args, ctx) {
                ctx.query(`SELECT NOW()`);
            }
        }
    }
};
//# sourceMappingURL=resolvers.js.map