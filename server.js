const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home page route
app.get('/', (req, res) => {
  res.render('index');
});

// Projects page route
app.get('/projects', (req, res) => {
  const projects = [
    { title: 'ML Projects', description: 'Details of ML projects...' },
    { title: 'DL Projects', description: 'Details of DL projects...' },
    { title: 'Deployment & Operations', description: 'Details about Deployment and Operations...' },
    { title: 'RAG Based Project', description: 'Details about RAG based project...' },
    { title: 'GENAI Tools', description: 'Showcase of GENAI tools and projects...' },
    { title: 'AI Agent Systems', description: 'Insights into AI Agent Systems projects...' }
  ];
  res.render('projects', { projects });
});

// Adding dynamic API endpoint for projects data
const projects = {
  ml_projects: "Details about my ML projects, algorithms and implementations.",
  dl_projects: "Deep Learning work and neural network implementations.",
  deployment: "Focus on system deployments, automated pipelines, and operational tools.",
  rag: "Relevance, Analytics, and Generation based project description.",
  genai: "Exploration of generative AI tools and related projects.",
  agents: "Showcasing multi-agent systems and intelligent agent architectures."
};

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 