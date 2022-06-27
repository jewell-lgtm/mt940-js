const td = new TextDecoder('utf-8');

export default function bufferToText(arr: Uint8Array | number[], start?: number, end?: number): string {
    if (!(arr instanceof Uint8Array)) {
        arr = new Uint8Array(arr);
    }
    arr = arr.slice(start, end);
    return td.decode(arr);
}
