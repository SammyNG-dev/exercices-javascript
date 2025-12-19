import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const FILE_PATH = join(_dirname, "users.json");

class UserRepository {
  createUser(newUser) {
    const users = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
    let userId = users.length > 0 ? Math.max(...users.map((u) => u.id)) : 0;
    userId += 1;
    const user = { id: userId, name: newUser };
    users.push(user);
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
    return user;
  }

  getAllUsers() {
    return this.users;
  }

  readUserById(id) {
    return this.users.find((user) => user.id === id);
  }
}

export default new UserRepository();
