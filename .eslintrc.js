module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		node: true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
		'object-curly-spacing': [2, 'always'],
		'@typescript-eslint/ban-ts-comment': 'warn'
	}
}
