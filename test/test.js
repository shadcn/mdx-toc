const fs = require("fs");
const path = require("path");
const remark = require("remark");
const mdx = require("remark-mdx");
const frontmatter = require("remark-frontmatter");
const toc = require("..");

const doc = fs.readFileSync(path.join(__dirname, "./fixture.mdx"), "utf8");

it("extracts toc from mdx", () => {
  const result = remark().use(frontmatter).use(mdx).use(toc).processSync(doc);

  expect(result.data).toMatchSnapshot();
});
