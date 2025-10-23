import { useEffect, useState } from "react";
import { API } from "../../api";
import UploadReport from "./UploadReport";

export default function PetDetails({ pet }) {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const res = await API.get(`/records/pet/${pet.petId}`);
                setRecords(res.data);
            } catch (err) {
                setRecords([]);
            }
        };
        fetchRecords();
    }, [pet]);

    return (
        <div>
            <h3>Pet Details</h3>
            <p><b>Name:</b> {pet.name}</p>
            <p><b>Species:</b> {pet.species}</p>
            <p><b>Breed:</b> {pet.breed}</p>
            <p><b>Age:</b> {pet.age}</p>
            <p><b>Owner:</b> {pet.ownerName}</p>
            <p><b>Contact:</b> {pet.contactNumber}</p>

            <h3>Medical Records</h3>
            {records.length === 0 && <p>No records found</p>}
            {records.map((r) => (
                <div key={r._id} style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}>
                    <p><b>Hospital:</b> {r.hospitalId}</p>
                    <p><b>Date:</b> {new Date(r.visitDate).toLocaleDateString()}</p>
                    <p><b>Symptoms:</b> {r.symptoms}</p>
                    <p><b>Diagnosis:</b> {r.diagnosis}</p>
                    <p><b>Treatment:</b> {r.treatment}</p>
                    <p><b>Doctor:</b> {r.doctor}</p>
                    {r.reportUrl && <a href={r.reportUrl} target="_blank">View Report</a>}
                </div>
            ))}

            <UploadReport petId={pet.petId} />
        </div>
    );
}
