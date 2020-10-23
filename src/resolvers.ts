import { IResolvers } from "graphql-tools";

let users = [
  {
    id: "id-1",
    name: "Ankit",
    bio: "GraphQL Develoepr",
  },
  {
    id: "id-2",
    name: "Ankit Kumar",
    bio: "Node Develoepr",
  },
  {
    id: "id-3",
    name: "Ankit Kumar",
    bio: "Node Develoepr",
  },
  {
    id: "id-4",
    name: "Ankit",
    bio: "Node Develoepr",
  },
  {
    id: "id-5",
    name: "Ankit",
    bio: "Node Develoepr",
  },
  {
    id: "id-6",
    name: "Ankit",
    bio: "Node Develoepr",
  },
];

let count = users.length;

const resolvers: IResolvers = {
  Query: {
    helloWolrd: () => "Hello World from Apollo Server",
    users: () => users,
    user: (parent, args) => {
      return users.find((user) => user.id === args.id);
    },
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
