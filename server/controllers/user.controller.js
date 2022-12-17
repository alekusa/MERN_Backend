export const getUsers = (req, res) => res.send(["get", "Usuario"]);
export const setUsers = (req, res) => res.send({ set: "add", name: "ale" });
export const deleteUsers = (req, res) =>
  res.send({ user: "delete", name: "ale" });
export const updateUsers = (req, res) =>
  res.send({ user: "update", name: "ale" });
