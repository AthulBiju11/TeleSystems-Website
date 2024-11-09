// import "./categoryCard.scss"
// interface Props {
//     thumb_src : string;
//     title : string;
// }

// const CategoryCard = ({thumb_src,title} : Props) => {
//     return (
//         // <div className="card-category-box" style={{backgroundImage : `url(${thumb_src})`}}>
//         <div className="card-category-box" style={{backgroundImage: `url(${thumb_src})`,
//           }}>
//             <div className="card-title-area">
//                 <div className="card-title-text">
//                     {title}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CategoryCard;

import "./categoryCard.scss"
interface Props {
    thumb_src: string;
    title: string;
}

const CategoryCard = ({ thumb_src, title }: Props) => {
    const handleClick = () => {
        // Navigate to products page with the selected type
        window.location.href = `/products?type=${encodeURIComponent(title)}`;
    };

    return (
        <div 
            className="card-category-box" 
            style={{ backgroundImage: `url(${thumb_src})` }}
            onClick={handleClick}
            role="button"
            tabIndex={0}
        >
            <div className="card-title-area">
                <div className="card-title-text">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;