# <img src="https://docs.nestjs.com/assets/logo-small.svg" width="24" alt="NestJS logo"> Learning NestJS <img src="https://docs.nestjs.com/assets/logo-small.svg" width="24" alt="NestJS logo"> | ![License - MIT](https://img.shields.io/badge/License-MIT-orange)

> Repository to document my continuous learning in NestJS.

* [📒Documentation](https://docs.nestjs.com/) | branch → learning-fundamentals-with-documentation
* [📘Fundamentals - Alura](https://cursos.alura.com.br/course/nestjs-criando-api-resftul) | branch → learning-fundamentals-with-alura
* [📙Simple CRUD - Alura+](https://www.youtube.com/watch?v=YHpG6t91oW8) | branch → learning-simple-crud-with-alura-plus
* [📗TypeORM - Alura](https://cursos.alura.com.br/course/nest-js-typeorm) | branch → learning-TypeORM-with-alura

____

## 📘 Fundamentals - ALURA

[Nest.js: criando uma API Restful](https://cursos.alura.com.br/course/nestjs-criando-api-resftul)

> Let's build a RESTful API for a store without worrying about the database now

1. Install dependencies

    `npx @nestjs/cli new store`

2. Delete unused files

    `app.service.ts`
    `app.e2e-spec.ts`
    `app.controller.ts`
3. Make your API, dude!

____

## 📙 Simple CRUD - ALURA +

1. Install dependencies

    `npm i -g @nestjs/cli`

    `nest new project-name`
2. Run native crud generator

    `nest g resource`
3. Choose a name for the resource

    `users`
4. Choose a setup layer

    `REST API`

### 🔎Note

> **Synchronous and Asynchronous Validations**
>
>In summary, synchronous validations occur within the same execution flow of the program, blocking the execution until the validation is completed. Asynchronous validations, on the other hand, do not block the execution and allow other tasks to be performed while the validation is in progress. The choice between synchronous and asynchronous validations depends on the specific needs of your application and the operations you need to perform during the validation.
____
🐖 that's all, folks (for now) 🐖
