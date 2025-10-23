import { useState } from "react";
import { API } from "../../api";
import PetDetails from "./PetDetails";

export default function PetSearch() {
    const [petId, setPetId] = useState("");
    const [petData, setPetData] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        try {
            // const res = await API.get(`/pets/${petId}`);
            const res = await fetch(`http://localhost:5000/api/pets/${petId}`);

            if (!res.ok) {
                console.log("data not found");
                return;
            }
            const data = await res.json();

            setPetData(data);
            console.log("response", data);

            setError("");
        } catch (err) {

            setPetData(null);
        }
    };

    return (
        <div>
            <h2>Search Pet</h2>
            <input
                type="text"
                placeholder="Enter Pet ID"
                value={petId}
                onChange={(e) => setPetId(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {petData && <PetDetails pet={petData} />}
        </div>
    );
}
