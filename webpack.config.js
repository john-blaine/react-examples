import path from "path";
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

export const entry = `{SRC_DIR}/app.jsx`;
export const output = {
    filename: `bundle.js`,
    path: DIST_DIR
};
export const module = {
    loaders: [
        {
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }
    ]
};
