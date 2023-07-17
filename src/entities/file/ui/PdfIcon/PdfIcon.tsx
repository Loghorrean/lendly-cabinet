import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const PdfIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_32, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.4183 17.3542V23.0044C19.4205 23.3644 19.2764 23.7101 19.0183 23.9646C18.7599 24.2189 18.4091 24.3609 18.0437 24.3586H2.9761C2.61075 24.3609 2.25986 24.2189 2.00155 23.9646C1.74343 23.71 1.59932 23.3643 1.60159 23.0044V17.3542C1.59932 16.9943 1.74343 16.6486 2.00155 16.3941C2.2599 16.1398 2.61079 15.9978 2.9761 16H18.0437C18.4091 15.9978 18.76 16.1398 19.0183 16.3941C19.2764 16.6486 19.4205 16.9943 19.4183 17.3542ZM5.92864 21.0822C6.43749 21.12 6.94464 20.9907 7.37093 20.7144L7.37094 20.7144C7.70556 20.422 7.88149 19.9918 7.84608 19.5526C7.88355 19.1122 7.71125 18.6798 7.37946 18.3824C6.95147 18.0878 6.43167 17.9516 5.91162 17.9978H4.39303V22.3611L5.13972 22.3609V21.0822H5.92864ZM10.1961 22.3612C10.8837 22.413 11.5648 22.2003 12.0966 21.7676L12.0967 21.7676C12.5209 21.3376 12.7453 20.7534 12.7159 20.1545C12.7473 19.5601 12.5116 18.982 12.0711 18.5746C11.5596 18.1611 10.9074 17.955 10.247 17.9979H8.72842V22.3612H10.1961ZM14.4212 18.6834H16.6185L16.6269 17.9979H13.6745L13.6747 22.3945H14.4212V20.5974H16.3811V19.887H14.4212V18.6834ZM5.90263 18.6682H5.13906V20.4151H5.98747C6.29066 20.4537 6.59686 20.3692 6.83587 20.1811C7.0188 19.999 7.11975 19.752 7.11577 19.4956C7.1383 19.2466 7.02941 19.0034 6.82735 18.8521C6.5429 18.7058 6.22231 18.6422 5.90264 18.6682L5.90263 18.6682ZM10.2215 18.6844H9.475V21.6685H10.3234L10.3232 21.6683C10.769 21.6974 11.2101 21.5634 11.5619 21.2922C11.8594 20.9992 12.014 20.594 11.9861 20.1806C11.9608 19.1775 11.3584 18.6844 10.2216 18.6844L10.2215 18.6844Z"
                    fill="#828282"
                />
                <path
                    d="M4.39844 14.0008V1.60078C4.39844 1.15895 4.75661 0.800781 5.19844 0.800781H21.9984M21.9984 0.800781L29.1984 8.00078M21.9984 0.800781V7.20078C21.9984 7.64261 22.3566 8.00078 22.7984 8.00078H29.1984M29.1984 8.00078V30.4008C29.1984 30.8426 28.8403 31.2008 28.3984 31.2008H5.19844C4.75661 31.2008 4.39844 30.8426 4.39844 30.4008V26.4008"
                    stroke="#828282"
                />
            </svg>
        </SvgContainer>
    );
};

export default PdfIcon;
