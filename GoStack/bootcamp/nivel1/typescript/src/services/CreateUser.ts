/**
 * Para criar um usuaro
 *
 */

// export default function createUser(name = '', email:string, password:string) {
//   const user = {
//     name,
//     email,
//     password,
//   };
//   return user;
// }
interface TechObjetc {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObjetc>;
//   techs: string[]
}

export default function createUser({
  name = "",
  email,
  password,
  techs
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  };
  return user;
}
