import storage from "@/utils/storage";

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export const getKey = (key: string): string => `__3_CLUB_${key.toUpperCase()}__`

// token 相关
const TOKEN_KEY: string = getKey('token')
export const getStorageToken = (): string => storage.get(TOKEN_KEY, '') as string
export const setStorageToken = (v: string): void => storage.set(TOKEN_KEY, v)
export const removeStorageToken = (): void => storage.remove(TOKEN_KEY)

// token 相关
const USE_INFO_KEY: string = getKey('useInfo')
export const getStorageUseInfo = (): string => storage.get(USE_INFO_KEY, {}) as string
export const setStorageUseInfo = (v: string): void => storage.set(USE_INFO_KEY, v)
export const removeStorageUseInfo = (): void => storage.remove(USE_INFO_KEY)

export function ellipseAddress(address = ''): string {
  if (address.length <= 9) {
    return address;
  }
  
  let firstFive = address.substring(0, 3);
  let lastFour = address.substring(address.length - 6);
  let middle = '****';
  
  return firstFive + middle + lastFour;
}