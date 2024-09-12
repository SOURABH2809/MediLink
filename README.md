# MediLink - Doctor Appointment Booking System
MediLink is a Comprehensive Doctor Appointment Booking Web Application built using the MERN (MongoDB, Express, React, Node.js) stack. This platform enables secure patient and doctor authentication, allowing patients to book appointments, view available time slots, and manage their visits. Doctors can manage their appointments and patients through an intuitive dashboard, while an admin panel provides overall analytics and control. The system also integrates a payment gateway for booking appointments, ensuring a seamless experience for all users.

## 🧐Features
1. **Patient Registration and Login:** Secure authentication for both patients and doctors using JWT (JSON Web Tokens).
3. **Doctor Dashboard:** Doctors can manage their availability, view patient details, and oversee appointments.
4. **Admin Panel:** The admin panel provides functionality for managing doctors and patients, as well as viewing platform analytics.
5. **Appointment Scheduling:** Enables patients to find doctors by filtering based on specialization, location, and availability.
6. **Filter & Search Functionality:** Allows patients to filter doctors based on specialization and location.
8. **Payment Gateway:** Secure integration of payment systems like Stripe and Razorpay for booking appointments.
9. **Responsive Design:** The application is optimized for both desktop and mobile devices, providing a smooth user experience.

<hr>

# Getting Started
## 🚀Installation
- Clone the repository and navigate to the project directory:
```bash
git clone https://github.com/SOURABH2809/MediLink
```
- Change the working directory:
```bash
cd MediLink
```

### Step 1: Setup Backend
- Navigate to the backend folder, right-click, and select "Open in Integrated Terminal."

**Install Backend Dependencies**
- Run the following command in the terminal:
```bash
npm install
```

**Configure Cloudinary for File Storage**
- Sign up at Cloudinary.
- Copy your Cloud Name, API Key, and API Secret from the Dashboard.
- Update the .env file located in the backend folder with the following:
```bash
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret_key
```

**Configure MongoDB**
- Sign up at MongoDB.
- Create a new project and database, selecting the M0 plan.
- Set up a database user and password (avoid using @ in the password).
- Whitelist IP 0.0.0.0/0 and connect to the database using MongoDB Compass.
- Copy the connection string and update the .env file:
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your_database_name
```

**Configure Stripe (Optional)**
- Create an account at Stripe.
- Copy your Secret Key from the Dashboard and add it to the .env file:
```bash
STRIPE_SECRET_KEY=your_stripe_secret_key
```

**Configure Razorpay (Optional)**
- Sign up at Razorpay.
- Obtain the Key ID and Secret Key from the Dashboard.
- Update the .env file:
```bash
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=
```

**Run the Backend**
- Start the backend by running:
```bash
npm run start
```
- Ensure the backend is running before moving on to the frontend or admin panel setup.

## Step 2: Run Frontend
- Open the frontend folder in VS Code
- Right-click on the frontend folder and select "Open in Integrated Terminal."

**Install Frontend Dependencies**
- Run the following command:
```bash
npm install
```

**Run the Frontend**
- After installing the dependencies, start the frontend with the following command:
```bash
npm run dev
```

**Access the Frontend**
- Open http://localhost:5173 in your browser to access the application.

## Step 3: Run Admin Panel
- Open the admin folder in VS Code
- Right-click on the admin folder and select "Open in Integrated Terminal."
- Install Admin Panel Dependencies

- Run the following command:
```bash 
npm install
```

**Run the Admin Panel**
- Start the admin panel by running:
```bash 
npm run dev
```
- Access the Admin Panel
- The admin panel will be accessible at http://localhost:5174. Open this link in your browser.

<hr>
<p align="center">
Developed with ❤️ by Sourabh Gautam
</p>
