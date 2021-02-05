export interface SVGLoaderProps {
    imageAdress: string,
    alt: string,
    className: string,
} 

const SVGLoader: React.FC <SVGLoaderProps> = ({ imageAdress, alt, className}) => {
    return <img className={className} src={imageAdress} alt={alt}/>
}

export default SVGLoader;
