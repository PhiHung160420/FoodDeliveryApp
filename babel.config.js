module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					'components': './src/components',
					'screens': './src/screens',
          'navigations': './src/navigations',
					'constants': './src/constants',
					'utils': './src/utils',
					'stores': './src/redux/stores',
					'actions': './src/redux/actions',
					'assets': './src/../assets',
				}
			}
		],
		'react-native-reanimated/plugin'
	]
};
