"use strict";

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Application(props) {
  return React.createElement(
    "div",
    { className: "scoreboard" },
    React.createElement(
      "div",
      { className: "header" },
      React.createElement(
        "h1",
        null,
        props.title
      )
    ),
    React.createElement(
      "div",
      { className: "players" },
      React.createElement(
        "div",
        { className: "player" },
        React.createElement(
          "div",
          { className: "player-name" },
          "John Blaine"
        ),
        React.createElement(
          "div",
          { className: "player-score" },
          React.createElement(
            "div",
            { className: "counter" },
            React.createElement(
              "button",
              { className: "counter-action decrement" },
              " - "
            ),
            React.createElement(
              "div",
              { className: "counter-score" },
              " 31 "
            ),
            React.createElement(
              "button",
              { className: "counter-action increment" },
              " + "
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "player" },
        React.createElement(
          "div",
          { className: "player-name" },
          "John Blaine"
        ),
        React.createElement(
          "div",
          { className: "player-score" },
          React.createElement(
            "div",
            { className: "counter" },
            React.createElement(
              "button",
              { className: "counter-action decrement" },
              " - "
            ),
            React.createElement(
              "div",
              { className: "counter-score" },
              " 31 "
            ),
            React.createElement(
              "button",
              { className: "counter-action increment" },
              " + "
            )
          )
        )
      )
    )
  );
}

Application.propTypes = {
  title: _propTypes2.default.string
};

ReactDOM.render(React.createElement(Application, { title: 2 }), document.getElementById('container'));