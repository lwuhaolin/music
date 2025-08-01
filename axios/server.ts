import axios, { AxiosError } from "axios";

// type Fn = (data: any) => any; // 更宽松的类型定义

interface IAnyObj {
    [index: string]: unknown;
}

// 创建 Axios 实例
const instance = axios.create({
    baseURL: '/api', // 使用代理路径
    timeout: 10000,
});

// 定义请求拦截
instance.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token') || ''}`;
    config.headers['X-Custom-Header'] = 'custom-value';
    return config;
});

// 定义响应拦截
instance.interceptors.response.use(
    (response) => {
        // 接受所有2xx状态码
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        return Promise.reject(response);
    },
    (err) => {
        handleNetworkError(err.response?.status || 0);
        return Promise.reject(err);
    }
);

// 错误处理函数
export const handleNetworkError = (errStatus?: number) => {
    const networkErrMap: Record<number, string> = {
        400: "错误的请求",
        401: "未授权，请重新登录",
        403: "拒绝访问",
        404: "请求错误，未找到该资源",
        405: "请求方法未允许",
        408: "请求超时",
        500: "服务器端出错",
        501: "网络未实现",
        502: "网络错误",
        503: "服务不可用",
        504: "网络超时",
        505: "http版本不支持该请求",
    };

    if (errStatus && networkErrMap[errStatus]) {
        console.log(networkErrMap[errStatus]);
    } else {
        console.log(`其他连接错误 -- ${errStatus}`);
    }
};

// get请求 - 更简单的实现
export const Get = <T>(
    url: string,
    params?: IAnyObj
): Promise<[AxiosError | null, T | undefined]> => {
    return new Promise((resolve) => {
        instance
            .get<T>(url, { params })
            .then((response) => {
                resolve([null, response.data]);
            })
            .catch((err: AxiosError) => {
                resolve([err, undefined]);
            });
    });
};

// post请求
export const Post = <T>(
    url: string,
    data: IAnyObj,
    params?: IAnyObj
): Promise<[AxiosError | null, T | undefined]> => {
    return new Promise((resolve) => {
        instance
            .post<T>(url, data, { params })
            .then((response) => {
                resolve([null, response.data]);
            })
            .catch((err: AxiosError) => {
                resolve([err, undefined]);
            });
    });
};