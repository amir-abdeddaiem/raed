export type Language = "en" | "fr" | "ar"

export interface Translations {
  // Navigation
  nav: {
    about: string
    education: string
    experience: string
    certifications: string
    skills: string
    contact: string
  }
  // Hero Section
  hero: {
    title: string
    subtitle: string
    profile: string
    getInTouch: string
    downloadCV: string
    learnMore: string
  }
  // About Section
  about: {
    title: string
    subtitle: string
    profileTitle: string
    commercialExcellence: string
    commercialExcellenceDesc: string
    businessDevelopment: string
    businessDevelopmentDesc: string
    teamLeadership: string
    teamLeadershipDesc: string
  }
  // Education Section
  education: {
    title: string
    subtitle: string
    degree: string
    institution: string
    description: string
  }
  // Experience Section
  experience: {
    title: string
    subtitle: string
    positions: {
      internship1: {
        title: string
        company: string
        description: string[]
      }
      internship2: {
        title: string
        company: string
        description: string[]
      }
      internship3: {
        title: string
        company: string
        description: string[]
      }
    }
  }
  // Certifications Section
  certifications: {
    title: string
    subtitle: string
    items: {
      cert1: string
      cert2: string
      cert3: string
      cert4: string
    }
  }
  // Skills Section
  skills: {
    title: string
    subtitle: string
    technical: string
    soft: string
    skillNames: {
      excel: string
      word: string
      organization: string
      leadership: string
      communication: string
      teamwork: string
    }
  }
  // Volunteer Section
  volunteer: {
    title: string
    subtitle: string
    roles: {
      role1: string
      role2: string
      role3: string
    }
  }
  // Languages Section
  languages: {
    title: string
    subtitle: string
    proficiency: string
    levels: {
      native: string
      intermediate: string
    }
  }
  // Contact Section
  contact: {
    title: string
    subtitle: string
    info: string
    connect: string
    connectDesc: string
    form: {
      name: string
      email: string
      subject: string
      message: string
      namePlaceholder: string
      emailPlaceholder: string
      subjectPlaceholder: string
      messagePlaceholder: string
      send: string
      sending: string
      success: string
      error: string
      required: string
      invalidEmail: string
    }
  }
  // Footer
  footer: {
    description: string
    contactInfo: string
    connect: string
    rights: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      certifications: "Certifications",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      title: "Raed Trabelsi",
      subtitle: "Commerce & Distribution Professional",
      profile:
        "Young graduate in Commerce & Distribution, passionate about sales strategies, customer relationship management and commercial logistics. Motivated, dynamic and ready to contribute to the commercial development of an innovative company.",
      getInTouch: "Get In Touch",
      downloadCV: "Download CV",
      learnMore: "Learn more about me",
    },
    about: {
      title: "About Me",
      subtitle: "Passionate about commercial excellence and business development",
      profileTitle: "Professional Profile",
      commercialExcellence: "Commercial Excellence",
      commercialExcellenceDesc:
        "Specialized in sales strategies, client relationship management, and commercial process optimization.",
      businessDevelopment: "Business Development",
      businessDevelopmentDesc:
        "Experienced in market analysis, client prospecting, and identifying growth opportunities.",
      teamLeadership: "Team Leadership",
      teamLeadershipDesc:
        "Strong leadership and communication skills with experience in collaborative project management.",
    },
    education: {
      title: "Education",
      subtitle: "Academic foundation in commerce and distribution",
      degree: "Bachelor's in Commerce & Distribution",
      institution: "Institut Supérieur des Études Technologiques de Sfax",
      description: "Specialized in commercial strategies, distribution management, and business development.",
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Hands-on experience in commercial management and business operations",
      positions: {
        internship1: {
          title: "End of Study Internship",
          company: "ChahiaFÉV",
          description: [
            "Evaluation of purchase barriers for CHAHIYA's SALAMI product.",
            "Collaboration with the team to optimize commercial processes and identify improvement opportunities.",
          ],
        },
        internship2: {
          title: "Professional Development Internship",
          company: "Société des Emballages Métalliques de Sfax",
          description: [
            "Management of commercial tasks, including client prospecting and order management.",
            "Teamwork on various projects.",
          ],
        },
        internship3: {
          title: "Initiation Internship",
          company: "Banque Nationale Agricole en Sfax Poudrière - BNA",
          description: [
            "Discovery of the professional banking environment and assistance with daily operations.",
            "Analysis of administrative processes to better understand financial sector dynamics.",
          ],
        },
      },
    },
    certifications: {
      title: "Certifications",
      subtitle: "Continuous learning and professional development",
      items: {
        cert1: "Communication Psychology",
        cert2: "Public Speaking",
        cert3: "Personal Development and Environment",
        cert4: "Personal Development and Entrepreneurship",
      },
    },
    skills: {
      title: "Skills & Competencies",
      subtitle: "Technical expertise and soft skills for professional excellence",
      technical: "Technical Skills",
      soft: "Soft Skills",
      skillNames: {
        excel: "Microsoft Excel",
        word: "Microsoft Word",
        organization: "Organization",
        leadership: "Leadership",
        communication: "Communication",
        teamwork: "Teamwork",
      },
    },
    volunteer: {
      title: "Volunteer Experience",
      subtitle: "Community involvement and leadership development",
      roles: {
        role1: "Active Member",
        role2: "Active Member",
        role3: "Member",
      },
    },
    languages: {
      title: "Languages",
      subtitle: "Multilingual communication capabilities",
      proficiency: "Language Proficiency",
      levels: {
        native: "Native",
        intermediate: "Intermediate",
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to discuss opportunities and collaborations",
      info: "Contact Information",
      connect: "Let's Connect",
      connectDesc:
        "I'm always interested in discussing new opportunities, collaborations, and innovative projects in commerce and distribution.",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "Your full name",
        emailPlaceholder: "your.email@example.com",
        subjectPlaceholder: "What's this about?",
        messagePlaceholder: "Tell me about your project or opportunity...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! I'll get back to you soon.",
        error: "Failed to send message. Please try again.",
        required: "This field is required",
        invalidEmail: "Please enter a valid email address",
      },
    },
    footer: {
      description:
        "Commerce & Distribution Professional passionate about sales strategies, client relationship management, and commercial logistics.",
      contactInfo: "Contact Info",
      connect: "Connect",
      rights: "© 2025 Raed Trabelsi. All rights reserved.",
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      education: "Formation",
      experience: "Expérience",
      certifications: "Certifications",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      title: "Raed Trabelsi",
      subtitle: "Professionnel Commerce & Distribution",
      profile:
        "Jeune diplômé en Commerce & Distribution, passionné par les stratégies de vente, la gestion de la relation client et la logistique commerciale. Motivé, dynamique et prêt à contribuer au développement commercial d'une entreprise innovante.",
      getInTouch: "Me Contacter",
      downloadCV: "Télécharger CV",
      learnMore: "En savoir plus sur moi",
    },
    about: {
      title: "À Propos de Moi",
      subtitle: "Passionné par l'excellence commerciale et le développement des affaires",
      profileTitle: "Profil Professionnel",
      commercialExcellence: "Excellence Commerciale",
      commercialExcellenceDesc:
        "Spécialisé dans les stratégies de vente, la gestion de la relation client et l'optimisation des processus commerciaux.",
      businessDevelopment: "Développement des Affaires",
      businessDevelopmentDesc:
        "Expérimenté dans l'analyse de marché, la prospection client et l'identification d'opportunités de croissance.",
      teamLeadership: "Leadership d'Équipe",
      teamLeadershipDesc:
        "Solides compétences en leadership et communication avec expérience en gestion de projets collaboratifs.",
    },
    education: {
      title: "Formation",
      subtitle: "Fondation académique en commerce et distribution",
      degree: "Licence en Commerce & Distribution",
      institution: "Institut Supérieur des Études Technologiques de Sfax",
      description:
        "Spécialisé dans les stratégies commerciales, la gestion de la distribution et le développement des affaires.",
    },
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "Expérience pratique en gestion commerciale et opérations d'affaires",
      positions: {
        internship1: {
          title: "Stage de Fin d'Étude",
          company: "ChahiaFÉV",
          description: [
            "Évaluation des freins à l'achat du produit SALAMI de CHAHIYA.",
            "Collaboration avec l'équipe pour optimiser les processus commerciaux et identifier des opportunités d'amélioration.",
          ],
        },
        internship2: {
          title: "Stage de Perfectionnement",
          company: "Société des Emballages Métalliques de Sfax",
          description: [
            "Gestion des tâches commerciales, incluant la prospection de clients et la gestion de commandes.",
            "Travail en équipe sur différents projets.",
          ],
        },
        internship3: {
          title: "Stage d'Initiation",
          company: "Banque Nationale Agricole en Sfax Poudrière - BNA",
          description: [
            "Découverte de l'environnement professionnel bancaire et assistance aux opérations quotidiennes.",
            "Analyse des processus administratifs pour mieux comprendre les dynamiques du secteur financier.",
          ],
        },
      },
    },
    certifications: {
      title: "Certifications",
      subtitle: "Apprentissage continu et développement professionnel",
      items: {
        cert1: "Psychologie de la communication",
        cert2: "Prise de parole en public",
        cert3: "Développement personnel et environnement",
        cert4: "Développement personnel et entrepreneuriat",
      },
    },
    skills: {
      title: "Compétences & Aptitudes",
      subtitle: "Expertise technique et compétences interpersonnelles pour l'excellence professionnelle",
      technical: "Compétences Techniques",
      soft: "Compétences Interpersonnelles",
      skillNames: {
        excel: "Microsoft Excel",
        word: "Microsoft Word",
        organization: "Organisation",
        leadership: "Leadership",
        communication: "Communication",
        teamwork: "Travail d'équipe",
      },
    },
    volunteer: {
      title: "Expériences Bénévoles",
      subtitle: "Engagement communautaire et développement du leadership",
      roles: {
        role1: "Membre Actif",
        role2: "Membre Actif",
        role3: "Membre",
      },
    },
    languages: {
      title: "Langues",
      subtitle: "Capacités de communication multilingue",
      proficiency: "Maîtrise des Langues",
      levels: {
        native: "Langue maternelle",
        intermediate: "Niveau moyen",
      },
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Prêt à discuter d'opportunités et de collaborations",
      info: "Informations de Contact",
      connect: "Connectons-nous",
      connectDesc:
        "Je suis toujours intéressé à discuter de nouvelles opportunités, collaborations et projets innovants dans le commerce et la distribution.",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        namePlaceholder: "Votre nom complet",
        emailPlaceholder: "votre.email@exemple.com",
        subjectPlaceholder: "De quoi s'agit-il ?",
        messagePlaceholder: "Parlez-moi de votre projet ou opportunité...",
        send: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        error: "Échec de l'envoi du message. Veuillez réessayer.",
        required: "Ce champ est obligatoire",
        invalidEmail: "Veuillez entrer une adresse email valide",
      },
    },
    footer: {
      description:
        "Professionnel Commerce & Distribution passionné par les stratégies de vente, la gestion de la relation client et la logistique commerciale.",
      contactInfo: "Infos Contact",
      connect: "Se Connecter",
      rights: "© 2025 Raed Trabelsi. Tous droits réservés.",
    },
  },
  ar: {
    nav: {
      about: "نبذة عني",
      education: "التعليم",
      experience: "الخبرة",
      certifications: "الشهادات",
      skills: "المهارات",
      contact: "اتصل بي",
    },
    hero: {
      title: "رائد الطرابلسي",
      subtitle: "متخصص في التجارة والتوزيع",
      profile:
        "خريج شاب في التجارة والتوزيع، شغوف بإستراتيجيات المبيعات وإدارة علاقات العملاء واللوجستيات التجارية. متحفز وديناميكي ومستعد للمساهمة في التطوير التجاري لشركة مبتكرة.",
      getInTouch: "تواصل معي",
      downloadCV: "تحميل السيرة الذاتية",
      learnMore: "تعرف أكثر عني",
    },
    about: {
      title: "نبذة عني",
      subtitle: "شغوف بالتميز التجاري وتطوير الأعمال",
      profileTitle: "الملف المهني",
      commercialExcellence: "التميز التجاري",
      commercialExcellenceDesc: "متخصص في إستراتيجيات المبيعات وإدارة علاقات العملاء وتحسين العمليات التجارية.",
      businessDevelopment: "تطوير الأعمال",
      businessDevelopmentDesc: "خبرة في تحليل السوق واستقطاب العملاء وتحديد فرص النمو.",
      teamLeadership: "قيادة الفريق",
      teamLeadershipDesc: "مهارات قيادية وتواصل قوية مع خبرة في إدارة المشاريع التعاونية.",
    },
    education: {
      title: "التعليم",
      subtitle: "أساس أكاديمي في التجارة والتوزيع",
      degree: "إجازة في التجارة والتوزيع",
      institution: "المعهد العالي للدراسات التكنولوجية بصفاقس",
      description: "متخصص في الإستراتيجيات التجارية وإدارة التوزيع وتطوير الأعمال.",
    },
    experience: {
      title: "الخبرة المهنية",
      subtitle: "خبرة عملية في الإدارة التجارية وعمليات الأعمال",
      positions: {
        internship1: {
          title: "تربص نهاية الدراسة",
          company: "شاهية فيف",
          description: [
            "تقييم عوائق شراء منتج السلامي لشركة شاهية.",
            "التعاون مع الفريق لتحسين العمليات التجارية وتحديد فرص التحسين.",
          ],
        },
        internship2: {
          title: "تربص تطبيقي",
          company: "شركة التعبئة المعدنية بصفاقس",
          description: [
            "إدارة المهام التجارية، بما في ذلك استقطاب العملاء وإدارة الطلبات.",
            "العمل الجماعي في مشاريع مختلفة.",
          ],
        },
        internship3: {
          title: "تربص تعريفي",
          company: "البنك الوطني الفلاحي بصفاقس البودريار",
          description: [
            "اكتشاف البيئة المهنية المصرفية والمساعدة في العمليات اليومية.",
            "تحليل العمليات الإدارية لفهم ديناميكيات القطاع المالي بشكل أفضل.",
          ],
        },
      },
    },
    certifications: {
      title: "الشهادات",
      subtitle: "التعلم المستمر والتطوير المهني",
      items: {
        cert1: "علم نفس التواصل",
        cert2: "الخطابة العامة",
        cert3: "التنمية الشخصية والبيئة",
        cert4: "التنمية الشخصية وريادة الأعمال",
      },
    },
    skills: {
      title: "المهارات والكفاءات",
      subtitle: "خبرة تقنية ومهارات شخصية للتميز المهني",
      technical: "المهارات التقنية",
      soft: "المهارات الشخصية",
      skillNames: {
        excel: "مايكروسوفت إكسل",
        word: "مايكروسوفت وورد",
        organization: "التنظيم",
        leadership: "القيادة",
        communication: "التواصل",
        teamwork: "العمل الجماعي",
      },
    },
    volunteer: {
      title: "الخبرة التطوعية",
      subtitle: "المشاركة المجتمعية وتطوير القيادة",
      roles: {
        role1: "عضو نشط",
        role2: "عضو نشط",
        role3: "عضو",
      },
    },
    languages: {
      title: "اللغات",
      subtitle: "قدرات التواصل متعددة اللغات",
      proficiency: "إتقان اللغات",
      levels: {
        native: "اللغة الأم",
        intermediate: "مستوى متوسط",
      },
    },
    contact: {
      title: "تواصل معي",
      subtitle: "مستعد لمناقشة الفرص والتعاون",
      info: "معلومات الاتصال",
      connect: "لنتواصل",
      connectDesc: "أنا دائماً مهتم بمناقشة الفرص الجديدة والتعاون والمشاريع المبتكرة في التجارة والتوزيع.",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        namePlaceholder: "اسمك الكامل",
        emailPlaceholder: "your.email@example.com",
        subjectPlaceholder: "ما هو الموضوع؟",
        messagePlaceholder: "أخبرني عن مشروعك أو الفرصة...",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال الرسالة بنجاح! سأرد عليك قريباً.",
        error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        required: "هذا الحقل مطلوب",
        invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح",
      },
    },
    footer: {
      description: "متخصص في التجارة والتوزيع شغوف بإستراتيجيات المبيعات وإدارة علاقات العملاء واللوجستيات التجارية.",
      contactInfo: "معلومات الاتصال",
      connect: "تواصل",
      rights: "© 2025 رائد الطرابلسي. جميع الحقوق محفوظة.",
    },
  },
}
