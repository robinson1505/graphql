const typeDefs = `
  type Blog {
    id:ID
    name: String
    description: String
  }

  type Query {
    blogs: [Blog]
  }
`;
export default typeDefs