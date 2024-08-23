# Using it
Just drag and drop the files from the repo into your react project and install any depenedencies missing. You may also need to install `@types/node` as a dev dependency for `fs` and `console` to not throw type errors.

## Note
If your application is having trouble starting because of the `import routes from "../routes"` just comment that import out, create a standard React page and load it on your website and it should generate the file, then you can uncomment it and your file based routing is now working
