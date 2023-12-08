const OfferElement = ({title, children}) => {
    return (
        <div className="offer-element ui-flex-col">
            <div className="offer-element__title">{title}</div>
            <div className="offer-element__content">{children}</div>
        </div>
    )
}

export default OfferElement
