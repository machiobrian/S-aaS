import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CopykittInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const apiLambda = new lambda.Function(this, "ApiFunction", {
      // we need at the veru basic to have; runtime, code <file and path of code to be run in this function> 
      // and handler (module run once this funtion is invoked)
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset("/home/ix502iv/Documents/SaaS/first_saas/app/"),
      handler: "copykitt_api.handler",
    }
    )
   
  }
}
