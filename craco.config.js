const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },

  //   {
  //     plugin: CracoAntDesignPlugin,
  //     options: {
  //         cssLoaderOptions: {
  //             sourceMap: true,
  //             modules: {
  //               auto:true,
  //                 localIdentName: '[name]__[local]__[hash:base64:7]',
  //                 mode: resourcePath => {
  //                     if (/pure\.(less|css)$/i.test(resourcePath)) {
  //                         return 'pure';
  //                     }
  
  //                     if (/(global)\.(less|css)$/i.test(resourcePath)) {
  //                         return 'global';
  //                     }
  
  //                     if (/antd/i.test(resourcePath)) {
  //                         return 'global';
  //                     }
  
  //                     return 'local';
  //                 }
  //             }
  //         },
  //         babelPluginImportOptions: {
  //             libraryDirectory: 'es'
  //         }
  //     }
  // }
  ],
};