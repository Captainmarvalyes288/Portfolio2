import React from 'react';
import './projectshowcase.css';

function ProjectShowcase() {
  return (
    <div className="project-showcase">
   
      <div className="project-card">
        <img src="emv.jpg" alt="Emergency Vehicle Management" />
        <div className="project-info">
          <h3>Emergency Vehicle Management</h3>
          <p>
            An application designed to optimize the routing and scheduling of emergency vehicles, ensuring quick response times and efficient resource allocation.
          </p>
        </div>
      </div>

      <div className="project-card">
        <img src="bookstore.jpg" alt="Bookstore" />
        <div className="project-info">
          <h3>Bookstore</h3>
          <p>
            A full-featured online bookstore where users can browse, search, and purchase books. Includes user authentication, shopping cart functionality, and admin dashboard.
          </p>
        </div>
      </div>

      <div className="project-card">
        <img src="blog.jpeg" alt="Blog Application" />
        <div className="project-info">
          <h3>Blog Application</h3>
          <p>
            A platform for publishing and sharing articles. Features include user profiles, article creation and editing, comments, and search functionality.
          </p>
        </div>
      </div>

      <div className="project-card">
        <img src="todo.jpeg" alt="Todo List Application" />
        <div className="project-info">
          <h3>Todo List Application</h3>
          <p>
            A simple yet effective task management app. Allows users to create, edit, and prioritize tasks with due dates and reminders.
          </p>
        </div>
      </div>

      <div className="project-card">
        <img src="simon.jpeg" alt="Simon Game" />
        <div className="project-info">
          <h3>Simon Game</h3>
          <p>
            A digital version of the classic Simon game. Test your memory and reflexes with this fun and challenging game.
          </p>
        </div>
      </div>

      <div className="project-card">
        <img src="wea.jpeg" alt="Weather App" />
        <div className="project-info">
          <h3>Weather App</h3>
          <p>
            A weather forecasting application that displays current weather conditions, forecasts, and weather alerts for specified locations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;
