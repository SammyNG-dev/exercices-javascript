class UserRepository {
  users = [];
  userId = 0;

  createUser(newUser) {
    this.userId += 1
    const user = { id: this.userId, name: newUser };
    this.users.push(user);
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
