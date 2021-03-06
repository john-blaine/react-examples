import path from "path";
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');

console.log(SRC_DIR)

export const entry = `${SRC_DIR}/index.jsx`;
export const output = {
    filename: `bundle.js`,
    path: DIST_DIR
};
export const mode = 'development';
export const module = {
    rules: [
        {
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }
    ]
};
