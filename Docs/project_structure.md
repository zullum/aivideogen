# Project Structure for Vidify AI

This document outlines the recommended folder and file structure for the Vidify AI project. Maintaining this structure is crucial for consistency, scalability, and ease of navigation.

## High-Level Overview

The project is organized into two main parts: a `frontend` directory for the Next.js application and a `backend` directory for the FastAPI application.

```
/aivideogen
|-- /backend
|   |-- /app
|   |   |-- /api
|   |   |   |-- __init__.py
|   |   |   |-- deps.py
|   |   |   |-- endpoints
|   |   |       |-- __init__.py
|   |   |       |-- auth.py
|   |   |       |-- users.py
|   |   |       |-- videos.py
|   |   |-- /core
|   |   |   |-- __init__.py
|   |   |   |-- config.py
|   |   |   |-- security.py
|   |   |-- /crud
|   |   |   |-- __init__.py
|   |   |   |-- crud_user.py
|   |   |   |-- crud_video.py
|   |   |-- /db
|   |   |   |-- __init__.py
|   |   |   |-- base.py
|   |   |   |-- session.py
|   |   |-- /models
|   |   |   |-- __init__.py
|   |   |   |-- user.py
|   |   |   |-- video.py
|   |   |-- /schemas
|   |   |   |-- __init__.py
|   |   |   |-- user.py
|   |   |   |-- video.py
|   |   |   |-- token.py
|   |   |-- __init__.py
|   |   |-- main.py
|   |-- requirements.txt
|   |-- .env
|
|-- /frontend
|   |-- /src
|   |   |-- /app
|   |   |   |-- /api
|   |   |   |-- /(auth)
|   |   |   |   |-- /login
|   |   |   |   |-- /register
|   |   |   |-- /dashboard
|   |   |   |-- layout.tsx
|   |   |   |-- page.tsx
|   |   |-- /components
|   |   |   |-- /atoms
|   |   |   |-- /molecules
|   |   |   |-- /organisms
|   |   |   |-- /templates
|   |   |-- /hooks
|   |   |-- /lib
|   |   |-- /styles
|   |   |-- /types
|   |   |-- /utils
|   |-- next.config.mjs
|   |-- package.json
|   |-- tsconfig.json
|   |-- tailwind.config.ts
|
|-- /Docs
|   |-- Implementation.md
|   |-- project_structure.md
|   |-- UI_UX_doc.md
|   |-- Bug_tracking.md
|
|-- .gitignore
|-- PRD.md
|-- README.md
```

## Backend (FastAPI)
- **`/app`**: Main application module.
  - **`/api`**: API endpoints and dependencies.
  - **`/core`**: Core logic like configuration and security.
  - **`/crud`**: Create, Read, Update, Delete operations.
  - **`/db`**: Database session management and base models.
  - **`/models`**: SQLAlchemy database models.
  - **`/schemas`**: Pydantic schemas for data validation.
  - **`main.py`**: FastAPI application entry point.
- **`requirements.txt`**: Python dependencies.

## Frontend (Next.js)
- **`/src/app`**: Next.js App Router directory.
  - **`/(auth)`**: Route group for authentication pages.
  - **`/dashboard`**: Protected routes for the main application.
- **`/src/components`**: Reusable React components following Atomic Design.
- **`/src/hooks`**: Custom React hooks.
- **`/src/lib`**: Library functions, API clients.
- **`/src/styles`**: Global styles.
- **`/src/types`**: TypeScript type definitions.
- **`/src/utils`**: Utility functions. 