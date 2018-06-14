# Medfully Front-end Resources

Since XWidget has been added as a Git submodule, please
use the option `--recursive` when cloning the repository as in this example:

```
git clone https://source.base22.com/scm/med/medfully-front-end.git --recursive
```

Start the project
```
npm install
npm start
```

**Please DON'T TOUCH the files `*.html` in the root directory**, since they are generated
by a Gulp.js task using the files in `page-wrappers`. 
- If you want to create a new page, please do it under `./page-wrappers`.
