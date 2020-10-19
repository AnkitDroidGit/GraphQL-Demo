import { IResolvers } from "graphql-tools";

let users = [
  {
    id: "id-1",
    name: "Ankit",
    bio: "Node Develoepr",
  },
];

let count = users.length;

const resolvers: IResolvers = {
  Query: {
    helloWolrd: () => "Hello World from Apollo Server",
  },
  Mutation: {
    addUser: (parent, args) => {
      let user = {
        id: `id-${++count}`,
        name: args.name,
        bio: args.bio,
      };
      users.push(user);
      console.log(users);
      return user;
    },
  },
};

export default resolvers;
