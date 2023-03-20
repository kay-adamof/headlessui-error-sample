# Steps to create the issue

## Install

Install all dependencies;

```sh
npm install
```

## Start the server

Start the server on localhost:8080;

```sh
npm run serve
```

## Find the error

After that, your default browser will open with these errors;

```txt
TS1479: The current file is a CommonJS module whose imports will produce
'require' calls; however, the referenced file is an ECMAScript module
and cannot be imported with 'require'. Consider writing a dynamic
'import("@headlessui/react")' call instead.
To convert this file to an ECMAScript module, add the field
`"type": "module"` to '/path/to/headlessui-checking-error/package.json'.
```

## Shut down the server

Shut down the server with `ctrl-c`;

## To fix this problem

If we want to fix this, it seems we need to delete the following
line from `./node_modules/@headlessui/react/package.json`

```json
{
  "type": "module"
}
```
