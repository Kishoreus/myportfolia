import React from 'react';
import './App.css';

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    await fetch("https://q1bo9z7m58.execute-api.us-east-1.amazonaws.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Message sent!");
    e.target.reset();
  };

  return (
    <div className="container">
      <header>
        <h1>Kishore KICK</h1>
        <h2>DevOps | Cloud AWS and AZURE</h2>
      </header>

      <section className="about">
        <h3>About Me</h3>
        <p>
          I’m a passionate Cloud DevOps engineer with experience in automating deployments, managing infrastructure,
          and building scalable CI/CD pipelines using AWS, Docker, Kubernetes, Jenkins, Ansible, and more.
        </p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>DevOps: Jenkins, GitHub Actions, Ansible</li>
          <li>Cloud: AWS , AZURE</li>
          <li>Containers: Docker, Kubernetes, Helm</li>
          <li>Infra: Terraform, CloudFormation</li>
          <li>Monitoring: CloudWatch, Prometheus</li>
          <li>Scripting: Bash, Python, YAML</li>
        </ul>
      </section>

      <section className="projects">
        <h3>Projects</h3>
        <ul>
          <li><strong>CI/CD Pipeline for .NET App</strong>: Automated build/test/deploy on AWS EC2 using Jenkins + Ansible</li>
          <li><strong>Serverless Image Upload</strong>: S3 + Lambda + API Gateway + CloudFormation</li>
          <li><strong>AKS DevOps Project</strong>: Dockerized app with GitHub Actions + Azure Kubernetes Service</li>
        </ul>
      </section>

      <section className="contact">
        <h3>Contact Me</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>© 2025 Kishoreus1999@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;

