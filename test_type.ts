// 函数调用签名
interface IFcall<IRoot>{
    <TRoot>(fn:(number:IRoot)=> TRoot,qwl?:number):TRoot;
}
// 定义函数对象
const foo:IFcall<string>=function(fn){
    return fn("111")
}
// 调用函数
foo((m)=>{
    return m;
},22)

