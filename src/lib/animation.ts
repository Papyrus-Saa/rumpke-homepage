export function fadeUp(visible: boolean): string {
  return `transition-[opacity,transform] ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;
}
