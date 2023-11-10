interface IIcon extends React.SVGProps<SVGSVGElement> {}

export const Star = (props: IIcon) => {
    const { ...attributes } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            {...attributes}
        >
            <path d='M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z'></path>
        </svg>
    );
};

export const StarHalf = (props: IIcon) => {
    const { ...attributes } = props;

    return (
        <svg
            {...attributes}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
        >
            <path d='M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z'></path>
        </svg>
    );
};

export const StarEmpty = (props: IIcon) => {
    const { ...attributes } = props;

    return (
        <svg
            {...attributes}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
        >
            <path d='M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z'></path>
        </svg>
    );
};
