"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    //   const user = createUser("Danilo", "danilo@gmail.com", "123456");
    var user = CreateUser_1.default({
        name: "Danilo",
        email: "danilo@gmail.com",
        password: "123456",
        techs: ['Node', 'React', 'React-Native', {
                title: 'Javascript',
                experience: 100
            }]
    });
    return response.json({ Message: "Hello World", User: user });
}
exports.helloWorld = helloWorld;
