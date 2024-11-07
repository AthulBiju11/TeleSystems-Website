import "./categoryCard.scss"
interface Props {
    thumb_src : string;
    title : string;
}

const CategoryCard = ({thumb_src,title} : Props) => {
    return (
        // <div className="card-category-box" style={{backgroundImage : `url(${thumb_src})`}}>
        <div className="card-category-box">
            <div className="card-title-area">
                <div className="card-title-text">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;