'use client';

import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';
import ProjectCard from '@/components/ui/ProjectCard';
import Footer from '@/components/layout/Footer';
import {
  Server,
  Brain,
  Droplet,
  Rocket,
  NotebookPen,
  Monitor,
  Gamepad2,
  User,
  Dumbbell,
  Coffee
} from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-zinc-800 selection:text-white">
      <Header />
      <Hero />

      {/* About Section */}
      <Section
        id="about"
        title="About Anwar Reghai"
        subtitle="Computer Science & Mathematics Double Major @ Gettysburg College."
        className="bg-zinc-950"
      >
        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-zinc-300 font-light leading-relaxed">
            <p>
              Originally from <strong className="text-zinc-100 font-semibold">Morocco</strong>, I am an engineer driven by the intersection of mathematical logic and scalable infrastructure.
              My work focuses on building product-ready ML systems that are secure, efficient, and autonomous. I don&apos;t just write code; I engineer systems that live in production.
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              <span className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Core Focus</span>
              <ul className="grid grid-cols-2 gap-2 text-zinc-200 font-medium">
                <li>• DevOps</li>
                <li>• Machine Learning Ops</li>
                <li>• Distributed Systems</li>
                <li>• Cloud Architecture</li>
                <li>• Backend Engineering</li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl font-mono font-bold text-zinc-100 z-10">
              <span className="text-zinc-700">&lt;</span>
              Build
              <span className="text-zinc-700">/&gt;</span>
            </div>
            <p className="text-sm text-zinc-500 font-mono max-w-xs z-10">
              &quot;Granular control over infrastructure. Precision in execution.&quot;
            </p>
          </div>
        </div>
      </Section>

      {/* Projects Section - Unified Grid */}
      <Section
        id="projects"
        title="Selected Projects"
        subtitle="Infrastructure, Intelligence, and Physics Engines."
        className="bg-zinc-900/30"
      >
        <ProjectCard
          title="Healthcare Consultation Assistant"
          subtitle="Full-stack AI assistant migrated to AWS Container-native infrastructure."
          detailedDescription="A production-grade AI SaaS originally built on Vercel Serverless, now migrated to AWS for granular control. I implemented multi-stage Docker builds to optimize image size and deployed to AWS App Runner. The system is monitored via CloudWatch logs and health checks, with security enforced by IAM least-privilege policies. It demonstrates a complete DevOps lifecycle from containerization to cloud deployment."
          specs={{
            'Migration': 'Vercel Serverless → AWS App Runner',
            'Architecture': 'Multi-stage Docker Builds + ECR',
            'Monitoring': 'CloudWatch Logs & Health Checks',
            'Security': 'IAM Least-Privilege Policies'
          }}
          tags={['FastAPI', 'Next.js', 'Docker', 'AWS', 'Clerk']}
          isProductionReady={true}
          links={[
            { label: 'Live Demo', url: 'https://drutw6qptx.us-east-2.awsapprunner.com/' },
            { label: 'GitHub', url: 'https://github.com/AnwarReg/saas-ai' }
          ]}
          icon={Server}
        />

        <ProjectCard
          title="VR Penalty Kick Simulator"
          subtitle="Real-time physics simulation bridging IoT and VR."
          detailedDescription="An IoT-enabled simulation that translates physical actions into a virtual environment. I integrated an Arduino ESP32 with an IMU (Inertial Measurement Unit) to track leg movement in real-time. Using Quaternion and Euler angle mathematics, physical orientation is translated into digital velocity within Unreal Engine 5."
          specs={{
            'Hardware': 'Arduino ESP32 + IMU',
            'Engine': 'Unreal Engine 5',
            'Math': 'Quaternions & Euler Angles',
            'Physics': 'Digital Velocity Translation'
          }}
          tags={['IoT', 'Unreal Engine 5', 'C++', 'Arduino']}
          links={[
            { label: 'View Documentation', url: 'https://docs.google.com/document/d/1jPOCvgttgWJDB73JrVKWOilZdlUQcwIJ5b2fmNir8Gk/edit?usp=sharing' },
            { label: 'GitHub', url: 'https://github.com/AnwarReg/VrPenaltykickSimulator' }
          ]}
          icon={Gamepad2}
        />

        <ProjectCard
          title="Hydration Bot"
          subtitle="Serverless notification engine for wellness automation."
          detailedDescription="A zero-maintenance serverless engine designed to automate hydration reminders. I engineered this using AWS Lambda triggered by EventBridge schedules (Cron) to execute reliably between 8 AM and 8 PM EST. This project highlights the power of serverless architecture for handling periodic, stateless tasks with high reliability and zero idle costs."
          specs={{
            'Architecture': 'AWS Lambda + EventBridge',
            'Logic': 'Cron Job (8 AM - 8 PM EST)',
            'Reliability': 'Zero-maintenance execution',
          }}
          tags={['AWS Lambda', 'EventBridge', 'Serverless']}
          isProductionReady={true}
          links={[
            { label: 'GitHub', url: 'https://github.com/AnwarReg/HydrationBot' }
          ]}
          icon={Droplet}
        />

        <ProjectCard
          title="AI Lab Assistant"
          subtitle="End-to-end RAG pipeline for secure technical manual retrieval."
          detailedDescription="An agentic workflow built for a lab environment where data privacy is paramount. I engineered a RAG (Retrieval-Augmented Generation) system using locally hosted LLMs, ensuring no sensitive technical data leaves the network. The system optimizes data ingestion and uses vector embeddings (Chroma/Pinecone) to deliver high-accuracy technical retrieval."
          specs={{
            'System': 'RAG + Local LLM Runner',
            'Optimization': 'Vector Embeddings & Ingestion',
            'Privacy': 'Local Network & Vector DB',
            'Focus': 'Data Sovereignty'
          }}
          tags={['Python', 'RAG', 'Vector DB', 'Local LLMs']}
          links={[
            { label: 'GitHub', url: 'https://github.com/TahaSabir0/ICL_Voice_Assistant' }
          ]}
          icon={Brain}
        />

        <ProjectCard
          title="SwiftApply"
          subtitle="Intelligent parsing system for high-volume job application automation."
          detailedDescription="An internal automation tool designed to streamline the job application process. SwiftApply uses intelligent parsing algorithms to match resume keywords with job descriptions, enabling high-volume, targeted submissions. It automates the tedious parts of the application workflow."
          specs={{
            'Key Feature': 'Resume Parsing & Matching',
            'Throughput': 'High-volume Submission',
            'Status': 'Internal Tool'
          }}
          tags={['Automation', 'Parsing', 'Python']}
          links={[
            { label: 'DevPost', url: 'https://devpost.com/software/swiftapply' }
          ]}
          icon={Rocket}
        />

        <ProjectCard
          title="Computer Graphics Portfolio"
          subtitle="Implementation of rendering pipelines and geometric algorithms."
          detailedDescription="A collection of low-level graphics implementations that explore the mathematics of rendering. Projects include custom shading models (Phong, Gouraud), coordinate transformation systems, and 3D scene rendering. Everything is built using C++ and WebGL, focusing on the linear algebra behind the pixels."
          specs={{
            'Rendering': 'Phong & Gouraud Shading',
            'Math': 'Coordinate Transformations',
            'Implementation': 'Linear Algebra in C++/WebGL',
          }}
          tags={['C++', 'WebGL', 'Linear Algebra']}
          links={[
            { label: 'View Graphics Portfolio', url: 'https://cs.gettysburg.edu/~reghan01/cs373/' }
          ]}
          icon={Monitor}
        />

        <ProjectCard
          title="SlideSage"
          subtitle="Full-stack AI document comprehension platform."
          detailedDescription="A full-stack AI application facilitating document comprehension. Built with React (TypeScript) and Spring Boot (Java), it features secure JWT authentication and integrates Google's Gemini API to parse PDFs, generate instant summaries, and create interactive quizzes for user assessment."
          specs={{
            'Frontend': 'React (TypeScript)',
            'Backend': 'Spring Boot (Java)',
            'AI Integration': 'Google Gemini API',
            'Security': 'JWT Authentication'
          }}
          tags={['React', 'Spring Boot', 'Gemini API', 'TypeScript', 'Java']}
          links={[
            { label: 'GitHub', url: 'https://github.com/AnwarReg/SlideSage' }
          ]}
          icon={Brain}
        />

        <ProjectCard
          title="York Note"
          subtitle="Award-winning note sharing platform for York students."
          detailedDescription="A collaborative note-sharing application designed for York students, enabling seamless knowledge exchange. This project secured 1st place at the York Hackathon. Built with React.js for a dynamic frontend and Supabase for a real-time, scalable backend."
          specs={{
            'Award': '1st Place @ York Hackathon',
            'Tech Stack': 'React.js + Supabase',
            'Purpose': 'Student Note Sharing'
          }}
          tags={['React.js', 'Supabase', 'Hackathon Winner']}
          links={[
            { label: 'DevPost', url: 'https://devpost.com/software/york-note' }
          ]}
          icon={NotebookPen}
        />
      </Section>

      <Section
        id="math"
        title="Mathematics & Coursework"
        subtitle="Theoretical foundations powering my engineering."
        className="bg-zinc-950"
      >
        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-zinc-300 font-light leading-relaxed">
            <p>
              My math background supports my work in machine learning and engineering systems.
              These foundations strengthen my analytical reasoning for algorithms, modeling, and data-driven problems.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Calculus II–III', 'Linear Algebra', 'Differential Equations', 'Partial Differential Equations', 'Probability & Statistics', 'Combinatorics', 'Abstract Algebra', 'Abstract Math'].map((course) => (
                <span key={course} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-400 font-mono">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-center items-center text-center space-y-4">
            <div className="text-4xl font-mono font-bold text-zinc-100">
              <span className="text-zinc-700">∑</span>
              Math
              <span className="text-700">∫</span>
            </div>
            <p className="text-sm text-zinc-500 font-mono">
              Bridging theory and application.
            </p>
          </div>
        </div>
      </Section>

      {/* Hobbies Section */}
      <Section
        id="hobbies"
        title="Hobbies & Passions"
        subtitle="What fuels the discipline."
        className="bg-zinc-900/30"
      >
        <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center space-y-4 hover:bg-zinc-800/50 transition-colors duration-300">
            <div className="p-3 bg-zinc-800 rounded-full text-zinc-300">
              <User size={24} />
            </div>
            <h3 className="font-bold text-zinc-100">Football</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Passionate fan and player. Ronaldo is the GOAT. Suuiiii!
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center space-y-4 hover:bg-zinc-800/50 transition-colors duration-300">
            <div className="p-3 bg-zinc-800 rounded-full text-zinc-300">
              <Dumbbell size={24} />
            </div>
            <h3 className="font-bold text-zinc-100">MMA & Boxing</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Training discipline that directly translates to engineering grit and persistence.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center space-y-4 hover:bg-zinc-800/50 transition-colors duration-300">
            <div className="p-3 bg-zinc-800 rounded-full text-zinc-300">
              <Coffee size={24} />
            </div>
            <h3 className="font-bold text-zinc-100">Espresso</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Nespresso Kazaar enthusiast. High tolerance for caffeine, essential for late-night builds.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
