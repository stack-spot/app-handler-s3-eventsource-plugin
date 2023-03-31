- **Descrição:** O S3 EventSource Plugin permite que seja adicionado uma fonte de eventos a stack de handler.
- **Categoria:** App
- **Stack:** Lambda
- **Criado em:** 04/03/2022
- **Última atualização:** 04/03/2022
- **Download:** [app-handler-s3-eventsource-plugin](https://github.com/stack-spot/app-handler-s3-eventsource-plugin)

# Indice
- [Visao Geral](#Visao-Geral)
- [Uso](#Uso)
  - [Pre-requisitos](#Pre-requisitos)
  - [Recomendado](#Recomendado)
  - [Configuração Catalogo CLI](#Configuração-Catalogo-CLI)
    - [Verificacao template e plugin](#Verificacao_template_e_plugin)
  - [Instalacao](#Instalacao)
- [Tutorial](#Tutorial)
- [Useful commands](#Useful-commands)
- [Next Steps](#Next-steps)

## Visao Geral
### Como Plugin funciona
Por meio das linhas de comando StackSpot é possível aplicar o plugin em uma aplicação do tipo APP  
Ao realizar a aplicação o template de _construct_ cdk é criado na aplicação, utilizando o componente `@stackspot/cdk-component-handler-core`  
Durante a aplicação do plugin é possível informar um ARN de um bucket S3 já existente ou apenas o nome de um Bucket a ser criado juntamente aos recursos da stack em questão.

## Uso
 TODO

### Pre-requisitos
Necessário a configuração de alguns pré-requisitos para utilização do plugin.  
- [**Instalação StakSpot CLI**](https://docs.stackspot.com/v3.0.0/os-cli/installation/)
- [**NodeJS**](https://nodejs.org/en/)
- [**Git**](https://git-scm.com/)
- [**AWS CLI**](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
- [**CDK**](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

### Recomendado
Recomendamos a utilização de algumas ferramentas para desenvolvimento  
- [**LocalStack**](https://github.com/localstack/localstack)

### Configuração Catalogo CLI
Executar comando abaixo para atualização de local com catálogo que contém OpenAPI plugin:  
```bash
stk add catalog https://github.com/stack-spot/skynet-lambda-handler-stack
```

#### Verificacao template e plugin
Executando os comandos abaixo é possível verificar que o catálogo foi carregado localmente  
**Listagem plugin disponíveis localmente:**
```bash
stk list plugin
```

**Exemplo output:**
```bash
Stack: skynet-lambda-handler-stack
+-----------------------------------+-------------------------------------------------------------------------------------------+---------+-----------------+
| name                              | description                                                                               | types   | version(latest) |
+-----------------------------------+-------------------------------------------------------------------------------------------+---------+-----------------+
TODO
```

**Listagem template disponíveis localmente:**
```bash
os list template
```

**Exemplo output:**
```bash
Stack: skynet-lambda-handler-stack
+----------------------+---------------------------------------------+------------------+-----------------+
| name                 | description                                 | types            | version(latest) |
+----------------------+---------------------------------------------+------------------+-----------------+
TODO
```

### Instalacao
Os passos dessa seção mostram como criar e configurar o plugin na aplicação  

**Passo 1.** Copie e cole a URL abaixo no seu terminal:
```bash
stk create app meu-teste-app -t skynet-lambda-handler-stack/base-app-ts-template
```

**Passo 2.** Acessar projeto criado:  
```bash
cd meu-teste-app
```

**Passo 3.** Aplicação de plugin baseado em catálogo:  
```bash
stk apply plugin skynet-lambda-handler-stack/app-handler-s3-eventsource-plugin
```

### Inputs
Abaixo estão listados os inputs do plugin.

Os inputs necessários para utilizar o plugin são:  



