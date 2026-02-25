import axios from "axios";

const api = axios.create({
  baseURL: "https://docurpdf-app.onrender.com/api/v1/conversion",
});

export const convertPdfToWord = (formData, onUploadProgress) => {
  return api.post("/pdf-to-word", formData, {
    responseType: "blob",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};