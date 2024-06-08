const crypto = require("crypto");

// Define the encryption algorithm and key
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Create a cipher object and encrypt the data
function encrypt(data) {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(data);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}

// Example usage
const plaintext = "This is a secret message";
const encryptedData = encrypt(plaintext);
console.log("Encrypted data:", encryptedData);

///////////////////////// decrypted //////////////////////////////////

// // Create a decipher object and decrypt the data
function decrypt(data) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(key),
    Buffer.from(data.iv, "hex")
  );
  let decrypted = decipher.update(Buffer.from(data.encryptedData, "hex"));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// // Example usage
const encryptedDatas = {
  iv: iv,
  encryptedData: encryptedData,
};
const decryptedData = decrypt(encryptedDatas);
console.log("Decrypted data:", decryptedData);
