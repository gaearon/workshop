# React Europe 2016 workshop repo

## Installing Node

Make sure you have *at least* Node 4.0.
Anything from 4.0 to the latest stable (6.x) will work.

```
node -v
> v4.0.0
```

If you don’t, [install the latest version](https://nodejs.org/en/).  
If you have an existing older Node installation, I recommend using [`n`](https://github.com/tj/n) to quickly switch between versions:

```
npm install -g n
n latest

node -v
> v6.2.0
```

>**Note:**
>Don’t run `npm` commands with `sudo`.
>This usually screws everything up.

## Updating npm

We also recommend that you use npm 3.x so your Babel installation doesn’t weigh a ton.  
It comes by default on Node 5.x and higher, but if you have an older version, please update it:

```
npm -v
> 2.14.2

npm i -g npm@latest

npm -v
> 3.9.3
```

>**Note:**
>Don’t run `npm` commands with `sudo`.
>This usually screws everything up.

## Running the Project

Verify that everything works by running

```
git clone https://github.com/gaearon/workshop.git
cd workshop
npm install
```
