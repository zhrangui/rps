export function toTitleCase(str: string) {
  return str.replace(/\b\w+/g, function (s: string) {
    return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()
  }).replace(/_\w/g, s=>s.charAt(0) + s.charAt(1).toUpperCase());
}
