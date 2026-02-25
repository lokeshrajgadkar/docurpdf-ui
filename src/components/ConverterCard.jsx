import React, { useState } from 'react'
import UploadBox from "./UploadBox";
import ProgressBar from "./ProgressBar";
import { convertPdfToWord } from "../services/docurpdfapi";
import axios from 'axios';

const ConverterCard = () => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleConvert = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            setLoading(true);
            setProgress(0);

            const response = await convertPdfToWord(
                formData,
                (event) => {
                    const percent = Math.round(
                        (event.loaded * 100) / event.total
                    );
                    setProgress(percent);
                }
            );

            // Download converted file
            const blob = new Blob([response.data]);
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = file.name.replace(".pdf", ".docx");
            link.click();

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card bg-base-200 shadow-xl p-6 md:p-8 space-y-6 w-full max-w-md mx-auto">

            <UploadBox setFile={setFile} />

            <button
                className="btn btn-primary w-full"
                onClick={handleConvert}
                disabled={loading}
            >
                {loading ? "Converting..." : "Convert PDF to Word"}
            </button>

            {loading && <ProgressBar progress={progress} />}

        </div>
    );
}

export default ConverterCard