import React, { useState } from 'react';

// Header Component
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <nav>
          <ul className="flex space-x-6">
            {['About', 'Skills', 'Projects', 'Contact'].map(section => (
              <li key={section}>
                <a 
                  href={`#${section.toLowerCase()}`} 
                  className="hover:text-yellow-300 transition-colors"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="container mx-auto py-16 px-4 flex items-center">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4 flex items-center">
          <span className="mr-3 text-blue-500">👤</span> About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Passionate software developer with 5+ years of experience in web technologies. 
          Specialized in creating responsive and intuitive web applications using modern 
          frameworks and best practices. Committed to continuous learning and solving 
          complex technical challenges.
        </p>
      </div>
      <div className="flex-1 text-center">
        <img 
          src="/api/placeholder/400/400" 
          alt="Profile" 
          className="rounded-full mx-auto w-64 h-64 object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const techSkills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 
    'Python', 'Docker', 'AWS', 'Git'
  ];
  const softSkills = [
    'Problem Solving', 'Team Collaboration', 
    'Agile Methodology', 'Communication'
  ];

  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center">
          <span className="mr-3 text-blue-500">💻</span> Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map(skill => (
                <span 
                  key={skill} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map(skill => (
                <span 
                  key={skill} 
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack application with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/johndoe/ecommerce"
    },
    {
      title: "Task Management App",
      description: "Collaborative task tracking application",
      technologies: ["React", "Firebase", "TypeScript"],
      github: "https://github.com/johndoe/taskapp"
    }
  ];

  return (
    <section id="projects" className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center">
        <span className="mr-3 text-blue-500">🚀</span> Projects
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div 
            key={project.title} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              📂 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual Formspree endpoint
    fetch("https://formspree.io/your_formspree_endpoint", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center">
          <span className="mr-3 text-blue-500">📧</span> Contact Me
        </h2>
        
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md h-32"
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="flex justify-center mt-8 space-x-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black"
          >
            📁
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700"
          >
            🔗
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="text-gray-700 hover:text-red-600"
          >
            ✉️
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2024 John Doe. All Rights Reserved.</p>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
