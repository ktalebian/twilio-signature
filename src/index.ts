import crypto from "node:crypto";

/**
 * Generate a Twilio signature for validating webhook requests.
 *
 * @param authToken Your Twilio Auth Token
 * @param url The full request URL (e.g. https://example.com/webhook)
 * @param params A record of POST parameters (Twilio form-encoded body)
 * @returns A base64-encoded HMAC-SHA1 signature string
 */
export function createTwilioSignature(
  authToken: string,
  url: string,
  params: Record<string, string> = {},
): string {
  let data = url;

  const sortedKeys = Object.keys(params).sort();
  for (const key of sortedKeys) {
    data += key + params[key];
  }

  return crypto.createHmac("sha1", authToken).update(data).digest("base64");
}
