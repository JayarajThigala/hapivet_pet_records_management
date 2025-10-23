# hapivet_pet_records_management
This system acts like a “health passport” for pets, making it easy for veterinary professionals to access complete medical records anytime, anywhere, ensuring better care and treatment decisions.

# Pet Medical History Management System

## Project Overview

This project is a **centralized system to manage pets' medical history**. It allows multiple veterinary hospitals to:

- Register pets with unique IDs  
- Store and view medical records  
- Upload medical reports and images  
- Access a pet's complete medical history across hospitals  

The system ensures continuity of care, reduces duplicated tests, and enables informed treatment decisions for pets.

---

## Features

1. **Add New Pet**  
   - Register pets with details like name, species, breed, age, and owner information  
   - Assign a unique Pet ID  

2. **Store Medical Records**  
   - Record diagnosis, treatments, prescriptions, and visit history  
   - Upload medical reports and images (X-rays, lab reports)  

3. **Search Pet by ID**  
   - Quickly fetch pet details and medical history using the Pet ID  

4. **Cross-Hospital Access**  
   - Multiple hospitals can access the same pet’s records for better care  

5. **Frontend Interface**  
   - User-friendly UI to search pets, add records, and view history  

6. **Backend & Database**  
   - Node.js + Express.js server  
   - MongoDB for storing pets and medical records  
   - REST API endpoints for CRUD operations  

---

## Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **HTTP Client:** Axios  
- **Environment Variables:** dotenv  

---

## Installation

1. **Clone the repository**

bash
git clone <repository_url>
cd hapivet
npm install

Create .env file in the backend root:
MONGO_URI=mongodb://127.0.0.1:27017/pet_hospital_db
PORT=5000

---

## API Endpoints
Pets

Add New Pet:
POST /api/pets/add
Body: { petId, name, species, breed, age, ownerName, contactNumber }

Get Pet by ID:
GET /api/pets/:petId

Medical Records

Add Medical Record:
POST /api/records/add
Body: { petId, description, reportImageUrl, date }

Get Medical History by Pet ID:
GET /api/records/pet/:petId

## Usage

Open the frontend in your browser: http://localhost:5000

Search for a pet by ID using the search input

Add new pets and their medical records

Upload medical reports or images

View complete medical history for any pet

**Future Enhancements**
Role-based authentication for hospital staff

Mobile-friendly interface

Cloud storage for large medical reports

Notifications for vaccinations and follow-ups
