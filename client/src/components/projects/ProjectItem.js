import React from "react";

const ProjectItem = ({ project }) => {
  const {
    id,
    title,
    description,
    sample_url,
    project_url,
    project_img,
    pages_img
  } = project;

  return (
    <div className='project-card'>
      <div className='card'>
        <a href={"#popup" + id} className='popup-link'>
          <div className='card-side card-side-front'>
            <h3 className='project-name'>{title}</h3>
            <img src={project_img} alt='' />
          </div>
        </a>
        {/* <div className='card-side card-side-back'>
          <p>{project_description}</p>
          <a href={"#popup" + id}>View Description</a>
        </div> */}
      </div>
      <div className='popup' id={"popup" + id}>
        <a href='#project-page' className='popup-close-main'>
          {" "}
        </a>
        <div className='popup-content'>
          <div className='popup-left'>
            <img src={project_img} alt='' className='popup-img' />
            <img src={pages_img} alt='' className='popup-img' />
          </div>
          <div className='popup-right'>
          <a href='#project-page' className='popup-close'>
            <span
              className='iconify'
              data-icon='ion:close-sharp'
              data-inline='false'
            ></span>
          </a>
            <h2 className='project-name'>{title}</h2>
            <p className='popup-text'>{description}</p>
            <div className='btn-container'>
              <a
                href={sample_url}
                target='_blank'
                className='btn btn-animated'
                rel='noopener noreferrer'
              >
                Code Sample
              </a>
              <a
                href={project_url}
                target='_blank'
                className='btn btn-animated'
                rel='noopener noreferrer'
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
