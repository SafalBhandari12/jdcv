import type { ParsedResume } from "./types/resume.js";

const resumeData: Record<string, ParsedResume> = {
  "01": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 78,
        level: "high",
        hints: [
          "Clear section structure with skills, experience, education, and projects",
          "Hands-on project descriptions with concrete technologies",
          "Limited quantification of impact",
        ],
      },
      suspicion: {
        score: 10,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.72,
        quantificationRate: 0.05,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Aniket Deula",
        rawText: "Aniket Deula",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value: "[deulaaniket4@gmail.com](mailto:deulaaniket4@gmail.com)",
          rawText: "[deulaaniket4@gmail.com](mailto:deulaaniket4@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "9865727221",
          rawText: "9865727221",
          confidence: 0.7,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Tilganga, Kathmandu",
        city: "Kathmandu",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "[https://www.linkedin.com/in/aniket-deula-13609a331/](https://www.linkedin.com/in/aniket-deula-13609a331/)",
        },
        {
          type: "github",
          url: "[https://github.com/aniket98](https://github.com/aniket98)",
        },
        {
          type: "portfolio",
          url: "[https://aniket9865.github.io/portfolio/](https://aniket9865.github.io/portfolio/)",
        },
      ],
      summary:
        "Full-Stack Web Developer with hands-on experience in Laravel (PHP), Vue.js, and MERN stack. Passionate about building responsive, user-friendly applications and contributing to real-world projects. Continuously expanding technical skills and seeking opportunities to grow in a collaborative, fast-paced team.",
    },
    skills: [
      {
        name: "Laravel",
        normalizedName: "laravel",
        category: "backend",
        computedLevel: "advanced",
        validityScore: 7.4,
        metadata: {
          firstSeen: "2024-11",
          lastUsed: "2025-02",
          totalMonthsExperience: 4,
          occurrenceCount: 6,
          sources: [
            {
              sectionId: "exp_yaj_tech",
              sectionType: "experience",
            },
            {
              sectionId: "proj_ecommerce",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Vue.js",
        normalizedName: "vue.js",
        category: "frontend",
        computedLevel: "advanced",
        validityScore: 7.2,
        metadata: {
          firstSeen: "2024-11",
          lastUsed: "2025-02",
          totalMonthsExperience: 4,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "exp_yaj_tech",
              sectionType: "experience",
            },
            {
              sectionId: "proj_blog",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "React",
        normalizedName: "react",
        category: "frontend",
        computedLevel: "intermediate",
        validityScore: 5.6,
        metadata: {
          firstSeen: "2024-11",
          lastUsed: "2025-02",
          totalMonthsExperience: 3,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "proj_chat",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Node.js",
        normalizedName: "node.js",
        category: "backend",
        computedLevel: "intermediate",
        validityScore: 5.4,
        metadata: {
          firstSeen: "2024-11",
          lastUsed: "2025-02",
          totalMonthsExperience: 3,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "proj_chat",
              sectionType: "project",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_yaj_tech",
        title: {
          value: "Full Stack Intern",
          rawText: "Full Stack Intern",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Full Stack Developer Intern",
        company: {
          value: "YAJ Tech Pvt. Ltd.",
          rawText: "YAJ Tech Pvt. Ltd.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "New Baneshwor, Kathmandu",
          city: "Kathmandu",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "internship",
        startDate: {
          rawText: "November 2024",
          isoDate: "2024-11",
          isCurrent: false,
        },
        endDate: {
          rawText: "February 2025",
          isoDate: "2025-02",
          isCurrent: false,
        },
        description:
          "Worked on Laravel and Vue.js based production applications.",
        responsibilities: [
          "Developed and deployed a blogging platform using Laravel and Vue.js",
          "Implemented authentication and secure API routes",
          "Integrated frontend UI with database-driven backend services",
        ],
        skillsDetected: ["laravel", "vue.js", "php", "mysql", "javascript"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_bca",
        institution: {
          value: "Golden Gate College",
          rawText: "Golden Gate College",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor (BCA)",
          rawText: "Bachelor(BCA)",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Applications",
        startDate: null,
        endDate: null,
        gpa: null,
      },
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        description:
          "Full e-commerce web application with product listing, cart, authentication, and order placement.",
        url: "[https://github.com/aniket9865/ecommerce](https://github.com/aniket9865/ecommerce)",
        skillsUsed: ["laravel", "php", "mysql"],
      },
      {
        name: "Blog Platform",
        description:
          "Blogging platform with dynamic content blocks, category management, and secure APIs.",
        url: "[https://github.com/aniket9865/blog](https://github.com/aniket9865/blog)",
        skillsUsed: ["laravel", "vue.js", "axios"],
      },
      {
        name: "Chat App",
        description:
          "Real-time chat application with authentication and socket communication.",
        url: "[https://github.com/aniket9865/fullstack-chat-app](https://github.com/aniket9865/fullstack-chat-app)",
        skillsUsed: ["react", "node.js", "mongodb", "express"],
      },
    ],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
      {
        language: "Newari",
        proficiency: "native",
      },
    ],
  },
  "02": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 88,
        level: "high",
        hints: [
          "Strong depth of backend experience across multiple organizations",
          "Clear progression from internship to senior responsibilities",
          "Good balance of product, API, and system-level work",
        ],
      },
      suspicion: {
        score: 15,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.78,
        quantificationRate: 0.08,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Anish Budhathoki",
        rawText: "Anish Budhathoki",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value:
            "[anish.budhathoki18@gmail.com](mailto:anish.budhathoki18@gmail.com)",
          rawText:
            "[anish.budhathoki18@gmail.com](mailto:anish.budhathoki18@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "9868156418",
          rawText: "9868156418",
          confidence: 0.7,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Kathmandu, Nepal",
        city: "Kathmandu",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "portfolio",
          url: null,
        },
        {
          type: "github",
          url: null,
        },
      ],
      summary:
        "Enthusiastic and driven backend developer with four years of experience building efficient systems using JavaScript and Laravel. Passionate about learning new technologies and continuously improving development practices.",
    },
    skills: [
      {
        name: "Laravel",
        normalizedName: "laravel",
        category: "backend",
        computedLevel: "expert",
        validityScore: 8.9,
        metadata: {
          firstSeen: "2021-04",
          lastUsed: "2025-10",
          totalMonthsExperience: 54,
          occurrenceCount: 12,
          sources: [
            {
              sectionId: "exp_megabyte",
              sectionType: "experience",
            },
            {
              sectionId: "exp_next_nepal",
              sectionType: "experience",
            },
            {
              sectionId: "exp_inctic",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Node.js",
        normalizedName: "node.js",
        category: "backend",
        computedLevel: "advanced",
        validityScore: 7.8,
        metadata: {
          firstSeen: "2022-03",
          lastUsed: "2025-10",
          totalMonthsExperience: 43,
          occurrenceCount: 8,
          sources: [
            {
              sectionId: "exp_freelance",
              sectionType: "experience",
            },
            {
              sectionId: "exp_inctic",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "JavaScript",
        normalizedName: "javascript",
        category: "language",
        computedLevel: "expert",
        validityScore: 8.7,
        metadata: {
          firstSeen: "2021-04",
          lastUsed: "2025-10",
          totalMonthsExperience: 54,
          occurrenceCount: 15,
          sources: [
            {
              sectionId: "exp_megabyte",
              sectionType: "experience",
            },
            {
              sectionId: "exp_freelance",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_freelance",
        title: {
          value: "Freelance Developer",
          rawText: "Freelancing",
          confidence: 0.8,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer",
        company: {
          value: "Freelance",
          rawText: "Freelancing",
          confidence: 0.8,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "contract",
        startDate: {
          rawText: "November 2024",
          isoDate: "2024-11",
          isCurrent: false,
        },
        endDate: {
          rawText: "October 2025",
          isoDate: "2025-10",
          isCurrent: false,
        },
        description:
          "Backend and full-stack development for Shopify and enterprise systems.",
        responsibilities: [
          "Built Shopify apps using Remix and Node.js with multiple merchant-facing features",
          "Developed multitenant HRMS using Laravel with isolated data architecture",
          "Implemented RESTful APIs, cron jobs, and AWS SES email automation",
        ],
        skillsDetected: ["laravel", "node.js", "javascript", "aws", "shopify"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_inctic",
        title: {
          value: "Software Engineer",
          rawText: "Software Engineer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer",
        company: {
          value: "Inctic Labs",
          rawText: "Inctic Labs",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "March 02, 2022",
          isoDate: "2022-03-02",
          isCurrent: false,
        },
        endDate: {
          rawText: "September 01, 2024",
          isoDate: "2024-09-01",
          isCurrent: false,
        },
        description:
          "Backend and system development for SaaS and enterprise clients.",
        responsibilities: [
          "Developed systems using Node.js, Laravel, Vue.js, and MySQL",
          "Provided mentorship and participated in code reviews",
          "Built and maintained in-house SaaS applications",
        ],
        skillsDetected: ["node.js", "laravel", "vue.js", "mysql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_next_nepal",
        title: {
          value: "Backend Engineer",
          rawText: "Backend Engineer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Backend Engineer",
        company: {
          value: "Next Nepal",
          rawText: "Next Nepal",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "August 01, 2021",
          isoDate: "2021-08-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "March 02, 2022",
          isoDate: "2022-03-02",
          isCurrent: false,
        },
        description: "Backend development for commerce and delivery platforms.",
        responsibilities: [
          "Developed billing, POS, and e-commerce systems using Laravel",
          "Built food delivery backend services with MySQL and JavaScript",
        ],
        skillsDetected: ["laravel", "mysql", "javascript"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_megabyte",
        title: {
          value: "Backend Intern",
          rawText: "Backend Intern",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Backend Engineer Intern",
        company: {
          value: "MegaByte Tech",
          rawText: "MegaByte Tech",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "internship",
        startDate: {
          rawText: "April 01, 2021",
          isoDate: "2021-04-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "August 01, 2021",
          isoDate: "2021-08-01",
          isCurrent: false,
        },
        description: "Backend internship focused on RESTful API development.",
        responsibilities: [
          "Built RESTful APIs using Laravel and JavaScript",
          "Collaborated with engineers to deliver reliable backend systems",
        ],
        skillsDetected: ["laravel", "javascript"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_softwarica",
        institution: {
          value: "Softwarica College of IT & E-commerce",
          rawText: "Softwarica College of IT & E- commerce",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "BSc Computing (Hons)",
          rawText: "Bsc.Computing(Hons), IT",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Information Technology",
        startDate: {
          rawText: "September 01, 2017",
          isoDate: "2017-09-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "December 20, 2020",
          isoDate: "2020-12-20",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "Marketwise Merchandiser",
        description:
          "Shopify app providing merchandising and sales-boosting features.",
        url: null,
        skillsUsed: ["node.js", "remix", "shopify"],
      },
      {
        name: "Human Resource Management System",
        description:
          "Multitenant HRMS with payroll, attendance, and performance modules.",
        url: null,
        skillsUsed: ["laravel", "mysql", "redis"],
      },
    ],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
    ],
  },
  "03": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 74,
        level: "high",
        hints: [
          "Clear separation of education, experience, skills, and summary",
          "Relevant backend-focused responsibilities",
          "Limited quantification of outcomes",
        ],
      },
      suspicion: {
        score: 20,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.7,
        quantificationRate: 0.03,
        clicheCount: 2,
      },
    },
    verification: {
      timeline: {
        hasGaps: true,
        gaps: [
          {
            startDate: "2023-12",
            endDate: "2025-04",
            durationDays: 487,
          },
        ],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Anjana Shakya",
        rawText: "ANJANA SHAKYA",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value:
            "[anjanashakya391@gmail.com](mailto:anjanashakya391@gmail.com)",
          rawText:
            "[anjanashakya391@gmail.com](mailto:anjanashakya391@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "9863941157",
          rawText: "9863941157",
          confidence: 0.7,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Dallu, Kathmandu",
        city: "Kathmandu",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "personal",
          url: "[https://anjanashakya.com.np](https://anjanashakya.com.np)",
        },
      ],
      summary:
        "Passionate and dedicated Backend Developer with hands-on experience in Laravel (PHP) and a growing interest in Python (Django) and Machine Learning. Skilled in developing RESTful APIs, managing databases, and integrating third-party services. Currently working on scalable backend systems and eager to learn new technologies.",
    },
    skills: [
      {
        name: "Laravel",
        normalizedName: "laravel",
        category: "backend",
        computedLevel: "advanced",
        validityScore: 7.1,
        metadata: {
          firstSeen: "2024-01",
          lastUsed: "2025-09",
          totalMonthsExperience: 18,
          occurrenceCount: 6,
          sources: [
            {
              sectionId: "exp_genesis",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "PHP",
        normalizedName: "php",
        category: "language",
        computedLevel: "advanced",
        validityScore: 6.8,
        metadata: {
          firstSeen: "2024-01",
          lastUsed: "2025-09",
          totalMonthsExperience: 18,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "exp_genesis",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "MySQL",
        normalizedName: "mysql",
        category: "database",
        computedLevel: "intermediate",
        validityScore: 5.9,
        metadata: {
          firstSeen: "2024-01",
          lastUsed: "2025-09",
          totalMonthsExperience: 18,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "exp_genesis",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "PostgreSQL",
        normalizedName: "postgresql",
        category: "database",
        computedLevel: "intermediate",
        validityScore: 5.6,
        metadata: {
          firstSeen: "2024-01",
          lastUsed: "2025-09",
          totalMonthsExperience: 18,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "exp_genesis",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_genesis",
        title: {
          value: "Junior Laravel Developer",
          rawText: "Junior Laravel Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Junior Laravel Developer",
        company: {
          value: "Genesis Web Technology",
          rawText: "Genesis Web Technology",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Kathmandu, Nepal",
          city: "Kathmandu",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "full-time",
        startDate: {
          rawText: "April 2025",
          isoDate: "2025-04",
          isCurrent: true,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Backend development for multiple client projects using Laravel.",
        responsibilities: [
          "Developed and maintained backend architecture using Laravel and relational databases",
          "Built RESTful APIs for frontend integration with React and Vue",
          "Implemented authentication, role-based access, and secure data handling",
        ],
        skillsDetected: ["laravel", "php", "mysql", "postgresql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_timilsina",
        title: {
          value: "Community Records Assistant",
          rawText: "Timalsina Samaj Nepal",
          confidence: 0.6,
          pageIndex: 0,
        },
        normalizedTitle: null,
        company: {
          value: "Timalsina Samaj Nepal",
          rawText: "Timalsina Samaj Nepal",
          confidence: 0.7,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: null,
        startDate: {
          rawText: "2024",
          isoDate: "2024",
          isCurrent: false,
        },
        endDate: {
          rawText: "2024",
          isoDate: "2024",
          isCurrent: false,
        },
        description: "Community documentation and record maintenance work.",
        responsibilities: [
          "Maintained and updated genealogy records using design tools",
          "Collected and verified data to ensure record accuracy",
        ],
        skillsDetected: [],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_vision",
        title: {
          value: "Office Assistant & Computer Instructor",
          rawText: "Office Assistant & Computer Instructor (Part-Time)",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Computer Instructor",
        company: {
          value: "Vision Classic International Education Consultancy Pvt. Ltd.",
          rawText:
            "Vision Classic International Education Consultancy Pvt. Ltd.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "contract",
        startDate: {
          rawText: "2022",
          isoDate: "2022",
          isCurrent: false,
        },
        endDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        description: "Administrative support and computer instruction role.",
        responsibilities: [
          "Taught computer courses including office tools and internet usage",
          "Managed documents and supported administrative operations",
        ],
        skillsDetected: [],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_redapple",
        title: {
          value: "Video Editor & Video Journalist",
          rawText: "Video Editor & Video Journalist",
          confidence: 0.9,
          pageIndex: 1,
        },
        normalizedTitle: null,
        company: {
          value: "Red Apple Media",
          rawText: "Red Apple Media",
          confidence: 0.9,
          pageIndex: 1,
        },
        companyDomain: null,
        location: null,
        type: null,
        startDate: {
          rawText: "July 2018",
          isoDate: "2018-07",
          isCurrent: false,
        },
        endDate: {
          rawText: "October 2018",
          isoDate: "2018-10",
          isCurrent: false,
        },
        description: "Media and video production role.",
        responsibilities: [
          "Edited interviews and feature stories for digital platforms",
          "Conducted interviews and assisted with content publishing",
        ],
        skillsDetected: [],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_bca",
        institution: {
          value: "Ratna Rajyalaxmi Campus",
          rawText: "RATNA RAJYALAXMI CAMPUS",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor of Computer Application",
          rawText: "Bachelor of Computer Application (BCA)",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Application",
        startDate: null,
        endDate: {
          rawText: "2020",
          isoDate: "2020",
          isCurrent: false,
        },
        gpa: null,
      },
      {
        id: "edu_plus2",
        institution: {
          value: "Eternal Light Public S.S",
          rawText: "ETERNAL LIGHT PUBLIC S.S",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "Higher Secondary (+2)",
          rawText: "Higher Secondary School (+2)",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: null,
        fieldOfStudy: null,
        startDate: null,
        endDate: null,
        gpa: null,
      },
    ],
    projects: [],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Hindi",
        proficiency: "conversational",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
    ],
  },
  "04": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 82,
        level: "high",
        hints: [
          "Strong hands-on Laravel experience across multiple organizations",
          "Clear exposure to real-world systems like payments, POS, and admin panels",
          "Experience spans development, management, and internships",
        ],
      },
      suspicion: {
        score: 25,
        level: "concern",
        flags: [
          {
            type: "overlapping_roles",
            severity: "medium",
            description:
              "Multiple roles overlap across 2023–2025 with unclear employment types",
          },
        ],
      },
      writingStyle: {
        actionVerbsRate: 0.74,
        quantificationRate: 0.04,
        clicheCount: 2,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Ayush Mahatara",
        rawText: "AYUSH MAHATARA",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value:
            "[ayush.mahatara10@gmail.com](mailto:ayush.mahatara10@gmail.com)",
          rawText:
            "[ayush.mahatara10@gmail.com](mailto:ayush.mahatara10@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779804056324",
          rawText: "+977 9804056324",
          confidence: 0.9,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Imadol, Lalitpur",
        city: "Lalitpur",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "github",
          url: "[https://github.com](https://github.com)",
        },
      ],
      summary:
        "Versatile and ambitious software developer with a strong foundation in Laravel-based web development. Experienced in backend systems, admin panels, payment integrations, and performance optimization, with a keen interest in building scalable and impactful applications.",
    },
    skills: [
      {
        name: "Laravel",
        normalizedName: "laravel",
        category: "backend",
        computedLevel: "expert",
        validityScore: 8.8,
        metadata: {
          firstSeen: "2021-11",
          lastUsed: "2025-07",
          totalMonthsExperience: 44,
          occurrenceCount: 12,
          sources: [
            {
              sectionId: "exp_phoenix",
              sectionType: "experience",
            },
            {
              sectionId: "exp_ing",
              sectionType: "experience",
            },
            {
              sectionId: "exp_intern_nepal",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "PHP",
        normalizedName: "php",
        category: "language",
        computedLevel: "advanced",
        validityScore: 7.6,
        metadata: {
          firstSeen: "2021-11",
          lastUsed: "2025-07",
          totalMonthsExperience: 44,
          occurrenceCount: 10,
          sources: [
            {
              sectionId: "exp_phoenix",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Vue.js",
        normalizedName: "vue.js",
        category: "frontend",
        computedLevel: "intermediate",
        validityScore: 6.2,
        metadata: {
          firstSeen: "2023-02",
          lastUsed: "2024-05",
          totalMonthsExperience: 15,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "exp_phoenix",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "MySQL",
        normalizedName: "mysql",
        category: "database",
        computedLevel: "intermediate",
        validityScore: 6.0,
        metadata: {
          firstSeen: "2021-11",
          lastUsed: "2025-07",
          totalMonthsExperience: 44,
          occurrenceCount: 6,
          sources: [
            {
              sectionId: "exp_ing",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_ing",
        title: {
          value: "Software Engineer",
          rawText: "Software Engineer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer",
        company: {
          value: "ING Tech",
          rawText: "ING Tech",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Aug 2024",
          isoDate: "2024-08",
          isCurrent: false,
        },
        endDate: {
          rawText: "July 2025",
          isoDate: "2025-07",
          isCurrent: false,
        },
        description:
          "Backend and admin panel development using Laravel and Filament.",
        responsibilities: [
          "Developed backend systems and admin panels using Laravel and Filament",
          "Implemented RESTful APIs, GraphQL endpoints, and multi-tenancy",
          "Configured roles, permissions, and activity logging",
        ],
        skillsDetected: ["laravel", "php", "mysql", "graphql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_phoenix",
        title: {
          value: "Web Developer",
          rawText: "Web Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Web Developer",
        company: {
          value: "Phoenix Solutions",
          rawText: "Phoenix Solutions",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Aug 2023",
          isoDate: "2023-08",
          isCurrent: false,
        },
        endDate: {
          rawText: "May 2024",
          isoDate: "2024-05",
          isCurrent: false,
        },
        description:
          "Web development focused on Laravel upgrades and UI improvements.",
        responsibilities: [
          "Upgraded Laravel framework from version 5 to 10",
          "Enhanced admin panel UI and functionality",
          "Integrated third-party APIs and optimized performance",
        ],
        skillsDetected: ["laravel", "php", "vue.js"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_intern_nepal",
        title: {
          value: "Full-Stack Developer",
          rawText: "Full-Stack Developer",
          confidence: 0.8,
          pageIndex: 0,
        },
        normalizedTitle: "Full Stack Developer",
        company: {
          value: "Intern Nepal Recruit Nepal",
          rawText: "Intern Nepal Recruit Nepal",
          confidence: 0.8,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Feb 2023",
          isoDate: "2023-02",
          isCurrent: true,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Full-stack development of company platform using Laravel.",
        responsibilities: [
          "Developed and maintained backend and frontend features",
          "Enhanced system functionality and resolved bugs",
          "Improved performance and platform stability",
        ],
        skillsDetected: ["laravel", "php", "mysql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_infinity",
        title: {
          value: "Manager",
          rawText: "Manager",
          confidence: 0.8,
          pageIndex: 0,
        },
        normalizedTitle: null,
        company: {
          value: "Infinity Tech",
          rawText: "Infinity Tech",
          confidence: 0.8,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Nov 2021",
          isoDate: "2021-11",
          isCurrent: false,
        },
        endDate: {
          rawText: "Jan 2023",
          isoDate: "2023-01",
          isCurrent: false,
        },
        description:
          "Managed projects and provided technical and networking support.",
        responsibilities: [
          "Led project teams and handled client requirements",
          "Provided networking and technical support services",
        ],
        skillsDetected: ["laravel"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_chimpvine",
        title: {
          value: "Game Developer Intern",
          rawText: "Internship",
          confidence: 0.7,
          pageIndex: 1,
        },
        normalizedTitle: null,
        company: {
          value: "ChimpVine",
          rawText: "ChimpVine",
          confidence: 0.8,
          pageIndex: 1,
        },
        companyDomain: null,
        location: null,
        type: "internship",
        startDate: {
          rawText: "Jul 2021",
          isoDate: "2021-07",
          isCurrent: false,
        },
        endDate: {
          rawText: "Mar 2022",
          isoDate: "2022-03",
          isCurrent: false,
        },
        description: "Game development and testing using Unity and C#.",
        responsibilities: [
          "Developed educational games using Unity and C#",
          "Performed game testing and debugging",
        ],
        skillsDetected: ["c#", "unity"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_bsc",
        institution: {
          value: "Itahari International School",
          rawText: "Itahari International School",
          confidence: 0.9,
          pageIndex: 1,
        },
        degree: {
          value: "BSc Hons Computing",
          rawText: "BSC. HONS Computing",
          confidence: 0.9,
          pageIndex: 1,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computing",
        startDate: {
          rawText: "Sep 2019",
          isoDate: "2019-09",
          isCurrent: false,
        },
        endDate: {
          rawText: "Dec 2022",
          isoDate: "2022-12",
          isCurrent: false,
        },
        gpa: null,
      },
      {
        id: "edu_slc",
        institution: {
          value: "Bishnu Memorial Higher Secondary School",
          rawText: "Bishnu Memorial Higher Secondary School",
          confidence: 0.9,
          pageIndex: 1,
        },
        degree: {
          value: "SLC (+2) Management",
          rawText: "SLC (+2) Management",
          confidence: 0.9,
          pageIndex: 1,
        },
        normalizedDegree: null,
        fieldOfStudy: "Management",
        startDate: {
          rawText: "Jul 2017",
          isoDate: "2017-07",
          isCurrent: false,
        },
        endDate: {
          rawText: "Sep 2019",
          isoDate: "2019-09",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "POS System",
        description: "Point of Sales system built using Laravel and Livewire.",
        url: null,
        skillsUsed: ["laravel", "livewire"],
      },
      {
        name: "Construction Website",
        description: "Website showcasing construction projects and services.",
        url: null,
        skillsUsed: ["laravel", "html", "css"],
      },
    ],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
    ],
  },
  "05": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 76,
        level: "high",
        hints: [
          "Clear technical focus on MERN and modern frontend architecture",
          "Well-described project with end-to-end ownership",
          "Limited professional experience depth",
        ],
      },
      suspicion: {
        score: 10,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.75,
        quantificationRate: 0.05,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Bibek Bhatta",
        rawText: "Bibek Bhatta",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value: "[bhattabbk1@gmail.com](mailto:bhattabbk1@gmail.com)",
          rawText: "[bhattabbk1@gmail.com](mailto:bhattabbk1@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "9860000258",
          rawText: "9860000258",
          confidence: 0.7,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Kathmandu, Nepal",
        city: "Kathmandu",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [],
      summary:
        "MERN stack developer specializing in React, Redux Toolkit, TypeScript, and Node.js. Experienced in building scalable, SEO-friendly web applications using modern design patterns such as Service Layer and DTO, with hands-on delivery of real-world features like authentication, checkout, and dashboards.",
    },
    skills: [
      {
        name: "React",
        normalizedName: "react",
        category: "frontend",
        computedLevel: "advanced",
        validityScore: 7.2,
        metadata: {
          firstSeen: "2023-02",
          lastUsed: "2023-06",
          totalMonthsExperience: 5,
          occurrenceCount: 6,
          sources: [
            {
              sectionId: "exp_syscube",
              sectionType: "experience",
            },
            {
              sectionId: "proj_kinau",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Node.js",
        normalizedName: "node.js",
        category: "backend",
        computedLevel: "intermediate",
        validityScore: 6.0,
        metadata: {
          firstSeen: "2023-02",
          lastUsed: "2023-06",
          totalMonthsExperience: 5,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "proj_kinau",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "MongoDB",
        normalizedName: "mongodb",
        category: "database",
        computedLevel: "intermediate",
        validityScore: 5.8,
        metadata: {
          firstSeen: "2023-02",
          lastUsed: "2023-06",
          totalMonthsExperience: 5,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "proj_kinau",
              sectionType: "project",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_syscube",
        title: {
          value: "MERN Stack Intern",
          rawText: "INTERN",
          confidence: 0.8,
          pageIndex: 0,
        },
        normalizedTitle: "MERN Stack Intern",
        company: {
          value: "SysCube Technology",
          rawText: "SysCube Technology",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Shankamul, Kathmandu",
          city: "Kathmandu",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "internship",
        startDate: {
          rawText: "Feb 20, 2023",
          isoDate: "2023-02-20",
          isCurrent: false,
        },
        endDate: {
          rawText: "June 30, 2023",
          isoDate: "2023-06-30",
          isCurrent: false,
        },
        description:
          "Frontend-focused internship building React-based internal tools.",
        responsibilities: [
          "Developed inventory management system using React and Material UI",
          "Integrated REST APIs using Axios",
          "Implemented responsive UI with HTML, CSS, and SASS",
        ],
        skillsDetected: ["react", "javascript", "css", "html"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_ismt",
        institution: {
          value: "ISMT College",
          rawText: "ISMT College",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "BTEC HND BSc IT",
          rawText: "BTEC HND BSC. IT",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Information Technology",
        startDate: null,
        endDate: null,
        gpa: null,
      },
    ],
    projects: [
      {
        name: "Kinau",
        description:
          "Full-featured MERN stack e-commerce application with authentication, checkout, reviews, and dashboards.",
        url: null,
        skillsUsed: ["react", "node.js", "mongodb", "typescript", "redux"],
      },
    ],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
    ],
  },
  "06": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 72,
        level: "high",
        hints: [
          "Clear focus on Python and Django with multiple academic and internship projects",
          "Well-structured education and certifications",
          "Limited industry experience duration",
        ],
      },
      suspicion: {
        score: 10,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.68,
        quantificationRate: 0.04,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: false,
      },
    },
    basics: {
      name: {
        value: "Birag Acharya",
        rawText: "Birag Acharya",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value:
            "[biragacharya2062@gmail.com](mailto:biragacharya2062@gmail.com)",
          rawText:
            "[Biragacharya2062@gmail.com](mailto:Biragacharya2062@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779863003539",
          rawText: "+977-9863003539",
          confidence: 0.9,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Inaruwa-6, Sunsari",
        city: "Inaruwa",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [],
      summary:
        "Aspiring Python Developer seeking opportunities to apply technical expertise in high-pressure environments. Hands-on experience with Django-based web applications, databases, and data-focused libraries, with a strong academic foundation and internship exposure.",
    },
    skills: [
      {
        name: "Python",
        normalizedName: "python",
        category: "language",
        computedLevel: "advanced",
        validityScore: 6.9,
        metadata: {
          firstSeen: "2023",
          lastUsed: "2025",
          totalMonthsExperience: 24,
          occurrenceCount: 8,
          sources: [
            {
              sectionId: "exp_lunar",
              sectionType: "experience",
            },
            {
              sectionId: "proj_kanoon",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Django",
        normalizedName: "django",
        category: "backend",
        computedLevel: "advanced",
        validityScore: 6.7,
        metadata: {
          firstSeen: "2023",
          lastUsed: "2025",
          totalMonthsExperience: 24,
          occurrenceCount: 7,
          sources: [
            {
              sectionId: "exp_lunar",
              sectionType: "experience",
            },
            {
              sectionId: "proj_kanoon",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "MySQL",
        normalizedName: "mysql",
        category: "database",
        computedLevel: "intermediate",
        validityScore: 5.8,
        metadata: {
          firstSeen: "2023",
          lastUsed: "2025",
          totalMonthsExperience: 18,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "exp_lunar",
              sectionType: "experience",
            },
            {
              sectionId: "proj_bloodbank",
              sectionType: "project",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_lunar",
        title: {
          value: "Django Developer Intern",
          rawText: "Django Developer Internship",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Django Developer Intern",
        company: {
          value: "Lunar IT Solution Pvt. Ltd.",
          rawText: "Lunar IT Solution Pvt. Ltd",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Itahari, Nepal",
          city: "Itahari",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "internship",
        startDate: {
          rawText: "2024/06",
          isoDate: "2024-06",
          isCurrent: false,
        },
        endDate: {
          rawText: "2024/09",
          isoDate: "2024-09",
          isCurrent: false,
        },
        description: "Web development internship using Python and Django.",
        responsibilities: [
          "Developed web applications using Django and MySQL",
          "Collaborated in a team environment on real-world projects",
          "Implemented frontend components using HTML, CSS, and JavaScript",
        ],
        skillsDetected: ["python", "django", "mysql", "javascript"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_bsc",
        institution: {
          value: "Itahari International College",
          rawText: "Itahari International College",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "BSc (Hons) Computing",
          rawText: "BSc (Hons) Computing",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computing",
        startDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        endDate: {
          rawText: "2025",
          isoDate: "2025",
          isCurrent: false,
        },
        gpa: null,
      },
      {
        id: "edu_slc",
        institution: {
          value: "Arniko Awasiya Higher Secondary School",
          rawText: "Arniko Awasiya Higher Secondary School",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "SLC",
          rawText: "SLC",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "high_school",
        fieldOfStudy: null,
        startDate: {
          rawText: "2020",
          isoDate: "2020",
          isCurrent: false,
        },
        endDate: {
          rawText: "2022",
          isoDate: "2022",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "Kanoon Sathi",
        description:
          "Law firm web application with lawyer verification, appointment booking, case management, secure messaging, and online payments.",
        url: null,
        skillsUsed: ["python", "django", "mysql"],
      },
      {
        name: "Blood Bank Management System",
        description:
          "CRUD-based system for managing blood donation and request records.",
        url: null,
        skillsUsed: ["python", "django", "mysql"],
      },
      {
        name: "Equipment Rental System",
        description:
          "Command-line application for managing equipment rentals with invoice generation.",
        url: null,
        skillsUsed: ["python"],
      },
    ],
    certifications: [
      {
        name: "Python Essential Training",
        issuer: "LinkedIn Learning",
        date: {
          rawText: "Completed",
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
      {
        name: "AWS Academy Machine Learning Foundations",
        issuer: "AWS Academy",
        date: {
          rawText: "Completed",
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
      {
        name: "AWS Academy Data Engineering",
        issuer: "AWS Academy",
        date: {
          rawText: "Completed",
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
      {
        name: "AWS Academy Cloud Foundations",
        issuer: "AWS Academy",
        date: {
          rawText: "Completed",
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
    ],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
    ],
  },
  "07": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 80,
        level: "high",
        hints: [
          "Consistent Laravel and Vue.js experience across multiple organizations",
          "Strong project exposure in government and enterprise systems",
          "Clear progression from internship to mid-level developer role",
        ],
      },
      suspicion: {
        score: 15,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.76,
        quantificationRate: 0.06,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: false,
      },
    },
    basics: {
      name: {
        value: "Bishal Chaudhary",
        rawText: "Bishal Chaudhary",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value:
            "[bishalcodeslaravel@gmail.com](mailto:bishalcodeslaravel@gmail.com)",
          rawText:
            "[bishalcodeslaravel@gmail.com](mailto:bishalcodeslaravel@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779814668499",
          rawText: "+977-9814668499",
          confidence: 0.9,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Nepalgunj, Banke",
        city: "Nepalgunj",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [],
      summary:
        "Mid-level web developer with over three years of experience in Laravel and Vue.js, specializing in building scalable, reusable components for enterprise-level web applications and public-sector systems.",
    },
    skills: [
      {
        name: "Laravel",
        normalizedName: "laravel",
        category: "backend",
        computedLevel: "expert",
        validityScore: 8.6,
        metadata: {
          firstSeen: "2021",
          lastUsed: "2025",
          totalMonthsExperience: 42,
          occurrenceCount: 12,
          sources: [
            {
              sectionId: "exp_mohrain",
              sectionType: "experience",
            },
            {
              sectionId: "exp_abs",
              sectionType: "experience",
            },
            {
              sectionId: "exp_gk",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Vue.js",
        normalizedName: "vue.js",
        category: "frontend",
        computedLevel: "advanced",
        validityScore: 7.4,
        metadata: {
          firstSeen: "2022",
          lastUsed: "2025",
          totalMonthsExperience: 30,
          occurrenceCount: 8,
          sources: [
            {
              sectionId: "exp_abs",
              sectionType: "experience",
            },
            {
              sectionId: "exp_gk",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "MySQL",
        normalizedName: "mysql",
        category: "database",
        computedLevel: "advanced",
        validityScore: 7.0,
        metadata: {
          firstSeen: "2021",
          lastUsed: "2025",
          totalMonthsExperience: 42,
          occurrenceCount: 7,
          sources: [
            {
              sectionId: "exp_mohrain",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_gk",
        title: {
          value: "Full Stack Developer",
          rawText: "full stack developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Full Stack Developer",
        company: {
          value: "GK IT Solution",
          rawText: "GK IT Solution",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2024",
          isoDate: "2024",
          isCurrent: true,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description: "Full-stack development using Laravel and Vue.js.",
        responsibilities: [
          "Developed web applications using Laravel and Vue.js",
          "Upgraded legacy systems and implemented new features",
          "Deployed applications to cPanel environments",
        ],
        skillsDetected: ["laravel", "vue.js", "mysql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_abs",
        title: {
          value: "Laravel Developer",
          rawText: "Laravel Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Laravel Developer",
        company: {
          value: "ABS Infosys Pvt. Ltd.",
          rawText: "ABS Infosys PVT. LTD.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        endDate: {
          rawText: "2024",
          isoDate: "2024",
          isCurrent: false,
        },
        description: "Backend-focused Laravel development.",
        responsibilities: [
          "Developed and maintained robust web applications",
          "Collaborated with UI/UX designers for user-friendly interfaces",
          "Conducted code reviews and enforced best practices",
        ],
        skillsDetected: ["laravel", "php", "mysql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_mohrain",
        title: {
          value: "Laravel Developer",
          rawText: "Laravel Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Laravel Developer",
        company: {
          value: "Mohrain Websoft Pvt. Ltd.",
          rawText: "Mohrain websoft pvt. ltd.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2022",
          isoDate: "2022",
          isCurrent: false,
        },
        endDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        description:
          "Laravel development with team leadership responsibilities.",
        responsibilities: [
          "Led a team of developers to implement new features",
          "Implemented caching strategies and database optimizations",
          "Developed responsive and user-friendly web applications",
        ],
        skillsDetected: ["laravel", "mysql", "php"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_intern",
        title: {
          value: "Laravel Intern",
          rawText: "Internship",
          confidence: 0.8,
          pageIndex: 0,
        },
        normalizedTitle: "Laravel Developer Intern",
        company: {
          value: "Mohrain Websoft Pvt. Ltd.",
          rawText: "Mohrain websoft pvt. ltd.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "internship",
        startDate: {
          rawText: "2021",
          isoDate: "2021",
          isCurrent: false,
        },
        endDate: {
          rawText: "2021",
          isoDate: "2021",
          isCurrent: false,
        },
        description: "Laravel internship focusing on performance optimization.",
        responsibilities: [
          "Collaborated with development team on production projects",
          "Implemented caching strategies and database optimizations",
        ],
        skillsDetected: ["laravel", "mysql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_bca",
        institution: {
          value: "Dhangadhi Engineering College",
          rawText: "Dhangadhi Engineering College (NAST)",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor of Computer Application",
          rawText: "Bachelor of Computer Application (BCA)",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Application",
        startDate: {
          rawText: "2017",
          isoDate: "2017",
          isCurrent: false,
        },
        endDate: {
          rawText: "2024",
          isoDate: "2024",
          isCurrent: false,
        },
        gpa: {
          score: 2.77,
          scale: 4.0,
        },
      },
    ],
    projects: [
      {
        name: "Vital Event Registration System",
        description: "Government system for managing vital events and records.",
        url: null,
        skillsUsed: ["laravel", "mysql"],
      },
      {
        name: "Hotel Room Booking System",
        description: "Online hotel booking platform for resorts and hotels.",
        url: null,
        skillsUsed: ["laravel", "mysql"],
      },
      {
        name: "Project Management System",
        description: "Enterprise project management solution.",
        url: null,
        skillsUsed: ["laravel", "vue.js"],
      },
    ],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
    ],
  },
  "08": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 80,
        level: "high",
        hints: [
          "Consistent Laravel and Vue.js experience across multiple organizations",
          "Strong project exposure in government and enterprise systems",
          "Clear progression from internship to mid-level developer role",
        ],
      },
      suspicion: {
        score: 15,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.76,
        quantificationRate: 0.06,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: false,
      },
    },
    basics: {
      name: {
        value: "Bishal Chaudhary",
        rawText: "Bishal Chaudhary",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value:
            "[bishalcodeslaravel@gmail.com](mailto:bishalcodeslaravel@gmail.com)",
          rawText:
            "[bishalcodeslaravel@gmail.com](mailto:bishalcodeslaravel@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779814668499",
          rawText: "+977-9814668499",
          confidence: 0.9,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Nepalgunj, Banke",
        city: "Nepalgunj",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [],
      summary:
        "Mid-level web developer with over three years of experience in Laravel and Vue.js, specializing in building scalable, reusable components for enterprise-level web applications and public-sector systems.",
    },
    skills: [
      {
        name: "Laravel",
        normalizedName: "laravel",
        category: "backend",
        computedLevel: "expert",
        validityScore: 8.6,
        metadata: {
          firstSeen: "2021",
          lastUsed: "2025",
          totalMonthsExperience: 42,
          occurrenceCount: 12,
          sources: [
            {
              sectionId: "exp_mohrain",
              sectionType: "experience",
            },
            {
              sectionId: "exp_abs",
              sectionType: "experience",
            },
            {
              sectionId: "exp_gk",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Vue.js",
        normalizedName: "vue.js",
        category: "frontend",
        computedLevel: "advanced",
        validityScore: 7.4,
        metadata: {
          firstSeen: "2022",
          lastUsed: "2025",
          totalMonthsExperience: 30,
          occurrenceCount: 8,
          sources: [
            {
              sectionId: "exp_abs",
              sectionType: "experience",
            },
            {
              sectionId: "exp_gk",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "MySQL",
        normalizedName: "mysql",
        category: "database",
        computedLevel: "advanced",
        validityScore: 7.0,
        metadata: {
          firstSeen: "2021",
          lastUsed: "2025",
          totalMonthsExperience: 42,
          occurrenceCount: 7,
          sources: [
            {
              sectionId: "exp_mohrain",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_gk",
        title: {
          value: "Full Stack Developer",
          rawText: "full stack developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Full Stack Developer",
        company: {
          value: "GK IT Solution",
          rawText: "GK IT Solution",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2024",
          isoDate: "2024",
          isCurrent: true,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description: "Full-stack development using Laravel and Vue.js.",
        responsibilities: [
          "Developed web applications using Laravel and Vue.js",
          "Upgraded legacy systems and implemented new features",
          "Deployed applications to cPanel environments",
        ],
        skillsDetected: ["laravel", "vue.js", "mysql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_abs",
        title: {
          value: "Laravel Developer",
          rawText: "Laravel Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Laravel Developer",
        company: {
          value: "ABS Infosys Pvt. Ltd.",
          rawText: "ABS Infosys PVT. LTD.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        endDate: {
          rawText: "2024",
          isoDate: "2024",
          isCurrent: false,
        },
        description: "Backend-focused Laravel development.",
        responsibilities: [
          "Developed and maintained robust web applications",
          "Collaborated with UI/UX designers for user-friendly interfaces",
          "Conducted code reviews and enforced best practices",
        ],
        skillsDetected: ["laravel", "php", "mysql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_mohrain",
        title: {
          value: "Laravel Developer",
          rawText: "Laravel Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Laravel Developer",
        company: {
          value: "Mohrain Websoft Pvt. Ltd.",
          rawText: "Mohrain websoft pvt. ltd.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2022",
          isoDate: "2022",
          isCurrent: false,
        },
        endDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        description:
          "Laravel development with team leadership responsibilities.",
        responsibilities: [
          "Led a team of developers to implement new features",
          "Implemented caching strategies and database optimizations",
          "Developed responsive and user-friendly web applications",
        ],
        skillsDetected: ["laravel", "mysql", "php"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_intern",
        title: {
          value: "Laravel Intern",
          rawText: "Internship",
          confidence: 0.8,
          pageIndex: 0,
        },
        normalizedTitle: "Laravel Developer Intern",
        company: {
          value: "Mohrain Websoft Pvt. Ltd.",
          rawText: "Mohrain websoft pvt. ltd.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "internship",
        startDate: {
          rawText: "2021",
          isoDate: "2021",
          isCurrent: false,
        },
        endDate: {
          rawText: "2021",
          isoDate: "2021",
          isCurrent: false,
        },
        description: "Laravel internship focusing on performance optimization.",
        responsibilities: [
          "Collaborated with development team on production projects",
          "Implemented caching strategies and database optimizations",
        ],
        skillsDetected: ["laravel", "mysql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_bca",
        institution: {
          value: "Dhangadhi Engineering College",
          rawText: "Dhangadhi Engineering College (NAST)",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor of Computer Application",
          rawText: "Bachelor of Computer Application (BCA)",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Application",
        startDate: {
          rawText: "2017",
          isoDate: "2017",
          isCurrent: false,
        },
        endDate: {
          rawText: "2024",
          isoDate: "2024",
          isCurrent: false,
        },
        gpa: {
          score: 2.77,
          scale: 4.0,
        },
      },
    ],
    projects: [
      {
        name: "Vital Event Registration System",
        description: "Government system for managing vital events and records.",
        url: null,
        skillsUsed: ["laravel", "mysql"],
      },
      {
        name: "Hotel Room Booking System",
        description: "Online hotel booking platform for resorts and hotels.",
        url: null,
        skillsUsed: ["laravel", "mysql"],
      },
      {
        name: "Project Management System",
        description: "Enterprise project management solution.",
        url: null,
        skillsUsed: ["laravel", "vue.js"],
      },
    ],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
    ],
  },
  "09": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 92,
        level: "exceptional",
        hints: [
          "Strong senior-level progression with clear role advancement",
          "Deep backend, cloud, and distributed systems expertise",
          "Well-documented impact across multiple large-scale platforms",
        ],
      },
      suspicion: {
        score: 20,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.82,
        quantificationRate: 0.12,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Chandra Shekhar Neupane",
        rawText: "Chandra Shekhar Neupane",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value:
            "[shekharneupane23@gmail.com](mailto:shekharneupane23@gmail.com)",
          rawText:
            "[shekharneupane23@gmail.com](mailto:shekharneupane23@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779860047221",
          rawText: "+977-9860047221",
          confidence: 0.9,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Kathmandu, Nepal",
        city: "Kathmandu",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "github",
          url: "[https://github.com/chandrashekhar07](https://github.com/chandrashekhar07)",
        },
      ],
      summary:
        "Senior backend engineer specializing in scalable distributed systems, cloud infrastructure, and microservices. Experienced in leading backend teams, optimizing CI/CD pipelines, and building high-availability systems across fintech, media, and platform products.",
    },
    skills: [
      {
        name: "NestJS",
        normalizedName: "nestjs",
        category: "backend",
        computedLevel: "expert",
        validityScore: 9.1,
        metadata: {
          firstSeen: "2022-07",
          lastUsed: "2025-06",
          totalMonthsExperience: 36,
          occurrenceCount: 10,
          sources: [
            {
              sectionId: "exp_webpoint",
              sectionType: "experience",
            },
            {
              sectionId: "proj_luminate",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "AWS",
        normalizedName: "aws",
        category: "cloud",
        computedLevel: "expert",
        validityScore: 8.8,
        metadata: {
          firstSeen: "2021-04",
          lastUsed: "2025-06",
          totalMonthsExperience: 48,
          occurrenceCount: 12,
          sources: [
            {
              sectionId: "exp_bytenite",
              sectionType: "experience",
            },
            {
              sectionId: "proj_bytenite",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Kubernetes",
        normalizedName: "kubernetes",
        category: "devops",
        computedLevel: "advanced",
        validityScore: 8.2,
        metadata: {
          firstSeen: "2023-01",
          lastUsed: "2025-06",
          totalMonthsExperience: 30,
          occurrenceCount: 7,
          sources: [
            {
              sectionId: "proj_bytenite",
              sectionType: "project",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_bytenite",
        title: {
          value: "Lead Backend Software Engineer",
          rawText: "Lead Backend Software Engineer (PAYG Contract)",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Lead Backend Software Engineer",
        company: {
          value: "Bytenite Inc.",
          rawText: "Bytenite Inc.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "contract",
        startDate: {
          rawText: "March 2025",
          isoDate: "2025-03",
          isCurrent: true,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description: "Backend leadership for a serverless container platform.",
        responsibilities: [
          "Designed scalable backend services for distributed computing",
          "Implemented gRPC-based inter-service communication",
          "Optimized backend performance and cloud cost efficiency",
        ],
        skillsDetected: ["nestjs", "grpc", "kubernetes", "aws"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_veel",
        title: {
          value: "Senior Software Engineer",
          rawText: "Senior Software Engineer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Senior Software Engineer",
        company: {
          value: "Veel Inc.",
          rawText: "Veel Inc.",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Feb 2025",
          isoDate: "2025-02",
          isCurrent: false,
        },
        endDate: {
          rawText: "Jun 2025",
          isoDate: "2025-06",
          isCurrent: false,
        },
        description: "Backend engineering for video marketing platform.",
        responsibilities: [
          "Scaled production systems and improved reliability",
          "Collaborated with cross-functional teams on microservices",
        ],
        skillsDetected: ["dotnet", "microservices", "graphql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_webpoint",
        title: {
          value: "Software Engineer",
          rawText: "Software Engineer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer",
        company: {
          value: "Webpoint Solutions LLC",
          rawText: "Webpoint Solutions LLC",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "April 2022",
          isoDate: "2022-04",
          isCurrent: false,
        },
        endDate: {
          rawText: "Aug 2024",
          isoDate: "2024-08",
          isCurrent: false,
        },
        description: "Backend development across multiple client projects.",
        responsibilities: [
          "Built and maintained RESTful APIs",
          "Implemented CI/CD pipelines and cloud infrastructure",
          "Collaborated on scalable backend architectures",
        ],
        skillsDetected: ["nestjs", "postgresql", "docker"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_be",
        institution: {
          value: "Sagarmatha Engineering College",
          rawText: "Sagarmatha Engineering College",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value:
            "Bachelor of Engineering in Electronics and Communication Engineering",
          rawText:
            "Bachelor of Engineering in Electronics and Communication Engineering",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Electronics and Communication Engineering",
        startDate: {
          rawText: "2016",
          isoDate: "2016",
          isCurrent: false,
        },
        endDate: {
          rawText: "2021",
          isoDate: "2021",
          isCurrent: false,
        },
        gpa: {
          score: 76.33,
          scale: 100,
        },
      },
    ],
    projects: [
      {
        name: "Luminate",
        description:
          "Audio book application with subscription management, analytics, and personalization.",
        url: null,
        skillsUsed: ["nestjs", "postgresql", "stripe", "ci/cd"],
      },
      {
        name: "ByteNite",
        description:
          "Serverless container platform optimized for distributed workloads.",
        url: null,
        skillsUsed: ["grpc", "kubernetes", "docker"],
      },
    ],
    certifications: [
      {
        name: "Terraform",
        issuer: "KodeKloud",
        date: {
          rawText: "Completed",
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
      {
        name: "AWS ECS",
        issuer: "KodeKloud",
        date: {
          rawText: "Completed",
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
    ],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
    ],
  },
  "10": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 90,
        level: "exceptional",
        hints: [
          "Extensive mobile development experience across Flutter, Android, iOS, and React Native",
          "Clear leadership, architecture, and testing practices documented",
          "Strong project portfolio spanning public-sector, enterprise, and consumer apps",
        ],
      },
      suspicion: {
        score: 25,
        level: "concern",
        flags: [
          {
            type: "overlapping_roles",
            severity: "medium",
            description:
              "Multiple concurrent professional roles and business ownership over long periods",
          },
        ],
      },
      writingStyle: {
        actionVerbsRate: 0.81,
        quantificationRate: 0.06,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Basanta Sunuwar",
        rawText: "Basanta Sunuwar",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value: "[devitsmebasn@gmail.com](mailto:devitsmebasn@gmail.com)",
          rawText: "[dev.itsmebasn@gmail.com](mailto:dev.itsmebasn@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "9817306165",
          rawText: "9817306165",
          confidence: 0.7,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Kumaripati, 44600",
        city: "Lalitpur",
        state: null,
        country: "Nepal",
        zipCode: "44600",
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "[https://www.linkedin.com/in/bs.53187a1b/](https://www.linkedin.com/in/bs.53187a1b/)",
        },
        {
          type: "github",
          url: "[https://github.com/basantasunuwar](https://github.com/basantasunuwar)",
        },
      ],
      summary:
        "Enthusiastic mobile app developer with over four years of experience across Flutter, Android, iOS, and React Native. Strong foundation in clean architecture, state management, testing, and scalable mobile solutions.",
    },
    skills: [
      {
        name: "Flutter",
        normalizedName: "flutter",
        category: "mobile",
        computedLevel: "expert",
        validityScore: 9.0,
        metadata: {
          firstSeen: "2019-08",
          lastUsed: "2025-06",
          totalMonthsExperience: 70,
          occurrenceCount: 18,
          sources: [
            {
              sectionId: "exp_coding_mountain",
              sectionType: "experience",
            },
            {
              sectionId: "proj_hrmis",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Android",
        normalizedName: "android",
        category: "mobile",
        computedLevel: "advanced",
        validityScore: 8.1,
        metadata: {
          firstSeen: "2019-08",
          lastUsed: "2024-04",
          totalMonthsExperience: 54,
          occurrenceCount: 10,
          sources: [
            {
              sectionId: "exp_dryice",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "iOS",
        normalizedName: "ios",
        category: "mobile",
        computedLevel: "advanced",
        validityScore: 7.9,
        metadata: {
          firstSeen: "2021-01",
          lastUsed: "2024-06",
          totalMonthsExperience: 42,
          occurrenceCount: 8,
          sources: [
            {
              sectionId: "exp_dryice",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_coding_mountain",
        title: {
          value: "Senior Software Engineer – I",
          rawText: "Senior Software Engineer – I",
          confidence: 0.9,
          pageIndex: 4,
        },
        normalizedTitle: "Senior Software Engineer",
        company: {
          value: "Coding Mountain (YoungInnovations Pvt. Ltd.)",
          rawText: "Coding Mountain ( YoungInnovations Pvt, Ltd.)",
          confidence: 0.9,
          pageIndex: 4,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2022-04",
          isoDate: "2022-04",
          isCurrent: true,
        },
        endDate: {
          rawText: "Current",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Senior mobile engineer leading Flutter-based applications and architecture.",
        responsibilities: [
          "Developed Flutter applications using BLoC and GetX architectures",
          "Implemented clean code architecture and organization-wide coding standards",
          "Led team management, planning, and knowledge sharing sessions",
        ],
        skillsDetected: ["flutter", "dart", "bloc", "firebase"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_dryice",
        title: {
          value: "Android/Flutter Developer",
          rawText: "Android/Flutter Developer (Mid-Level)",
          confidence: 0.9,
          pageIndex: 5,
        },
        normalizedTitle: "Android Flutter Developer",
        company: {
          value: "DryIce Solutions Pvt. Ltd.",
          rawText: "DryIce Solutions Pvt. Ltd.",
          confidence: 0.9,
          pageIndex: 5,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2021-08",
          isoDate: "2021-08",
          isCurrent: false,
        },
        endDate: {
          rawText: "2022-04",
          isoDate: "2022-04",
          isCurrent: false,
        },
        description:
          "Mid-level mobile developer working on Flutter and native Android/iOS features.",
        responsibilities: [
          "Built Flutter applications with authentication and in-app purchases",
          "Integrated Apple Pay, Firebase, and REST APIs",
          "Guided interns and led feature development",
        ],
        skillsDetected: ["flutter", "android", "ios"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_bsc",
        institution: {
          value: "Godawari College",
          rawText: "Godawari College – Itahari, Sunsari",
          confidence: 0.9,
          pageIndex: 7,
        },
        degree: {
          value: "BSc CSIT",
          rawText: "BSc CSIT: Computer Science",
          confidence: 0.9,
          pageIndex: 7,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Science",
        startDate: {
          rawText: "2017",
          isoDate: "2017",
          isCurrent: false,
        },
        endDate: {
          rawText: "2021",
          isoDate: "2021",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "Firmtech",
        description:
          "Medical mobile application integrating IoT device data for health analysis.",
        url: null,
        skillsUsed: ["flutter", "dart", "aws"],
      },
      {
        name: "HRMIS",
        description:
          "Human Resource Management Information System with offline support and authentication.",
        url: null,
        skillsUsed: ["flutter", "sqlite", "firebase"],
      },
    ],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
      {
        language: "Hindi",
        proficiency: "conversational",
      },
    ],
  },
  "11": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 94,
        level: "exceptional",
        hints: [
          "Clear senior-level ownership of architecture and delivery",
          "Strong quantification of impact and performance improvements",
          "Consistent progression across high-scale enterprise systems",
        ],
      },
      suspicion: {
        score: 20,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.86,
        quantificationRate: 0.42,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Deependra Khadka",
        rawText: "DEEPENDRA KHADKA",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value:
            "[khadkadeependra371@gmail.com](mailto:khadkadeependra371@gmail.com)",
          rawText:
            "[khadkadeependra371@gmail.com](mailto:khadkadeependra371@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779702291318",
          rawText: "+977-9702291318",
          confidence: 0.9,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Kathmandu, Nepal | Remote | Open to relocation",
        city: "Kathmandu",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [],
      summary:
        "Senior full stack developer with over six years of experience designing and scaling MERN and Next.js applications with GraphQL and AWS. Proven ability to architect performant microservices, optimize APIs, and lead agile teams delivering enterprise-grade solutions.",
    },
    skills: [
      {
        name: "React",
        normalizedName: "react",
        category: "frontend",
        computedLevel: "expert",
        validityScore: 9.2,
        metadata: {
          firstSeen: "2018-09",
          lastUsed: "2025-03",
          totalMonthsExperience: 78,
          occurrenceCount: 14,
          sources: [
            {
              sectionId: "exp_appsha",
              sectionType: "experience",
            },
            {
              sectionId: "exp_fedex",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Node.js",
        normalizedName: "node.js",
        category: "backend",
        computedLevel: "expert",
        validityScore: 9.0,
        metadata: {
          firstSeen: "2018-09",
          lastUsed: "2025-03",
          totalMonthsExperience: 78,
          occurrenceCount: 13,
          sources: [
            {
              sectionId: "exp_appsha",
              sectionType: "experience",
            },
            {
              sectionId: "exp_groupado",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "GraphQL",
        normalizedName: "graphql",
        category: "backend",
        computedLevel: "expert",
        validityScore: 8.7,
        metadata: {
          firstSeen: "2019-01",
          lastUsed: "2025-03",
          totalMonthsExperience: 74,
          occurrenceCount: 10,
          sources: [
            {
              sectionId: "exp_groupado",
              sectionType: "experience",
            },
            {
              sectionId: "exp_aerion",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_aerion",
        title: {
          value: "Full Stack Developer",
          rawText: "Full Stack Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Full Stack Developer",
        company: {
          value: "Aerion Tech",
          rawText: "Aerion Tech",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Nov 2023",
          isoDate: "2023-11",
          isCurrent: true,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Full ownership of full-stack systems using Next.js, Nest.js, and GraphQL.",
        responsibilities: [
          "Built inventory management system with real-time chat via WebSockets",
          "Designed GraphQL schemas reducing data transfer by 35%",
          "Implemented CI/CD pipelines on AWS Lambda with GitHub Actions",
        ],
        skillsDetected: ["react", "node.js", "graphql", "aws"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_groupado",
        title: {
          value: "Lead MERN Developer",
          rawText: "Lead MERN Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Lead MERN Developer",
        company: {
          value: "Groupado",
          rawText: "Groupado",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "contract",
        startDate: {
          rawText: "Dec 2022",
          isoDate: "2022-12",
          isCurrent: false,
        },
        endDate: {
          rawText: "Mar 2023",
          isoDate: "2023-03",
          isCurrent: false,
        },
        description: "Led development of real-time eCommerce platform.",
        responsibilities: [
          "Architected Next.js and Nest.js systems with WebSockets",
          "Led backend team handling over one million records",
          "Built analytics dashboard reducing data latency by 60%",
        ],
        skillsDetected: ["react", "node.js", "graphql", "mongodb"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_fedex",
        title: {
          value: "Senior MERN Developer",
          rawText: "Senior MERN Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Senior MERN Developer",
        company: {
          value: "FedEx (via CST Timing)",
          rawText: "FedEx (via CST Timing)",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Jul 2021",
          isoDate: "2021-07",
          isCurrent: false,
        },
        endDate: {
          rawText: "Dec 2022",
          isoDate: "2022-12",
          isCurrent: false,
        },
        description:
          "Senior developer role focused on performance and scalability.",
        responsibilities: [
          "Optimized API latency from 800ms to 220ms",
          "Implemented GraphQL reducing overfetching by 40%",
          "Deployed Dockerized services on AWS with CI/CD",
        ],
        skillsDetected: ["node.js", "graphql", "aws", "docker"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_bim",
        institution: {
          value: "St. Xavier’s College",
          rawText: "St. Xavier’s College, Tribhuvan University",
          confidence: 0.9,
          pageIndex: 1,
        },
        degree: {
          value: "Bachelor of Information and Technology",
          rawText: "Bachelor of Information and Technology",
          confidence: 0.9,
          pageIndex: 1,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Information Technology",
        startDate: null,
        endDate: null,
        gpa: null,
      },
    ],
    projects: [],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
    ],
  },
  "12": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 86,
        level: "high",
        hints: [
          "Strong .NET backend depth with databases and reporting systems",
          "Clear progression across multiple engineering roles",
          "Good exposure to healthcare, fintech, and SaaS domains",
        ],
      },
      suspicion: {
        score: 20,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.79,
        quantificationRate: 0.05,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Hari Narayan Chaudhary",
        rawText: "Hari Narayan Chaudhary",
        confidence: 0.9,
        pageIndex: 0,
      },
      email: [
        {
          value:
            "[chaudharyharri450@gmail.com](mailto:chaudharyharri450@gmail.com)",
          rawText:
            "[chaudharyharri450@gmail.com](mailto:chaudharyharri450@gmail.com)",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "9812672449",
          rawText: "9812672449",
          confidence: 0.7,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Jorpati, Kathmandu",
        city: "Kathmandu",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "github",
          url: "[https://github.com/HarrryBaidhya](https://github.com/HarrryBaidhya)",
        },
      ],
      summary:
        "NET full stack developer with strong experience building healthcare and fintech systems using C#, .NET Core, SQL, and REST APIs. Experienced in database optimization, reporting, third-party integrations, and agile delivery.",
    },
    skills: [
      {
        name: "C#",
        normalizedName: "csharp",
        category: "language",
        computedLevel: "expert",
        validityScore: 8.6,
        metadata: {
          firstSeen: "2022-05",
          lastUsed: "2025-09",
          totalMonthsExperience: 40,
          occurrenceCount: 12,
          sources: [
            {
              sectionId: "exp_midas",
              sectionType: "experience",
            },
            {
              sectionId: "exp_dghub",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: ".NET Core",
        normalizedName: "dotnet-core",
        category: "backend",
        computedLevel: "advanced",
        validityScore: 8.1,
        metadata: {
          firstSeen: "2022-05",
          lastUsed: "2025-09",
          totalMonthsExperience: 40,
          occurrenceCount: 10,
          sources: [
            {
              sectionId: "exp_midas",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "SQL",
        normalizedName: "sql",
        category: "database",
        computedLevel: "advanced",
        validityScore: 7.8,
        metadata: {
          firstSeen: "2022-05",
          lastUsed: "2025-09",
          totalMonthsExperience: 40,
          occurrenceCount: 11,
          sources: [
            {
              sectionId: "exp_midas",
              sectionType: "experience",
            },
            {
              sectionId: "exp_dghub",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_midas",
        title: {
          value: "Software Engineer",
          rawText: "Software Engineer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer",
        company: {
          value: "Midas Health Services",
          rawText: "Midas Health services",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Kathmandu, PaniPokhari",
          city: "Kathmandu",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "full-time",
        startDate: {
          rawText: "March 2024",
          isoDate: "2024-03",
          isCurrent: false,
        },
        endDate: {
          rawText: "September 2025",
          isoDate: "2025-09",
          isCurrent: false,
        },
        description:
          "Development of healthcare applications and reporting systems.",
        responsibilities: [
          "Developed .NET Core and .NET Framework applications using C#",
          "Built REST APIs and integrated insurance and third-party services",
          "Designed SQL queries, views, stored procedures, and reports",
        ],
        skillsDetected: ["csharp", "dotnet-core", "sql", "postgresql"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_dghub",
        title: {
          value: ".NET Developer",
          rawText: ".Net Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: ".NET Developer",
        company: {
          value: "DG HUB",
          rawText: "DG HUB",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Kathmandu, KamalPokhari",
          city: "Kathmandu",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "full-time",
        startDate: {
          rawText: "February 2023",
          isoDate: "2023-02-20",
          isCurrent: false,
        },
        endDate: {
          rawText: "November 2023",
          isoDate: "2023-11-27",
          isCurrent: false,
        },
        description: "Backend development for digital wallet platform.",
        responsibilities: [
          "Integrated third-party REST and SOAP APIs",
          "Developed reports, pagination, and admin features",
          "Optimized SQL queries and implemented repository pattern",
        ],
        skillsDetected: ["csharp", "sql", "rest"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_bentary",
        title: {
          value: ".NET Developer",
          rawText: ".Net Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: ".NET Developer",
        company: {
          value: "Bentary Technologies",
          rawText: "Bentary Technologies",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Lalitpur, Chakupat",
          city: "Lalitpur",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "full-time",
        startDate: {
          rawText: "August 2022",
          isoDate: "2022-08-29",
          isCurrent: false,
        },
        endDate: {
          rawText: "February 2023",
          isoDate: "2023-02-10",
          isCurrent: false,
        },
        description: "Accounting and SaaS application development.",
        responsibilities: [
          "Developed REST APIs and new features in accounting software",
          "Maintained SaaS applications and database logic",
        ],
        skillsDetected: ["csharp", "sql", "dotnet"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_eda",
        title: {
          value: ".NET Developer",
          rawText: ".Net Developer",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: ".NET Developer",
        company: {
          value: "EDA Nepal",
          rawText: "EDA NEPAL",
          confidence: 0.9,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Kathmandu, Chakrapath",
          city: "Kathmandu",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "full-time",
        startDate: {
          rawText: "May 2022",
          isoDate: "2022-05-18",
          isCurrent: false,
        },
        endDate: {
          rawText: "August 2022",
          isoDate: "2022-08-23",
          isCurrent: false,
        },
        description: "Frontend and backend support on .NET applications.",
        responsibilities: [
          "Built frontend UI components and fixed production bugs",
          "Added new features to client web applications",
        ],
        skillsDetected: ["csharp", "dotnet-core"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_bit",
        institution: {
          value: "Sunderland University Kathmandu",
          rawText: "Sundarland University Kathmandu",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor in Information Technology",
          rawText: "Bachelor in Information Technology",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Information Technology",
        startDate: {
          rawText: "2019",
          isoDate: "2019",
          isCurrent: false,
        },
        endDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [],
    certifications: [],
    languages: [
      {
        language: "English",
        proficiency: "fluent",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
    ],
  },
  "13": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 92,
        level: "exceptional",
        hints: [
          "Excellent use of quantifiable metrics across all roles.",
          "Strong structure with detailed technical projects.",
          "High density of action-oriented bullet points.",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 1.0,
        quantificationRate: 0.85,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Harshwardhan Sable",
        rawText: "HARSHWARDHAN SABLE",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "sableharsh98@gmail.com",
          rawText: "sableharsh98@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+917276230103",
          rawText: "+91 7276230103",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Pune, Maharashtra",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        zipCode: null,
        countryCode: "IN",
      },
      urls: [
        {
          type: "linkedin",
          url: "[linkedin.com/in/harshwardhan-sable-0100bb1a6](https://www.google.com/search?q=https://linkedin.com/in/harshwardhan-sable-0100bb1a6)",
        },
      ],
      summary:
        "Engineer I with 4 years of experience in automating infrastructure, managing cloud-native deployments, and streamlining CI/CD workflows. Adept at building resilient pipelines, containerized environments, and scalable cloud infrastructure using AWS, Docker, Kubernetes, Terraform, and Jenkins. Proven ability to reduce deployment time by 40% and improve monitoring visibility by 99.5%.",
    },
    skills: [
      {
        name: "AWS",
        normalizedName: "Amazon Web Services",
        category: "Cloud",
        computedLevel: "expert",
        validityScore: 9.2,
        metadata: {
          firstSeen: "2021-06-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 49,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "exp_accelya",
              sectionType: "experience",
            },
            {
              sectionId: "proj_cloud_mig",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Docker",
        normalizedName: "Docker",
        category: "DevOps",
        computedLevel: "advanced",
        validityScore: 8.4,
        metadata: {
          firstSeen: "2021-06-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 49,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "exp_accelya",
              sectionType: "experience",
            },
            {
              sectionId: "proj_cicd",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Kubernetes",
        normalizedName: "Kubernetes",
        category: "Orchestration",
        computedLevel: "advanced",
        validityScore: 8.1,
        metadata: {
          firstSeen: "2021-11-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 49,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "exp_accelya",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Terraform",
        normalizedName: "Terraform",
        category: "IaC",
        computedLevel: "advanced",
        validityScore: 7.8,
        metadata: {
          firstSeen: "2021-11-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 49,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "exp_accelya",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_accelya",
        title: {
          value: "Engineer I",
          rawText: "Engineer I | Cloud & Automation",
          confidence: 0.9,
          pageIndex: 0,
        },
        normalizedTitle: "Cloud Engineer",
        company: {
          value: "Accelya Solutions India Limited",
          rawText: "Accelya Solutions India Limited",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: "accelya.com",
        location: {
          rawInput: "Pune, India",
          city: "Pune",
          state: null,
          country: "India",
          zipCode: null,
          countryCode: "IN",
        },
        type: "full-time",
        startDate: {
          rawText: "Nov 2021",
          isoDate: "2021-11-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Cloud and Automation engineer focusing on AWS migration and CI/CD optimization.",
        responsibilities: [
          "Executed complex migration of legacy systems from on-premises Linux servers to AWS cloud infrastructure.",
          "Optimized shell scripts for archiving/purging efficiency, reducing batch processing time by 40%.",
          "Led end-to-end implementation of production environment module migrations with zero critical issues.",
          "Conducted detailed Root Cause Analysis (RCA) using Tomcat and JBoss logs to remediate complex bugs.",
          "Created centralized knowledge repository in Confluence, reducing resolution time by 45%.",
        ],
        skillsDetected: [
          "AWS",
          "Docker",
          "Kubernetes",
          "Terraform",
          "CI/CD",
          "Linux",
          "JBoss",
          "Tomcat",
          "Shell Scripting",
          "SQL",
          "Confluence",
        ],
        isVerified: true,
        verificationNotes: "Company domain exists and roles are consistent.",
        verificationConfidence: 1.0,
        verificationDate: "2025-12-22",
      },
    ],
    education: [
      {
        id: "edu_1",
        institution: {
          value: "Smt. Kashibai Navale College of Engineering",
          rawText: "Smt. Kashibai Navale College of Engineering",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor of Engineering",
          rawText: "Bachelor of Engineering - Computer Engineering",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Engineering",
        startDate: null,
        endDate: {
          rawText: "Jun 2021",
          isoDate: "2021-06-01",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "Enterprise CI/CD Pipeline Transformation",
        description:
          "Designed and implemented scalable CI/CD pipeline with parallelization and caching, reducing build times from 45 to 12 minutes.",
        url: null,
        skillsUsed: [
          "Jenkins",
          "GitLab CI",
          "Docker",
          "Kubernetes",
          "Shell Scripting",
          "Argo CD",
          "JFrog Artifactory",
        ],
      },
      {
        name: "Enterprise Monitoring & Observability Solution",
        description:
          "Architected monitoring system covering 50+ services with 99.5% visibility and predictive alerting.",
        url: null,
        skillsUsed: [
          "Prometheus",
          "Grafana",
          "AlertManager",
          "ELK Stack",
          "CloudWatch",
        ],
      },
      {
        name: "Passenger Revenue Accounting Project (PRA)",
        description:
          "Deployed and upgraded Jboss/Tomcat across 50+ airline clients with 99% uptime.",
        url: null,
        skillsUsed: [
          "GitLab CI/CD",
          "SQL",
          "Linux",
          "Shell Scripting",
          "JFrog Artifactory",
        ],
      },
    ],
    certifications: [],
    languages: [],
  },
  "14": {
    id: "resume_jagrit_timalsina",
    analysis: {
      quality: {
        score: 65,
        level: "average",
        hints: [
          "Include more quantifiable achievements in the experience section.",
          "The project section is well-detailed with technical stacks.",
          "Education timeline is clear with expected graduation.",
        ],
      },
      suspicion: {
        score: 10,
        level: "safe",
        flags: [
          {
            type: "unclear_overlap",
            severity: "low",
            description:
              "The graphic design role and internship appear to overlap significantly.",
          },
        ],
      },
      writingStyle: {
        actionVerbsRate: 0.75,
        quantificationRate: 0.2,
        clicheCount: 2,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Jagrit Timalsina",
        rawText: "Jagrit Timalsina",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "ti.jagrit@gmail.com",
          rawText: "ti.jagrit@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "9841406910",
          rawText: "9841406910",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Kathmandu-28, Bagbazar",
        city: "Kathmandu",
        state: "Bagbazar",
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "[https://www.linkedin.com/in/jagrit-timalsina/](https://www.linkedin.com/in/jagrit-timalsina/)",
        },
        {
          type: "github",
          url: "[https://github.com/ti-jagrit](https://github.com/ti-jagrit)",
        },
        {
          type: "personal",
          url: "[www.timalsinajagrit.com](https://www.google.com/search?q=https://www.timalsinajagrit.com).np",
        },
      ],
      summary:
        "Detail-oriented BCA student with hands-on experience in software development, IT support, and graphic design. Proficient in Java, PHP, SQL, Spring Boot, and Laravel. Passionate about web development, system architecture, and problem-solving.",
    },
    skills: [
      {
        name: "Java",
        normalizedName: "Java",
        category: "Languages",
        computedLevel: "intermediate",
        validityScore: 7.5,
        metadata: {
          firstSeen: "2024-01-01",
          lastUsed: "2024-12-22",
          totalMonthsExperience: 12,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Spring Boot",
        normalizedName: "Spring Boot",
        category: "Technologies",
        computedLevel: "intermediate",
        validityScore: 7.8,
        metadata: {
          firstSeen: "2024-01-01",
          lastUsed: "2024-12-22",
          totalMonthsExperience: 12,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
            {
              sectionId: "projects",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "PHP",
        normalizedName: "PHP",
        category: "Languages",
        computedLevel: "intermediate",
        validityScore: 6.8,
        metadata: {
          firstSeen: "2023-01-01",
          lastUsed: "2024-12-22",
          totalMonthsExperience: 24,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Laravel",
        normalizedName: "Laravel",
        category: "Technologies",
        computedLevel: "intermediate",
        validityScore: 6.5,
        metadata: {
          firstSeen: "2023-01-01",
          lastUsed: "2024-12-22",
          totalMonthsExperience: 24,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
            {
              sectionId: "projects",
              sectionType: "project",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_1",
        title: {
          value: "Internship - Software Development",
          rawText: "Internship - Software Development",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Software Development Intern",
        company: {
          value: "Saipal Technology",
          rawText: "Saipal Technology",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "internship",
        startDate: {
          rawText: "Jan 2024",
          isoDate: "2024-01-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Developing REST APIs and managing databases using modern Java frameworks.",
        responsibilities: [
          "Worked on Spring Boot REST API development and database management.",
          "Assisted in React and JSP-based web application design.",
        ],
        skillsDetected: ["Spring Boot", "REST API", "React", "JSP"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_2",
        title: {
          value: "Graphic Designer",
          rawText: "Graphic Designer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Graphic Designer",
        company: {
          value: "PrintoHub Trade Link Pvt. Ltd.",
          rawText: "PrintoHub Trade Link Pvt. Ltd.",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2022",
          isoDate: "2022-01-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Design and collaboration for print and digital marketing materials.",
        responsibilities: [
          "Designed print/digital marketing materials and branding assets.",
          "Collaborated with clients for visually appealing design delivery.",
        ],
        skillsDetected: ["Graphic Design", "Branding"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
      {
        id: "exp_3",
        title: {
          value: "IT Support",
          rawText: "IT Support",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "IT Support Specialist",
        company: {
          value: "Special School for Disabled and Rehabilitation Center",
          rawText: "Special School for Disabled and Rehabilitation Center",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: null,
        startDate: {
          rawText: "2023",
          isoDate: "2023-01-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "2023",
          isoDate: "2023-12-31",
          isCurrent: false,
        },
        description:
          "Provided technical troubleshooting for hardware and software.",
        responsibilities: [
          "Provided troubleshooting and technical support for hardware/software.",
        ],
        skillsDetected: ["Hardware Troubleshooting", "Technical Support"],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: null,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_1",
        institution: {
          value: "Tribhuvan University",
          rawText: "Tribhuvan University",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor of Computer Application (BCA)",
          rawText: "Bachelor of Computer Application (BCA)",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Application",
        startDate: null,
        endDate: {
          rawText: "Oct 2025",
          isoDate: "2025-10-01",
          isCurrent: true,
        },
        gpa: null,
      },
      {
        id: "edu_2",
        institution: {
          value: "Viswa Niketan Secondary School",
          rawText: "Viswa Niketan Secondary School",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "Higher Secondary School (10+2)",
          rawText: "Higher Secondary School (10+2)",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "high_school",
        fieldOfStudy: null,
        startDate: null,
        endDate: {
          rawText: "2020",
          isoDate: "2020-12-31",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "Billing Web Store",
        description:
          "Platform for managing products, categories, generating bills and sales reports with payment integrations.",
        url: "[https://github.com/ti-jagrit/Bills](https://github.com/ti-jagrit/Bills)",
        skillsUsed: [
          "Spring Boot",
          "JSP",
          "Bootstrap",
          "MySQL",
          "Jasper Studio",
          "JWT",
          "OAuth2",
        ],
      },
      {
        name: "CarDeals",
        description:
          "Car buying/selling platform featuring a Decision Tree Algorithm for price prediction.",
        url: "[https://github.com/ti-jagrit/cardeals](https://github.com/ti-jagrit/cardeals)",
        skillsUsed: [
          "PHP",
          "Laravel",
          "Python",
          "SQL",
          "Decision Tree Algorithm",
        ],
      },
    ],
    certifications: [
      {
        name: "Spring Boot and REST API Development",
        issuer: "Saipal Technology",
        date: {
          rawText: "2024",
          isoDate: "2024-12-31",
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
      {
        name: "Java Training",
        issuer: "IT Training Nepal",
        date: {
          rawText: "2024",
          isoDate: "2024-12-31",
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
    ],
    languages: [],
  },
  "15": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 79,
        level: "high",
        hints: [
          "Strong structure with all major sections present.",
          "Good use of action verbs in responsibility descriptions.",
          "Add more quantified metrics to increase the content depth score.",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.88,
        quantificationRate: 0.12,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: true,
        gaps: [
          {
            startDate: "2024-01-01",
            endDate: "2024-12-01",
            durationDays: 335,
          },
        ],
      },
      identity: {
        geoConsistency: "unknown",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Jeshan Tiwari",
        rawText: "JESHAN TIWARI",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [],
      phone: [],
      location: {
        rawInput: "Nepal",
        city: null,
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "github",
          url: "[github.com/Jeshan1](https://github.com/Jeshan1)",
        },
        {
          type: "linkedin",
          url: "[linkedin.com/in/jeshan-tiwari](https://www.google.com/search?q=https://linkedin.com/in/jeshan-tiwari)",
        },
      ],
      summary:
        "Full Stack Developer with 2+ years of experience in Laravel, Vue.js, React.js, and Node.js. Proven expertise in developing hospital software, health & insurance modules, and scalable web applications. Skilled in both backend and frontend development, API integrations, and Agile methodologies.",
    },
    skills: [
      {
        name: "PHP",
        normalizedName: "PHP",
        category: "Primary Expertise",
        computedLevel: "advanced",
        validityScore: 6.8,
        metadata: {
          firstSeen: "2023-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 21,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "JavaScript",
        normalizedName: "JavaScript",
        category: "Primary Expertise",
        computedLevel: "advanced",
        validityScore: 6.8,
        metadata: {
          firstSeen: "2023-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 21,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Laravel",
        normalizedName: "Laravel",
        category: "Primary Expertise",
        computedLevel: "advanced",
        validityScore: 7.5,
        metadata: {
          firstSeen: "2023-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 21,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Vue.js",
        normalizedName: "Vue.js",
        category: "Primary Expertise",
        computedLevel: "advanced",
        validityScore: 6.5,
        metadata: {
          firstSeen: "2024-12-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 12,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "React.js",
        normalizedName: "React.js",
        category: "Secondary Expertise",
        computedLevel: "novice",
        validityScore: 2.4,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: 0,
          occurrenceCount: 1,
          sources: [],
        },
      },
      {
        name: "Node.js",
        normalizedName: "Node.js",
        category: "Secondary Expertise",
        computedLevel: "novice",
        validityScore: 2.4,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: 0,
          occurrenceCount: 2,
          sources: [],
        },
      },
      {
        name: "Git/GitHub",
        normalizedName: "Git",
        category: "Other Skills",
        computedLevel: "intermediate",
        validityScore: 4.5,
        metadata: {
          firstSeen: "2023-01-01",
          lastUsed: "2024-01-01",
          totalMonthsExperience: 12,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Agile Methodologies",
        normalizedName: "Agile",
        category: "Other Skills",
        computedLevel: "novice",
        validityScore: 2.8,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: 0,
          occurrenceCount: 2,
          sources: [],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_1",
        title: {
          value: "Junior Developer L3",
          rawText: "Junior Developer L3",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Junior Developer",
        company: {
          value: "Mavorion Systems",
          rawText: "Mavorion Systems",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "04/2025",
          isoDate: "2025-04",
          isCurrent: false,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Working on Hospital Software (Dolphin Pharmacy System) with modules in pharmacy and inventory.",
        responsibilities: [
          "Working on Hospital Software (Dolphin Pharmacy System) with modules in pharmacy and inventory.",
          "Developed and maintained scalable features using Laravel + Vue.js.",
          "Collaborated with cross-functional teams to deliver client-specific healthcare solutions.",
        ],
        skillsDetected: ["Laravel", "Vue.js"],
        isVerified: false,
        verificationNotes: "Company domain not provided.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "exp_2",
        title: {
          value: "Junior Developer L2",
          rawText: "Junior Developer L2",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Junior Developer",
        company: {
          value: "CloudTech Services",
          rawText: "CloudTech Services",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "12/2024",
          isoDate: "2024-12",
          isCurrent: false,
        },
        endDate: {
          rawText: "03/2025",
          isoDate: "2025-03",
          isCurrent: false,
        },
        description:
          "Built the Health and Insurance Benefit Store Module with Laravel + Vue.js.",
        responsibilities: [
          "Built the Health and Insurance Benefit Store Module with Laravel + Vue.js.",
          "Enhanced UI/UX and optimized workflows for benefit store functionality.",
          "Assisted in bug fixing, performance optimization, and testing.",
        ],
        skillsDetected: ["Laravel", "Vue.js"],
        isVerified: false,
        verificationNotes: "Company domain not provided.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "exp_3",
        title: {
          value: "Junior Developer L1",
          rawText: "Junior Developer L1",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Junior Developer",
        company: {
          value: "Nakshatra Techno Hub Pvt. Ltd.",
          rawText: "Nakshatra Techno Hub Pvt. Ltd.",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "01/2023",
          isoDate: "2023-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "01/2024",
          isoDate: "2024-01",
          isCurrent: false,
        },
        description: "Developed scalable web applications using Laravel.",
        responsibilities: [
          "Developed scalable web applications using Laravel.",
          "Integrated third-party APIs and services to expand application functionality.",
          "Maintained Git-based workflows with clean, maintainable code.",
        ],
        skillsDetected: ["Laravel", "Git"],
        isVerified: false,
        verificationNotes: "Company domain not provided.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_1",
        institution: {
          value: "Birendra Multiple Campus",
          rawText: "Birendra Multiple Campus",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor in Computer Application (BCA)",
          rawText: "Bachelor in Computer Application (BCA)",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Application",
        startDate: {
          rawText: "2021",
          isoDate: "2021",
          isCurrent: false,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        gpa: null,
      },
      {
        id: "edu_2",
        institution: {
          value: "Nepal Secondary School",
          rawText: "Nepal Secondary School",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "High School",
          rawText: "High School",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "high_school",
        fieldOfStudy: null,
        startDate: null,
        endDate: {
          rawText: "2020",
          isoDate: "2020",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [],
    certifications: [],
    languages: [],
  },
  "16": {
    id: "resume_john_tharu",
    analysis: {
      quality: {
        score: 78,
        level: "high",
        hints: [
          "Include more quantifiable achievements in work experience sections.",
          "Add a LinkedIn URL prefix to the social link for better scannability.",
          "Specify any certifications or additional training to bolster the professional profile.",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.85,
        quantificationRate: 0.1,
        clicheCount: 2,
      },
    },
    verification: {
      timeline: {
        hasGaps: true,
        gaps: [
          {
            startDate: "2024-11-01",
            endDate: "2025-01-01",
            durationDays: 61,
          },
        ],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "John Kathariya Tharu",
        rawText: "John Kathariya Tharu",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "johntharu24@gmail.com",
          rawText: "johntharu24@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "9864409984",
          rawText: "9864409984",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Nepal",
        city: null,
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "[linkedin.com/in/john-tharu-667929341](https://www.google.com/search?q=https://linkedin.com/in/john-tharu-667929341)",
        },
        {
          type: "github",
          url: "[github.com/John-Tharu](https://www.google.com/search?q=https://github.com/John-Tharu)",
        },
      ],
      summary:
        "Full Stack Web Developer with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, Node.js, Express, and MYSQL. Skilled in both frontend and backend development, API integration, and database management. Passionate about creating efficient, user-friendly digital solutions.",
    },
    skills: [
      {
        name: "HTML5",
        normalizedName: "HTML5",
        category: "Frontend Skills",
        computedLevel: "advanced",
        validityScore: 7.2,
        metadata: {
          firstSeen: "2025-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 11,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "PROJECTS",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "JavaScript",
        normalizedName: "JavaScript",
        category: "Frontend Skills",
        computedLevel: "advanced",
        validityScore: 7.2,
        metadata: {
          firstSeen: "2025-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 11,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "PROJECTS",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Node.js",
        normalizedName: "Node.js",
        category: "Backend Skills",
        computedLevel: "advanced",
        validityScore: 7.8,
        metadata: {
          firstSeen: "2025-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 11,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "PROJECTS",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Express.js",
        normalizedName: "Express.js",
        category: "Backend Skills",
        computedLevel: "advanced",
        validityScore: 7.8,
        metadata: {
          firstSeen: "2025-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 11,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "PROJECTS",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "MySQL",
        normalizedName: "MySQL",
        category: "Database",
        computedLevel: "intermediate",
        validityScore: 5.8,
        metadata: {
          firstSeen: "2025-03-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 9,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "PROJECTS",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "MongoDB",
        normalizedName: "MongoDB",
        category: "Database",
        computedLevel: "intermediate",
        validityScore: 4.2,
        metadata: {
          firstSeen: "2025-01-01",
          lastUsed: "2025-02-01",
          totalMonthsExperience: 2,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "PROJECTS",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "Git & GitHub",
        normalizedName: "Git",
        category: "Extra Skills",
        computedLevel: "intermediate",
        validityScore: 3.5,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: 0,
          occurrenceCount: 1,
          sources: [],
        },
      },
    ],
    workExperience: [
      {
        id: "work_1",
        title: {
          value: "Trainee Tech Officer",
          rawText: "Trainee Tech Officer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Technical Officer",
        company: {
          value: "Royal Tiger Recreation Pvt. Ltd.",
          rawText: "Royal Tiger Recreation Pvt. Ltd.",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "internship",
        startDate: {
          rawText: "Aug 2024",
          isoDate: "2024-08",
          isCurrent: false,
        },
        endDate: {
          rawText: "Nov 2024",
          isoDate: "2024-11",
          isCurrent: false,
        },
        description:
          "Assisted in technical operations and IT infrastructure maintenance.",
        responsibilities: [
          "Assisted in technical operations, software support, and IT infrastructure maintenance.",
          "Supported system diagnostics and helped implement software updates.",
          "Collaborated with senior engineers to troubleshoot and resolve technical issues.",
          "Gained hands-on experience in network monitoring, user support, and documentation.",
        ],
        skillsDetected: [],
        isVerified: false,
        verificationNotes:
          "Role is Trainee level; no company domain available.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "work_2",
        title: {
          value: "Hardware and Networking Technician",
          rawText: "Hardware and Networking Technician",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Network Technician",
        company: {
          value: "One Click Computer Service",
          rawText: "One Click Computer Service",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Jan 2022",
          isoDate: "2022-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "Feb 2024",
          isoDate: "2024-02",
          isCurrent: false,
        },
        description:
          "Experienced in installing, configuring, and maintaining computer hardware and network systems.",
        responsibilities: [
          "Installed, configured, and maintained computer hardware, network systems, and printers.",
          "Troubleshot hardware issues and serviced printers.",
          "Managed LAN/WAN setups and provided technical support.",
        ],
        skillsDetected: [],
        isVerified: false,
        verificationNotes: "No company domain available.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_1",
        institution: {
          value: "Crimson College of Technology",
          rawText: "Crimson College of Technology",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor of Computer Application",
          rawText: "Bachelor of Computer Application",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Application",
        startDate: {
          rawText: "Sep 2018",
          isoDate: "2018-09",
          isCurrent: false,
        },
        endDate: {
          rawText: "Aug 2023",
          isoDate: "2023-08",
          isCurrent: false,
        },
        gpa: {
          score: 3.43,
          scale: 4.0,
        },
      },
    ],
    projects: [
      {
        name: "NamasteFit - Fitness/Yoga Subscription Platform",
        description:
          "A subscription-based web platform offering fitness and yoga classes tailored for users in Nepal. Includes authentication, membership plans, and admin dashboards.",
        url: null,
        skillsUsed: ["Node.js", "Express", "MYSQL", "Drizzle ORM", "EJS"],
      },
      {
        name: "Pastebin App",
        description:
          "A web-based application that allows users to create, store, and share text snippets or code blocks with unique shareable URLs.",
        url: null,
        skillsUsed: ["Node.js", "Express", "MYSQL", "EJS", "Prisma ORM"],
      },
      {
        name: "Note App",
        description:
          "A simple and user-friendly web application for creating, editing, and managing notes with CRUD operations.",
        url: null,
        skillsUsed: ["Node.js", "Express", "Mongoose", "EJS"],
      },
    ],
    certifications: [],
    languages: [],
  },
  "17": {
    id: "resume_kapil_singh_thakuri",
    analysis: {
      quality: {
        score: 88,
        level: "high",
        hints: [
          "Excellent technical depth across both Laravel and React ecosystems.",
          "Strong demonstration of project variety including SaaS and Enterprise solutions.",
          "Good mention of modern dev-ops tools like Docker and CI/CD.",
          "Could benefit from more quantified metrics (e.g., percentage improvements in performance).",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.92,
        quantificationRate: 0.05,
        clicheCount: 2,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Kapil Singh Thakuri",
        rawText: "Kapil Singh Thakuri",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "kapilsinghthakuri33@gmail.com",
          rawText: "kapilsinghthakuri33@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+977 9824452680",
          rawText: "+977 9824452680",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Chitwan, Nepal",
        city: "Chitwan",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "LinkedIn",
        },
        {
          type: "github",
          url: "GitHub",
        },
      ],
      summary:
        "Software Developer with experience in PHP (Laravel) and modern frontend technologies. Proven ability to deliver high-quality, optimized applications with secure, maintainable code and collaborative team practices. ",
    },
    skills: [
      {
        name: "React.js",
        normalizedName: "React",
        category: "Frontend",
        computedLevel: "advanced",
        validityScore: 8.5,
        metadata: {
          firstSeen: "2024-06-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 18,
          occurrenceCount: 6,
          sources: [
            {
              sectionId: "TECHNICAL SKILLS",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Laravel",
        normalizedName: "Laravel",
        category: "Backend",
        computedLevel: "expert",
        validityScore: 9.2,
        metadata: {
          firstSeen: "2024-03-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 21,
          occurrenceCount: 12,
          sources: [
            {
              sectionId: "TECHNICAL SKILLS",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Docker",
        normalizedName: "Docker",
        category: "Others",
        computedLevel: "intermediate",
        validityScore: 6.0,
        metadata: {
          firstSeen: "2024-06-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 18,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "EXPERIENCE",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "TypeScript",
        normalizedName: "TypeScript",
        category: "Frontend",
        computedLevel: "advanced",
        validityScore: 7.8,
        metadata: {
          firstSeen: "2024-06-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 18,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "EXPERIENCE",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "work_1",
        title: {
          value: "Laravel & React Software Developer",
          rawText: "Laravel & React Software Developer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Full Stack Developer",
        company: {
          value: "Youngminds Creation Pvt. Ltd.",
          rawText: "Youngminds Creation Pvt. Ltd.",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Shantinagar, Kathmandu",
          city: "Kathmandu",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "full-time",
        startDate: {
          rawText: "June, 2024",
          isoDate: "2024-06",
          isCurrent: false,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Collaborated with cross-functional teams in an Agile environment to build scalable, maintainable web applications using Laravel and React. ",
        responsibilities: [
          "Designed and developed robust backend services with Laravel following security best practices. ",
          "Managed relational schemas using Eloquent ORM and wrote optimized SQL queries. ",
          "Built modular, reusable frontend components using React (TypeScript) with Mantine and Tailwind CSS. ",
          "Implemented RBAC, multi-step wizards, and lazy-loaded modules. ",
          "Integrated RESTful APIs and managed state with Redux and TanStack Query. ",
          "Dockerized frontend environments for CI/CD workflows. ",
        ],
        skillsDetected: [
          "Laravel",
          "React",
          "TypeScript",
          "Redux",
          "TanStack Query",
          "Docker",
          "SQL",
          "Tailwind CSS",
        ],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "work_2",
        title: {
          value: "Laravel Intern",
          rawText: "Laravel Intern",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Backend Developer Intern",
        company: {
          value: "Youngminds Creation Pvt. Ltd.",
          rawText: "Youngminds Creation Pvt. Ltd.",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Shantinagar, Kathmandu",
          city: "Kathmandu",
          state: null,
          country: "Nepal",
          zipCode: null,
          countryCode: "NP",
        },
        type: "internship",
        startDate: {
          rawText: "March, 2024",
          isoDate: "2024-03",
          isCurrent: false,
        },
        endDate: {
          rawText: "May, 2024",
          isoDate: "2024-05",
          isCurrent: false,
        },
        description:
          "Assisted senior developers in building modules with Laravel, applying MVC architecture and RESTful routing. ",
        responsibilities: [
          "Applied MVC architecture, RESTful routing, and Eloquent ORM. ",
          "Wrote and optimized SQL queries and managed database migrations. ",
          "Supported UI integration using Blade, Tailwind CSS, and Bootstrap. ",
          "Participated in Agile ceremonies including daily stand-ups and code reviews. ",
          "Practiced Git branching strategies and resolved merge conflicts. ",
        ],
        skillsDetected: [
          "Laravel",
          "Eloquent",
          "SQL",
          "Tailwind CSS",
          "Bootstrap",
          "Git",
        ],
        isVerified: false,
        verificationNotes: null,
        verificationConfidence: 0.7,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_1",
        institution: {
          value: "Tribhuvan University, Birendra Multiple Campus",
          rawText: "Tribhuvan University, Birendra Multiple Campus",
          confidence: 1.0,
          pageIndex: 3,
        },
        degree: {
          value: "BSc. CSIT",
          rawText: "BSc. CSIT",
          confidence: 1.0,
          pageIndex: 3,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Science and Information Technology",
        startDate: {
          rawText: "2019",
          isoDate: "2019",
          isCurrent: false,
        },
        endDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "Research & Ethics Management Platform",
        description:
          "A digital platform for managing ethical research protocol submissions across multiple countries. Implemented Figma-based UI as modular components. ",
        url: null,
        skillsUsed: [
          "React (TypeScript)",
          "Mantine",
          "Zod",
          "Redux",
          "TanStack Query",
          "Docker",
        ],
      },
      {
        name: "Inventory & Sales Management Platform",
        description:
          "A role-based stock and agent management system for tracking sales and bonus distribution. Integrated RESTful APIs provided by a NestJS backend. ",
        url: null,
        skillsUsed: [
          "React (TypeScript)",
          "React Router v7",
          "Jotai",
          "TanStack Query",
          "Zod",
          "Docker",
        ],
      },
      {
        name: "Healthcare Management Platform (SaaS)",
        description:
          "A SaaS solution for hospital appointment scheduling and health monitoring. Designed secure REST APIs for managing patient records and health vitals. ",
        url: null,
        skillsUsed: [
          "Laravel",
          "Fortify",
          "Spatie Roles & Permissions",
          "Laravel Passport",
          "Tailwind CSS",
        ],
      },
    ],
    certifications: [],
    languages: [],
  },
  "18": {
    id: "resume_kiran_shrestha",
    analysis: {
      quality: {
        score: 85,
        level: "high",
        hints: [
          "Strong technical depth in backend systems and eGovernance projects.",
          "Excellent list of specific key achievements for each role.",
          "Good use of action verbs throughout the experience section.",
          "Could strengthen the profile by adding a specific graduation year for the Bachelor's degree.",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.88,
        quantificationRate: 0.15,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: true,
        gaps: [
          {
            startDate: "2020-01-01",
            endDate: "2021-11-30",
            durationDays: 699,
          },
          {
            startDate: "2022-07-01",
            endDate: "2022-07-31",
            durationDays: 31,
          },
          {
            startDate: "2023-07-01",
            endDate: "2023-09-30",
            durationDays: 92,
          },
        ],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Kiran Shrestha",
        rawText: "Kiran Shrestha",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "kiranshrestha903@gmail.com",
          rawText: "kiranshrestha903@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779818521901",
          rawText: "(+977) 9818521901",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Nepal",
        city: null,
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "github",
          url: "[github.com/ikiranshrestha](https://github.com/ikiranshrestha)",
        },
        {
          type: "linkedin",
          url: "[linkedin.com/in/ikiranshrestha](https://www.google.com/search?q=https://linkedin.com/in/ikiranshrestha)",
        },
      ],
      summary:
        "Fullstack Software Engineer with 3+ years of experience designing and building secure, data-driven backend systems. Proven track record delivering eGovernance platforms for government agencies, law enforcement systems, and high-traffic B2B/B2C platforms. Strong expertise in Laravel, MySQL, and Redis, with experience in ETL-style data migration, stored procedures, Elasticsearch, Docker, and clean modular architecture.",
    },
    skills: [
      {
        name: "Laravel",
        normalizedName: "Laravel",
        category: "Languages & Frameworks",
        computedLevel: "expert",
        validityScore: 9.4,
        metadata: {
          firstSeen: "2022-08-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 36,
          occurrenceCount: 6,
          sources: [
            {
              sectionId: "TECHNICAL SKILLS",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "PHP",
        normalizedName: "PHP",
        category: "Languages & Frameworks",
        computedLevel: "expert",
        validityScore: 8.8,
        metadata: {
          firstSeen: "2022-08-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 36,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "TECHNICAL SKILLS",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "MySQL",
        normalizedName: "MySQL",
        category: "Databases & Search",
        computedLevel: "advanced",
        validityScore: 8.2,
        metadata: {
          firstSeen: "2022-08-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 36,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "TECHNICAL SKILLS",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Redis",
        normalizedName: "Redis",
        category: "Databases & Search",
        computedLevel: "advanced",
        validityScore: 7.5,
        metadata: {
          firstSeen: "2022-08-01",
          lastUsed: "2023-06-01",
          totalMonthsExperience: 10,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "EXPERIENCE",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Docker",
        normalizedName: "Docker",
        category: "Tools & Technologies",
        computedLevel: "intermediate",
        validityScore: 5.8,
        metadata: {
          firstSeen: "2023-10-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 26,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "TECHNICAL SKILLS",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "work_1",
        title: {
          value: "Software Engineer",
          rawText: "Software Engineer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer",
        company: {
          value: "Code Fusion Technologies",
          rawText: "Code Fusion Technologies",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Oct 2023",
          isoDate: "2023-10",
          isCurrent: false,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Building secure, data-driven backend systems for eGovernance and UNDP projects.",
        responsibilities: [
          "Developed a large-scale platform to track and analyze socio-economic data for vulnerable populations (UNDP Project).",
          "Led complex data migration performing schema mapping, datatype normalization, and ETL-style validation using SQL.",
          "Built solutions focused on digitizing public services and improving citizen engagement.",
          "Designed and implemented modular backend architecture in Laravel and MySQL.",
        ],
        skillsDetected: ["Laravel", "MySQL", "SQL", "ETL"],
        isVerified: false,
        verificationNotes: "Company domain not provided.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "work_2",
        title: {
          value: "Associate Software Engineer",
          rawText: "Associate Software Engineer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Associate Software Engineer",
        company: {
          value: "Hazesoft Pvt. Ltd.",
          rawText: "Hazesoft Pvt. Ltd.",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "Aug 2022",
          isoDate: "2022-08",
          isCurrent: false,
        },
        endDate: {
          rawText: "Jun 2023",
          isoDate: "2023-06",
          isCurrent: false,
        },
        description:
          "Developed features for a modular B2B/B2C eCommerce platform (HDL Platform).",
        responsibilities: [
          "Built reusable Laravel 9 modules for inventory management, order processing, and vendor integrations.",
          "Implemented Redis-based caching, reducing query times.",
          "Integrated Elasticsearch for high-performance search and dashboard experiences.",
          "Collaborated with cross-functional teams to improve scalability.",
        ],
        skillsDetected: ["Laravel", "Redis", "Elasticsearch"],
        isVerified: false,
        verificationNotes: "Company domain not provided.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "work_3",
        title: {
          value: "Software Engineer Intern",
          rawText: "Software Engineer Intern",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer Intern",
        company: {
          value: "LIS Nepal",
          rawText: "LIS Nepal",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "internship",
        startDate: {
          rawText: "Dec 2021",
          isoDate: "2021-12",
          isCurrent: false,
        },
        endDate: {
          rawText: "Jun 2022",
          isoDate: "2022-06",
          isCurrent: false,
        },
        description:
          "Worked on nationwide systems for Nepal Police including CCIS, DIRS, and Police Clearance registration.",
        responsibilities: [
          "Developed and optimized secure modules using .NET Framework 4.5 and Oracle 12C.",
          "Supported full SDLC including requirements gathering, development, testing, and deployment.",
        ],
        skillsDetected: [".NET", "Oracle"],
        isVerified: false,
        verificationNotes: "Company domain not provided.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "work_4",
        title: {
          value: "WordPress Development Intern",
          rawText: "WordPress Development Intern",
          confidence: 1.0,
          pageIndex: 1,
        },
        normalizedTitle: "WordPress Developer Intern",
        company: {
          value: "EPrabidhi Pvt. Ltd.",
          rawText: "EPrabidhi Pvt. Ltd.",
          confidence: 1.0,
          pageIndex: 1,
        },
        companyDomain: null,
        location: null,
        type: "internship",
        startDate: {
          rawText: "Sep 2019",
          isoDate: "2019-09",
          isCurrent: false,
        },
        endDate: {
          rawText: "Dec 2019",
          isoDate: "2019-12",
          isCurrent: false,
        },
        description:
          "Built and customized WordPress websites using tailored themes and plugins.",
        responsibilities: [
          "Built and customized WordPress websites using tailored themes and plugins.",
          "Delivered optimized configurations for client-specific requirements.",
        ],
        skillsDetected: ["WordPress"],
        isVerified: false,
        verificationNotes: "Company domain not provided.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_1",
        institution: {
          value: "Divya Gyan College",
          rawText: "Divya Gyan College",
          confidence: 1.0,
          pageIndex: 1,
        },
        degree: {
          value: "Bachelor in Computer Application",
          rawText: "Bachelor in Computer Application",
          confidence: 1.0,
          pageIndex: 1,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Application",
        startDate: null,
        endDate: null,
        gpa: null,
      },
      {
        id: "edu_2",
        institution: {
          value: "United Academy Higher Secondary School",
          rawText: "United Academy Higher Secondary School",
          confidence: 1.0,
          pageIndex: 1,
        },
        degree: {
          value: "XII",
          rawText: "XII",
          confidence: 1.0,
          pageIndex: 1,
        },
        normalizedDegree: "high_school",
        fieldOfStudy: null,
        startDate: null,
        endDate: null,
        gpa: null,
      },
    ],
    projects: [],
    certifications: [
      {
        name: "AWS Academy Graduate - Cloud Foundations",
        issuer: "AWS Academy",
        date: {
          rawText: "null",
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
    ],
    languages: [],
  },
  "19": {
    id: "resume_kritesh_pokhrel",
    analysis: {
      quality: {
        score: 92,
        level: "exceptional",
        hints: [
          "Highly detailed experience with specific technical achievements and metrics.",
          "Demonstrates advanced knowledge of both frontend (Angular) and backend (.NET Core) ecosystems.",
          "Excellent documentation of complex architectural tasks and leadership responsibilities.",
          "Clear evidence of working with modern DevOps and monitoring tools.",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.95,
        quantificationRate: 0.2,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Kritesh Pokhrel",
        rawText: "Kritesh Pokhrel",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "kriteshpokharel100@gmail.com",
          rawText: "kriteshpokharel100@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779866068872",
          rawText: "(+977) 9866068872",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Nepal",
        city: null,
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "[linkedin.com/in/kritesh-pokhrel](https://www.google.com/search?q=https://linkedin.com/in/kritesh-pokhrel)",
        },
        {
          type: "personal",
          url: "kriteshpokhrel.dev",
        },
      ],
      summary: null,
    },
    skills: [
      {
        name: "Angular",
        normalizedName: "Angular",
        category: "Technologies/Libraries",
        computedLevel: "expert",
        validityScore: 9.5,
        metadata: {
          firstSeen: "2022-08-01",
          lastUsed: "2025-09-01",
          totalMonthsExperience: 37,
          occurrenceCount: 6,
          sources: [
            {
              sectionId: "EXPERIENCE",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: ".NET Core",
        normalizedName: ".NET Core",
        category: "Technologies/Libraries",
        computedLevel: "expert",
        validityScore: 8.9,
        metadata: {
          firstSeen: "2022-08-01",
          lastUsed: "2025-09-01",
          totalMonthsExperience: 37,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "EXPERIENCE",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "TypeScript",
        normalizedName: "TypeScript",
        category: "Languages",
        computedLevel: "expert",
        validityScore: 8.5,
        metadata: {
          firstSeen: "2022-08-01",
          lastUsed: "2025-09-01",
          totalMonthsExperience: 37,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "EXPERIENCE",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "C#",
        normalizedName: "C#",
        category: "Languages",
        computedLevel: "advanced",
        validityScore: 8.0,
        metadata: {
          firstSeen: "2022-08-01",
          lastUsed: "2025-09-01",
          totalMonthsExperience: 37,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "EXPERIENCE",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Azure DevOps",
        normalizedName: "Azure DevOps",
        category: "Technologies/Libraries",
        computedLevel: "intermediate",
        validityScore: 6.8,
        metadata: {
          firstSeen: "2022-08-01",
          lastUsed: "2025-09-01",
          totalMonthsExperience: 37,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "EXPERIENCE",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "work_1",
        title: {
          value: "Software Engineer",
          rawText: "Software Engineer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer",
        company: {
          value: "Eurofins IT Solutions India Pvt. Ltd",
          rawText: "Eurofins IT Solutions India Pvt. Ltd",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "India",
          city: null,
          state: null,
          country: "India",
          zipCode: null,
          countryCode: "IN",
        },
        type: "full-time",
        startDate: {
          rawText: "AUG 2022",
          isoDate: "2022-08",
          isCurrent: false,
        },
        endDate: {
          rawText: "SEPTEMBER 2025",
          isoDate: "2025-09",
          isCurrent: false,
        },
        description:
          "Project: Off Site Management (OSM). Developed and optimized a PWA for offline sample collection using Service Workers, IndexedDB, and GPS.",
        responsibilities: [
          "Developed and optimized a PWA for offline sample collection, enhancing field operability.",
          "Built reusable Angular-based component library for Form & Geo controls.",
          "Engineered scalable REST APIs and microservices using .NET Core and MS SQL.",
          "Optimized Sync and Parcels/Container modules, reducing execution times by 85%.",
          "Led Angular upgrades (v10 to v16), improving maintainability.",
          "Established CI/CD pipelines on Azure DevOps.",
          "Planned application domain and architectural approach, conducted code reviews, and provided mentoring.",
        ],
        skillsDetected: [
          "Angular",
          "PWA",
          ".NET Core",
          "MS SQL",
          "Microservices",
          "TypeScript",
          "Azure DevOps",
          "C#",
        ],
        isVerified: false,
        verificationNotes:
          "Evidence of complex architectural tasks and specific optimization metrics (85% reduction).",
        verificationConfidence: 0.9,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_1",
        institution: {
          value: "New Horizon College of Engineering",
          rawText: "New Horizon College of Engineering",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor's in Computer Science & Engineering",
          rawText: "Bachelor's in Computer Science & Engineering",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Science & Engineering",
        startDate: {
          rawText: "AUG 2018",
          isoDate: "2018-08",
          isCurrent: false,
        },
        endDate: {
          rawText: "JUL 2022",
          isoDate: "2022-07",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "SEVA: Secure E-Voting Application",
        description:
          "Developed a decentralized e-voting platform on Ethereum ensuring election transparency and security.",
        url: null,
        skillsUsed: ["ReactJS", "Solidity", "Web3.js"],
      },
      {
        name: "VisionEd",
        description:
          "Created an Android assistant app for visually impaired users offering communication and safety features.",
        url: null,
        skillsUsed: ["Java"],
      },
      {
        name: "SearchTap",
        description:
          "Built a child-safe search engine incorporating NLP keyword filtering to block inappropriate content.",
        url: null,
        skillsUsed: ["Flask", "TensorFlow", "Firebase"],
      },
    ],
    certifications: [],
    languages: [],
  },
  "20": {
    id: "resume_main",
    analysis: {
      quality: {
        score: 78,
        level: "high",
        hints: [
          "Include more quantifiable metrics in work responsibilities.",
          "Ensure dates in work history are chronological (currently shows 2024-2023 in intern role).",
          "Add more details to academic projects to increase content depth.",
        ],
      },
      suspicion: {
        score: 15,
        level: "safe",
        flags: [
          {
            type: "date_discrepancy",
            severity: "low",
            description:
              "Internship dates (04/2024-07/2023) appear to be reversed or contain a typo.",
          },
        ],
      },
      writingStyle: {
        actionVerbsRate: 0.8,
        quantificationRate: 0.0,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Kshitij Jung Shahi",
        rawText: "KSHITIJ JUNG SHAHI",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "kshitij.shahi97031@gmail.com",
          rawText: "kshitij.shahi97031@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779843004285",
          rawText: "+977-9843004285",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Kathmandu, Nepal",
        city: "Kathmandu",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "[https://www.linkedin.com/in/kshitij-jung-shahi-781428307/](https://www.linkedin.com/in/kshitij-jung-shahi-781428307/)",
        },
        {
          type: "github",
          url: "[https://github.com/Moeel149](https://github.com/Moeel149)",
        },
        {
          type: "portfolio",
          url: "[https://kshitijshahi.com.np/](https://kshitijshahi.com.np/)",
        },
      ],
      summary:
        "I'm a full-stack developer and student with a strong interest in both frontend and backend technologies. I'm curious, always learning, and enjoy solving problems through code. Balancing studies and development has helped me stay organized, adaptable, and motivated to keep improving every day.",
    },
    skills: [
      {
        name: "HTML",
        normalizedName: "HTML",
        category: "Frontend",
        computedLevel: "advanced",
        validityScore: 7.2,
        metadata: {
          firstSeen: "2023-04-01",
          lastUsed: "2025-02-01",
          totalMonthsExperience: 22,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
            {
              sectionId: "experience",
              sectionType: "experience",
            },
            {
              sectionId: "project",
              sectionType: "project",
            },
          ],
        },
      },
      {
        name: "CSS",
        normalizedName: "CSS",
        category: "Frontend",
        computedLevel: "advanced",
        validityScore: 7.2,
        metadata: {
          firstSeen: "2023-04-01",
          lastUsed: "2025-02-01",
          totalMonthsExperience: 22,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "JavaScript",
        normalizedName: "JavaScript",
        category: "Frontend",
        computedLevel: "advanced",
        validityScore: 7.5,
        metadata: {
          firstSeen: "2023-04-01",
          lastUsed: "2025-02-01",
          totalMonthsExperience: 22,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "TypeScript",
        normalizedName: "TypeScript",
        category: "Programming Languages",
        computedLevel: "intermediate",
        validityScore: 5.8,
        metadata: {
          firstSeen: "2024-04-01",
          lastUsed: "2025-02-01",
          totalMonthsExperience: 10,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "React.js",
        normalizedName: "React.js",
        category: "Frontend",
        computedLevel: "intermediate",
        validityScore: 5.5,
        metadata: {
          firstSeen: "2024-04-01",
          lastUsed: "2025-02-01",
          totalMonthsExperience: 10,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Next.js",
        normalizedName: "Next.js",
        category: "Frontend",
        computedLevel: "intermediate",
        validityScore: 5.5,
        metadata: {
          firstSeen: "2024-09-01",
          lastUsed: "2025-02-01",
          totalMonthsExperience: 6,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Node.js",
        normalizedName: "Node.js",
        category: "Backend",
        computedLevel: "intermediate",
        validityScore: 5.5,
        metadata: {
          firstSeen: "2024-09-01",
          lastUsed: "2025-02-01",
          totalMonthsExperience: 6,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "PHP",
        normalizedName: "PHP",
        category: "Backend",
        computedLevel: "intermediate",
        validityScore: 5.5,
        metadata: {
          firstSeen: "2023-04-01",
          lastUsed: "2024-07-01",
          totalMonthsExperience: 15,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "PostgreSQL",
        normalizedName: "PostgreSQL",
        category: "Database",
        computedLevel: "novice",
        validityScore: 2.8,
        metadata: {
          firstSeen: "2024-04-01",
          lastUsed: "2025-02-01",
          totalMonthsExperience: 10,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Docker",
        normalizedName: "Docker",
        category: "DevOps",
        computedLevel: "novice",
        validityScore: 2.2,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: 0,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_1",
        title: {
          value: "Web Developer",
          rawText: "Web Developer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Web Developer",
        company: {
          value: "Neptune TechZone",
          rawText: "Neptune TechZone",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Dillibazar, Kathmandu",
          city: "Kathmandu",
          state: null,
          country: null,
          zipCode: null,
          countryCode: null,
        },
        type: "full-time",
        startDate: {
          rawText: "09/2024",
          isoDate: "2024-09",
          isCurrent: false,
        },
        endDate: {
          rawText: "02/2025",
          isoDate: "2025-02",
          isCurrent: false,
        },
        description:
          "Developed and maintained the company website using Next.js and Node.js, improving scalability and performance.",
        responsibilities: [
          "Developed and maintained the company website using Next.js and Node.js.",
          "Boosted user engagement by optimizing UI responsiveness and load speed.",
          "Collaborated with designers and backend teams for seamless integration.",
        ],
        skillsDetected: ["Next.js", "Node.js", "UI Optimization"],
        isVerified: false,
        verificationNotes: "Company domain not provided.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "exp_2",
        title: {
          value: "Web Developer Intern",
          rawText: "Web Developer Intern",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Web Developer Intern",
        company: {
          value: "Rapid Web Solutions",
          rawText: "Rapid Web Solutions",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Durbar Marg, Kathmandu",
          city: "Kathmandu",
          state: null,
          country: null,
          zipCode: null,
          countryCode: null,
        },
        type: "internship",
        startDate: {
          rawText: "04/2024",
          isoDate: "2024-04",
          isCurrent: false,
        },
        endDate: {
          rawText: "07/2023",
          isoDate: "2023-07",
          isCurrent: false,
        },
        description:
          "Gained hands-on experience with semantic HTML, SCSS, and project structuring for scalable codebases.",
        responsibilities: [
          "Gained hands-on experience with semantic HTML, SCSS, and project structuring.",
          "Designed and deployed responsive websites using WordPress and PHP backend.",
        ],
        skillsDetected: ["HTML", "SCSS", "WordPress", "PHP"],
        isVerified: false,
        verificationNotes: "End date precedes start date.",
        verificationConfidence: 0.4,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_1",
        institution: {
          value: "Padmashree College",
          rawText: "Padmashree College",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor's in IT",
          rawText: "Bachelor's in IT",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Information Technology",
        startDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        endDate: {
          rawText: "ongoing",
          isoDate: null,
          isCurrent: true,
        },
        gpa: null,
      },
      {
        id: "edu_2",
        institution: {
          value: "Capital College and Research Center",
          rawText: "Capital College and Reseach Center",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "Higher Education",
          rawText: "Higher Education",
          confidence: 0.8,
          pageIndex: 0,
        },
        normalizedDegree: "high_school",
        fieldOfStudy: null,
        startDate: {
          rawText: "2019",
          isoDate: "2019",
          isCurrent: false,
        },
        endDate: {
          rawText: "2021",
          isoDate: "2021",
          isCurrent: false,
        },
        gpa: {
          score: 3.71,
          scale: 4.0,
        },
      },
      {
        id: "edu_3",
        institution: {
          value: "Sainik Awasiya Mahavidalaya",
          rawText: "Sainik Awasiya Mahavidalaya",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "Secondary Education",
          rawText: "Secondary Education",
          confidence: 0.8,
          pageIndex: 0,
        },
        normalizedDegree: "high_school",
        fieldOfStudy: null,
        startDate: {
          rawText: "2012",
          isoDate: "2012",
          isCurrent: false,
        },
        endDate: {
          rawText: "2019",
          isoDate: "2019",
          isCurrent: false,
        },
        gpa: {
          score: 3.75,
          scale: 4.0,
        },
      },
    ],
    projects: [
      {
        name: "Guitar House E-commerce Website",
        description:
          "E-commerce Website built using HTML, CSS, JS, PHP, and mySQL.",
        url: "[https://github.com/Moeell49/Guitar](https://github.com/Moeell49/Guitar) House eCommerce Website",
        skillsUsed: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      },
      {
        name: "Chat-Application",
        description:
          "Chat-Application using ReactJs, Typescript, Tailwind, nodeJs and PostgreSQL.",
        url: "[https://github.com/Moeel149/Chat-app](https://www.google.com/search?q=https://github.com/Moeel149/Chat-app)",
        skillsUsed: [
          "ReactJs",
          "Typescript",
          "Tailwind",
          "Node.js",
          "PostgreSQL",
        ],
      },
    ],
    certifications: [
      {
        name: "2nd Runner Up in Techthon",
        issuer: "Padmashree College",
        date: {
          rawText: null,
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
      {
        name: "Winning Certificate of School Level Cricket Tournament",
        issuer: "Sainik Awasiya Mahavidalaya",
        date: {
          rawText: null,
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
    ],
    languages: [],
  },
  "21": {
    id: "resume_23",
    analysis: {
      quality: {
        score: 55,
        level: "average",
        hints: [
          "Add specific project descriptions and outcomes to demonstrate impact.",
          "Include information about internships or university activities to bolster professional experience.",
          "Quantify skills or project features (e.g., number of users, performance improvements).",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.5,
        quantificationRate: 0.0,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Narayan Adhikari",
        rawText: "NARAYAN ADHIKARI",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "narayanabin223@gmail.com",
          rawText: "narayanabin223@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779861289616",
          rawText: "+977-9861289616",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Lalitpur, Nepal",
        city: "Lalitpur",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "[https://www.linkedin.com/in/narayan-adhikari](https://www.google.com/search?q=https://www.linkedin.com/in/narayan-adhikari)",
        },
        {
          type: "github",
          url: "[https://github.com/narayan](https://github.com/narayan)",
        },
      ],
      summary:
        "I have just completed my B.E and I am looking for a suitable role at a company where I can apply my skills and gain professional experience by working in real world projects. I want to be a Full-stack Developer.",
    },
    skills: [
      {
        name: "Java",
        normalizedName: "Java",
        category: "Programming Languages",
        computedLevel: "advanced",
        validityScore: 6.5,
        metadata: {
          firstSeen: "2021-09-01",
          lastUsed: "2025-09-01",
          totalMonthsExperience: 48,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "education",
            },
          ],
        },
      },
      {
        name: "JavaScript",
        normalizedName: "JavaScript",
        category: "Programming Languages",
        computedLevel: "advanced",
        validityScore: 6.5,
        metadata: {
          firstSeen: "2021-09-01",
          lastUsed: "2025-09-01",
          totalMonthsExperience: 48,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "education",
            },
          ],
        },
      },
      {
        name: "Python",
        normalizedName: "Python",
        category: "Programming Languages",
        computedLevel: "intermediate",
        validityScore: 5.5,
        metadata: {
          firstSeen: "2021-09-01",
          lastUsed: "2025-09-01",
          totalMonthsExperience: 48,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "education",
            },
          ],
        },
      },
      {
        name: "ReactJS",
        normalizedName: "ReactJS",
        category: "Frontend",
        computedLevel: "intermediate",
        validityScore: 5.2,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: null,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "skills",
              sectionType: "education",
            },
          ],
        },
      },
      {
        name: "SQL",
        normalizedName: "SQL",
        category: "Database",
        computedLevel: "intermediate",
        validityScore: 4.5,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: null,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "education",
            },
          ],
        },
      },
      {
        name: "Git",
        normalizedName: "Git",
        category: "Tools",
        computedLevel: "intermediate",
        validityScore: 4.0,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: null,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "education",
            },
          ],
        },
      },
    ],
    workExperience: [],
    education: [
      {
        id: "edu_23_1",
        institution: {
          value: "IOE Purwanchal Campus, Dharan",
          rawText: "IOE Purwanchal Campus, Dharan",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "B.E. Computer Engineering",
          rawText: "B.E. COMPUTER ENGINEERING",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Engineering",
        startDate: null,
        endDate: {
          rawText: "September 2025",
          isoDate: "2025-09",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "Frontend for organization",
        description:
          "Worked on implementing frontend of a website for a organization.",
        url: null,
        skillsUsed: ["HTML", "CSS", "ReactJS"],
      },
      {
        name: "Full Stack Auth App",
        description: "Full Stack Auth App with MERN deployment.",
        url: null,
        skillsUsed: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      },
    ],
    certifications: [],
    languages: [],
  },
  "22": {
    id: "resume_21",
    analysis: {
      quality: {
        score: 72,
        level: "high",
        hints: [
          "Fix formatting issues in the experience section to clarify dates.",
          "Ensure consistency between the roles listed in the experience section and the skills profile.",
          "Expand on specific technologies used in the 'Solution Development' skill.",
        ],
      },
      suspicion: {
        score: 25,
        level: "concern",
        flags: [
          {
            type: "timeline_overlap",
            severity: "medium",
            description:
              "Multiple roles (Software Engineer, Web Developer) listed with overlapping or ambiguous dates in 2023.",
          },
        ],
      },
      writingStyle: {
        actionVerbsRate: 0.85,
        quantificationRate: 0.1,
        clicheCount: 2,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Madhukar Gumanju",
        rawText: "MADHUKAR GUMANJU",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "madhugumangu@gmail.com",
          rawText: "madhugumangu@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779840786886",
          rawText: "+977 9840786886",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Suryebinayak-5, Bhaktapur, Nepal",
        city: "Bhaktapur",
        state: "Suryebinayak-5",
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "personal",
          url: "[http://madhukargumanju.com.np](https://www.google.com/search?q=http://madhukargumanju.com.np)",
        },
      ],
      summary:
        "Highly motivated employee eager to take on new challenges, with a strong work ethic, adaptability, and exceptional interpersonal skills. Skilled at working independently as well as under supervision, and quickly mastering new skills.",
    },
    skills: [
      {
        name: "Node.js",
        normalizedName: "Node.js",
        category: "Backend",
        computedLevel: "intermediate",
        validityScore: 5.8,
        metadata: {
          firstSeen: null,
          lastUsed: "2023-09-01",
          totalMonthsExperience: null,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "MySQL",
        normalizedName: "MySQL",
        category: "Database",
        computedLevel: "intermediate",
        validityScore: 5.8,
        metadata: {
          firstSeen: null,
          lastUsed: "2023-09-01",
          totalMonthsExperience: null,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "ReactJS",
        normalizedName: "ReactJS",
        category: "Frontend",
        computedLevel: "intermediate",
        validityScore: 5.5,
        metadata: {
          firstSeen: null,
          lastUsed: "2023-09-01",
          totalMonthsExperience: null,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Agile",
        normalizedName: "Agile",
        category: "Project Management",
        computedLevel: "intermediate",
        validityScore: 5.2,
        metadata: {
          firstSeen: null,
          lastUsed: "2023-09-01",
          totalMonthsExperience: null,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_21_1",
        title: {
          value: "Software Engineer",
          rawText: "SOFTWARE ENGINEER",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer",
        company: {
          value: "AEIRC",
          rawText: "AEIRC-ADVANCE EDUCATION INNOVATIVE RESEARCH CENTER",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: "aeirc.tech",
        location: null,
        type: "full-time",
        startDate: {
          rawText: "SEP 2023",
          isoDate: "2023-09",
          isCurrent: true,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Develop, test, and maintain scalable and efficient software solutions. Collaborate with cross-functional teams.",
        responsibilities: [
          "Develop, test, and maintain scalable and efficient software solutions.",
          "Collaborate with cross-functional teams to define, design, and implement new features.",
          "Debug and troubleshoot issues, ensuring optimal performance and reliability.",
          "Ensure software security, data protection, and compliance with industry standards.",
        ],
        skillsDetected: ["Software Development", "Security", "Troubleshooting"],
        isVerified: true,
        verificationNotes: "Domain exists and aligns with title.",
        verificationConfidence: 0.9,
        verificationDate: null,
      },
      {
        id: "exp_21_2",
        title: {
          value: "Web Developer",
          rawText: "WEB DEVELOPER",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Web Developer",
        company: {
          value: "AEIRC",
          rawText: "AEIRC",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: "aeirc.tech",
        location: null,
        type: "full-time",
        startDate: {
          rawText: "FEB 2023",
          isoDate: "2023-02",
          isCurrent: false,
        },
        endDate: {
          rawText: "AUG 2023",
          isoDate: "2023-08",
          isCurrent: false,
        },
        description:
          "Develop and maintain scalable web applications with modern frontend and backend technologies.",
        responsibilities: [
          "Develop and maintain scalable web applications.",
          "Build responsive, user-friendly UIs and interactive web components.",
        ],
        skillsDetected: ["Web Development", "UI"],
        isVerified: true,
        verificationNotes: null,
        verificationConfidence: 0.8,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_21_1",
        institution: {
          value: "ISMT - Kathmandu, Nepal",
          rawText:
            "Int'l School of Management and Technology (ISMT) - Kathmandu, Nepal",
          confidence: 1.0,
          pageIndex: 1,
        },
        degree: {
          value: "BSc.IT (Hons) Computer System Engineering",
          rawText: "BSC.IT (HONS) COMPUTER SYSTEM ENGINEERING",
          confidence: 1.0,
          pageIndex: 1,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer System Engineering",
        startDate: null,
        endDate: {
          rawText: "JUNE 20XX",
          isoDate: null,
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [],
    certifications: [
      {
        name: "React Frontend Development Course",
        issuer: "Next Step",
        date: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
    ],
    languages: [],
  },
  "23": {
    id: "resume_22",
    analysis: {
      quality: {
        score: 92,
        level: "exceptional",
        hints: [
          "The resume is highly professional with clear quantification of achievements.",
          "Strong evidence of specialized skills through publications and patents.",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.95,
        quantificationRate: 0.6,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Manash Sangam",
        rawText: "MANASH SANGAM",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "manashsangam04@gmail.com",
          rawText: "manashsangam04@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779803369741",
          rawText: "+9779803369741",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Kathmandu, Nepal",
        city: "Kathmandu",
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "personal",
          url: "[https://www.manash-sangam.com.np](https://www.google.com/search?q=https://www.manash-sangam.com.np)",
        },
        {
          type: "linkedin",
          url: "[https://www.linkedin.com/in/manash-sangam/](https://www.linkedin.com/in/manash-sangam/)",
        },
      ],
      summary:
        "Software Engineer specializing in JavaScript, Python, and Go, with expertise in backend development, DevOps, and building scalable full-stack solutions. Passionate about Linux, open-source technologies, and automation.",
    },
    skills: [
      {
        name: "Go",
        normalizedName: "Go",
        category: "Programming Languages",
        computedLevel: "expert",
        validityScore: 9.2,
        metadata: {
          firstSeen: "2023-07-01",
          lastUsed: "2024-12-22",
          totalMonthsExperience: 18,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Docker",
        normalizedName: "Docker",
        category: "Cloud & DevOps",
        computedLevel: "advanced",
        validityScore: 8.1,
        metadata: {
          firstSeen: "2023-07-01",
          lastUsed: "2024-12-22",
          totalMonthsExperience: 18,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_22_1",
        title: {
          value: "Software Engineer",
          rawText: "Software Engineer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Software Engineer",
        company: {
          value: "HSBC Technology India",
          rawText: "HSBC Technology India",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: "hsbc.com",
        location: {
          rawInput: "India",
          city: null,
          state: null,
          country: "India",
          zipCode: null,
          countryCode: "IN",
        },
        type: "full-time",
        startDate: {
          rawText: "Jul 2024",
          isoDate: "2024-07",
          isCurrent: true,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Developed full-stack solutions transforming data lineage usage within the organization.",
        responsibilities: [
          "Developed full-stack solutions that transformed data lineage usage.",
          "Streamlined the process of understanding data flow across applications.",
          "Built interactive tools for better decision-making and documentation.",
        ],
        skillsDetected: ["React", "JavaScript", "Python", "Flask", "Linux"],
        isVerified: true,
        verificationNotes: "Reputable company and consistent role details.",
        verificationConfidence: 1.0,
        verificationDate: "2025-12-22",
      },
    ],
    education: [
      {
        id: "edu_22_1",
        institution: {
          value: "Kalinga Institute of Industrial Technology",
          rawText: "Kalinga Institute of Industrial Technology, Bhubaneswar",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "B.Tech in Computer Science and Engineering",
          rawText: "B.Tech in Computer Science and Engineering",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Science",
        startDate: {
          rawText: "2020",
          isoDate: "2020",
          isCurrent: false,
        },
        endDate: {
          rawText: "2024",
          isoDate: "2024",
          isCurrent: false,
        },
        gpa: {
          score: 9.52,
          scale: 10.0,
        },
      },
    ],
    projects: [
      {
        name: "RFID-HR-Attendance-Tracker",
        description: "Go based Backend API for Employee Attendance Tracking.",
        url: null,
        skillsUsed: ["Go", "ESP8266", "RFID"],
      },
    ],
    certifications: [],
    languages: [],
  },
  "24": {
    id: "resume_24",
    analysis: {
      quality: {
        score: 82,
        level: "high",
        hints: [
          "Quantify achievements in the summary or experience sections (e.g., percentage improvement in load times). ",
          "Provide more specific details for the 'Learning Management System' project. ",
          "Highlight any leadership or collaborative achievements beyond technical tasks. ",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.9,
        quantificationRate: 0.1,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Niraj Byanju",
        rawText: "Niraj Byanju",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "nirajbyanju1234@gmail.com",
          rawText: "nirajbyanju1234@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779843906039",
          rawText: "+977 9843906039",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Nepal",
        city: null,
        state: null,
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "LinkedIn",
        },
        {
          type: "github",
          url: "GitHub",
        },
        {
          type: "portfolio",
          url: "Portfolio",
        },
      ],
      summary:
        "Full-stack Developer with expertise in Laravel, CodeIgniter, and React. Experienced in developing web applications and websites, with a strong background in both front-end and backend technologies. ",
    },
    skills: [
      {
        name: "Laravel",
        normalizedName: "Laravel",
        category: "Backend",
        computedLevel: "advanced",
        validityScore: 8.5,
        metadata: {
          firstSeen: "2019-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 83,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "React.js",
        normalizedName: "React.js",
        category: "Frontend",
        computedLevel: "advanced",
        validityScore: 7.8,
        metadata: {
          firstSeen: "2019-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 83,
          occurrenceCount: 4,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "CodeIgniter",
        normalizedName: "CodeIgniter",
        category: "Backend",
        computedLevel: "intermediate",
        validityScore: 6.8,
        metadata: {
          firstSeen: "2023-12-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 24,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "MySQL",
        normalizedName: "MySQL",
        category: "Database",
        computedLevel: "advanced",
        validityScore: 7.5,
        metadata: {
          firstSeen: "2019-01-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 83,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_24_1",
        title: {
          value: "Full-Stack Developer",
          rawText: "Full-Stack Developer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Full Stack Developer",
        company: {
          value: "Midas Health Services",
          rawText: "Midas Health Services",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "February 2025",
          isoDate: "2025-02",
          isCurrent: true,
        },
        endDate: {
          rawText: "present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Hospital Management System development focusing on Laravel and CodeIgniter. ",
        responsibilities: [
          "Debugged and resolved issues in the existing hospital management system to improve performance and stability. ",
          "Optimized database queries and views for better efficiency and faster load times. ",
          "Developed and implemented new features based on client requirements using Laravel and CodeIgniter frameworks. ",
        ],
        skillsDetected: ["Laravel", "CodeIgniter", "Database Optimization"],
        isVerified: false,
        verificationNotes: "Missing company domain.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "exp_24_2",
        title: {
          value: "Full-Stack Developer",
          rawText: "Full-Stack Developer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Full Stack Developer",
        company: {
          value: "Seshar Innovation",
          rawText: "Seshar Innovation",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "December 2023",
          isoDate: "2023-12",
          isCurrent: false,
        },
        endDate: {
          rawText: "November 2024",
          isoDate: "2024-11",
          isCurrent: false,
        },
        description:
          "Enhanced the CIMS system and developed an order management system. ",
        responsibilities: [
          "Enhanced the CIMS system (CodeIgniter) by fixing bugs and adding email notifications, referral system, and password recovery. ",
          "Developed an order management system (Laravel) with target reports, daily call reports, and product modules. ",
          "Designed user interfaces using Bootstrap and integrated APIs with Axios in a React-based application. ",
        ],
        skillsDetected: [
          "CodeIgniter",
          "Laravel",
          "Bootstrap",
          "React.js",
          "Axios",
        ],
        isVerified: false,
        verificationNotes: "Missing company domain.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_24_1",
        institution: {
          value: "Nilai University",
          rawText: "Nilai University",
          confidence: 1.0,
          pageIndex: 1,
        },
        degree: {
          value: "Bachelor's in Information Technology",
          rawText: "Bachelor's in Information Technology",
          confidence: 1.0,
          pageIndex: 1,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Information Technology",
        startDate: {
          rawText: "January 2020",
          isoDate: "2020-01",
          isCurrent: false,
        },
        endDate: {
          rawText: "March 2024",
          isoDate: "2024-03",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "Opportunities Sharing Website",
        description:
          "Developed a comprehensive web application for sharing and discovering opportunities such as internships and scholarships. ",
        url: null,
        skillsUsed: [
          "Laravel",
          "Bootstrap",
          "React.js",
          "Tailwind",
          "MySQL",
          "Git",
        ],
      },
    ],
    certifications: [],
    languages: [],
  },
  "25": {
    id: "resume_25",
    analysis: {
      quality: {
        score: 85,
        level: "high",
        hints: [
          "Include specific metrics for 'impactful digital experiences' or 'improved developer productivity'. ",
          "Add details about the 'complex mono platform application' to showcase depth. ",
          "Clarify the specific contributions made as a 'Freelancer'. ",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.95,
        quantificationRate: 0.0,
        clicheCount: 1,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Noyal Nakarmi",
        rawText: "Noyal Nakarmi",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "noyal12.nakarmi@gmail.com",
          rawText: "noyal12.nakarmi@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779862425308",
          rawText: "+977 9862425308",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Satungal, KTM",
        city: "Kathmandu",
        state: "KTM",
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [
        {
          type: "linkedin",
          url: "Linkedin",
        },
        {
          type: "github",
          url: "Noyal080",
        },
        {
          type: "portfolio",
          url: "Portfolio",
        },
      ],
      summary:
        "Front-End Engineer with 2+ year of experience crafting dynamic web and mobile applications. Known for developing custom packages to improve developer productivity and creating responsive designs. ",
    },
    skills: [
      {
        name: "React JS",
        normalizedName: "React JS",
        category: "Frontend",
        computedLevel: "expert",
        validityScore: 9.0,
        metadata: {
          firstSeen: "2023-04-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 32,
          occurrenceCount: 7,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "TypeScript",
        normalizedName: "TypeScript",
        category: "Programming Languages",
        computedLevel: "advanced",
        validityScore: 8.2,
        metadata: {
          firstSeen: "2024-07-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 17,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Next JS",
        normalizedName: "Next JS",
        category: "Frontend",
        computedLevel: "intermediate",
        validityScore: 6.5,
        metadata: {
          firstSeen: "2024-09-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 15,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Redux",
        normalizedName: "Redux",
        category: "State Management",
        computedLevel: "advanced",
        validityScore: 7.5,
        metadata: {
          firstSeen: "2023-04-01",
          lastUsed: "2024-10-01",
          totalMonthsExperience: 18,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_25_1",
        title: {
          value: "Frontend Engineer",
          rawText: "Frontend Engineer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Frontend Engineer",
        company: {
          value: "Zeta Labs",
          rawText: "Zeta Labs",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Kuleswor, Kathmandu",
          city: "Kathmandu",
          state: "Kuleswor",
          country: null,
          zipCode: null,
          countryCode: null,
        },
        type: "full-time",
        startDate: {
          rawText: "09/2024",
          isoDate: "2024-09",
          isCurrent: true,
        },
        endDate: {
          rawText: "present",
          isoDate: null,
          isCurrent: true,
        },
        description: "Developed web applications and the company portfolio. ",
        responsibilities: [
          "Developed a web application using React, react-query, Hero UI, and TypeScript for resource access. ",
          "Created the company's portfolio using Next JS, Tailwind CSS, and TypeScript with an SMTP mail service. ",
          "Developed a complex mono platform application using React JS, Tailwind CSS, and Shaden UI. ",
        ],
        skillsDetected: [
          "React",
          "react-query",
          "Next JS",
          "TypeScript",
          "Tailwind CSS",
        ],
        isVerified: false,
        verificationNotes: "Missing company domain.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
      {
        id: "exp_25_2",
        title: {
          value: "Frontend Developer",
          rawText: "Frontend Developer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Frontend Developer",
        company: {
          value: "Corpola Tech",
          rawText: "Corpola Tech",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Sankhamul, Laliltpur",
          city: "Laliltpur",
          state: "Sankhamul",
          country: null,
          zipCode: null,
          countryCode: null,
        },
        type: "full-time",
        startDate: {
          rawText: "04/2023",
          isoDate: "2023-04",
          isCurrent: false,
        },
        endDate: {
          rawText: "10/2024",
          isoDate: "2024-10",
          isCurrent: false,
        },
        description: "Developed LMS and e-commerce platforms. ",
        responsibilities: [
          "Developed a Learning Management system using React JS, Semantic UI, and Context. ",
          "Developed an e-commerce website with an admin dashboard using Redux and Tailwind CSS. ",
          "Developed and posted a custom package for e-commerce layout on NPM. ",
        ],
        skillsDetected: ["React JS", "Redux", "Semantic UI", "NPM"],
        isVerified: false,
        verificationNotes: "Missing company domain.",
        verificationConfidence: 0.7,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_25_1",
        institution: {
          value: "Kathmandu Bernhardt College",
          rawText: "Kathmandu Bernhardt College",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "BSc Computer Science and Information Technology",
          rawText: "BSc Computer Science and Information Technology",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Science and Information Technology",
        startDate: {
          rawText: "2018",
          isoDate: "2018",
          isCurrent: false,
        },
        endDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [],
    certifications: [],
    languages: [],
  },
  "26": {
    id: "resume_26",
    analysis: {
      quality: {
        score: 90,
        level: "exceptional",
        hints: [
          "Strong quantification of results (e.g., 40% reduction in unauthorized access, 30% cost reduction). ",
          "Clear evidence of complex system integration and technical leadership. ",
          "Include a LinkedIn profile or portfolio link for a stronger social footprint.",
        ],
      },
      suspicion: {
        score: 0,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 1.0,
        quantificationRate: 0.4,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "match",
        socialFootprintFound: false,
      },
    },
    basics: {
      name: {
        value: "Pradip Kafle",
        rawText: "Pradip Kafle",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "n.pradip101@gmail.com",
          rawText: "n.pradip101@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+9779846465013",
          rawText: "+977 9846465013",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Koteshwor, Kathmandu",
        city: "Kathmandu",
        state: "Koteshwor",
        country: "Nepal",
        zipCode: null,
        countryCode: "NP",
      },
      urls: [],
      summary:
        "Skilled in Python programming, problem-solving, and implementing efficient solutions. Strong grasp of the Django framework intricacies, coupled with a commitment to clean code practices. ",
    },
    skills: [
      {
        name: "Python",
        normalizedName: "Python",
        category: "Programming Languages",
        computedLevel: "expert",
        validityScore: 9.5,
        metadata: {
          firstSeen: "2022-06-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 42,
          occurrenceCount: 6,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Django",
        normalizedName: "Django",
        category: "Backend",
        computedLevel: "expert",
        validityScore: 9.2,
        metadata: {
          firstSeen: "2022-06-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 42,
          occurrenceCount: 5,
          sources: [
            {
              sectionId: "experience",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "PostgreSQL",
        normalizedName: "PostgreSQL",
        category: "Database",
        computedLevel: "advanced",
        validityScore: 7.8,
        metadata: {
          firstSeen: "2022-06-01",
          lastUsed: "2025-12-22",
          totalMonthsExperience: 42,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "Docker",
        normalizedName: "Docker",
        category: "DevOps",
        computedLevel: "intermediate",
        validityScore: 5.5,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: null,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_26_1",
        title: {
          value: "Python Software Engineer",
          rawText: "Python Software Engineer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Python Software Engineer",
        company: {
          value: "Khalti Pvt. Ltd",
          rawText: "Khalti Pvt. Ltd",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: "khalti.com",
        location: {
          rawInput: "Bakhundol, Lalitpur",
          city: "Lalitpur",
          state: "Bakhundol",
          country: null,
          zipCode: null,
          countryCode: null,
        },
        type: "full-time",
        startDate: {
          rawText: "May 2024",
          isoDate: "2024-05",
          isCurrent: true,
        },
        endDate: {
          rawText: "Present",
          isoDate: null,
          isCurrent: true,
        },
        description:
          "Engineered secure payment features and bank integrations. ",
        responsibilities: [
          "Engineered the VPA feature for secure fund transfers via mobile numbers. ",
          "Implemented a self-verification layer for transaction records, achieving a 30% cost reduction. ",
          "Integrated Khalti with bank Core Banking Systems using the ISO 8583 protocol. ",
        ],
        skillsDetected: ["Python", "ISO 8583", "API Integration"],
        isVerified: true,
        verificationNotes: "Reputable company and consistent role details.",
        verificationConfidence: 1.0,
        verificationDate: "2025-12-22",
      },
      {
        id: "exp_26_2",
        title: {
          value: "Python Developer",
          rawText: "Python Developer",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Python Developer",
        company: {
          value: "MangoSoftware Solutions",
          rawText: "MangoSoftware Solutions",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: {
          rawInput: "Kathmandu",
          city: "Kathmandu",
          state: null,
          country: null,
          zipCode: null,
          countryCode: null,
        },
        type: "full-time",
        startDate: {
          rawText: "June 2022",
          isoDate: "2022-06",
          isCurrent: false,
        },
        endDate: {
          rawText: "May 2024",
          isoDate: "2024-05",
          isCurrent: false,
        },
        description:
          "Spearheaded video KYC and document transfer systems for banks. ",
        responsibilities: [
          "Spearheaded the development of a video KYC system for Prabhu Bank using DRF, Celery, and Redis. ",
          "Mentored interns through the development of a Document Transfer System (ADC). ",
          "Executed JWT-based authentication for Midwest University, reducing unauthorized access by 40%. ",
        ],
        skillsDetected: ["Django", "DRF", "Celery", "Redis", "JWT"],
        isVerified: false,
        verificationNotes: "Missing company domain.",
        verificationConfidence: 0.8,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_26_1",
        institution: {
          value: "NEW SUMMIT COLLEGE",
          rawText: "NEW SUMMIT COLLEGE, TRIBHUWAN UNIVERSITY",
          confidence: 1.0,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelors of Computer Science and Information Technology",
          rawText: "Bachelors of Computer Science and Information Technology",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Science and Information Technology",
        startDate: {
          rawText: "2019",
          isoDate: "2019",
          isCurrent: false,
        },
        endDate: {
          rawText: "2023",
          isoDate: "2023",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [],
    certifications: [
      {
        name: "Python Data Structure",
        issuer: "Coursera",
        date: {
          rawText: null,
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
      {
        name: "Oracle SQL Certification course",
        issuer: "Udemy",
        date: {
          rawText: null,
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
    ],
    languages: [],
  },
  "27": {
    id: "resume_27",
    analysis: {
      quality: {
        score: 62,
        level: "average",
        hints: [
          "Provide specific dates for the internship and degree completion.",
          "Add detailed descriptions for projects like the 'School Management Website' to showcase technical depth.",
          "Quantify teaching experience or project impact where possible.",
        ],
      },
      suspicion: {
        score: 5,
        level: "safe",
        flags: [],
      },
      writingStyle: {
        actionVerbsRate: 0.4,
        quantificationRate: 0.0,
        clicheCount: 0,
      },
    },
    verification: {
      timeline: {
        hasGaps: false,
        gaps: [],
      },
      identity: {
        geoConsistency: "mismatch",
        socialFootprintFound: true,
      },
    },
    basics: {
      name: {
        value: "Ram Prasad Chaudhary",
        rawText: "RAM PRASAD CHAUDHARY",
        confidence: 1.0,
        pageIndex: 0,
      },
      email: [
        {
          value: "ramprasadc331@gmail.com",
          rawText: "ramprasadc331@gmail.com",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      phone: [
        {
          value: "+919328424564",
          rawText: "+919328424564",
          confidence: 1.0,
          pageIndex: 0,
        },
      ],
      location: {
        rawInput: "Rajkot Gujrat",
        city: "Rajkot",
        state: "Gujrat",
        country: "India",
        zipCode: null,
        countryCode: "IN",
      },
      urls: [
        {
          type: "linkedin",
          url: "[https://www.linkedin.com/in/ram-prasad-chaudhary-312221251](https://www.google.com/search?q=https://www.linkedin.com/in/ram-prasad-chaudhary-312221251)",
        },
      ],
      summary:
        "Aspiring Computer Engineer with a strong foundation in programming, databases, and web development. Passionate about solving real-world problems through innovative coding and design.",
    },
    skills: [
      {
        name: "Java",
        normalizedName: "Java",
        category: "Programming Languages",
        computedLevel: "advanced",
        validityScore: 6.8,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: null,
          occurrenceCount: 3,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "PHP",
        normalizedName: "PHP",
        category: "Backend",
        computedLevel: "intermediate",
        validityScore: 5.5,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: null,
          occurrenceCount: 2,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
      {
        name: "React",
        normalizedName: "React",
        category: "Frontend",
        computedLevel: "intermediate",
        validityScore: 4.8,
        metadata: {
          firstSeen: null,
          lastUsed: null,
          totalMonthsExperience: null,
          occurrenceCount: 1,
          sources: [
            {
              sectionId: "skills",
              sectionType: "experience",
            },
          ],
        },
      },
    ],
    workExperience: [
      {
        id: "exp_27_1",
        title: {
          value: "Math and Computer Teacher",
          rawText: "Math and Computer Teacher",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedTitle: "Teacher",
        company: {
          value: "Sunglow English School",
          rawText: "Sunglow English School",
          confidence: 1.0,
          pageIndex: 0,
        },
        companyDomain: null,
        location: null,
        type: "full-time",
        startDate: {
          rawText: "2023 FEB",
          isoDate: "2023-02",
          isCurrent: false,
        },
        endDate: {
          rawText: "2023 Aug",
          isoDate: "2023-08",
          isCurrent: false,
        },
        description: "Taught Mathematics and Computer Science to students.",
        responsibilities: [
          "Instruction in Mathematics and Computer Science subjects.",
        ],
        skillsDetected: [],
        isVerified: false,
        verificationNotes:
          "Teaching role outside of software development core.",
        verificationConfidence: 0.4,
        verificationDate: null,
      },
    ],
    education: [
      {
        id: "edu_27_1",
        institution: {
          value: "RK University",
          rawText: "RK University",
          confidence: 0.9,
          pageIndex: 0,
        },
        degree: {
          value: "Bachelor of Technology",
          rawText: "BACHELOR OF TECHNOLOGY",
          confidence: 1.0,
          pageIndex: 0,
        },
        normalizedDegree: "bachelors",
        fieldOfStudy: "Computer Engineering",
        startDate: {
          rawText: "2022",
          isoDate: "2022",
          isCurrent: false,
        },
        endDate: {
          rawText: "2026",
          isoDate: "2026",
          isCurrent: false,
        },
        gpa: null,
      },
    ],
    projects: [
      {
        name: "School Management Website",
        description: "Built using PHP.",
        url: null,
        skillsUsed: ["PHP"],
      },
      {
        name: "Hostel Management System",
        description: "Built using Advanced Java.",
        url: null,
        skillsUsed: ["Java"],
      },
    ],
    certifications: [
      {
        name: "Foundational C#",
        issuer: "Microsoft",
        date: {
          rawText: null,
          isoDate: null,
          isCurrent: false,
        },
        doesExpire: false,
        verificationUrl: null,
      },
    ],
    languages: [
      {
        language: "English",
        proficiency: "conversational",
      },
      {
        language: "Nepali",
        proficiency: "native",
      },
    ],
  },
};
export default resumeData;
