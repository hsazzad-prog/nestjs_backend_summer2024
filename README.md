# NestJS Backend API 🚀

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

A high-performance, scalable, and developer-friendly backend API built with NestJS, TypeScript, and Node.js. This codebase provides a solid foundation for building robust and efficient APIs for your web applications.

## Key Features

- **Modular Architecture**: NestJS promotes a modular and scalable architecture, making it easy to organize and maintain your codebase as your application grows.
- **TypeScript Support**: TypeScript brings static typing, better tooling, and improved developer productivity to your Node.js applications.
- **Data Validation**: Built-in support for data validation using the powerful `class-validator` library, ensuring data integrity and security.
- **Class Serialization**: Seamless class serialization and deserialization with `class-transformer`, simplifying data transformation tasks.
- **File Uploads**: Effortless file upload handling with the `multer` middleware, enabling support for multipart/form-data requests.
- **Testing Ready**: Unit and end-to-end (e2e) testing setup out of the box, ensuring code quality and maintainability.
- **ORM Agnostic**: Flexibility to choose and integrate with any Node.js ORM (Object-Relational Mapping) library, such as Sequelize, Mongoose, or TypeORM.
- **Dependency Injection**: Clean and decoupled code through dependency injection, promoting code reusability and testability.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (>= 6.x)

### Installation

1. Clone the repository:

bash
git clone https://github.com/your-username/nestjs-backend.git



#### Navigate to the project directory:
cd nestjs-backend



#### Install dependencies:
npm install



#### Running the App
Development
npm run start:dev



This will start the development server and watch for changes in your files, automatically restarting the server when needed.

#### Production
npm run build
npm run start:prod



This will build the production-ready version of your application and start the server.

Testing
This codebase comes with a testing setup ready to go. You can run the following commands to execute tests:
the following API endpoints:

# Admin API Endpoints

## Get Admin by ID
**Endpoint:** `GET /admin/get/{id}`  
**Description:** Retrieve an admin by their unique ID.  
![GET](https://img.shields.io/badge/GET-blue)

## Get Admin by Name and ID
**Endpoint:** `GET /admin/getbynameandid`  
**Description:** Retrieve an admin by their name and ID.  
![GET](https://img.shields.io/badge/GET-blue)

## Get Admin Object
**Endpoint:** `GET /admin/getadmin`  
**Description:** Retrieve the admin object.  
![GET](https://img.shields.io/badge/GET-blue)

## Add a New Admin
**Endpoint:** `POST /admin/addadmin`  
**Description:** Add a new admin to the system.  
![POST](https://img.shields.io/badge/POST-green)

## Update an Existing Admin
**Endpoint:** `PUT /admin/updateadmin/{id}`  
**Description:** Update an existing admin’s details.  
![PUT](https://img.shields.io/badge/PUT-yellow)

## Add an Image
**Endpoint:** `POST /admin/addimage`  
**Description:** Upload and add an image.  
![POST](https://img.shields.io/badge/POST-green)

## Get an Image
**Endpoint:** `GET /admin/getimage/{name}`  
**Description:** Retrieve an image by its name.  
![GET](https://img.shields.io/badge/GET-blue)



## Stay in touch

- Author - [Sazzad Hossain](https://cs.aiub.edu/profile/sazzad)
- Website - [https://nestjs.com](https://nestjs.com/)
- LinkedIn - [Profile](https://www.linkedin.com/in/hsazzad/)

## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
