import { customAxios } from "@/utils/cusomAxios";

//완
export const postVideoUpload = async (formData: FormData) => {
  const res = await customAxios.post("/api/video/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

//완
export const vidioPage = async (page: number) =>
  await (
    await customAxios.get(`/api/video/page/${page}`)
  ).data;

export const deleteLecture = async (id: number) =>
  await customAxios.delete(`/api/video/delete/${id}`);

export const getVideoFile = async (fileName: string) =>
  await (
    await customAxios.get(`/api/files/${fileName}?type=video`)
  ).data;
