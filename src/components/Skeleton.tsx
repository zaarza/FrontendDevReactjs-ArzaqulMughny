import style from './Skeleton.module.css';

interface ISkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = (props: ISkeletonProps) => {
    const { ...attributes } = props;

    return (
        <div
            className={style.skeleton}
            {...attributes}
        />
    );
};

export default Skeleton;
