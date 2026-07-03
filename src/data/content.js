// Images
import groupPhoto from '../assets/50001_group_photo.jpg'
import dtiImg from '../assets/dti.jpg'
import stickemImg from '../assets/hwachong stickem.jpg'
import jsWorkshopImg from '../assets/js workshop.jpg'
import profileImg from '../assets/profile.jpg'
//import reactLogo from '../assets/react.svg'

// Videos
import hcRobotVideo from '../assets/hcrobot.mp4'
import rippleEffectVideo from '../assets/ripple_effect.mp4'

export const content = {
  profile: {
    image: profileImg,
    introTitle: "Hi there, I'm Muthu!",
    introText: `
I'm a Computer Science and Design (CSD) graduate from the Singapore University of Technology and Design (SUTD) with a strong interest in AI engineering, machine learning, and software engineering.
Through internships and academic projects, I've built practical experience developing computer vision systems, agentic AI applications, distributed systems, and full-stack software. I enjoy designing intelligent systems that combine machine learning with robust software engineering to solve real-world problems, and I'm always excited to learn new technologies and tackle challenging engineering problems.`,
    linkedin: "https://www.linkedin.com/in/muthu-ramaswamy-a900bb29b/",
  },

  internships: [
    {
      company: "KLASS Engineering and Solutions",
      role: "Machine Learning Research Engineer Intern",
      period: "May 2025 – Sep 2025",
      //image: reactLogo,
      description: `
I benchmarked multi-stage ANPR pipelines (YOLOv7 vs YOLOv10 + PARSeq), identifying the 2-stage approach as superior. 
I fine-tuned PARSeq for day/night datasets, improving daytime accuracy while preserving nighttime performance. 
I containerized training and evaluation workflows using Docker, automated dataset curation including XML filtering and element mapping using Python, 
and developed Streamlit tools for human-in-the-loop annotation and review. 
I also worked extensively with the Linux CLI for data pipelines and model training.`,
    },
    {
      company: "SATS Ltd",
      role: "Data Analyst Intern",
      term: "Fall Term",
      period: "Sep 2024 – Dec 2024",
      //image: reactLogo,
      description: `
During my Data Analyst internship at SATS Ltd, 
I trained a YOLOv8 object detection model to handle warehouse shipments and QR codes, 
and designed a PTZ camera control algorithm to improve computer-vision-based detection. 
I automated the conversion of COCO annotations to YOLO format and 
built scripts to extract frames from video feeds. 
I deployed the system on NUC devices, resolving runtime issues using RustDesk, and 
quickly adapted to new technologies such as Azure Machine Learning and Blob Storage 
to streamline data management and model experimentation.`,
    },
  ],

  projects: [
    {
      title: "DataPilot – Agentic AI-Powered Data Science Assistant",
      period: "Jul 2026",
      description: `
  Developed an agentic AI assistant that automates dataset exploration, profiling, cleaning, visualization, and manipulation through natural language using LangChain tool-calling workflows.
  Built a modular architecture supporting multiple LLM providers (Ollama, OpenAI, Google Gemini, and AWS Bedrock) through a unified interface for seamless switching between local and cloud models.
  Implemented human-in-the-loop execution with sandboxed Python code generation, requiring explicit user approval before executing analysis or dataset modification scripts.
  Engineered dataset tooling to automatically inspect directory structures, calculate train/validation/test distributions, detect annotation formats, identify dataset inconsistencies, and generate visualizations while preserving the original dataset through safe workspace isolation.`,
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/r-muthu/datapilot",
        },
      ],
      tech: [
        "Python",
        "LangChain",
        "LangGraph",
        "OpenAI",
        "Gemini",
        "AWS Bedrock",
      ],
    },
    {
      title: "Distributed Systems – Peer-to-Peer Mafia Game",
      period: "Jan 2026 – Apr 2026",
      description: `
    Built a decentralized, serverless multiplayer Mafia game in Go supporting five concurrent players with real-time state replication, automatic game-state synchronization, and fault-tolerant communication over TCP.
    Implemented Vector Clocks for causal ordering, Ricart–Agrawala for distributed mutual exclusion, heartbeat-based failure detection, and a simplified Paxos protocol for consensus under node failures.
    Validated reliability through fault-injection testing and accelerated iterative development using AI-assisted prototyping and debugging.`,
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/Lshprog/p2p_mafia",
        }
      ],
      tech: [
        "Go",
        "TCP",
        "Distributed Systems",
        "Paxos",
        "Vector Clocks",
      ],
    },
    {
      title: "SUTD Food Review App (Android)",
      period: "May 2024 – Aug 2024",
      description: `
I collaborated in a team of 7 to design and implement a food review application using Android Studio. 
My main focus was developing backend logic in Java, implementing sorting algorithms to handle user reviews efficiently, 
and creating a responsive frontend using XML layouts. 
I also contributed to testing and debugging the application to ensure a smooth user experience. 
You can view the code on GitHub.`,
      image: groupPhoto,
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/nightlocky/infosys-group12-fovoroapp",
        },
      ],
      tech: ["Java", "Android Studio"],
    },
    {
      title: "Design Thinking Project on Food Security (Supervised ML)",
      period: "Jan 2025 – Apr 2025",
      description: `
I was part of a 5-member team analyzing the relationship between undernourishment and contributing variables to address food security in alignment with SDG 2: Zero Hunger. 
My role involved developing supervised machine learning models using Python, Pandas, and Seaborn to predict and visualize key trends. 
I implemented preprocessing pipelines, trained models, and evaluated their performance to provide actionable insights. 
The full project code is available on GitHub.`,
      //image: null,
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/flashdroid15/food_safety_security_DTP3",
        },
      ],
      tech: ["Python", "Pandas", "Seaborn"],
    },
    {
      title: "50ARCHES – Interactive Light Installation",
      period: "Jan 2025 – Apr 2025",
      description: `
I collaborated in a 5-member team to create a prototype light installation aimed at enhancing the aesthetics of Changi Business Park. 
My primary responsibility was programming the ripple-effect light sequence using Arduino, experimenting with timing and color transitions to produce an engaging visual effect. 
We documented and tested different patterns, ensuring the installation responded correctly to inputs. 
A video demonstration of the ripple-effect is available to view.`,
      image: dtiImg,
      video: rippleEffectVideo,
      tech: ["Arduino", "Embedded Systems"],
    },
    {
      title: "Spoken Language Identification (Deep Learning)",
      period: "Jan 2025 – Apr 2025",
      description: `
I developed a spoken language identification system using the Mozilla Common Voice dataset across 9 languages. 
I explored CNN-BiLSTM-Attention architectures (ResNet34/50) to capture acoustic and temporal features and built a modular PyTorch Trainer with configurable loops, early stopping, and visualization of metrics. 
I also implemented an audio preprocessing pipeline for MP3-to-WAV conversion, resampling to 16kHz, speech activity detection, and log-mel spectrogram extraction to prepare high-quality input for the model.`,
      //image: reactLogo,
      tech: ["Python", "PyTorch"],
    },
    {
      title: "Hate Speech Classification",
      period: "Jun 2024 – Aug 2024",
      description: `
I worked on a hate speech classification project where I explored different machine learning models to find the most effective approach. 
I implemented logistic regression from scratch, applied PCA to reduce feature dimensionality, and performed hyperparameter tuning using GridSearch to optimize model performance. 
Throughout the project, I documented findings, iterated on preprocessing techniques, and ensured reproducibility of experiments.`,
      //image: reactLogo,
      tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    },
    {
      title: "Dell Resource Management App",
      period: "May 2024 – Aug 2024",
      description: `
I contributed to a full-stack web application for managing workshop resources in a team of 7, using Agile methodologies. 
I implemented RESTful APIs with Node.js and Express.js, managed data using MongoDB, and developed frontend components with React. 
I also wrote unit tests with Jest and system tests with Cypress to ensure robustness. 
The project strengthened my understanding of full-stack web development and collaborative coding practices.`,
      //image: reactLogo,
      tech: ["Node.js", "Express", "MongoDB", "React"],
    },
  ],

  activities: [
    {
  title: "Pillar Representative, ISTD",
  period: "Jan 2025 – Present",
  description: `
Lead a team of student board members to identify student needs and deliver high-impact initiatives that enhance the experience of Computer Science and Design students.
Collaborated with the ISTD Pillar to secure institutional funding and resources, launching a dedicated student co-working space and providing subsidized LeetCode Premium access for CSD students.
Represented student interests in dialogue sessions with faculty and SUTD senior management, contributing to discussions on curriculum updates, academic policies, and student welfare.
Awarded the Student Leader Excellence Award 2026 in recognition of leadership and contributions to the student community.`,
    },
    {
      title: "3DC Intro to JavaScript Workshop",
      period: "Jan 2024",
      description: `
I prepared and facilitated a JavaScript workshop as part of SUTD GDSC (3DC). 
I guided participants through core JavaScript concepts, interactive coding exercises, and project-based learning. 
I also curated teaching resources, including slides and sample code, which are available online for others to explore.`,
      image: jsWorkshopImg,
      links: [
        {
          label: "Event Page",
          url: "https://gdsc.community.dev/events/details/developer-student-clubs-singapore-university-of-technology-and-design-presents-intro-to-javascript/",
        },
        {
          label: "Workshop Resources",
          url: "https://github.com/r-muthu/Intro-to-JS-workshop/tree/main",
        },
      ],
    },
    {
      title: "3DC goes to Hwa Chong (Robot Mechanisms)",
      period: "Feb 2024",
      description: `
I facilitated a 5-day robotics workshop at Hwa Chong Institution, teaching students about robot mechanisms and design. 
I provided hands-on guidance, monitored progress, and demonstrated working prototypes, including a Stick' Em robot, to encourage engagement and experimentation.`,
      image: stickemImg,
      video: hcRobotVideo,
    }
  ],
}
