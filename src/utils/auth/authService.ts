import { getCookie, setCookie } from "../cookie/cookie";
import { customAxios } from "../cusomAxios";

export const authorizeAccess = async (accessToken: String) => {
  console.log(accessToken);
  try {
    const response = await customAxios.post(
      "/google",
      {
        accessToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const { accessToken: newAccessToken, refreshToken } = response.data;

    if (newAccessToken && refreshToken) {
      setCookie("accessToken", newAccessToken, { path: "/admin" });
      setCookie("refreshToken", refreshToken, { path: "/admin" });
    }

    if (getCookie("accessToken") && getCookie("refreshToken")) {
      window.location.replace("/admin");
    }

    return true;
  } catch (error) {
    console.log("아노딤");
    return error;
  }
};
