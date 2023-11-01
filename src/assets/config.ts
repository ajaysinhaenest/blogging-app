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
            'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
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
]
