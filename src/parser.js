export default function json(buffer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const decodedString = String.fromCharCode.apply(null, new Uint16Array(buffer));
          resolve(decodedString);
        } catch (e) {
          reject(e);
        }
      }, 500);
    });
  }