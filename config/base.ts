const dev = process.env.NODE_ENV !== 'production';

export const getDomain = () => {
  return dev ? 'http://127.0.0.1:7001' : 'http://120.25.245.87:7001'
}

export const getLocalIp = () => {
  return dev ? 'http://127.0.0.1:3000' : 'http://120.25.245.87:3000'
}

export const clientID = (() => {
  return dev ? 'f07bea6150a039aacefb' : '02eea76367fd18e94932'
})();

export const clientSecret = (() => {
  return dev ? 'ca03caf4a6d49d32475807aed74e98f37f126d71' : 'd10100dd6c28ca41a6582a15a8b64f790daeebf1'
})();

// http://www.xiesmallxie.cn:1996