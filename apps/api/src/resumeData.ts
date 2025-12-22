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
  10: {
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
};
export default resumeData;
