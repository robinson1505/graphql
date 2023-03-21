const blog = `
  type Blog {
    id:ID
    name: String
    description: String
    posts:[Post!]!
  }

  extend type Query {
    blogs:[Blog]
  }
`;
export default blog;
