# Twilio Signature Generator

[![npm version](https://img.shields.io/npm/v/twilio-signature.svg)](https://www.npmjs.com/package/twilio-signature)
[![License](https://img.shields.io/npm/l/twilio-signature.svg)](https://github.com/ktalebian/twilio-signature/blob/main/LICENSE)

A lightweight utility for generating Twilio Signatures to sign your webhook requests. Refer to [Twilio Webhooks Security](https://www.twilio.com/docs/usage/webhooks/webhooks-security) for more information.

If you need a command-line interface instead of a library, check out [twilio-signature-cli](https://www.npmjs.com/package/twilio-signature-cli), which wraps this package to provide an easy-to-use CLI for generating Twilio signatures.

## Installation

```bash
npm install twilio-signature
```

## Usage

This library provides a simple way to generate Twilio signatures that match those used by Twilio to sign webhook requests.

```typescript
import { createTwilioSignature } from 'twilio-signature';

// Your Twilio Auth Token
const authToken = 'your_auth_token_here';

// The full URL that received the webhook
const url = 'https://your-server.com/twilio-webhook';

// The POST parameters sent by Twilio
const params = {
  From: '+12345678901',
  To: '+19876543210',
  Body: 'Hello World'
};

// Generate the signature
const signature = createTwilioSignature(authToken, url, params);
console.log(signature); // Base64-encoded signature string
```
