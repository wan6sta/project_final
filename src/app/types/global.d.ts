declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpg";
declare module "*.jpeg";

declare const __IS_DEV__: boolean;
