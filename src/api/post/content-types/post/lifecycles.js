const slugify = require("slugify");

module.exports = {
  async beforeCreate({ params }) {
    if (params.data.title) {
      params.data.slug = slugify(params.data.title, { lower: true });
    }
  },
  async beforeUpdate({ params }) {
    if (params.data.title) {
      params.data.slug = slugify(params.data.title, { lower: true });
    }
  },
};
