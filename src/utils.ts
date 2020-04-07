export function log(msg: string) {
  const t = Date.now();
  return (value: any) => console.log(`${Date.now() - t}: ${msg} -> ${value}`);
}
