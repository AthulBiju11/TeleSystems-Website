import "./cardCategorySection.scss"
import CategoryCard from "../sub-components/CategoryCard/categoryCard";

const CardCategorySection = () => {
    return (
        <div className="category-container">
            <div className="title">
                Shop by category
            </div>
            <div className="short-description">
                Browse all categories {">"}
            </div>

            <div className="card-container">
                <CategoryCard/>
                
            </div>
        </div>
    )
}

export default CardCategorySection;