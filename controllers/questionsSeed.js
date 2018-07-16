const Question = require('../models/Question')
const mongoose = require('../controllers/connectdb')

const questions = [
    {
        category: "Technical Skills",
        title: "Previous Work Experience",
        description: "What job are you doing at the moment?",
        criteria: [
            {item: "No work experience at all", value: 1},
            {item: "Intern experience", value: 2},
            {item: "Less than 2 years in entry positions", value: 3},
            {item: "2+ years in mid to high level positions", value: 4},
            {item: "Combination of personal ventures & work", value: 5}
        ],
        priority: 1
    },
    {
        category: "Technical Skills",
        title: "Engagement with Tech Industry",
        description: "What area of tech interests you the most?",
        criteria: [
            {item: "No engagement", value: 1},
            {item: "Hears about tech issues from friends", value: 2},
            {item: "Reads articles only on social media", value: 3},
            {item: "Actively pursues knowledge through various means", value: 4},
            {item: "Actively attends meetups and events", value: 5}
        ],
        priority: 2
    },
    {
        category: "Technical Skills",
        title: "Research & Understanding",
        description: "What do you know about the bootcamp?",
        criteria: [
            {item: "No understanding", value: 1},
            {item: "A little understanding", value: 2},
            {item: "Able to reiterate with prompts", value: 3},
            {item: "Above average understanding", value: 4},
            {item: "Complete understanding", value: 5}
        ],
        priority: 3
    },
    {
        category: "Technical Skills",
        title: "Prior Coding Experience",
        description: "What resources have you used to begin coding?",
        criteria: [
            {item: "No experience", value: 1},
            {item: "Use Wix/template websites", value: 2},
            {item: "Only walkthrough HTML/CSS tutorials", value: 3},
            {item: "HTML, CSS, RoR / Javascript / etc", value: 4},
            {item: "HTML + CSS + RoR + Javascript etc", value: 5}
        ],
        priority: 4
    },
    {
        category: "Technical Skills",
        title: "Previous Studies",
        description: "What were you studying before?",
        criteria: [
            {item: "Year 12 only", value: 1},
            {item: "Incomplete studies post Year 12", value: 2},
            {item: "VET Education only", value: 3},
            {item: "Higher Education only", value: 4},
            {item: "Additional voluntary pursuance of qualifications", value: 5}
        ],
        priority: 5
    },
    {
        category: "Soft Skills",
        title: "Written Skills",
        criteria: [
            {item: "No effort made in FTA", value: 1},
            {item: "Short paragraphs & grammar/spelling errors", value: 2},
            {item: "Average written FTA", value: 3},
            {item: "Well-written FTA without supporting docs", value: 4},
            {item: "Complete and well-written FTA", value: 5}
        ],
        priority: 21
    },
    {
        category: "Soft Skills",
        title: "Verbal Skills",
        criteria: [
            {item: "No engagement / non-responsive", value: 1},
            {item: "Responsive when prompted only", value: 2},
            {item: "Nervous but engages in conversation", value: 3},
            {item: "Engaged but slightly reserved", value: 4},
            {item: "Sociable, engaging and participative", value: 5}
        ],
        priority: 22
    },
    {
        category: "Soft Skills",
        title: "Presentation & Professionalism",
        criteria: [
            {item: "Rude and condescending with minimal basic social skills", value: 1},
            {item: "Awkward with inclination towards introversion", value: 2},
            {item: "Normal but tends towards introversion", value: 3},
            {item: "Presentable but needs a bit of polishing", value: 4},
            {item: "Extremely presentable and professional", value: 5}
        ],
        priority: 23
    },
    {
        category: "Soft Skills",
        title: "Purpose & Drivenness",
        criteria: [
            {item: "No reason for doing course", value: 1},
            {item: "Just for fun and not serious", value: 2},
            {item: "Curious about tech", value: 3},
            {item: "Want to pursue a career in tech", value: 4},
            {item: "Multiple strong goals and purpose for doing the course", value: 5}
        ],
        priority: 24
    },

]

Question.create(questions)
.then(() => {
    console.info("seeded questions")
})