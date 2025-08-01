import React, {memo, type ReactNode} from "react";

interface IProps {
    children?: ReactNode,
}

const Friend: React.FC<IProps> = () => {
    return <div>friend</div>
}

export default memo(Friend)