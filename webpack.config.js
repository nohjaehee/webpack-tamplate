//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports ={
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  //결과물(번들)을 반환하는 설정
  output: {
    //path : path.resolve(__dirname, 'dist'),//폴더명
    //filename: 'main.js', //파일명
    clean: true

  },

  module:{
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  //entry 에서 output을 만들어 내는 과정 중 plugin을 활용한다.
  //즉, 번들링 후 겨로가무르이 처리 방식 등 다양항 플로그인들을 설정
  plugins : [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns : [
        {from : 'static'}
      ]
    })
  ],

  devServer : {
    host : 'localhost'
  }
}
