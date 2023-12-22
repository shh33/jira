module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "admin" && req.body.password === "12345") {
      return res.status(200).json({
        user: {
          token: "abcdefg",
        },
      });
    } else {
      return res.status(400).json({
        message: "账号不存在！",
      });
    }
  }
  next();
};
