import { getRandomDate } from '../shared/utils/helperFunctions'

export const blogFields = [
    {
        name: 'title',
        label: 'Title',
        type: 'text',
        placeholder: 'enter blog title',
        rules: 'required|string',
    },
    {
        name: 'description',
        label: 'Description',
        type: 'text',
        placeholder: 'enter your blog',
        rules: 'required|string',
    },
    {
        name: 'date',
        label: '',
        type: 'date',
        placeholder: '',
        rules: 'required',
    },
    {
        name: 'imgUrl',
        label: '',
        type: 'file',
        placeholder: '',
        rules: 'required',
    },
]

export const blogData = [
    {
        title: 'Shrimp and Chorizo Paella',
        description:
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        date: getRandomDate(),
        imgUrl: 'https://mui.com/static/images/cards/paella.jpg',
        comments: [],
    },
    {
        title: 'Lizard',
        description:
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica ',
        date: getRandomDate(),
        imgUrl: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
        comments: [],
    },
    {
        title: 'Bois et black',

        description:
            'his card model saw a revival when the iPad first came out, when many apps were trying to control the look of each page presented to the user. You are probably familiar with the deck-of-cards paradigm from mobile weather apps — most of them employ it for displaying the weather in different cities.',
        date: getRandomDate(),
        imgUrl: 'https://media.nngroup.com/media/editor/2016/10/14/pinterest.png',
        comments: [],
    },
    {
        title: 'Success stories',

        description:
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        date: getRandomDate(),
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ18c51YZFnJaex0Ja8QQ3H8cd7dleIFPtqA&usqp=CAU',
        comments: [],
    },
    {
        title: 'Healthy life style',

        description:
            'his card model saw a revival when the iPad first came out, when many apps were trying to control the look of each page presented to the user. You are probably familiar with the deck-of-cards paradigm from mobile weather apps — most of them employ it for displaying the weather in different cities.',
        date: getRandomDate(),
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuub1qqprhrAi5nC5Yol6grcv1y4xblegZKA&usqp=CAU',
        comments: [],
    },
    {
        title: 'laziness',

        description:
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        date: getRandomDate(),
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmax5VP5bfOzvZdipg6CD0SoPZm8v5e3u81A&usqp=CAU',
        comments: [],
    },
    {
        title: 'Being introvert',

        description:
            'his card model saw a revival when the iPad first came out, when many apps were trying to control the look of each page presented to the user. You are probably familiar with the deck-of-cards paradigm from mobile weather apps — most of them employ it for displaying the weather in different cities.',
        date: getRandomDate(),
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjHbLUa5EMFh_PoE-q_1PeDsA7Ba6w_2HYg&usqp=CAU',
        comments: [],
    },
    {
        title: 'Death Notes',

        description:
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        date: getRandomDate(),
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRncxOB3UohIikrFhPMASb1SWc1pDENX4MYw&usqp=CAU',
        comments: [],
    },
    {
        title: 'Benefits Silence',

        description:
            'his card model saw a revival when the iPad first came out, when many apps were trying to control the look of each page presented to the user. You are probably familiar with the deck-of-cards paradigm from mobile weather apps — most of them employ it for displaying the weather in different cities.',
        date: getRandomDate(),
        imgUrl: 'https://www.shutterstock.com/image-photo/blogging-blog-word-coder-coding-260nw-520314613.jpg',
        comments: [],
    },
    {
        title: 'One Piece',

        description:
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        date: getRandomDate(),
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZ7XKjuv9WCdInNmG4mO1Fe0LQBwMy1k4sQ&usqp=CAU',
        comments: [],
    },
]
