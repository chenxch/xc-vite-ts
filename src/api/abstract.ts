import { cancelRepeat, axios } from './intercept';
import { AxiosRequest, CustomResponse } from './types';
import {
  // apiErrorMessage,
  handleError
} from './handleError';
import { AxiosResponse } from 'axios';

class Abstract {
  protected baseURL: string = process.env.VUE_APP_API_BASE_URL || ''

  protected headers: object = {
      ContentType: 'application/json;charset=UTF-8'
  }
  private apiAxios({ baseURL = this.baseURL, headers = this.headers, method, url, data, params, responseType }: AxiosRequest, isExport: boolean = false): Promise<CustomResponse> {
    return new Promise((resolve, reject) => {
      cancelRepeat({
          baseURL,
          headers,
          method,
          url,
          params,
          data,
          responseType
      }).then((res) => {
        // isExport ? exportFile(res, resolve, reject): 
        handleError(res, resolve, reject, isExport)
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }

  private baseAxios({ baseURL = this.baseURL, headers = this.headers, method, url, data, params, responseType }: AxiosRequest): Promise<CustomResponse> {
    return new Promise((resolve, reject) => {
      axios({
          baseURL,
          headers,
          method,
          url,
          params,
          data,
          responseType
      }).then((res) => {
        handleError(res, resolve, reject);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }

  /**
   * GET类型的网络请求
   */
  protected get({ baseURL, headers, url, data, params, responseType }: AxiosRequest, cancelRepeat: Boolean = true) {
    if (cancelRepeat) {
      return this.apiAxios({ baseURL, headers, method: 'GET', url, data, params, responseType });
    } else {
      return this.baseAxios({ baseURL, headers, method: 'GET', url, data, params, responseType });
    }
    
  }

  /**
   * POST类型的网络请求
   */
  protected post({ baseURL, headers, url, data, params, responseType }: AxiosRequest, cancelRepeat: Boolean = true) {
    if (cancelRepeat) {
      return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType });
    } else {
      return  this.baseAxios({ baseURL, headers, method: 'POST', url, data, params, responseType });
    }
  }

  /**
   * PUT类型的网络请求
   */
  protected put({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
      return this.apiAxios({ baseURL, headers, method: 'PUT', url, data, params, responseType });
  }

  /**
   * DELETE类型的网络请求
   */
  protected del({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
      return this.apiAxios({ baseURL, headers, method: 'DELETE', url, data, params, responseType });
  }

  /**
   * PATCH类型的网络请求
   */
   protected patch({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
    return this.apiAxios({ baseURL, headers, method: 'PATCH', url, data, params, responseType });
  }

  /**
   * PATCH类型的网络请求
   */
   protected export({ baseURL, headers, url, data, params, responseType = 'blob' }: AxiosRequest) {
    return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType });
    // return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType }, true);
  }
}

// post下载
const exportFile = (res: AxiosResponse<any>, resolve: (value: CustomResponse | PromiseLike<CustomResponse>) => void, reject: (reason?: any) => void) => {
  const contentDisposition = res.headers['content-disposition'];
  if (contentDisposition === undefined) {
    return;
  }
  const filename = decodeURI(
    contentDisposition.split('fileName=')[1] ||
      contentDisposition.split('filename=')[1]
  );
  const blob = new Blob([res.data]);
  const url = window.URL.createObjectURL(blob);
  if (window.navigator.msSaveBlob) {
    try {
      window.navigator.msSaveBlob(blob, filename);
    } catch (e) {
      console.log(e);
    }
  } else {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  }
  handleError(res, resolve, reject);
};