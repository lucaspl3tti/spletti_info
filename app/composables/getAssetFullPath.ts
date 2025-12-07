export default function (imagePath: string): string {
  const runtimeConfig = useRuntimeConfig();
  const { backendUrl } = runtimeConfig.public;

  return `${backendUrl}${imagePath}`;
}
