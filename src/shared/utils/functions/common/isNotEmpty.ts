export function isNotEmpty<T>(value: T): value is NonNullable<T> {
    return typeof value !== "undefined" && value !== null;
}
