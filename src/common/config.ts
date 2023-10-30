import { getRandomDate } from '../helperFunctions/helperFunctions'

const PASSWORD_VALIDATOR =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

export const fields = [
    {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter your name',
        rules: 'required|string',
    },
    {
        name: 'email',
        label: 'Email',
        type: 'text',
        placeholder: 'Insert Email',
        rules: 'required|email',
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Insert Password',
        rules: `required|regex:${PASSWORD_VALIDATOR}`,
        // rules: 'abc',
    },
]

export const blogDate = [
    {
        title: 'Shrimp and Chorizo Paella',
        date: getRandomDate(),
        imgUrl: 'https://mui.com/static/images/cards/paella.jpg',
        description:
            'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
        title: 'Lizard',
        date: getRandomDate(),
        imgUrl: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
        description:
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica ',
    },
    {
        title: 'Bois et black',
        date: getRandomDate(),
        imgUrl: 'https://media.nngroup.com/media/editor/2016/10/14/pinterest.png',
        description:
            'his card model saw a revival when the iPad first came out, when many apps were trying to control the look of each page presented to the user. You are probably familiar with the deck-of-cards paradigm from mobile weather apps — most of them employ it for displaying the weather in different cities.',
    },
]
