import React from 'react';
import { FaAws, FaDocker, FaGithub, FaPython, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiGrafana, SiPrometheus, SiElasticsearch, SiPostgresql, SiMysql, SiMongodb, SiRedis } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & AWS',
      icon: FaAws,
      color: 'aws-orange',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'EC2', level: 95 },
        { name: 'Lambda', level: 90 },
        { name: 'ECS/EKS', level: 90 },
        { name: 'S3', level: 95 },
        { name: 'RDS', level: 90 },
        { name: 'CloudFormation', level: 90 },
        { name: 'Landing Zones', level: 85 },
      ],
    },
    {
      title: 'Infrastructure as Code',
      icon: SiTerraform,
      color: 'aws-blue',
      skills: [
        { name: 'Terraform', level: 95 },
        { name: 'CloudFormation', level: 90 },
        { name: 'AWS CDK', level: 80 },
        { name: 'Pulumi', level: 70 },
      ],
    },
    {
      title: 'DevOps & CI/CD',
      icon: FaGithub,
      color: 'aws-dark',
      skills: [
        { name: 'GitHub Actions', level: 95 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Helm', level: 80 },
      ],
    },
    {
      title: 'Monitoring & Observability',
      icon: SiGrafana,
      color: 'aws-orange',
      skills: [
        { name: 'Grafana', level: 85 },
        { name: 'Prometheus', level: 85 },
        { name: 'CloudWatch', level: 90 },
        { name: 'Datadog', level: 75 },
      ],
    },
    {
      title: 'Databases',
      icon: SiPostgresql,
      color: 'aws-blue',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 80 },
        { name: 'Elasticsearch', level: 80 },
      ],
    },
    {
      title: 'Programming',
      icon: FaPython,
      color: 'aws-dark',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Bash', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="text-gray-600 text-lg">
              Technical expertise across cloud, DevOps, and development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="card hover:border-aws-orange animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center`}>
                    <category.icon className={`text-2xl text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-aws-dark">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-aws-orange to-aws-blue rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tools */}
          <div className="mt-12 card animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-bold text-aws-dark mb-6 text-center">Tools & Platforms</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: FaAws, name: 'AWS', color: 'aws-orange' },
                { icon: SiTerraform, name: 'Terraform', color: 'purple-600' },
                { icon: SiKubernetes, name: 'Kubernetes', color: 'blue-600' },
                { icon: FaDocker, name: 'Docker', color: 'blue-500' },
                { icon: FaGithub, name: 'GitHub', color: 'gray-800' },
                { icon: SiGrafana, name: 'Grafana', color: 'orange-500' },
                { icon: SiPrometheus, name: 'Prometheus', color: 'red-500' },
                { icon: SiElasticsearch, name: 'Elasticsearch', color: 'teal-500' },
                { icon: SiPostgresql, name: 'PostgreSQL', color: 'blue-700' },
                { icon: SiMysql, name: 'MySQL', color: 'blue-600' },
                { icon: SiMongodb, name: 'MongoDB', color: 'green-600' },
                { icon: SiRedis, name: 'Redis', color: 'red-600' },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className={`flex flex-col items-center gap-2 p-4 bg-${tool.color}/5 rounded-lg hover:bg-${tool.color}/10 transition-all group cursor-pointer`}
                  title={tool.name}
                >
                  <tool.icon className={`text-3xl text-${tool.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-medium text-gray-600">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
