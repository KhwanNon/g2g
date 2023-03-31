export async function timeDelay(sec: number) {
  return new Promise((resolve: any) => setTimeout(resolve, sec));
}
