# Node App

This is a Node.js application deployed on Google Cloud Platform (GCP) using Cloud Run.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- Docker
- Google Cloud SDK
- Jenkins

## Project Steps

### 1. Set Up GCP Environment
- Create two Artifact Registry repositories: `api-repo` and `admin-repo`.
- Create service accounts for Cloud Run with proper roles (Cloud Run Admin, Artifact Registry Writer, Service Account User).
- Enable required APIs (Cloud Run, Artifact Registry, IAM, Monitoring).

### 2. Prepare the Node.js API Service
- Ensure it listens on `PORT=8080`.
- Build the Dockerfile and push the image to Artifact Registry.

### 3. Create the Admin Service (Optional: A simple Express.js app)
- Internal-only service: handles configs or admin operations.
- No public access — only other Cloud Run services can call it.

### 4. Set Up Jenkins Pipeline
- Build and push Docker images for both services.
- Deploy the Node.js API and Admin services to Cloud Run.
- Use Cloud Run’s `--no-allow-unauthenticated` flag for the Admin service.

### 5. Configure Service-to-Service Communication
- Set up IAM roles for Cloud Run services to call each other.
- Node.js API calls the Admin service via its internal Cloud Run URL.

### 6. Implement Advanced Cloud Run Features
- **Private Services:** Restrict the Admin service’s access only to internal traffic.
- **Traffic Splitting:** Gradual rollouts for the API service (e.g., 90% stable, 10% new).
- **Scaling:** Fine-tune concurrency, min/max instances, and auto-scaling behavior.
- **Health Checks:** Define startup and liveness probes.
- **Workload Identity:** Let Cloud Run services access other GCP resources securely.

### 7. Monitoring & Logging
- Set up Cloud Monitoring dashboards and Cloud Logging for both services.
- Configure alerts for scaling issues, error rates, or performance drops.

## Installation

To install the necessary dependencies, run:

```sh
npm install
```
## Running the Application
To start the application, run:

sh
```
node app.js
```

## Folder Structure
```
node-app/
├── config/
│   └── db.js
├── controllers/
│   └── taskcontroller.js
├── models/
│   └── tasks.js
├── node_modules/
├── public/
│   ├── index.html
│   └── style.css
├── routes/
│   └── tasks.js
├── .dockerignore
├── .env
├── .gitignore
├── app.js
├── Dockerfile
├── package-lock.json
├── package.json
├── README.md
```
## Contribution
If you would like to contribute to this project, please fork the repository and create a pull request with your changes.


