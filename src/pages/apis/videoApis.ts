import { customAxios } from "@/utils/cusomAxios";

export const postVideoUpload = async (formData: FormData) => {
  const res = await customAxios.post("/api/video/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};