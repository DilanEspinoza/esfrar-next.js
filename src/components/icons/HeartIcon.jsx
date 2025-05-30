export const HeartIcon = ({ className = "", fill = "none", stroke = "currentColor" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`size-6 text-2xl ${className}`}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 21C12 21 5 13.5 5 8.5C5 6.01472 7.01472 4 9.5 4C10.8807 4 12.1174 4.684 12.8333 5.7322C13.5492 4.684 14.7859 4 16.1667 4C18.652 4 20.6667 6.01472 20.6667 8.5C20.6667 13.5 14 21 14 21H12Z" />
    </svg>
);
