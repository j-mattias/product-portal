import { Link } from "react-router-dom";

interface IBannerLinkProps {
  banner: string;
  link: string;
  promoName: string;
}

export function BannerLink({banner, link, promoName}: IBannerLinkProps) {
  return (
    <Link to={link}>
      <img
        className="banner b-radius-4"
        src={banner}
        alt={`${promoName} banner`}
      />
    </Link>
  );
}
