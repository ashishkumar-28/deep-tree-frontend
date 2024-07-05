# Deep Tree

Deep Tree is a powerful web application for managing hierarchical data structures. Whether you're organizing project tasks, building family trees, or creating complex knowledge graphs, Deep Tree provides an intuitive interface and robust backend to handle your data with ease.

## Key Features

- **Intuitive Tree Visualization:** Easily visualize and navigate your hierarchical data.
- **Real-time Updates:** Changes are saved automatically, ensuring your data is always up-to-date.
- **Undo/Redo Functionality:** Correct mistakes and experiment freely with your data structure.
- **Customizable Node Values:** Tailor nodes to fit your specific data requirements.
- **Robust Backend:** Built with NestJS and MongoDB for reliability and scalability.

## Tech Stack

- **Frontend:** Next.js, Zustand (for state management)
- **Backend:** NestJS
- **Database:** MongoDB

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed
- MongoDB running locally (or a remote MongoDB instance)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/deep-tree.git](https://github.com/your-username/deep-tree.git)
   cd deep-tree

### Install dependencies:
# Frontend dependencies
cd frontend
npm install 

# Backend dependencies
cd ../backend
npm install

### Set up environment variables:

Create a .env file in the backend directory.
Add the following (replace with your actual MongoDB connection details):
PORT=4000
MONGODB_URI=mongodb://localhost:27017/deep_tree_db

### Running the App
Start the frontend:
# From the 'frontend' directory
npm run dev

Start the backend:
# From the 'backend' directory
npm run start:dev

Open your browser to http://localhost:3000 to access Deep Tree.


### Usage
Login: Enter a username to start managing your trees.
Tree Management: Click nodes to edit values or add new nodes.
Undo/Redo: Use the buttons to navigate changes.
Saving: Data is saved automatically to MongoDB.


### Backend APIs
/users: Handles user creation and retrieval.
/trees: Manages tree data storage and retrieval.
Refer to the backend's API documentation (backend/docs) for detailed endpoints and request/response formats.

### Contributing
We welcome contributions! Please fork the repository and submit a pull request with your improvements.


### License
This project is licensed under the MIT License.

### Credits
Developed by Ashish Kumar
Built with ❤️ using Next.js, NestJS, Zustand, and MongoDB.


