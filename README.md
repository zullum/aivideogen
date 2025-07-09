# Vidify AI

This project is a web application for generating videos from text prompts, reference images, and style selections.

## Tech Stack

### Frontend

- **Framework:** Next.js with TypeScript
- **Styling:** Tailwind CSS & Aceternity UI

### Backend

- **Framework:** FastAPI (Python)
- **Database:** Supabase

## Getting Started

### Prerequisites

- Node.js
- Python

### Frontend

To run the frontend development server:

```bash
cd frontend
npm install
npm run dev
```

### Backend

To run the backend server:

```bash
cd backend
pip install -r requirements.txt
# Make sure your Supabase project is running
uvicorn main:app --reload
```