const db = require('../../data/dbConfig')

async function getProjects() {
    let dataForProject = await db("projects");
  
    dataForProject.forEach((data) => {
      if (data.project_completed === 0) {
        data.project_completed = false;
      } else {
        data.project_completed = true;
      }
    });
  
    return dataForProject;
  }
  
  async function createProject(project) {
    let [id] = await db("projects").insert(project);
    const newProject = await db("projects").where("project_id", id);
  
    newProject[0].project_completed =
      newProject[0].project_completed === 0 ? false : true;
  
    return newProject[0];
  }
  
  module.exports = {
    getProjects,
    createProject,
  };