class UserController {
  static getUsers(req, res) {
    return res.status(200).json({
      status: "success",
      message: "Data ditemukan!",
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "jhon@gmail.com",
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "jane@gmail.com",
        },
      ],
    });
  }
}

module.exports = UserController;
