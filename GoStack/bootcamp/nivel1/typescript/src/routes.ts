import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  //   const user = createUser("Danilo", "danilo@gmail.com", "123456");
  const user = createUser({
    name: "Danilo",
    email: "danilo@gmail.com",
    password: "123456",
    techs: ['Node', 'React', 'React-Native', {
        title: 'Javascript',
        experience:100
    }]
  });
  return response.json({ Message: "Hello World", User: user });
}
