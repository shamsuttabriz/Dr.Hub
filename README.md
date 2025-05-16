## 🩺 DrHubBD – Doctor Appointment Booking System

**DrHubBD** is a modern and user-friendly web application designed to simplify communication between patients and doctors in Bangladesh. Through this platform, patients can easily view doctor profiles, search using filters, and directly book appointments.

🔗 Live Demo: [https://drhubbd.netlify.app](https://drhubbd.netlify.app)

---

## 📌 Features

- ✅ Display more doctors on the homepage
- ✅ "View All Doctors" shows full list
- ✅ Animated counters: Doctors, Reviews, Patients, Staff
- ✅ Individual doctor details page
- ✅ Book appointment from doctor details
- ✅ Show today's doctor availability
- ✅ Implemented localStorage to save appointments and data
- ✅ Book if doctor is available
- ✅ Data charts using Recharts
- ✅ Appointment booking system
- ✅ Cancel appointment option
- ✅ React Hot Toast notifications
- ✅ Panding.. search functionality


---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Routing:** React Router
- **Packages:** Rechart, React Hot Toast
- **Deployment:** Netlify

---

## 🚀 How to Run Locally

```bash
git clone git@github.com:shamsuttabriz/Dr.Hub.git
```
```bash
cd drhubbd
```
```bash
npm install
```
```bash
npm start
```


## 📁 Project Structure

```bash

drhubbd/
├── dist/                    # Production build files (auto generated)
├── node_modules/            # Node.js packages (auto generated)
├── public/                  # Static public assets
├── src/                     # Main application source code
│   ├── assets/              # Images, logos, static assets
│   ├── components/          # Reusable UI components
│   ├── layout/              # Layout-related components
│   ├── pages/               # Different pages (e.g., Home, About, Contact)
│   ├── routes/              # Route definitions
│   ├── utilities/           # Helper functions like localstorage.
│   ├── index.css            # Global CSS styles
│   └── main.jsx             # Root React file, entry point
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # Root HTML file
├── package-lock.json        # Auto-generated dependency lock file
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration file

```