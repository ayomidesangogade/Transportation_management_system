# ALTMS – Automated Logistics & Transportation Management System

ALTMS is a web-based platform designed to streamline and automate the process of requesting, approving, and managing transportation logistics within an institution (e.g., a university). The system provides role-based dashboards for staff/students, drivers, and administrators, enabling efficient vehicle booking, request tracking, and resource management.

## Features

- **Role-Based Dashboards:**  
  Separate interfaces for Admin, Staff/Student, and Driver roles, each with tailored functionality and navigation.

- **Transport Request Workflow:**  
  Staff and students can submit new transport requests, specifying pickup, destination, date, time, and vehicle preferences.

- **Request Tracking:**  
  Users can view the status of their requests (Pending, Approved, Rejected, In Transit, Completed) and see recent activity.

- **Admin Controls:**  
  Administrators can view, approve, or reject requests, manage vehicles, and monitor system usage.

- **Driver Dashboard:**  
  Drivers can view assigned trips and update trip statuses.

- **Live Map Preview:**  
  Integrated map (using Leaflet and OpenStreetMap) for visualizing pickup and destination locations.

- **Responsive Design:**  
  Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Router
- **Icons:** Lucide React
- **Maps:** React Leaflet, OpenStreetMap

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/altms.git
   cd altms
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```

4. **Open in your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/Pages/` – Main pages (Login, Dashboards, Request Page)
- `src/Components/` – Reusable UI components (Sidebar, Header, QuickLink, etc.)
- `src/App.jsx` – Application router and entry point

## Navigation

- **Login:** `/`
- **Admin Dashboard:** `/admin`
- **Staff/Student Dashboard:** `/staff`
- **Driver Dashboard:** `/driver`
- **Request Transport:** `/request`
- **Registration:** `/register`

## Customization

- **Roles & Navigation:**  
  Navigation is role-based. After login, users are redirected to their respective dashboards.

- **Sidebar:**  
  The sidebar provides quick links to dashboard sections and the request form.

- **Map Integration:**  
  The request page features a live map preview using React Leaflet.

## License

This project is for educational and demonstration purposes.

---

**Developed by:**  
GROUP 14 CSC 476 
University of Ibadan (Sample Branding)
