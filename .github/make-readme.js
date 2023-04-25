const fs = require("fs");
const path = require("path");

const readFile = async (dirPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dirPath, (err, file) => {
            if (err) reject(err);
            resolve(file);
        });
    });
};

const writeFile = async (dirPath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dirPath, data, (err, file) => {
            if (err) reject(err);
            resolve(file);
        });
    });
};

const posts = JSON.parse(process.env.POSTS);

(async () => {
    const readme = (await readFile(path.join(process.cwd(), 'TEMPLATE.md'))).toString()
    const toReplaced = posts.map(post => `- [${post.meta.title}](${post.path})`).join('\n')
    const replacedReadme = readme.replace(/(<!-- posts here -->)/, toReplaced);
    await writeFile(path.join(process.cwd(), 'README.md'), replacedReadme)
})()
