
export function getImgSrc(img: string): string {
    return new URL(`../assets/img/${img}.png`, import.meta.url).href;
}