# react 官网

## 前期准备

![image-20210409210928733](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210409221031.png)

```js
// js 初始结构
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square 组件渲染了一个单独的 button
class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button 
        className="square" 
        onClick= {() => {this.setState({value: 'X'})}}
      >
        { this.state.value }
      </button>
    );
  }
}

// Board 组件渲染了 9 个方块
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={ i }/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game 组件渲染了含有默认值的一个棋盘
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

```

## React Developer Tools

以后下载插件就用[扩展迷](https://www.extfans.com/)

[使用 react-devtools 后出现 Uncaught TypeError: Cannot read property ‘forEach‘ of undefined 的解决方法](https://blog.csdn.net/Leo_xian/article/details/112899961)

版本问题，下载最新版本的

[React Developer Tools安装使用](https://blog.csdn.net/whuhewei/article/details/105600127)

## 井字棋

```js
// js 成品
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square 组件渲染了一个单独的 button
// class Square extends React.Component {
//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick= {() => {this.props.onClick()}}
//       >
//         { this.props.value }
//       </button>
//     );
//   }
// }

// 改写成 Square 函数组件
// 想写的组件只包含一个 render 方法，并且不包含 state，那么使用函数组件就会更简单。
// 不需要定义一个继承于 React.Component 的类，直接定义一个函数，这个函数接收 props 作为参数，然后返回需要渲染的元素。
// 函数组件写起来并不像 class 组件那么繁琐，很多组件都可以使用函数组件来写。
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

// Board 组件渲染了 9 个方块
class Board extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   }
  // }

  renderSquare(i) {
    // props - 父组件 Game 传递过来的数据

    // value onClick - 传递给子组件 Square 的数据
    return (<Square 
      value={ this.props.squares[i] }
      onClick = {() => this.props.onClick(i)}
    />);
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game 组件渲染了含有默认值的一个棋盘
class Game extends React.Component {
  // 向 class 中添加一个构造函数，用来初始化 state
  // 实现时间旅行效果
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0, // 时间旅行
    }
  }

  // 下棋
  handleClick(i) {
    // history 0~时间旅行处的点
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    })
  } 

  // 时间旅行
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// 判断胜者
function calculateWinner(squares) {
  const lines = [
    // 一行
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // 一列
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // 对角线
    [0, 4, 8],
    // 反对角线
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    // 胜利并返回胜利方
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
```

- jsx

  react 使用的语法

- props

  父子组件中的通信

- state

  数据共享

  