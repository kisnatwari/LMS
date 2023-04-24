import variants from "./variants";

const Button = ({ variant = "red", size = "md", className = "", children = "", onClick = () => null }) => {
    return (
        <button
            className={`${variants[variant]} ${className}`}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button
