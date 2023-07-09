import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const NodeIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_32, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.7681 17.2823C19.4774 15.5198 17.9118 14.2566 16.1282 14.3433C14.3446 14.43 12.9102 15.8433 12.7954 17.6245C9.19775 17.512 7.9204 16.6706 8.129 14.9597C8.20634 14.3198 8.59306 13.9776 9.30322 13.8112C9.73447 13.7105 10.2126 13.6964 10.6462 13.7362C10.686 13.7409 10.7282 13.7433 10.7681 13.748C11.0329 13.8112 11.3024 13.8652 11.572 13.9073C12.3712 14.0386 13.1845 14.1042 13.9579 14.062C16.1329 13.9448 17.6142 12.9862 17.6892 10.9519C17.7618 8.98077 16.4071 7.5839 14.2227 6.64874C13.522 6.34874 12.779 6.11671 12.036 5.94093C11.7009 5.86124 11.4196 5.80734 11.211 5.77218C11.0259 3.99327 9.53525 2.63624 7.74697 2.62218C5.95868 2.60812 4.44462 3.93702 4.229 5.71359C4.01337 7.49015 5.1665 9.14249 6.90556 9.55499C8.64462 9.96749 10.4188 9.0089 11.0235 7.32609C11.2438 7.36593 11.4618 7.41046 11.6798 7.46203C12.3407 7.61671 13.0017 7.82296 13.611 8.08546C15.2681 8.79328 16.1727 9.72843 16.1306 10.8956C16.0931 11.9409 15.3431 12.4237 13.8759 12.5034C13.2313 12.5386 12.5259 12.4823 11.8298 12.3675C11.6352 12.3347 11.4571 12.3019 11.3001 12.2667C11.2087 12.248 11.1454 12.2316 11.1173 12.2245L11.0446 12.2105C10.9931 12.2034 10.9063 12.1917 10.7938 12.18C10.2079 12.1261 9.57275 12.1448 8.954 12.2878C7.66025 12.5901 6.75322 13.3941 6.58447 14.7675C6.2165 17.7253 8.42665 19.0964 13.0532 19.1948C13.7352 20.8448 15.547 21.7237 17.2626 21.2339C18.9806 20.7441 20.0587 19.0448 19.7681 17.2823ZM7.71181 8.09015C6.63368 8.09015 5.75947 7.21593 5.75947 6.13781C5.75947 5.05968 6.63368 4.18546 7.71181 4.18546C8.78994 4.18546 9.66415 5.05968 9.66415 6.13781C9.66415 7.21593 8.78994 8.09015 7.71181 8.09015ZM16.3017 19.8042C15.2235 19.8042 14.3493 18.93 14.3493 17.8519C14.3493 16.7737 15.2235 15.8995 16.3017 15.8995C17.3798 15.8995 18.254 16.7737 18.254 17.8519C18.254 18.93 17.3798 19.8042 16.3017 19.8042Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default NodeIcon;
