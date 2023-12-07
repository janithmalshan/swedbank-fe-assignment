import Select from "./SelectField";

export default {
    title: 'Ui Components/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export const Default = {
    args: {
        label: 'Select option',
        options: [
            { value: 'selectSaved1', label: 'Select 1'},
            { value: 'selectSaved2', label: 'Select 2'},
            { value: 'selectSaved3', label: 'Select 3'}
        ]
    },
};
