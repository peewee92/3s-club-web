const isString = (v: unknown): v is string => typeof v === 'string'

const STORAGE = window.localStorage

function serialize(v: unknown): string {
  return JSON.stringify(v)
}

function deserialize(v: string | null) {
  if (!isString(v)) {
    return undefined
  }
  try {
    return JSON.parse(v)
  } catch (e) {
    return v || undefined
  }
}

// 定义 storage 方法
export default {
  set(key: string, val: unknown): void {
    STORAGE.setItem(key, serialize(val))
  },
  get(key: string, def: unknown): unknown {
    const val = deserialize(STORAGE.getItem(key))
    return val === undefined ? def : val
  },
  remove(key: string): void {
    STORAGE.removeItem(key)
  },
  clear(): void {
    STORAGE.clear()
  }
}
