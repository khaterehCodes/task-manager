# Task Manager

A modern task management web application built with **Next.js**, **React**, and **TypeScript**, designed to help users organize and manage their tasks through multiple views.

The project includes authentication flows, task management views, calendar-based planning, profile management, and a structured dashboard experience.

## ✨ Features

- 🔐 User authentication
  - Login
  - Sign up
  - Forgot password
  - Password confirmation flow
- 📋 Task management dashboard
- 🗂️ Multiple task views
  - Board view
  - List view
  - Calendar view
- 📅 Calendar-based task planning
- 👤 Profile and account management
- ⚙️ User settings
- 🧩 Reusable UI components
- 📱 Responsive interface
- 🌐 Client-side state management with Redux Toolkit
- ✅ Form handling and schema validation
- 📆 Support for both Gregorian and Jalali date utilities

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 | React framework and application routing |
| React 19 | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Styling and responsive UI |
| Redux Toolkit | Global state management |
| React Redux | Connecting Redux state to React |
| React Hook Form | Form management |
| Zod | Schema validation |
| `@hookform/resolvers` | Connecting validation schemas with React Hook Form |
| date-fns | Date manipulation and formatting |
| date-fns-jalali | Jalali calendar/date utilities |
| React DatePicker | Date selection UI |
| ESLint | Code quality and linting |

The project's dependency configuration uses Next.js `16.2.6`, React `19.2.4`, Tailwind CSS `4`, Redux Toolkit `2.12.0`, React Hook Form `7.76.0`, and Zod `4.4.3`. 

## 📂 Project Structure

```text
task/
├── app/
│   ├── board/
│   │   ├── boardView/
│   │   ├── calendar/
│   │   ├── listView/
│   │   └── page.tsx
│   ├── confirmPassword/
│   │   ├── (components)/
│   │   └── page.tsx
│   ├── forgot/
│   ├── login/
│   ├── profile/
│   │   ├── (components)/
│   │   ├── account/
│   │   ├── setting/
│   │   ├── user/
│   │   └── page.tsx
│   ├── signup/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── partial/
│   └── ui/
│
├── core/
│   ├── constants/
│   ├── hooks/
│   ├── provider/
│   ├── redux/
│   ├── services/
│   └── types/
│
├── public/
└── package.json
```

## 🧱 Architecture

The application is organized into separate layers to keep the codebase maintainable and scalable:

- **`app/`** — Application routes and page-level components.
- **`components/`** — Reusable UI and partial components.
- **`core/constants/`** — Shared constants and static configuration.
- **`core/hooks/`** — Custom React hooks.
- **`core/provider/`** — Application-level providers and contexts.
- **`core/redux/`** — Redux store and feature-based state management.
- **`core/services/`** — Service-layer logic.
- **`core/types/`** — Shared TypeScript types.
- **`public/`** — Static assets.

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your machine.

### Installation

Clone the repository:

```bash
git clone https://github.com/khaterehnaseri444-ui/task-manager.git
```

Move into the project directory:

```bash
cd task-manager
```

Install dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## 📜 Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 🎨 UI & UX

The application is designed around a dashboard-style workflow with dedicated sections for:

- Task boards
- List-based task management
- Calendar planning
- User profile
- Account settings
- Authentication

The interface is structured using reusable components and responsive styling with Tailwind CSS.

## 🧠 What I Practiced

This project helped me practice and strengthen my skills in:

- Building applications with the Next.js App Router
- Type-safe development with TypeScript
- Managing global state with Redux Toolkit
- Creating reusable React components
- Building and validating forms
- Working with dates and calendars
- Structuring a scalable frontend architecture
- Implementing authentication-related UI flows
- Creating responsive dashboard interfaces

## 🔮 Future Improvements

Potential improvements for future versions include:

- Connecting the application to a production backend/API
- Persistent task storage
- Drag-and-drop task management
- User notifications and reminders
- More advanced task filtering and sorting
- Improved accessibility
- Automated testing

## 👩🏻‍💻 Author

**Khatereh Naseri**

Computer Engineering student and frontend developer interested in building modern, responsive, and maintainable web applications.

### GitHub

https://github.com/khaterehnaseri444-ui

---

⭐ If you find this project useful or interesting, feel free to star the repository!
