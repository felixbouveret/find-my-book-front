module.exports = {
  extends: 'stylelint-config-rational-order',
  rules: {
    'order/properties-order': [[], { severity: 'warning' }],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': true,
        'empty-line-between-groups': true,
        severity: 'warning',
      },
    ],
  },

  plugin: 'stylelint-order',
};
