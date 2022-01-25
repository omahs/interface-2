import User from "types/User";

function userFactory(params: Partial<User> = {}): User {
  const defaultValues: User = {
    email: "user@email.com",
  };
  return Object.assign(defaultValues, params) as User;
}

export default userFactory;
