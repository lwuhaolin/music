import React, {memo, type ReactNode} from "react";

interface IProps {
    children?: ReactNode,
}

const Album: React.FC<IProps> = () => {
    return <div>album</div>
}

export default memo(Album)