Backend Setup
cd backend
npm install
npm run dev


Runs server on: http://localhost:5000

Make sure MongoDB is running locally (or use Atlas).

Frontend Setup
cd ../frontend
npm install
npm start


Runs React app on: http://localhost:3000

 API Endpoints (Backend)
Auth

POST /api/auth/register – register user

POST /api/auth/login – login user

Workflows

POST /api/workflows – create workflow

GET /api/workflows – list workflows

POST /api/workflows/:id/run – run workflow

Mailchimp (stubbed)

GET /api/mailchimp/audiences

POST /api/mailchimp/audiences/:id/subscribers

GET /api/mailchimp/subscribers?email=

Zoho (stubbed)

POST /api/zoho/leads

PUT /api/zoho/contacts/:id

GET /api/zoho/search?email=

 Frontend

Built with React + React Flow Renderer

Axios used for API calls

Drag & drop to build workflows

Save → stored in MongoDB via backend

Run → simulated execution with logs

 Roadmap

 Add frontend login & auth integration

 Improve UI with Tailwind/shadcn

 Add real Mailchimp & Zoho API calls

 Workflow engine with async execution (queues)

 More integrations (Slack, Gmail, etc.)

