// 验证手机号
export const validatePhone = (phone: string) => {
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(phone);
};