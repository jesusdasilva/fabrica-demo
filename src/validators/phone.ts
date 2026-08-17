export function isValidPhone(phone: string): boolean {
  if (!phone || phone.trim() === '') {
    return false;
  }

  const cleaned = phone.replace(/\s+/g, '');

  return /^(\+?56)?(?:2\d{7,8}|9\d{8})$/.test(cleaned);
}
