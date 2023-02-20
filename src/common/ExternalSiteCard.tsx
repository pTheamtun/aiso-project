import Image from "next/image";
interface ExternalSiteCardProps {
    siteName: string;
    siteUrl: string;
    siteIcon: string;
    siteIconDescription: string;
}

const  ExternalSiteCard = (props: ExternalSiteCardProps) => {
    return (
        
        <div> 
        <h3>{props.siteName}</h3>
        <a 
        href={props.siteUrl}
        target="_blank"
        rel='noreferrer noopener'
        >
        <Image
        src={props.siteIcon}
        alt={props.siteIconDescription||props.siteName}
        width={20}
        height={20}
        priority
        />
        </a>
      </div>);
};

export default ExternalSiteCard