import { ApolloServer, gql } from "apollo-server";
import "dotenv/config";
import mongoose from "mongoose";
import { createAdmin } from "./admin.js";
import { mutCreateAssignment } from "./controller/mutation/mutation.assignment.js";
import { mutLogin } from "./controller/mutation/mutation.login.js";
import {
  mutAddUserToSubject,
  mutCreateSubject,
} from "./controller/mutation/mutation.subject.js";
import { mutCreateTodoList } from "./controller/mutation/mutation.todolist.js";
import { mutCreateUser } from "./controller/mutation/mutation.user.js";
import { queryAssignment, queryAssignments } from "./controller/query/query.assignment.js";
import {
  querySubject,
  querySubjects,
  queryUserSubjects,
} from "./controller/query/query.subject.js";
import { queryTodoList, queryTodoLists } from "./controller/query/query.todolist.js";
import { queryUser, queryUsers } from "./controller/query/query.user.js";
import { initData } from "./info.js";
import { getUserFromToken } from "./user.permission.js";

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", async () => {
  console.log("MongoDataBase is connected");

  try {
    await createAdmin();
    await initData();
    console.log("Admin user checked successfully");
  } catch (error) {
    console.error("Error checking admin user:", error);
  }

  await console.log("?")
  const typeDefs = gql`
    scalar DateTime

    type Query {
      subjects: [Subject]
      subject(subjectId: ID!): Subject
      userSubjects(userId: ID!): [Subject]
      users: [User]
      user(userId: ID!): User
      assignments: [Assignment]
      assignment(assignmentId: ID!): Assignment
      todolists: [TodoList]
      todolist(todolistId: ID!): TodoList
    }

    type Mutation {
      createUser(username: String!, email: String!, password: String!): User
      login(id: String!, password: String!): AuthPayload
      createSubject(name: String!, credit: Int, classification: String): Subject
      addUserToSubject(subjectId: ID!, userId: ID!): Subject
      createAssignment(assignment_name: String!, credit: Int, classification: String): Assignment
      addAssignmentToSubject(assignmentId: ID!, subjectId: ID!): Assignment
      createTodoList(todo_name:String!, status:String, due_date:DateTime): TodoList
      addTodoListToSubject(todolistId: ID!, subjectId: ID!): TodoList
    }

    type User {
      _id: ID!
      username: String!
      email: String!
      password: String!
  
      subjects: [Subject!]!
      isAdmin: Boolean!
      tokenExpiration: Int!
    }

    input AssignmentPeriodInput {
      start: DateTime!
      end: DateTime!
    }

    type AssignmentPeriod {
      start: DateTime!
      end: DateTime!
    }

    type AuthPayload {
      token: String!
      user: User!
    }

    type Subject {
      _id: ID!
      name: String!
      credit: Int
      classification: String
      capacity: Int
      users: [User!]!
      lecture_time: String
      lecture_date: String
      lecture_room: String
      absent_count: Int
      late_count: Int
      nothandle_count: Int
      assignments: [Assignment]
      todolists: [TodoList]
    }

    type Assignment {
      _id: ID!
      assignment_name: String!
      subjects: [Subject!]!
      assignment_status: String
      assignment_date: DateTime
      capacity: Int
    }


    type TodoList {
      _id: ID!
      middle_exam : String!
      final_exam : String!
      middle_date : DateTime
      final_date : DateTime
      capacity: Int
      subjects : [Subject!]!

    }
  `;

  const resolvers = {
    Query: {
      subjects: querySubjects,
      subject: querySubject,
      userSubjects: queryUserSubjects,
      users: queryUsers,
      user: queryUser,
      assignments: queryAssignments,
      assignment: queryAssignment,
      todolists: queryTodoLists,
      todolist : queryTodoList,
    },

    Mutation: {
      createUser: mutCreateUser,
      login: mutLogin,
      createSubject: mutCreateSubject,
      addUserToSubject: mutAddUserToSubject,
      createAssignment: mutCreateAssignment,
      createTodoList : mutCreateTodoList,
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const token = req.headers.authorization;
      const user = await getUserFromToken(token);
      return { user };
    },
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});