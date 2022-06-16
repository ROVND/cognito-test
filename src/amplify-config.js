// This file is used for manual configuration of the Amplify library.
// When Amplify is used in conjunction with the Amplify CLI toolchain or AWS Mobile Hub to manage backend resources,
// an aws-exports.js file is auto-generated and can be used instead of the below to automatically configure the Amplify library.
// In this workshop, we are using the Amplify client libraries without the CLI toolchain so you should edit this file manually.

const awsConfig = {
  Auth: {
    identityPoolId: "ap-northeast-1:33e74d7e-a0b2-4fa3-839a-e0e4003a2fc4", // example: 'us-east-2:c85f3c18-05fd-4bb5-8fd1-e77e7627a99e'
    region: "ap-northeast-1", // example: 'us-east-2'
    userPoolId: "ap-northeast-1_Z0qTBSLrI", // example: 'us-east-2_teEUQbkUh'
    userPoolWebClientId: "2pts7dd869jmn8t2k17riq594j", // example: '3k09ptd8kn8qk2hpk07qopr86'

    oauth: {
      domain: "dev-user.auth.ap-northeast-1.amazoncognito.com",
      scope: [
        "phone",
        "email",
        "profile",
        "openid",
        "aws.cognito.signin.user.admin",
      ],
      redirectSignIn: "http://localhost:3000",
      redirectSignOut: "http://localhost:3000",
      responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
  API: {
    endpoints: [
      {
        name: "LambdaSimpleProxy",
        endpoint:
          "https://x954e24abc.execute-api.ap-northeast-1.amazonaws.com/test", // example: 'https://u8swuvl00f.execute-api.us-east-2.amazonaws.com/prod'
        region: "ap-northeast-1", // example: 'us-east-2'
      },
    ],
  }
};

export default awsConfig;
