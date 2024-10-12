// src/global.d.ts
interface Window {
    ethereum: any; // 或者更具体的类型，例如 `import { providers } from 'ethers';` 之后使用 `providers.ExternalProvider`
}