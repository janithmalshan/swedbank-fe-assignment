import Range from "./SelectRange";

export default {
    title: 'Ui Components/Range',
    component: Range,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export const Default = {
    args: {
        label: 'Select option',
        min: 200,
        max: 2000,
    },
};
