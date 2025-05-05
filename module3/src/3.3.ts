{
  // Type Guard

  // Type Of Operator
  // Typeof Works in run time, since it is also present in js
  //  we will make decision based on the type
  type Alphanumeric = string | number;
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add(2, "2");

  console.log(result);

  //    type in operator
  type TNormalUser = {
    name: string;
  };
  type TAdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: TNormalUser | TAdminUser) => {
    // user.
    // The user parameter can be either TNormalUser or TAdminUser, and TNormalUser does not have a role property — so TypeScript can’t be sure user.role exists.
    // here comes the "In" guard with a solution like we are guarding them to access the type
    if ("role" in user) {
      console.log(user.name);
      console.log(user.role);
      console.log(`My Name is ${user.name}, My role is ${user.role}`);
    } else {
      console.log(`My Name is ${user.name}, My role is User`);
    }
  };
  const normalUser: TNormalUser = {
    name: "Normal Bhai",
  };
  const adminUser: TAdminUser = {
    name: "Admin Bhai",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);
}
