import { customAxios } from "@/utils/cusomAxios";

interface UpdateVideoInfo {
  id: number;
  title: string;
  name: string;
  role: string;
}

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

//비디오 시청 페이지에 적용
export const getVideoFile = async (fileName: string) =>
  await (
    await customAxios.get(`/api/files/${fileName}?type=video`)
  ).data;

export const lectureList = async () =>
  await (
    await customAxios.get("api/video/list")
  ).data;

export const updateVideo = async (updateVideo: UpdateVideoInfo) => {
  await customAxios.put("/api/video/update", updateVideo);
};
