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
