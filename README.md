## Set-RestrictionPolicy for less file

[1. Tutorial](https://tecadmin.net/powershell-running-scripts-is-disabled-system/)
[2. Video](https://www.youtube.com/watch?v=Q2uLUuq0Ft4)
[4. MySolveImage](img/lessFileErrorSolve.png)

```
Doing for run:
PS E:\Web Development\coursera> cd css
PS E:\Web Development\coursera\css> less styles.less styles.css

```

## scss

1. npm install --save-dev node-sass
2. open your package.json file and add the following line into the scripts object "scss": "node-sass -o css/ css/"

```
"scripts": {
    "start": "npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server",
    "scss": "node-sass -o css/ css/"
  },
```

3. npm run scss

### parallelshell modules error solve

```
change a line in your node_modules/parallelshell/index.js:105 file

from: cwd: process.versions.node < '8.0.0' ? process.cwd : process.cwd(),

to: cwd: parseInt(process.versions.node) < 8 ? process.cwd : process.cwd(),
```

[parrallelshell error solve](https://stackoverflow.com/questions/51060296/how-do-you-correctly-use-parallelshell-with-npm-scripts)

