/**
 * @exports apiErrorMessage interface's error message
 */
 import { AxiosResponse } from 'axios';
import { CustomResponse } from './types';

 const apiErrorMessage = {
   400: '错误请求',
   401: '未授权，请重新登录',
   403: '拒绝访问',
   404: '请求错误,未找到该资源',
   405: '请求方法未允许',
   408: '请求超时',
   500: '服务器端出错',
   501: '网络未实现',
   502: '网络错误',
   503: '服务不可用',
   504: '网络超时',
   505: 'http版本不支持该请求',
   22: '错误请求',
   1: '错误请求',
   1800: '数据量超过查询上限（9999条），请增加过滤条件后查看'
 };
 
 const SUCCESS_CODE = [0];

 export function handleError(res: AxiosResponse<any>, resolve: { (value: CustomResponse | PromiseLike<CustomResponse>): void; (value: CustomResponse | PromiseLike<CustomResponse>): void; (value: CustomResponse | PromiseLike<CustomResponse>): void; (arg0: any): any; }, reject: { (reason?: any): void; (reason?: any): void; (reason?: any): void; (arg0: any): void; }, isExport = false) {
   if (
     res &&
     (res.status !== 200 ||
       !SUCCESS_CODE.includes(res.data.status) ||
       (res.data.resultCode && res.data.resultCode === 1800))
   ) {
     console.error(res?.data?.error?.message)
    //  Message.error({
    //    message:
    //      apiErrorMessage[res.status] ||
    //      apiErrorMessage[res.data.status] ||
    //      apiErrorMessage[res.data.resultCode] ||
    //      apiErrorMessage[400],
    //    type: 'error'
    //  });
     reject(res);
   } else if (res) {
     // 防止被取消的重复请求没有res仍然resolve导致报错
     isExport ? resolve(res) : resolve(res?.data);
   }
 }
 export default {
   apiErrorMessage,
   handleError
 };
 