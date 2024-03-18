class UserController {
  static getUsers(req, res) {
    const arrayOfData = [
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
    ];

    return res.status(200).json({
      code: 200,
      status: "success",
      data: arrayOfData,
    });
  }
}

module.exports = UserController;
