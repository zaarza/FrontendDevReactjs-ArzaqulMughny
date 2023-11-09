import ButtonStyle from './Button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit';
    children?: JSX.Element | string;
    variant?: 'primary' | 'outline';
    size?: 'fit' | 'full';
}
const Button = (props: IButtonProps) => {
    const { size = 'fit', variant = 'primary', type = 'button', children, ...attributes } = props;

    return (
        <button
            className={`${ButtonStyle.button} ${ButtonStyle[`button--${variant}`]} ${ButtonStyle[`button--${size}`]}`}
            {...attributes}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
