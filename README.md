# Steps to generate the issue

## 1. Install all dependencies;

```sh
npm install
```

## 2. Up the server on localhost:8080;

```sh
npm run serve
```

## 3. After that, your default browser will be opened with these errors;

```txt
TS1479: The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("@headlessui/react")' call instead.
To convert this file to an ECMAScript module, add the field `"type": "module"` to '/path/to/headlessui-checking-error/package.json'.
```

Down the server with `ctrl-c`;

## 4. If we want to fix that error, it seems to need to delete the following line from `./node_modules/@headlessui/react/package.json`

```json
{
  "type": "module"
}
```
