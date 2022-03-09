import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StackSpotLambdaHandlerCore, LambdaRuntime, S3ThrotledEventSource } from '@stackspot/cdk-component-handler-core';

export class {{handler_name|title|replace("-", "")}}HandlerStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

    const handlerCore = new StackSpotLambdaHandlerCore(this, 'StackSpotHandlerCore', {
      sourceDir: '../{{source_dir}}'
    });
    
    const s3ThrotledEventSource = new S3ThrotledEventSource(this, 'eventSourceX', 
    { bucketName: 'bucketTeste', 
      lambdaName: 'extractionLambda',
      sourceDir: '../{{source_dir}}'
    });
    handlerCore.addEventSource(s3ThrotledEventSource);
  }
}
