/*Any import ending with .svg should be treated as a module with the specified content.*/
declare module "*.svg" {
  const content: string;
  export default content;
}
