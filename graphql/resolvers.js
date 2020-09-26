module.exports = {
  Query: {
    getUsers: () => {
      const users = [
        {
          username: "john",
          email: "psolas@email.com",
        },
        {
          username: "alic22e",
          email: "psolas2@psolas.com",
        },
      ];

      return users;
    },
  },
};
