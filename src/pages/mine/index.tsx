import React, {memo, type ReactNode} from "react";

interface IProps {
    children?: ReactNode,
}

const Mine: React.FC<IProps> = () => {
    return (
        <div>
            Mine
        </div>)
}

export default memo(Mine)