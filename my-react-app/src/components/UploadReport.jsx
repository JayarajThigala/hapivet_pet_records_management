import { useState } from "react";
import { API } from "../../api";

export default function UploadReport({ petId }) {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleUpload = async () => {
        if (!file) return;
        const formData = new FormData();
        formData.append("report", file);
        formData.append("petId", petId);

        try {
            await API.post("/records/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage("Report uploaded successfully!");
        } catch (err) {
            setMessage("Upload failed");
        }
    };

    return (
        <div>
            <h4>Upload Medical Report</h4>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
}
