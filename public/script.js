window.addEventListener('DOMContentLoaded', function() {
  fetch('/api/projects')
    .then(response => response.json())
    .then(data => {
      document.querySelector('#ml-projects p').textContent = data.ml_projects;
      document.querySelector('#dl-projects p').textContent = data.dl_projects;
      document.querySelector('#deployment p').textContent = data.deployment;
      document.querySelector('#rag p').textContent = data.rag;
      document.querySelector('#genai p').textContent = data.genai;
      document.querySelector('#agents p').textContent = data.agents;
    })
    .catch(err => console.error('Error fetching project data:', err));
}); 