const Form = ({ action, children, className, onSubmit, ...props }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formElement = e.target;
        const isValid = formElement.checkValidity();

        formElement.classList.add('style.submitted');

        const firstInvalidField = formElement.querySelector(
            ":invalid"
        );

        firstInvalidField?.focus();

        if (isValid) {
            const dataObject = new FormData(formElement);
            onSubmit(dataObject);
        }
    };

    return (
        <form
            action={action}
            onSubmit={handleSubmit}
            noValidate
            {...props}
        >
            <div className={'ui-form'}>{children}</div>
        </form>
    );
};

export default Form;
