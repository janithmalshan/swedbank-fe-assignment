const Form = ({ action, children, className, onSubmit, ...props }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formElement = e.target;
        const isValid = formElement.checkValidity();

        formElement.classList.add('style.submitted');

        // focusing the first invalid field
        const firstInvalidField = formElement.querySelector(
            ":invalid"
        );

        firstInvalidField?.focus();

        // submit the dataObject if isValid===true
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
            className={'form'}
            {...props}
        >
            <div className={'wrapper'}>{children}</div>
        </form>
    );
};

export default Form;
