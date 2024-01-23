import React from "react";
import "./icons.scss";

type IconProps = {
  className?: string;
};

export const PersonIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <span className={`personIcon ${className}`}>
      <svg
        height="20px"
        width="20px"
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d="M159.131,169.721c5.635,58.338,43.367,96.867,96.871,96.867c53.502,0,91.23-38.53,96.867-96.867l7.988-63.029
		C365.812,44.768,315.281,0,256.002,0c-59.281,0-109.812,44.768-104.86,106.692L159.131,169.721z"
          />
          <path
            d="M463.213,422.569l-3.824-24.35c-3.203-20.417-16.035-38.042-34.475-47.361l-80.473-40.693
		c-2.519-1.274-4.57-3.194-6.289-5.338c-23.297,24.632-51.6,39.12-82.15,39.12c-30.549,0-58.856-14.488-82.152-39.12
		c-1.719,2.144-3.77,4.064-6.289,5.338l-80.472,40.693c-18.442,9.319-31.272,26.944-34.475,47.361l-3.826,24.35
		c-1.363,8.692,0.436,21.448,8.222,27.825C67.42,458.907,105.875,512,256.002,512c150.125,0,188.578-53.093,198.988-61.606
		C462.779,444.017,464.576,431.261,463.213,422.569z"
          />
        </g>
      </svg>
    </span>
  );
};

export const HomeIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <span className="homeIcon">
      <svg
        width="25px"
        height="25px"
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.18753 11.3788C4.03002 11.759 4 11.9533 4 12V20.0018C4 20.5529 4.44652 21 5 21H8V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21H19C19.5535 21 20 20.5529 20 20.0018V12C20 11.9533 19.97 11.759 19.8125 11.3788C19.6662 11.0256 19.4443 10.5926 19.1547 10.1025C18.5764 9.1238 17.765 7.97999 16.8568 6.89018C15.9465 5.79788 14.9639 4.78969 14.0502 4.06454C13.5935 3.70204 13.1736 3.42608 12.8055 3.2444C12.429 3.05862 12.1641 3 12 3C11.8359 3 11.571 3.05862 11.1945 3.2444C10.8264 3.42608 10.4065 3.70204 9.94978 4.06454C9.03609 4.78969 8.05348 5.79788 7.14322 6.89018C6.23505 7.97999 5.42361 9.1238 4.8453 10.1025C4.55568 10.5926 4.33385 11.0256 4.18753 11.3788ZM10.3094 1.45091C10.8353 1.19138 11.4141 1 12 1C12.5859 1 13.1647 1.19138 13.6906 1.45091C14.2248 1.71454 14.7659 2.07921 15.2935 2.49796C16.3486 3.33531 17.4285 4.45212 18.3932 5.60982C19.3601 6.77001 20.2361 8.0012 20.8766 9.08502C21.1963 9.62614 21.4667 10.1462 21.6602 10.6134C21.8425 11.0535 22 11.5467 22 12V20.0018C22 21.6599 20.6557 23 19 23H16C14.8954 23 14 22.1046 14 21V15H10V21C10 22.1046 9.10457 23 8 23H5C3.34434 23 2 21.6599 2 20.0018V12C2 11.5467 2.15748 11.0535 2.33982 10.6134C2.53334 10.1462 2.80369 9.62614 3.12345 9.08502C3.76389 8.0012 4.63995 6.77001 5.60678 5.60982C6.57152 4.45212 7.65141 3.33531 8.70647 2.49796C9.2341 2.07921 9.77521 1.71454 10.3094 1.45091Z"
        />
      </svg>
    </span>
  );
};

export const ProjectsIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <span className="projectsIcon">
      <svg
        width="25px"
        height="25px"
        className={className}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M2,9H9V2H2ZM4,4H7V7H4Zm7-2V9h7V2Zm5,5H13V4h3ZM2,18H9V11H2Zm2-5H7v3H4Zm7,5h7V11H11Zm2-5h3v3H13Z" />
        </g>
      </svg>
    </span>
  );
};
export const ContactIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <span className="contactIcon">
      <svg
        width="25px"
        height="25px"
        className={className}
        version="1.1"
        id="XMLID_276_"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g id="contact-us">
          <g>
            <path d="M4,24v-5H0V0h23v19h-9.3L4,24z M2,17h4v3.7l7.3-3.7H21V2H2V17z" />
          </g>
          <g>
            <rect x="5" y="8" width="3" height="3" />
          </g>
          <g>
            <rect x="10" y="8" width="3" height="3" />
          </g>
          <g>
            <rect x="15" y="8" width="3" height="3" />
          </g>
        </g>
      </svg>
    </span>
  );
};

export const MenuHamburger: React.FC = () => {
  return (
    <span className="menuHamburger">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20"
          // stroke="#64ffda"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
