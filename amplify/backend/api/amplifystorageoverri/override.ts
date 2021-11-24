import { AmplifyApiGraphQlResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper'
import type { OpenIdConnectConfig } from '@aws-cdk/aws-appsync'

const openIdConnectConfig = {
  // the properties below are optional
  clientId: 'asdfasdfasdfasdfasdfa',
  issuer: 'https://fake.com',
}

export function override(resources: AmplifyApiGraphQlResourceStackTemplate) {
  resources.api.GraphQLAPI.additionalAuthenticationProviders = [
    {
      authenticationType: 'OPENID_CONNECT',
      openIdConnectConfig,
    },
  ]
}
