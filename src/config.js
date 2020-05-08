const dev = {
  STRIPE_KEY: "YOUR_STRIPE_DEV_PUBLIC_KEY",
  s3: {
    REGION: "us-east-2",
    BUCKET: "serverless-note-demo-bucket"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pcig2h27h6.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_VBP0LgX05",
    APP_CLIENT_ID: "3qr47qas5db714rf5egk9hu8uu",
    IDENTITY_POOL_ID: "us-east-2:adcac127-96c7-4a46-b430-24784b0fe978"
  }
};

const prod = {
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
  s3: {
    REGION: "us-east-2",
    BUCKET: "serverless-note-demo-bucket"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pcig2h27h6.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_VBP0LgX05",
    APP_CLIENT_ID: "3qr47qas5db714rf5egk9hu8uu",
    IDENTITY_POOL_ID: "us-east-2:adcac127-96c7-4a46-b430-24784b0fe978"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
