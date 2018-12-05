module.exports = {
    'parser': 'babel-eslint',
    'extends': [
        'eslint:recommended',
        'airbnb',
        'plugin:vue/base'
    ],
    'parserOptions': {
        'ecmaVersion': 6
    },
    'plugins': [
        'html',
        'import'
    ],
    'env': {
        'browser': true,
        'node': true
    },
    'globals': {
        'qs': false,
        '_': false,
        'moment': false
    },
    'rules': {
        'max-len': [0], // 一行最大的代码量
        'no-console': [1], // console
        'no-alert': [2], // alert comfirm prompt
        'eqeqeq': [2], // 全等 全不等
        'indent': [2, 4, { "SwitchCase": 1 }], // 缩进
        'semi': [2, 'always'], // 分号
        'quotes': [2, 'single'], // 引号
        'no-empty': [2, { // 空代码块
            'allowEmptyCatch': true
        }],
        'quote-props': [2, 'as-needed'], // 对象的属性能不用引号就不要用引号
        'one-var': [2], // 一条语句声明多个变量 + 换行
        'one-var-declaration-per-line': [2], // 一条语句声明多个变量 + 换行
        'comma-dangle': [0], // 逗号
        'arrow-parens': [2, 'as-needed'], // 箭头函数参数 括号
        'spaced-comment': [2], // 注释前后加空格
        'padded-blocks': [0, 'never'], // 代码块间的空行
        'no-multi-assign': [2], // 不要使用连等声明变量 var a = b = c
        'max-statements-per-line': [2], //
        'no-use-before-define': [2], // 在var或function之前被使用了, 即不要使用作用域提升的特性
        'no-shadow': [0], // 声明变量 函数参数, 不要与外部作用域里的变量名重复
        'no-else-return': [2], // 在else前面的条件判断里有return语句 (如果有就没必要写esle了, 直接写在后面就行)
        'no-undef': [2], // 不要使用隐式全局变量
        'no-restricted-globals': [1, ...['location', 'navigator', 'screen']], // 隐式全局变量
        'no-param-reassign': [0], // 不要改写函数参数
        'no-unused-vars': [2], // 定义了用不到的变量
        'no-return-assign': [2], // 函数不要返回一个表达式 (a, b) => a + b
        'arrow-body-style': [2], // 箭头函数的返回值与大括号 () => {...} vs () => ...
        'no-underscore-dangle': [0], // __foo  bar__
        'prefer-const': [2], // 推荐使用const
        'prefer-template': [2], // 用模板字符串替代字符串拼接
        'array-callback-return': [2], // 数组迭代函数必须有返回值, 每个函数都有自己独特的作用 别乱用 https://eslint.org/docs/rules/array-callback-return
        'keyword-spacing': [2], // 关键字前后的空格 if(){} vs if () {}
        'func-names': [1, 'never'], // 函数具名or匿名
        'function-paren-newline': [0, 'never'], // 函数参数新开一行
        'space-before-function-paren': [2], // 函数括号前面的空格
        'object-curly-spacing': [2], // 对象字面量前后空格 {a, b} vs { a, b }
        'object-shorthand': [2], // 对象的简写形式
        'vue/html-end-tags': [0], // 标签闭合
        'import/extensions': [0],  // 省略import文件的扩展名
        'import/no-unresolved': [0], // import 路径解析 (import './a' 这种走不通???)
        'import/no-extraneous-dependencies': [0], // import或require 的须在package.json里显式声明
        'import/newline-after-import': [2], // 最后一个import或require语句保留一个空行
        'import/first': [1], // 绝对引用应该在相对应用之前 import 'a' >> import './b'
        'import/prefer-default-export': [0], // 当只有一个export的时候 建议使用 export default
        'object-curly-newline': [2], // 对象换行
        'no-mixed-operators': [2], // 混合运算加括号
        'no-throw-literal': [2], // 不要直接throw一个字符串 建议抛Error对象
        'prefer-destructuring': [0], // 结构赋值搞起来
        'consistent-return': [2], // 函数返回值
        'no-unused-expressions': [0], // 没太懂
        'camelcase': [2], // 驼峰
        'dot-notation': [0], // 能用点操作符就别用[]
        'no-plusplus': [0], // 不使用 ++
        'operator-assignment': [0], // 操作符能简写就简写 += -= *= /=
        'consistent-return': [0],
        'react/react-in-jsx-scope': [0],
        'react/jsx-filename-extension': [0],
        'react/jsx-indent': [0],
        'react/react-in-jsx-scope': [0],
        'react/jsx-filename-extension': [0],
        'react/jsx-indent': [0],
        'react/jsx-indent-props': [0],
        'react/jsx-closing-tag-location': [0],
        'consistent-return': [0],
        'no-nested-ternary': [0]
    }
};
