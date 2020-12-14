import Project from './Project'

const projectsData = [
    {
        timeframe: '2018-2020',
        title: 'Led design at DreamSpring ',
        description: 'DreamSpring is a 26 year old nonprofit, community lender that propels the dreams of underserved and under-represented entrepreneurs by providing them with capital to start or grow their businesses.',
        thumbnail: '',
        projects: [
            {
                id: 4,
                title: "Customer self service portal",
                description: 'Designing a customer facing web app which helps them to track their repayment of loans, apply for new loans and refinance existing loan.',
                url: '/dreamspring/dock'
            },
            {
                id: 1,
                title: "The loan origination app",
                description: 'Designing and iterating on a system that helps clients to apply for business loan and loan officers to process it.',
                url: '/dreamspring/flare',
            },
            {
                id: 2,
                title: "The loan closing app",
                description: 'Desiging a system for fraud detection, loan application analysis and close eligible loan applications.',
                url: '/dreamspring/peak',
            },
            {
                id: 3,
                title: "The loan servicing app",
                description: 'Designing a system that will help in the everyday functioning of a lending organisation. The system will keep track of the portfolio quality.',
                url: '/dreamspring/wave',
            },
            {
                id: 5,
                title: "Design system",
                description: `Building DreamSpring's style guide and defining a shared product design vision`,
                url: '/dreamspring/coin',
            },
        ],
        background: '#FAD2D9',
        id:1
    },
    {
        timeframe: '2017-2018',
        title: 'Designed a Q&A website for programmers',
        description: 'Hashnode is a friendly and inclusive community for software developers. It was started back in 2014. It let users to ask, answer, write story, share and discover links. Anyone can share articles, questions, discussions, etc. as long as they have the rights to the words they are sharing. ',
        thumbnail: '',
        projects: [
            {
                id: 1,
                title: "Designing for engagement",
                description: 'blah blah',
                url: '/hashnode/engagement',
            },
            {
                id: 2,
                title: "Designing the feed",
                description: 'blah blah',
                url:'/hashnode/feed',
            },
            {
                id: 3,
                title: "UI Library",
                description: 'blah blah',
                url:'/hashnode/uilibrary',
            },
        ],
        background: '#FECF7E',
        id: 2
    },
    {
        timeframe: '2015-2017',
        title: 'Designed an English learning app which had over a million downloads',
        description: 'Englishdost is an ed-tech startup aimed helping people from smaller towns and cities to learn to speak English fluently. I was part of the product team and was responsible for implementing a interactive and fun filled experience for the users.',
        thumbnail: '',
        background: '#E6DBF0',
        projects: [
            {
                id: 1,
                title: "Design guidelines",
                description: `Building EnglishDost's general style guide, illustration style and motion design patterns.`,
                url: 'ed/uilibrary'
            },
            {
                id: 2,
                title: "Payments and subscription ",
                description: 'Designing the userflows and visual designs for the purchase of subscription plans',
                url: '/ed/payments',
            },
            {
                id: 3,
                title: "The trainer app",
                description: 'Designing an Android app for English tutors to engage with their students.',
                url:'/ed/trainer',
            },
        ],
        id: 3
    }
]

function AllWork() {
    return (
        <div className="row">
            {projectsData.map((item) => (
                <div className="col-md-10 offset-md-1" key={item.id} >
                <Project data={item} />
                </div>
            ))}
        </div>
    )
}

export default AllWork