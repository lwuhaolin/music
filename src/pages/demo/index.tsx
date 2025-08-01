import React, {memo, type ReactNode} from "react";
interface IProps {
    children?:ReactNode,
    name:string,
    age:number,
    height?:number,
}
const Demo: React.FC<IProps> = (properties) => {
    return (
        <div>
            <div>{properties.name}</div>
            <div>{properties.age}</div>
            {properties.children}
            <div>{properties.height}</div>
        </div>)
}

export default memo(Demo)