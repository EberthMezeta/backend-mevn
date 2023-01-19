import { tokenVetificationErrors } from "../utils/tokenManager.js";

export const requiereRefreshToken = (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      console.log("no hay token");
      throw new Error("Token no exist");
    }

    const { id } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    req.userId = id;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ error: tokenVetificationErrors[error.message] });
  }
};
