const questions = [
    {
        question: "What is your first name?",
        answerID: "firstName",
    },
    {
        question: "What is your last name?",
        answerID: "lastName"
    },
    {
        question: "How old are u?",
        answerID: "age"
        },
    {
        question: "What is your TikTok username?",
        answerID: "username"
    },
    {
        question: "How many followers do u currently have?",
        answerID: "current-following"
    },
    {
        question: "How many followers are u trying to gain?",
        answerID: "follower-goal"
    },
    {
        question: "What topic does your content mainly consist of? '(niche)' '(examples: comedy, fitness, makeup, etc.)' ",
        answerID: "topic"
    },
    {
        question: "What brings you into TikTok in the first place?",
        answerID: "what-brings-u",
        choices: [
            {
                text: 'I want to gain as many followers as possible!',
                answerID: 'gainasmany'
            },
            {
                text: 'I want to gain an extremely engaged and active fanbase that supports me.',
                answerID: 'engagedandsupportive'
            },
            {
                text: 'I’m trying to find new customers for my business',
                answerID: 'business'
            },
        ]
    },
    {
        question: "Which of the Following aligns with your goals on TikTok?",
        answerID: "alignsgoals",
        choices: [
            {
                text: 'Monitization is more important to me than getting the maximum amount of followers',
                answerID: 'monitize'
            },
            {
                text: 'I’d rather focus on gaining a huge following and worry about monitizing later',
                answerID: 'maximumfollowers'
            },
        ]
    },
    {
        question: "What’s the maximum TikTok views that u have gotten on a single video?",
        answerID: "maximumviews"
    },
    {
        question: "Do u consistently post duets or stitch content?",
        answerID: "duets&stitches"
    },
    {
        question: "On a scale of 1 to 10, how much time do u have to dedicate to TikTok? (1 = not much, 10 = as much as I need)",
        answerID: "time"
    },
]

let userAnswers = [
    {
        question: '',
        answer: ''
    }
]