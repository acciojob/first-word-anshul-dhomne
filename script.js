function firstWord(str) {
  // Trim leading spaces first
  str = str.trim();

  // If the string is empty after trimming, return it
  if (str === '') return '';

  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');

  // If there's no space, return the entire string
  if (spaceIndex === -1) return str;

  // Otherwise, return the substring up to the first space
  return str.substring(0, spaceIndex);
}
