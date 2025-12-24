import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Mail, Phone, Linkedin, Briefcase, Code, Award, GraduationCap, Folder, User } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white whitespace-nowrap">Samir Saurabh</div>
            
            {/* Full Navigation - Always Visible */}
            <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl bg-gray-800">
                  <img 
                    src="https://i.ibb.co/SX0LQdfS/profile.jpg"
                    alt="Samir Saurabh"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Samir+Saurabh&size=512&background=0a0a0a&color=2563eb&bold=true';
                    }}
                  />
                </div>
                <div className="mt-4 text-center bg-[#1a1a1a] border border-blue-600/30 rounded-lg px-4 py-3">
                  <p className="text-blue-400 font-semibold text-sm">Ex- Software Engineer</p>
                  <p className="text-gray-400 text-sm">1.5+ Years Experience</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow text-center md:text-left">
              <div className="mb-6">
                <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30 px-4 py-1 text-sm">
                  Open to Product Management Opportunities
                </Badge>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Samir Saurabh
              </h1>
              <p className="text-xl sm:text-2xl text-blue-400 mb-6 font-medium">
                Transition from Tech to Product
              </p>
              <p className="text-2xl sm:text-3xl text-gray-400 mb-6">
                Aspiring Product Manager <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 px-3 py-1 text-base inline-flex items-center">Ex</Badge> Software Engineer
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl leading-relaxed">
                M.Tech in Product Management at IIIT Hyderabad | Transitioning from Software Engineering to Product Management with a focus on user-centric solutions and data-driven strategies
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg"
                >
                  Get In Touch
                </Button>
                <Button
                  onClick={() => scrollToSection('experience')}
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg rounded-lg"
                >
                  View Experience
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#0f0f10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <Card className="bg-[#1a1a1a] border-white/10">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey into product started unexpectedly. As a QA Engineer at B2B SaaS companies, I wasn't just finding bugs—I was reading PRDs, understanding user workflows, and discovering why certain features mattered.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At Hevo Data, I tested database connectors that helped companies move their data seamlessly. At Jivox, I validated ad-tech solutions that served personalized experiences to millions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Every test case I wrote made me ask: <em className="text-blue-400">"Why does the user need this?"</em> Every bug I filed made me think: <em className="text-blue-400">"How does this impact the business?"</em>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Now, as an M.Tech Product Management student at IIIT Hyderabad, I'm combining my technical depth with formal product training—user research, market analysis, and strategic thinking.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="space-y-6">
            {/* Hevodata */}
            <Card className="bg-[#1a1a1a] border-white/10 hover:border-blue-600/30 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl text-white">Software Engineer</CardTitle>
                    <CardDescription className="text-blue-400 text-lg mt-1">Hevodata</CardDescription>
                  </div>
                  <Badge className="bg-gray-800 text-gray-300 border-gray-700 w-fit">
                    Mar 2025 - June 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                    <span>Validated <strong>100+ API-based test connections</strong> between multiple database sources (Oracle, MySQL, SQL Server) and Hevo's Platform, ensuring seamless data pipeline integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                    <span>Planned and executed test cases for validating successful and failure tests of connections from DB sources by manipulating user behaviors and privileges for various DB sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                    <span>Improved test coverage and platform reliability by covering various edge cases while testing DB source connections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Jivox */}
            <Card className="bg-[#1a1a1a] border-white/10 hover:border-blue-600/30 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl text-white">Software Engineer</CardTitle>
                    <CardDescription className="text-blue-400 text-lg mt-1">Jivox</CardDescription>
                  </div>
                  <Badge className="bg-gray-800 text-gray-300 border-gray-700 w-fit">
                    March 2023 - March 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                    <span>Created and executed <strong>100+ test cases</strong> for the ThoughtSpot Integration project, ensuring <strong>98% test coverage</strong> and suggested major feature improvements that enhanced overall product usability by <strong>~15%</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                    <span>Given responsibility to start <strong>UI automation from scratch</strong> and created the codebase (automation) which was accepted and merged</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                    <span>Contributed to multiple hotfixes by rapidly creating test plans and validating fixes, reducing production issue resolution time by <strong>30%</strong> and ensuring <strong>0% regression</strong> in live systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0f0f10]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="bg-[#1a1a1a] border-white/10 hover:border-blue-600/30 transition-all duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-white">Ad Campaign Reporting Workflow Optimization</CardTitle>
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 w-fit mt-2">
                  Case Study - Jivox
                </Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400 mb-4">
                  Explored how ad campaign reporting works in personalization platforms. Validated reporting scenarios such as impressions, clicks, and conversions.
                </p>
                <p className="text-gray-300">
                  Suggested simple UI improvements that could reduce reporting effort for campaign managers and improve usability.
                </p>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-[#1a1a1a] border-white/10 hover:border-blue-600/30 transition-all duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-white">IMS Helpdesk Redesign</CardTitle>
                <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30 w-fit mt-2">
                  Design Thinking Project
                </Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400 mb-4">
                  Conducted primary research with 21 staff members using interviews and field observations to identify gaps.
                </p>
                <p className="text-gray-300">
                  Synthesized insights using personas, journey maps, JTBD, affinity mapping, and 5W1H. Defined an actionable problem statement around ticket misrouting.
                </p>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-[#1a1a1a] border-white/10 hover:border-blue-600/30 transition-all duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-white">Customer Churn Analysis & Retention Strategy</CardTitle>
                <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 w-fit mt-2">
                  Analytics & ML Project
                </Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400 mb-4">
                  Analyzed a subscription dataset (7,000+ customers) using SQL and Python.
                </p>
                <p className="text-gray-300">
                  Built a Logistic Regression Supervised Machine Learning model for churn prediction and identified top churn drivers to reach logical conclusions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Code className="text-blue-500" size={28} />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Java</Badge>
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Python</Badge>
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">SQL</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Tools & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">JIRA</Badge>
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">REST APIs</Badge>
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Postman</Badge>
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Git</Badge>
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Machine Learning</Badge>
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Data Analytics</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product & Design Skills */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Briefcase className="text-emerald-600" size={28} />
                  Product & Design Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">User Research</Badge>
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">User Journey Mapping</Badge>
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Empathy Interviews</Badge>
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Problem Framing</Badge>
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Requirement Gathering</Badge>
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Market Analysis</Badge>
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Competitor Analysis</Badge>
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Cross-functional Collaboration</Badge>
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Storytelling</Badge>
                  <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Communication</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-[#0f0f10]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-6">
            {/* M.Tech */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl text-white">M.Tech in Product Management</CardTitle>
                    <CardDescription className="text-blue-400 text-lg mt-1">IIIT Hyderabad</CardDescription>
                  </div>
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 w-fit">
                    July 2025 - May 2027
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            {/* B.E */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl text-white">B.E in Electronics and Communication Engineering</CardTitle>
                    <CardDescription className="text-blue-400 text-lg mt-1">BMSIT Bangalore</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge className="bg-gray-800 text-gray-300 border-gray-700 w-fit">
                      2018 - 2022
                    </Badge>
                    <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30 w-fit">
                      CGPA: 7.67/10
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Class 12 */}
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-2xl text-white">Class 12th</CardTitle>
                    <CardDescription className="text-blue-400 text-lg mt-1">CBSE</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-gray-800 text-gray-300 border-gray-700 w-fit">
                      2018
                    </Badge>
                    <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30 w-fit">
                      80.4%
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#1a1a1a] border-white/10 hover:border-blue-600/30 transition-all duration-300">
              <CardHeader>
                <Award className="text-blue-600 mb-2" size={32} />
                <CardTitle className="text-xl text-white">Product Impact at Jivox</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Proposed UI improvements after analyzing ad campaign reporting workflows. Suggestions reduced reporting effort for campaign managers and were <strong>implemented and launched in production</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-white/10 hover:border-emerald-600/30 transition-all duration-300">
              <CardHeader>
                <Code className="text-emerald-600 mb-2" size={32} />
                <CardTitle className="text-xl text-white">DSA Proficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Solved <strong>400+ Data Structures and Algorithms</strong> problems across platforms such as LeetCode, GeeksforGeeks (GFG), and AccioJob.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-white/10 hover:border-purple-600/30 transition-all duration-300">
              <CardHeader>
                <GraduationCap className="text-purple-600 mb-2" size={32} />
                <CardTitle className="text-xl text-white">GATE Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Cleared <strong>GATE (Data Science & AI)</strong> with <strong>93 Percentile</strong>, demonstrating strong ML fundamentals, analytical ability, and technical depth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0f0f10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm open to Product Management opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#1a1a1a] border-white/10 hover:border-blue-600/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:7979091367" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +91 7979091367
                </a>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-white/10 hover:border-blue-600/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:robonda1000@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors break-all">
                  robonda1000@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-white/10 hover:border-blue-600/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Linkedin className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/samir-saurabh-jha-4ab034190/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button
              onClick={() => window.open('mailto:robonda1000@gmail.com', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg"
            >
              Send Me an Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Samir Saurabh. All rights reserved.</p>
          <p className="text-sm mt-2">Aspiring Product Manager | Software Engineer</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
