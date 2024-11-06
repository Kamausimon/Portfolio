import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Link({ page, setSelectedPage, selectedPage }) {

    const lowercasePage = page.toLowerCase();
   
    return (
        <AnchorLink 
        className={`${selectedPage === lowercasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
        href={`#${lowercasePage}`}
        onClick={()=> setSelectedPage(lowercasePage)}
        >
            {page}
        </AnchorLink>
    )
}


