# 🏡 Real Estate Production App

A full-stack, production-ready real estate management platform built with modern technologies like Next.js, Mapbox, Shadcn UI, Redux Toolkit, Prisma, PostgreSQL/PostGIS, and AWS services including Cognito, EC2, RDS, S3, and Amplify.

<!-- ## 📸 Demo -->
<!-- 
![Landing Page](https://user-images.githubusercontent.com/your-username/landing-page.png)
![Map View](https://user-images.githubusercontent.com/your-username/map-view.png)
![Property Details](https://user-images.githubusercontent.com/your-username/property-details.png) -->

---


## 🚀 Features

- **Interactive Map Integration**: Utilize Mapbox GL for dynamic property mapping.
- **User Authentication**: Secure login and registration using AWS Cognito.
- **Property Management**: CRUD operations for properties, leases, and applications.
- **Search and Filters**: Advanced filtering options for property listings.
- **Responsive UI**: Built with Shadcn UI components for a modern look and feel.
- **Form Handling**: Robust form validation with React Hook Form and Zod.
- **State Management**: Efficient state handling using Redux Toolkit and RTK Query.
- **Backend API**: RESTful API built with Node.js and Prisma ORM.
- **Database**: PostgreSQL with PostGIS extension for geospatial queries.
- **AWS Integration**: Deployment and services managed through AWS EC2, RDS, S3, and Amplify.

---

## 🏗️ Architecture Overview

The application follows a modular architecture separating concerns between the frontend and backend, with AWS services facilitating deployment and scalability.

### Frontend

- **Next.js**: Server-side rendering and static site generation for improved performance and SEO.
- **Mapbox GL**: Interactive maps for property locations.
- **Shadcn UI**: Pre-built UI components for rapid development.
- **Redux Toolkit**: State management and API interactions.
- **React Hook Form & Zod**: Form handling and validation. 

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Prisma ORM**: Database modeling and querying.
- **PostgreSQL/PostGIS**: Relational database with geospatial capabilities.
- **AWS Cognito**: User authentication and authorization. 

### Deployment

- **AWS EC2**: Hosting the backend server.
- **AWS RDS**: Managed PostgreSQL database.
- **AWS S3**: Storage for static assets and media.
- **AWS Amplify**: Frontend deployment and hosting.

---

## 🛠️ Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

### Backend

- [Node.js](https://nodejs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [PostGIS](https://postgis.net/)
- [AWS Cognito](https://aws.amazon.com/cognito/)

### Deployment & DevOps

- [AWS EC2](https://aws.amazon.com/ec2/)
- [AWS RDS](https://aws.amazon.com/rds/)
- [AWS S3](https://aws.amazon.com/s3/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Postman](https://www.postman.com/)
- [PgAdmin](https://www.pgadmin.org/)

---

## 💻 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [PostgreSQL](https://www.postgresql.org/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Arbiter09/Rentiful.git
   cd Rentiful
   ```

2. **Install Dependencies**

   ```bash
   # For frontend
   cd client
   npm install

   # For backend
   cd ../server
   npm install
   ```

3. **Configure Environment Variables**

   Create `.env` files in both `client` and `server` directories with the necessary environment variables as per the `.env.example` files.

4. **Set Up the Database**

   - Create a PostgreSQL database.
   - Run migrations using Prisma:

     ```bash
     npx prisma migrate dev --name init
     ```

5. **Start the Development Servers**

   ```bash
   # Start backend
   cd server
   npm run dev

   # Start frontend
   cd ../client
   npm run dev
   ```

---

## 📦 Usage

- **Access the Application**: Navigate to `http://localhost:3000` in your browser.
- **Register/Login**: Use AWS Cognito for authentication.
- **Manage Properties**: Add, edit, or delete property listings.
- **Search Listings**: Utilize filters and map view for property search.
- **Apply for Properties**: Submit applications for desired properties.

---

## ☁️ AWS Deployment

### AWS Services Used

- **EC2**: Hosts the backend server.
- **RDS**: Manages the PostgreSQL database.
- **S3**: Stores static assets and media files.
- **Amplify**: Deploys and hosts the frontend application.
- **Cognito**: Handles user authentication and authorization.

### Deployment Steps

1. **Set Up AWS CLI**

   Configure AWS CLI with your credentials:

   ```bash
   aws configure
   ```

2. **Provision Resources**

   - Launch an EC2 instance for the backend.
   - Set up an RDS instance with PostgreSQL.
   - Create an S3 bucket for static assets.
   - Configure Amplify for frontend deployment.
   - Set up Cognito user pools for authentication. 

3. **Deploy Backend**

   SSH into the EC2 instance and deploy the backend server.

4. **Deploy Frontend**

   Connect the frontend repository to AWS Amplify and deploy.

---

## 📁 Project Structure

```
real-estate-prod/
├── client/                 # Frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── utils/
├── server/                 # Backend application
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
├── .gitignore
├── README.md
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them: 

   ```bash
   git commit -m "Add your message here"
   ```

4. Push to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request.

---

## 📄 License

This project is licensed under the MIT License.

Thank you for Reading

---
