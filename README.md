# FastCRUDAPI

FastCRUDAPI is a versatile and robust CRUD API built with Node.js and Express. It supports two storage backends for different use cases:

1. **JSON-based API**: Ideal for lightweight testing, utilizing local `.json` files for data storage.
2. **MongoDB-based API**: Production-ready implementation with Mongoose, offering full security, validation, and monitoring.

Both versions are fully functional and organized in a clean project structure.

---

##  Features

### Core Features
- Comprehensive RESTful endpoints for CRUD operations:
  - `GET`: Retrieve data
  - `POST`: Create data
  - `PUT`: Update data
  - `DELETE`: Remove data
- Two independent storage backends:
  - **JSON-based**: Lightweight file operations.
  - **MongoDB-based**: Scalable, production-ready database operations.

### Security & Validation
- **Helmet**: Adds secure HTTP headers.
- **CORS**: Cross-origin request handling with a whitelist configuration.
- **Rate Limiting**: Prevents request flooding (100 requests per 15 minutes).
- **Input Validation**: Ensures safe data using `express-validator`.

### Monitoring & Observability
- Integrated with Prometheus and Grafana for detailed monitoring of system metrics.
- `/metrics` endpoint for Node.js telemetry (CPU, memory, event loop).

---

## API Endpoints

### Base URL
`http://localhost:5123` (configurable via `.env` file)

### Endpoints
| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| GET    | `/items`         | Retrieve all items           |
| GET    | `/items/:id`     | Retrieve a single item by ID |
| POST   | `/items`         | Create a new item            |
| PUT    | `/items/:id`     | Update an existing item      |
| DELETE | `/items/:id`     | Delete an item               |

**Request Body Example** (for POST/PUT):
```json
{
  "name": "Example Item",
  "value": "Some value"
}
```

---

## Setup Instructions

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- MongoDB (for MongoDB version)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tslime/FastCRUDAPI.git
   cd FastCRUDAPI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy the included `bridge.env` file:
     ```bash
     cp bridge.env .env
     ```
   - Update the `.env` file with your desired configuration:
     ```
     PORT=5123
     MONGO_URI=mongodb://127.0.0.1:27017/fastcrud
     ```

### Running the API
- **JSON-based API**:
  ```bash
  node server_jsondb.js
  ```
- **MongoDB-based API**:
  ```bash
  node server_mgdb.js
  ```

---

## Monitoring

- **Prometheus**: Scrapes metrics from `/metrics` endpoint.
- **Grafana**: Dashboards for observing API performance.

Example Prometheus configuration:
```yaml
scrape_configs:
  - job_name: 'fastcrudapi'
    static_configs:
      - targets: ['https://localhost:5123']
```

