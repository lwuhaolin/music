import React, {memo, type ReactNode} from "react";

interface IProps {
    children?: ReactNode,
}

const Download: React.FC<IProps> = () => {
    return <div>download</div>
}

export default memo(Download)