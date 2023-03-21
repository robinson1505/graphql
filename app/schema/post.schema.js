const post = `
type Post {
    id:ID
    title:String
    content:String
    authors:[Author!]
    blogs:Blog

}

extend type Query {
    posts: [Post]
  }
`;
export default post;
