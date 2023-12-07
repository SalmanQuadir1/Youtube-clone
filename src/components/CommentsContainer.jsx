import React from 'react'

const commentsData = [
    {
        name: "Salman Quadir",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
        replies: [
            {
                name: "Salman Quadir",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
                replies: [
                    {
                        name: "Junaid Quadir",
                        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
                        replies: [
                            {
                                name: "Junaid Quadir",
                                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
                                replies: [
                                    {
                                        name: " Quadir",
                                        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
                                        replies: [
                                            {
                                                name: "Juni",
                                                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
                                                replies: [

                                                ]
                                            },

                                        ]
                                    },

                                ]
                            },

                        ]
                    },
                    {
                        name: "ismun Quadir",
                        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
                        replies: [
                            {
                                name: "Junaid Quadir",
                                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
                                replies: [

                                ]
                            },

                        ]
                    }
                ]
            },

        ]
    },
    {
        name: "Amir ",
        text: "lorem ipsum dhj sjmaksnsklsnknsk",
        replies: [
            {
                name: "Amir ",
                text: "lorem ipsum dhj sjmaksnsklsnknsk",
                replies: [

                ]
            },

        ]
    },
    {
        name: "Jamal ",
        text: "lorem ipsum dhj sjmaksnsklsnknsk",
        replies: [
            {
                name: "Amir ",
                text: "lorem ipsum dhj sjmaksnsklsnknsk",
                replies: [

                ]
            },

        ]
    },
    {
        name: "Salman Quadir",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
        replies: [
            {
                name: "Salman Quadir",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, voluptatem.",
                replies: [

                ]
            },

        ]
    },
    {
        name: "Amir ",
        text: "lorem ipsum dhj sjmaksnsklsnknsk",
        replies: [
            {
                name: "Amir ",
                text: "lorem ipsum dhj sjmaksnsklsnknsk",
                replies: [

                ]
            },

        ]
    },
    {
        name: "Jamal ",
        text: "lorem ipsum dhj sjmaksnsklsnknsk",
        replies: [
            {
                name: "Amir ",
                text: "lorem ipsum dhj sjmaksnsklsnknsk",
                replies: [

                ]
            },

        ]
    }
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img className='w-8 h-8 p-1' src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user_img" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>

            </div>
        </div>
    )
}
const CommentsList = ({ comments }) => {

    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 ml-5 border border-l-black'>
                <CommentsList comments={comment?.replies} />
            </div>
        </div>

    )

    )

}
const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentsList comments={commentsData} />

        </div>
    )
}

export default CommentsContainer