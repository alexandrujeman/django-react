import React, { useState, useContext, useEffect } from "react";
import ProjectContext from "../../context/project/projectContext";

const ProjectForm = () => {
  const projectContext = useContext(ProjectContext);

  const { addProject, updateProject, clearCurrent, current } = projectContext;

  useEffect(() => {
    if (current != null) {
      setProject(current);
    } else {
      setProject({
        title: "",
        description: "",
        sample_url: "",
        project_url: "",
        project_img: "",
        pages_img: ""
      });
    }
  }, [projectContext, current]);

  const [project, setProject] = useState({
    title: "",
    description: "",
    sample_url: "",
    project_url: "",
    project_img: "",
    pages_img: ""
  });

  const {
    title,
    description,
    sample_url,
    project_url,
    project_img,
    pages_img
  } = project;

  const onChange = e =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addProject(project);
    } else {
      updateProject(project);
    }

    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? "Edit Project" : "Add Project"}</h2>
      <input
        type='text'
        placeholder='Project Name'
        name='title'
        value={title}
        onChange={onChange}
      />
      <textarea
        placeholder='Project Description'
        name='description'
        value={description}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Project link to source code'
        name='sample_url'
        value={sample_url}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Project URL'
        name='project_url'
        value={project_url}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Project Image URL'
        name='project_img'
        value={project_img}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Project Image URL secondary'
        name='pages_img'
        value={pages_img}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? "Save" : "Add Project"}
          className='btn btn-animated'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-animated' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ProjectForm;
