const author = `
type Author{
    id:ID
    name:String
    email:String
    posts:[Post]
}
extend type Query {
authors: [Author]
  }
`;

export default author;
