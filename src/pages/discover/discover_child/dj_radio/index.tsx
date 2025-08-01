import React, {memo, type ReactNode} from "react";

interface IProps {
    children?: ReactNode,
}

const DJ: React.FC<IProps> = () => {
    return <div>Dj</div>
}

export default memo(DJ)