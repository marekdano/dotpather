### Add Typescript

1. run `npm install -D typescript`
2. add configuration file of `tsconfig.json` by runnig `npx tsc --init`
3. update `outDir` to `dist` in the `tsconfig.json` file
4. rename `index.js` to `index.ts` and run `npm run typecheck`
5. Fix TS error
   1. replace CommonJS module syntax with ESModules one
   2. add type of `string` to the `dotpath` function input
6. Add unit tests with Jest
   1. install `npm install -D jest ts-jest @types/jest`
   2. run `npx ts-jest config:init` to set up Jest config