// custom parameters of each field
export default [
    {
        label: 'Campaign title',
        name: 'title',
        type: 'text',
        errorMessage: 'You must provide a title to the campaign.',
    },
    {
        label: 'Email subject',
        name: 'subject',
        type: 'text',
        errorMessage: 'You must provide a subject to your email.',
    },
    {
        label: 'Email body',
        name: 'body',
        type: 'textarea',
        errorMessage: 'You must provide content to your email.',
    },
    {
        label: 'Recipients list (emails separated with comma)',
        name: 'recipients',
        type: 'text',
        errorMessage:
            'You must provide a list of recipients (at least one email)',
    },
];
