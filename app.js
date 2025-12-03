const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static assets (CSS, images if needed)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Node App Deployment</title>

      <style>
          body {
              font-family: Arial, sans-serif;
              background: #f2f2f2;
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
          }

          .card {
              background: #ffffff;
              width: 450px;
              padding: 30px;
              border-radius: 15px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              text-align: center;
              animation: fadeIn 0.8s ease;
          }

          h1 {
              color: #0078ff;
              margin-bottom: 10px;
          }

          p {
              color: #333;
              font-size: 16px;
          }

          ul {
              text-align: left;
              padding-left: 20px;
              color: #444;
              font-size: 15px;
              line-height: 1.6;
          }

          .version {
              margin-top: 15px;
              padding: 8px 12px;
              background: #0078ff;
              color: white;
              border-radius: 8px;
              display: inline-block;
              font-weight: bold;
          }

          @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
          }
      </style>

  </head>
  <body>
      <div class="card">
          <h1>🚀 Deployment Successful</h1>
          <p>Your Node.js application is running!</p>

          <h3 style="margin-top:20px;">Deployment Pipeline Used:</h3>
          <ul>
              <li>Node.js</li>
              <li>NPM</li>
              <li>PM2 Process Manager</li>
              <li>Jenkins Declarative Pipeline</li>
              <li>GitHub Webhook (Auto-CI/CD)</li>
          </ul>

          <div class="version">Version: 2.0</div>
      </div>
  </body>
  </html>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`🚀 App running at http://localhost:${port}`);
});
