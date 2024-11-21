# Memories Keeper

**Memories Keeper** is a project designed to help users capture and preserve their cherished moments, experiences, and reflections in a digital format. Whether it's a memorable vacation, a heartwarming family gathering, or a personal milestone, Memories Keeper provides a platform to document and reminisce about the significant events in life.

## Technologies Used
- **React.js**: Frontend framework for building the user interface.
- **Node.js**: Backend server to handle API requests and authentication.
- **MongoDB**: Database to store user data and memories.
- **Prometheus**: Monitoring system to track application metrics.
- **Grafana**: Visualization tool to display the metrics gathered by Prometheus.

## Features
- **User Authentication**: Secure user login and registration system.
- **Add Memories**: Users can add, update, and delete their memories.
- **Memory Categories**: Organize memories into different categories.
- **Monitoring System**: Prometheus is integrated to monitor the application, with Grafana providing insights into system performance.

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance running (either locally or using MongoDB Atlas).
- Prometheus and Grafana setup for monitoring.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/memories-keeper.git
   cd memories-keeper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory and set the following variables:
     ```
     MONGO_URI=your-mongo-db-connection-string
     JWT_SECRET=your-jwt-secret
     ```

4. Run the development server:
   ```bash
   npm start
   ```

5. For production, build the app:
   ```bash
   npm run build
   ```

6. Configure Prometheus and Grafana for monitoring:
   - Ensure that Prometheus is scraping metrics from your Node.js application.
   - Set up Grafana dashboards to visualize the metrics.

## Contributing

Feel free to fork this project and submit issues or pull requests. Contributions are always welcome!

