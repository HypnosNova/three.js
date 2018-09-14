import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { glsl } from 'rollup-plugin-three-glsl';

export default {
	input: 'src/Three.js',
	plugins: [
		glsl(),
		eslint( {
			include: '**/*.js'
		} ),
		babel( {
			babelrc: false,
			'plugins': [
				'external-helpers'
			],
			presets: [[ 'env', { modules: false } ]]
		} )
	],
	output: [
		{
			format: 'umd',
			name: 'THREE',
			file: 'build/three.js',
			indent: '\t'
		},
		{
			format: 'es',
			file: 'build/three.module.js',
			indent: '\t'
		}
	]
};
