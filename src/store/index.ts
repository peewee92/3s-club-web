/*
 * @Description: 全局状态存储
 * @Author: xujian
 * @Date: 2023-11-07 15:21:14
 */
import { createContainer } from "unstated-next";
import { useState } from "react";
import {
  getStorageToken,
  getStorageUseInfo,
  setStorageToken,
  setStorageUseInfo,
} from "@/utils/tools";

function useStore() {
  const [token, _setToken] = useState<string>(() => {
    return getStorageToken();
  });
  const [useInfo, _setUseInfo] = useState<Record<string, any>>(() => {
    return getStorageUseInfo();
  });

  const setToken = (token: string) => {
    _setToken(token);
    setStorageToken(token);
  };

  const setUseInfo = (useInfo: any) => {
    _setUseInfo(useInfo);
    setStorageUseInfo(useInfo);
  };

  return {
    token,
    setToken,
    useInfo,
    setUseInfo,
  };
}

const StoreContainer = createContainer(useStore);

export default StoreContainer;
