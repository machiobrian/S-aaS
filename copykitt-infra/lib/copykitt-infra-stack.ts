import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import {Construct} from "constructs";
import * as dotenv from "dotenv"
import * as apiGateway from 'aws-cdk-lib/aws-apigateway';

// initialize the dotenv
dotenv.config()

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CopykittInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const layer = new lambda.LayerVersion(this, "BaseLayer", {
      code: lambda.Code.fromAsset("lambda_base_layer/layer.zip"),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_7],
      
    });

    const apiLambda = new lambda.Function(this, "ApiFunction", {
      // we need at the veru basic to have; runtime, code <file and path of code to be run in this function> 
      // and handler (module run once this funtion is invoked)
      runtime: lambda.Runtime.PYTHON_3_7,
      code: lambda.Code.fromAsset("/home/ix502iv/Documents/SaaS/first_saas/app/"),
      handler: "copykitt_api.handler",
      layers: [layer],
      //we need to have an environment variable -> error from the lambda test
      environment: {
          OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? "",
      },
    });

    // creating an API
    const copyKittApi = new apiGateway.RestApi(this, "RestApi", {
      restApiName: "CopyKitt API",
    });
    //adding a lambda integration to our infrastruture
    copyKittApi.root.addProxy({
      defaultIntegration: new apiGateway.LambdaIntegration(apiLambda),
    });
   
  }
}
