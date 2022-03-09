O plugin adiciona o seguinte exemplo de trecho de código a stack CDK:

```typescript
const s3ThrotledEventSource = new S3ThrotledEventSource(this, 'eventSourceX', { bucketName: 'bucketTest', lambdaName: 'extractionLambda' });
handlerCore.addEventSource(s3ThrotledEventSource);
```

O qual também gera uma lambda no diretório `src` das lambdas no subdiretório padrão `event-sources` com o nome da lambda informado na aplicação do plugin ex:
```dir
src/event-sources/extractionLambda.ts
```

