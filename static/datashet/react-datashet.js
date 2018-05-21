'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CellShape = require('./CellShape');

var _CellShape2 = _interopRequireDefault(_CellShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_PureComponent) {
  _inherits(Cell, _PureComponent);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cell = _props.cell,
          row = _props.row,
          col = _props.col,
          attributesRenderer = _props.attributesRenderer,
          className = _props.className,
          style = _props.style,
          onMouseDown = _props.onMouseDown,
          onMouseOver = _props.onMouseOver,
          onDoubleClick = _props.onDoubleClick,
          onContextMenu = _props.onContextMenu;
      var colSpan = cell.colSpan,
          rowSpan = cell.rowSpan;

      var attributes = attributesRenderer ? attributesRenderer(cell, row, col) : {};

      return _react2.default.createElement(
        'td',
        _extends({
          className: className,
          onMouseDown: onMouseDown,
          onMouseOver: onMouseOver,
          onDoubleClick: onDoubleClick,
          onContextMenu: onContextMenu,
          colSpan: colSpan,
          rowSpan: rowSpan,
          style: style
        }, attributes),
        this.props.children
      );
    }
  }]);

  return Cell;
}(_react.PureComponent);

exports.default = Cell;


Cell.propTypes = {
  row: _propTypes2.default.number.isRequired,
  col: _propTypes2.default.number.isRequired,
  cell: _propTypes2.default.shape(_CellShape2.default).isRequired,
  selected: _propTypes2.default.bool,
  editing: _propTypes2.default.bool,
  updated: _propTypes2.default.bool,
  attributesRenderer: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func.isRequired,
  onMouseOver: _propTypes2.default.func.isRequired,
  onDoubleClick: _propTypes2.default.func.isRequired,
  onContextMenu: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

Cell.defaultProps = {
  selected: false,
  editing: false,
  updated: false,
  attributesRenderer: function attributesRenderer() {}
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
readOnly    Bool    false   Cell will never go in edit mode
key String  undefined   By default, each cell is given the key of col number and row number. This would override that key
className   String  undefined   Additional class names for cells.
component   ReactElement    undefined   Insert a react element or JSX to this field. This will render on edit mode
forceComponent  bool    false   Renders what's in component at all times, even when not in edit mode
disableEvents   bool    false   Makes cell unselectable and read only
colSpan number  1   The colSpan of the cell's td element
rowSpan number  1   The rowSpan of the cell's td element
width   number or String    undefined   Sets the cell's td width using a style attribute. Number is interpreted as pixels, strings are used as-is. Note: This will only work if the table does not have a set width.
overflow    'wrap'|'nowrap'| 'clip' undefined   How to render overflow text. Overrides grid-level overflow option.
editor func  undefined A component used to render the cell's value when being edited
viewer func  undefined A component used to render the cell's value when not being edited
*/
var CellShape = {
  readOnly: _propTypes2.default.bool,
  key: _propTypes2.default.string,
  className: _propTypes2.default.string,
  component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  forceComponent: _propTypes2.default.bool,
  disableEvents: _propTypes2.default.bool,
  colSpan: _propTypes2.default.number,
  rowSpan: _propTypes2.default.number,
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  overflow: _propTypes2.default.oneOf(['wrap', 'nowrap', 'clip']),
  dataEditor: _propTypes2.default.func,
  valueViewer: _propTypes2.default.func
};

exports.default = CellShape;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keys = require('./keys');

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _CellShape = require('./CellShape');

var _CellShape2 = _interopRequireDefault(_CellShape);

var _DataEditor = require('./DataEditor');

var _DataEditor2 = _interopRequireDefault(_DataEditor);

var _ValueViewer = require('./ValueViewer');

var _ValueViewer2 = _interopRequireDefault(_ValueViewer);

var _renderHelpers = require('./renderHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function initialData(_ref) {
  var cell = _ref.cell,
      row = _ref.row,
      col = _ref.col,
      valueRenderer = _ref.valueRenderer,
      dataRenderer = _ref.dataRenderer;

  return (0, _renderHelpers.renderData)(cell, row, col, valueRenderer, dataRenderer);
}

function initialValue(_ref2) {
  var cell = _ref2.cell,
      row = _ref2.row,
      col = _ref2.col,
      valueRenderer = _ref2.valueRenderer;

  return (0, _renderHelpers.renderValue)(cell, row, col, valueRenderer);
}

function widthStyle(cell) {
  var width = typeof cell.width === 'number' ? cell.width + 'px' : cell.width;
  return width ? { width: width } : null;
}

var DataCell = function (_PureComponent) {
  _inherits(DataCell, _PureComponent);

  function DataCell(props) {
    _classCallCheck(this, DataCell);

    var _this = _possibleConstructorReturn(this, (DataCell.__proto__ || Object.getPrototypeOf(DataCell)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleCommit = _this.handleCommit.bind(_this);
    _this.handleRevert = _this.handleRevert.bind(_this);

    _this.handleKey = _this.handleKey.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseOver = _this.handleMouseOver.bind(_this);
    _this.handleContextMenu = _this.handleContextMenu.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);

    _this.state = { updated: false, reverting: false, value: '' };
    return _this;
  }

  _createClass(DataCell, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (initialValue(nextProps) !== initialValue(this.props)) {
        this.setState({ updated: true });
        this.timeout = setTimeout(function () {
          return _this2.setState({ updated: false });
        }, 700);
      }
      if (nextProps.editing === true && this.props.editing === false) {
        var value = nextProps.clearing ? '' : initialData(nextProps);
        this.setState({ value: value, reverting: false });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.editing === true && this.props.editing === false && !this.state.reverting && this.state.value !== initialData(this.props)) {
        this.props.onChange(this.props.row, this.props.col, this.state.value);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({ value: value });
    }
  }, {
    key: 'handleCommit',
    value: function handleCommit(value, e) {
      var _props = this.props,
          onChange = _props.onChange,
          onNavigate = _props.onNavigate;

      if (value !== initialData(this.props)) {
        this.setState({ value: value });
        onChange(this.props.row, this.props.col, value);
      } else {
        this.handleRevert();
      }
      if (e) {
        e.preventDefault();
        onNavigate(e, true);
      }
    }
  }, {
    key: 'handleRevert',
    value: function handleRevert() {
      this.setState({ reverting: true });
      this.props.onRevert();
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      var _props2 = this.props,
          row = _props2.row,
          col = _props2.col,
          onMouseDown = _props2.onMouseDown,
          cell = _props2.cell;

      if (!cell.disableEvents) {
        onMouseDown(row, col);
      }
    }
  }, {
    key: 'handleMouseOver',
    value: function handleMouseOver(e) {
      var _props3 = this.props,
          row = _props3.row,
          col = _props3.col,
          onMouseOver = _props3.onMouseOver,
          cell = _props3.cell;

      if (!cell.disableEvents) {
        onMouseOver(row, col);
      }
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(e) {
      var _props4 = this.props,
          row = _props4.row,
          col = _props4.col,
          onDoubleClick = _props4.onDoubleClick,
          cell = _props4.cell;

      if (!cell.disableEvents) {
        onDoubleClick(row, col);
      }
    }
  }, {
    key: 'handleContextMenu',
    value: function handleContextMenu(e) {
      var _props5 = this.props,
          row = _props5.row,
          col = _props5.col,
          onContextMenu = _props5.onContextMenu,
          cell = _props5.cell;

      if (!cell.disableEvents) {
        onContextMenu(e, row, col);
      }
    }
  }, {
    key: 'handleKey',
    value: function handleKey(e) {
      var keyCode = e.which || e.keyCode;
      if (keyCode === _keys.ESCAPE_KEY) {
        return this.handleRevert();
      }
      var _props6 = this.props,
          component = _props6.cell.component,
          forceEdit = _props6.forceEdit;

      var eatKeys = forceEdit || !!component;
      var commit = keyCode === _keys.ENTER_KEY || keyCode === _keys.TAB_KEY || !eatKeys && [_keys.LEFT_KEY, _keys.RIGHT_KEY, _keys.UP_KEY, _keys.DOWN_KEY].includes(keyCode);

      if (commit) {
        this.handleCommit(this.state.value, e);
      }
    }
  }, {
    key: 'renderComponent',
    value: function renderComponent(editing, cell) {
      var component = cell.component,
          readOnly = cell.readOnly,
          forceComponent = cell.forceComponent;

      if (editing && !readOnly || forceComponent) {
        return component;
      }
    }
  }, {
    key: 'renderEditor',
    value: function renderEditor(editing, cell, row, col, dataEditor) {
      if (editing) {
        var Editor = cell.dataEditor || dataEditor || _DataEditor2.default;
        return _react2.default.createElement(Editor, {
          cell: cell,
          row: row,
          col: col,
          value: this.state.value,
          onChange: this.handleChange,
          onCommit: this.handleCommit,
          onRevert: this.handleRevert,
          onKeyDown: this.handleKey
        });
      }
    }
  }, {
    key: 'renderViewer',
    value: function renderViewer(cell, row, col, valueRenderer, valueViewer) {
      var Viewer = cell.valueViewer || valueViewer || _ValueViewer2.default;
      var value = (0, _renderHelpers.renderValue)(cell, row, col, valueRenderer);
      return _react2.default.createElement(Viewer, { cell: cell, row: row, col: col, value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          row = _props7.row,
          col = _props7.col,
          cell = _props7.cell,
          CellRenderer = _props7.cellRenderer,
          valueRenderer = _props7.valueRenderer,
          dataEditor = _props7.dataEditor,
          valueViewer = _props7.valueViewer,
          attributesRenderer = _props7.attributesRenderer,
          selected = _props7.selected,
          editing = _props7.editing,
          onKeyUp = _props7.onKeyUp;
      var updated = this.state.updated;


      var content = this.renderComponent(editing, cell) || this.renderEditor(editing, cell, row, col, dataEditor) || this.renderViewer(cell, row, col, valueRenderer, valueViewer);

      var className = [cell.className, 'cell', cell.overflow, selected && 'selected', editing && 'editing', cell.readOnly && 'read-only', updated && 'updated'].filter(function (a) {
        return a;
      }).join(' ');

      return _react2.default.createElement(
        CellRenderer,
        {
          row: row,
          col: col,
          cell: cell,
          selected: selected,
          editing: editing,
          updated: updated,
          attributesRenderer: attributesRenderer,
          className: className,
          style: widthStyle(cell),
          onMouseDown: this.handleMouseDown,
          onMouseOver: this.handleMouseOver,
          onDoubleClick: this.handleDoubleClick,
          onContextMenu: this.handleContextMenu,
          onKeyUp: onKeyUp
        },
        content
      );
    }
  }]);

  return DataCell;
}(_react.PureComponent);

exports.default = DataCell;


DataCell.propTypes = {
  row: _propTypes2.default.number.isRequired,
  col: _propTypes2.default.number.isRequired,
  cell: _propTypes2.default.shape(_CellShape2.default).isRequired,
  forceEdit: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  editing: _propTypes2.default.bool,
  clearing: _propTypes2.default.bool,
  cellRenderer: _propTypes2.default.func,
  valueRenderer: _propTypes2.default.func.isRequired,
  dataRenderer: _propTypes2.default.func,
  valueViewer: _propTypes2.default.func,
  dataEditor: _propTypes2.default.func,
  attributesRenderer: _propTypes2.default.func,
  onNavigate: _propTypes2.default.func.isRequired,
  onMouseDown: _propTypes2.default.func.isRequired,
  onMouseOver: _propTypes2.default.func.isRequired,
  onDoubleClick: _propTypes2.default.func.isRequired,
  onContextMenu: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onRevert: _propTypes2.default.func.isRequired
};

DataCell.defaultProps = {
  forceEdit: false,
  selected: false,
  editing: false,
  clearing: false,
  cellRenderer: _Cell2.default
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CellShape = require('./CellShape');

var _CellShape2 = _interopRequireDefault(_CellShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataEditor = function (_PureComponent) {
  _inherits(DataEditor, _PureComponent);

  function DataEditor(props) {
    _classCallCheck(this, DataEditor);

    var _this = _possibleConstructorReturn(this, (DataEditor.__proto__ || Object.getPrototypeOf(DataEditor)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(DataEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._input.focus();
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.props.onChange(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          onKeyDown = _props.onKeyDown;

      return _react2.default.createElement('input', {
        ref: function ref(input) {
          _this2._input = input;
        },
        className: 'data-editor',
        value: value,
        onChange: this.handleChange,
        onKeyDown: onKeyDown
      });
    }
  }]);

  return DataEditor;
}(_react.PureComponent);

exports.default = DataEditor;


DataEditor.propTypes = {
  value: _propTypes2.default.node.isRequired,
  row: _propTypes2.default.number.isRequired,
  col: _propTypes2.default.number.isRequired,
  cell: _propTypes2.default.shape(_CellShape2.default),
  onChange: _propTypes2.default.func.isRequired,
  onCommit: _propTypes2.default.func.isRequired,
  onRevert: _propTypes2.default.func.isRequired,
  onKeyDown: _propTypes2.default.func.isRequired
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Sheet = require('./Sheet');

var _Sheet2 = _interopRequireDefault(_Sheet);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _DataCell = require('./DataCell');

var _DataCell2 = _interopRequireDefault(_DataCell);

var _DataEditor = require('./DataEditor');

var _DataEditor2 = _interopRequireDefault(_DataEditor);

var _ValueViewer = require('./ValueViewer');

var _ValueViewer2 = _interopRequireDefault(_ValueViewer);

var _keys = require('./keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isEmpty = function isEmpty(obj) {
  return Object.keys(obj).length === 0;
};

var range = function range(start, end) {
  var array = [];
  var inc = end - start > 0;
  for (var i = start; inc ? i <= end : i >= end; inc ? i++ : i--) {
    inc ? array.push(i) : array.unshift(i);
  }
  return array;
};

var defaultParsePaste = function defaultParsePaste(str) {
  return str.split(/\r\n|\n|\r/).map(function (row) {
    return row.split('\t');
  });
};

var DataSheet = function (_PureComponent) {
  _inherits(DataSheet, _PureComponent);

  function DataSheet(props) {
    _classCallCheck(this, DataSheet);

    var _this = _possibleConstructorReturn(this, (DataSheet.__proto__ || Object.getPrototypeOf(DataSheet)).call(this, props));

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.onMouseOver = _this.onMouseOver.bind(_this);
    _this.onDoubleClick = _this.onDoubleClick.bind(_this);
    _this.onContextMenu = _this.onContextMenu.bind(_this);
    _this.handleNavigate = _this.handleNavigate.bind(_this);
    _this.handleKey = _this.handleKey.bind(_this).bind(_this);
    _this.handleCopy = _this.handleCopy.bind(_this);
    _this.handlePaste = _this.handlePaste.bind(_this);
    _this.pageClick = _this.pageClick.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onRevert = _this.onRevert.bind(_this);
    _this.isSelected = _this.isSelected.bind(_this);
    _this.isEditing = _this.isEditing.bind(_this);
    _this.isClearing = _this.isClearing.bind(_this);
    _this.handleComponentKey = _this.handleComponentKey.bind(_this);

    _this.handleKeyboardCellMovement = _this.handleKeyboardCellMovement.bind(_this);

    _this.defaultState = {
      start: {},
      end: {},
      selecting: false,
      forceEdit: false,
      editing: {},
      clear: {}
    };
    _this.state = _this.defaultState;

    _this.removeAllListeners = _this.removeAllListeners.bind(_this);
    return _this;
  }

  _createClass(DataSheet, [{
    key: 'removeAllListeners',
    value: function removeAllListeners() {
      document.removeEventListener('mousedown', this.pageClick);
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('copy', this.handleCopy);
      document.removeEventListener('paste', this.handlePaste);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Add listener scoped to the DataSheet that catches otherwise unhandled
      // keyboard events when displaying components
      this.dgDom && this.dgDom.addEventListener('keydown', this.handleComponentKey);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dgDom && this.dgDom.removeEventListener('keydown', this.handleComponentKey);
      this.removeAllListeners();
    }
  }, {
    key: 'isSelectionControlled',
    value: function isSelectionControlled() {
      return 'selected' in this.props;
    }
  }, {
    key: 'getState',
    value: function getState() {
      var state = this.state;
      if (this.isSelectionControlled()) {
        var _ref = this.props.selected || {},
            start = _ref.start,
            end = _ref.end;

        start = start || this.defaultState.start;
        end = end || this.defaultState.end;
        state = _extends({}, state, { start: start, end: end });
      }
      return state;
    }
  }, {
    key: '_setState',
    value: function _setState(state) {
      if (this.isSelectionControlled() && ('start' in state || 'end' in state)) {
        var start = state.start,
            end = state.end,
            rest = _objectWithoutProperties(state, ['start', 'end']);

        var _props = this.props,
            selected = _props.selected,
            onSelect = _props.onSelect;

        selected = selected || {};
        if (!start) {
          start = 'start' in selected ? selected.start : this.defaultState.start;
        }
        if (!end) {
          end = 'end' in selected ? selected.end : this.defaultState.end;
        }
        onSelect && onSelect({ start: start, end: end });
        this.setState(rest);
      } else {
        this.setState(state);
      }
    }
  }, {
    key: 'pageClick',
    value: function pageClick(e) {
      var element = this.dgDom;
      if (!element.contains(e.target)) {
        this.setState(this.defaultState);
        this.removeAllListeners();
      }
    }
  }, {
    key: 'handleCopy',
    value: function handleCopy(e) {
      if (isEmpty(this.state.editing)) {
        e.preventDefault();
        var _props2 = this.props,
            dataRenderer = _props2.dataRenderer,
            valueRenderer = _props2.valueRenderer,
            data = _props2.data;

        var _getState = this.getState(),
            start = _getState.start,
            end = _getState.end;

        var text = range(start.i, end.i).map(function (i) {
          return range(start.j, end.j).map(function (j) {
            var cell = data[i][j];
            var value = dataRenderer ? dataRenderer(cell, i, j) : null;
            if (value === '' || value === null || typeof value === 'undefined') {
              return valueRenderer(cell, i, j);
            }
            return value;
          }).join('\t');
        }).join('\n');
        e.clipboardData.setData('text/plain', text);
      }
    }
  }, {
    key: 'handlePaste',
    value: function handlePaste(e) {
      if (isEmpty(this.state.editing)) {
        var _getState2 = this.getState(),
            start = _getState2.start;

        var parse = this.props.parsePaste || defaultParsePaste;
        var changes = [];
        var pasteData = parse(e.clipboardData.getData('text/plain'));
        // in order of preference
        var _props3 = this.props,
            data = _props3.data,
            onCellsChanged = _props3.onCellsChanged,
            onPaste = _props3.onPaste,
            onChange = _props3.onChange;

        var end = {};
        if (onCellsChanged) {
          var additions = [];
          pasteData.forEach(function (row, i) {
            row.forEach(function (value, j) {
              end = { i: start.i + i, j: start.j + j };
              var cell = data[end.i] && data[end.i][end.j];
              if (!cell) {
                additions.push({ row: end.i, col: end.j, value: value });
              } else if (!cell.readOnly) {
                changes.push({ cell: cell, row: end.i, col: end.j, value: value });
              }
            });
          });
          if (additions.length) {
            onCellsChanged(changes, additions);
          } else {
            onCellsChanged(changes);
          }
        } else if (onPaste) {
          pasteData.forEach(function (row, i) {
            var rowData = [];
            row.forEach(function (pastedData, j) {
              end = { i: start.i + i, j: start.j + j };
              var cell = data[end.i] && data[end.i][end.j];
              rowData.push({ cell: cell, data: pastedData });
            });
            changes.push(rowData);
          });
          onPaste(changes);
        } else if (onChange) {
          pasteData.forEach(function (row, i) {
            row.forEach(function (value, j) {
              end = { i: start.i + i, j: start.j + j };
              var cell = data[end.i] && data[end.i][end.j];
              if (cell && !cell.readOnly) {
                onChange(cell, end.i, end.j, value);
              }
            });
          });
        }
        this._setState({ end: end });
      }
    }
  }, {
    key: 'handleKeyboardCellMovement',
    value: function handleKeyboardCellMovement(e) {
      var commit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _getState3 = this.getState(),
          start = _getState3.start,
          editing = _getState3.editing;

      var data = this.props.data;

      var isEditing = editing && !isEmpty(editing);
      var currentCell = data[start.i] && data[start.i][start.j];

      if (isEditing && !commit) {
        return false;
      }
      var hasComponent = currentCell && currentCell.component;

      var keyCode = e.which || e.keyCode;

      if (hasComponent && isEditing) {
        /*
        if (keyCode === ESCAPE_KEY) {
        e.preventDefault()
        this.onRevert()
        }
        if (keyCode === ENTER_KEY) {
        this.handleNavigate(e, {i: e.shiftKey ? -1 : 1, j: 0})
        } else if (keyCode === TAB_KEY) {
        this.handleNavigate(e, {i: 0, j: e.shiftKey ? -1 : 1}, true)
        } */
        e.preventDefault();
        return;
      }

      if (keyCode === _keys.TAB_KEY) {
        this.handleNavigate(e, { i: 0, j: e.shiftKey ? -1 : 1 }, true);
      } else if (keyCode === _keys.RIGHT_KEY) {
        this.handleNavigate(e, { i: 0, j: 1 });
      } else if (keyCode === _keys.LEFT_KEY) {
        this.handleNavigate(e, { i: 0, j: -1 });
      } else if (keyCode === _keys.UP_KEY) {
        this.handleNavigate(e, { i: -1, j: 0 });
      } else if (keyCode === _keys.DOWN_KEY) {
        this.handleNavigate(e, { i: 1, j: 0 });
      } else if (commit && keyCode === _keys.ENTER_KEY) {
        this.handleNavigate(e, { i: e.shiftKey ? -1 : 1, j: 0 });
      }
    }
  }, {
    key: 'handleKey',
    value: function handleKey(e) {
      if (e.isPropagationStopped && e.isPropagationStopped()) {
        return;
      }
      var keyCode = e.which || e.keyCode;

      var _getState4 = this.getState(),
          start = _getState4.start,
          end = _getState4.end,
          editing = _getState4.editing;

      var isEditing = editing && !isEmpty(editing);
      var noCellsSelected = !start || isEmpty(start);
      var ctrlKeyPressed = e.ctrlKey || e.metaKey;
      var deleteKeysPressed = keyCode === _keys.DELETE_KEY || keyCode === _keys.BACKSPACE_KEY;
      var enterKeyPressed = keyCode === _keys.ENTER_KEY;
      var numbersPressed = keyCode >= 48 && keyCode <= 57;
      var lettersPressed = keyCode >= 65 && keyCode <= 90;
      var numPadKeysPressed = keyCode >= 96 && keyCode <= 105;
      var currentCell = !noCellsSelected && this.props.data[start.i][start.j];
      var equationKeysPressed = [187, /* equal */
      189, /* substract */
      190, /* period */
      107, /* add */
      109, /* decimal point */
      110].indexOf(keyCode) > -1;

      if (noCellsSelected || ctrlKeyPressed) {
        return true;
      }

      if (!isEditing) {
        this.handleKeyboardCellMovement(e);
        if (deleteKeysPressed) {
          e.preventDefault();
          this.clearSelectedCells(start, end);
        } else if (currentCell && !currentCell.readOnly) {
          if (enterKeyPressed) {
            this._setState({ editing: start, clear: {}, forceEdit: true });
            e.preventDefault();
          } else if (numbersPressed || numPadKeysPressed || lettersPressed || equationKeysPressed) {
            // empty out cell if user starts typing without pressing enter
            this._setState({ editing: start, clear: start, forceEdit: false });
          }
        }
      }
    }
  }, {
    key: 'getSelectedCells',
    value: function getSelectedCells(data, start, end) {
      var selected = [];
      range(start.i, end.i).map(function (row) {
        range(start.j, end.j).map(function (col) {
          if (data[row] && data[row][col]) {
            selected.push({ cell: data[row][col], row: row, col: col });
          }
        });
      });
      return selected;
    }
  }, {
    key: 'clearSelectedCells',
    value: function clearSelectedCells(start, end) {
      var _this2 = this;

      var _props4 = this.props,
          data = _props4.data,
          onCellsChanged = _props4.onCellsChanged,
          onChange = _props4.onChange;

      var cells = this.getSelectedCells(data, start, end).filter(function (cell) {
        return !cell.cell.readOnly;
      }).map(function (cell) {
        return _extends({}, cell, { value: '' });
      });
      if (onCellsChanged) {
        onCellsChanged(cells);
        this.onRevert();
      } else if (onChange) {
        // ugly solution brought to you by https://reactjs.org/docs/react-component.html#setstate
        // setState in a loop is unreliable
        setTimeout(function () {
          cells.forEach(function (_ref2) {
            var cell = _ref2.cell,
                row = _ref2.row,
                col = _ref2.col,
                value = _ref2.value;

            onChange(cell, row, col, value);
          });
          _this2.onRevert();
        }, 0);
      }
    }
  }, {
    key: 'handleNavigate',
    value: function handleNavigate(e, offsets, jumpRow) {
      var _this3 = this;

      if (offsets && (offsets.i || offsets.j)) {
        var _getState5 = this.getState(),
            start = _getState5.start;

        var data = this.props.data;

        var newLocation = { i: start.i + offsets.i, j: start.j + offsets.j };
        var updateLocation = function updateLocation() {
          if (data[newLocation.i] && typeof data[newLocation.i][newLocation.j] !== 'undefined') {
            _this3._setState({ start: newLocation, end: newLocation, editing: {} });
            e.preventDefault();
            return true;
          }
          return false;
        };
        if (!updateLocation() && jumpRow) {
          if (offsets.j < 0) {
            newLocation = { i: start.i - 1, j: data[0].length - 1 };
          } else {
            newLocation = { i: start.i + 1, j: 0 };
          }
          updateLocation();
        }
      }
    }
  }, {
    key: 'handleComponentKey',
    value: function handleComponentKey(e) {
      var _this4 = this;

      // handles keyboard events when editing components
      var keyCode = e.which || e.keyCode;
      if (![_keys.ENTER_KEY, _keys.ESCAPE_KEY, _keys.TAB_KEY].includes(keyCode)) {
        return;
      }
      var editing = this.state.editing;
      var data = this.props.data;

      var isEditing = !isEmpty(editing);
      if (isEditing) {
        var currentCell = data[editing.i][editing.j];
        var offset = e.shiftKey ? -1 : 1;
        if (currentCell && currentCell.component && !currentCell.forceComponent) {
          e.preventDefault();
          var func = this.onRevert; // ESCAPE_KEY
          if (keyCode === _keys.ENTER_KEY) {
            func = function func() {
              return _this4.handleNavigate(e, { i: offset, j: 0 });
            };
          } else if (keyCode === _keys.TAB_KEY) {
            func = function func() {
              return _this4.handleNavigate(e, { i: 0, j: offset }, true);
            };
          }
          // setTimeout makes sure that component is done handling the event before we take over
          setTimeout(function () {
            func();_this4.dgDom && _this4.dgDom.focus();
          }, 1);
        }
      }
    }
  }, {
    key: 'onContextMenu',
    value: function onContextMenu(evt, i, j) {
      var cell = this.props.data[i][j];
      if (this.props.onContextMenu) {
        this.props.onContextMenu(evt, cell, i, j);
      }
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick(i, j) {
      var cell = this.props.data[i][j];
      if (!cell.readOnly) {
        this._setState({ editing: { i: i, j: j }, forceEdit: true, clear: {} });
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(i, j) {
      var editing = isEmpty(this.state.editing) || this.state.editing.i !== i || this.state.editing.j !== j ? {} : this.state.editing;
      this._setState({ selecting: true, start: { i: i, j: j }, end: { i: i, j: j }, editing: editing, forceEdit: false });

      // Keep listening to mouse if user releases the mouse (dragging outside)
      document.addEventListener('mouseup', this.onMouseUp);
      // Listen for any outside mouse clicks
      document.addEventListener('mousedown', this.pageClick);

      // Copy paste event handler
      document.addEventListener('copy', this.handleCopy);
      document.addEventListener('paste', this.handlePaste);
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(i, j) {
      if (this.state.selecting && isEmpty(this.state.editing)) {
        this._setState({ end: { i: i, j: j } });
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp() {
      this._setState({ selecting: false });
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: 'onChange',
    value: function onChange(row, col, value) {
      var _props5 = this.props,
          onChange = _props5.onChange,
          onCellsChanged = _props5.onCellsChanged,
          data = _props5.data;

      if (onCellsChanged) {
        onCellsChanged([{ cell: data[row][col], row: row, col: col, value: value }]);
      } else if (onChange) {
        onChange(data[row][col], row, col, value);
      }
      this.onRevert();
    }
  }, {
    key: 'onRevert',
    value: function onRevert() {
      this._setState({ editing: {} });
      this.dgDom && this.dgDom.focus();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _state = this.state,
          start = _state.start,
          end = _state.end;

      var prevEnd = prevState.end;
      if (!isEmpty(end) && !(end.i === prevEnd.i && end.j === prevEnd.j) && !this.isSelectionControlled()) {
        this.props.onSelect && this.props.onSelect({ start: start, end: end });
      }
    }
  }, {
    key: 'isSelected',
    value: function isSelected(i, j) {
      var _getState6 = this.getState(),
          start = _getState6.start,
          end = _getState6.end;

      var posX = j >= start.j && j <= end.j;
      var negX = j <= start.j && j >= end.j;
      var posY = i >= start.i && i <= end.i;
      var negY = i <= start.i && i >= end.i;

      return posX && posY || negX && posY || negX && negY || posX && negY;
    }
  }, {
    key: 'isEditing',
    value: function isEditing(i, j) {
      return this.state.editing.i === i && this.state.editing.j === j;
    }
  }, {
    key: 'isClearing',
    value: function isClearing(i, j) {
      return this.state.clear.i === i && this.state.clear.j === j;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props6 = this.props,
          SheetRenderer = _props6.sheetRenderer,
          RowRenderer = _props6.rowRenderer,
          cellRenderer = _props6.cellRenderer,
          dataRenderer = _props6.dataRenderer,
          valueRenderer = _props6.valueRenderer,
          dataEditor = _props6.dataEditor,
          valueViewer = _props6.valueViewer,
          attributesRenderer = _props6.attributesRenderer,
          className = _props6.className,
          overflow = _props6.overflow,
          data = _props6.data,
          keyFn = _props6.keyFn;
      var forceEdit = this.state.forceEdit;


      return _react2.default.createElement(
        'span',
        { ref: function ref(r) {
            _this5.dgDom = r;
          }, tabIndex: '0', className: 'data-grid-container', onKeyDown: this.handleKey },
        _react2.default.createElement(
          SheetRenderer,
          { data: data, className: ['data-grid', className, overflow].filter(function (a) {
              return a;
            }).join(' ') },
          data.map(function (row, i) {
            return _react2.default.createElement(
              RowRenderer,
              { key: keyFn ? keyFn(i) : i, row: i, cells: row },
              row.map(function (cell, j) {
                return _react2.default.createElement(_DataCell2.default, {
                  key: cell.key ? cell.key : i + '-' + j,
                  row: i,
                  col: j,
                  cell: cell,
                  forceEdit: forceEdit,
                  onMouseDown: _this5.onMouseDown,
                  onMouseOver: _this5.onMouseOver,
                  onDoubleClick: _this5.onDoubleClick,
                  onContextMenu: _this5.onContextMenu,
                  onChange: _this5.onChange,
                  onRevert: _this5.onRevert,
                  onNavigate: _this5.handleKeyboardCellMovement,
                  onKey: _this5.handleKey,
                  selected: _this5.isSelected(i, j),
                  editing: _this5.isEditing(i, j),
                  clearing: _this5.isClearing(i, j),
                  attributesRenderer: attributesRenderer,
                  cellRenderer: cellRenderer,
                  valueRenderer: valueRenderer,
                  dataRenderer: dataRenderer,
                  valueViewer: valueViewer,
                  dataEditor: dataEditor
                });
              })
            );
          })
        )
      );
    }
  }]);

  return DataSheet;
}(_react.PureComponent);

exports.default = DataSheet;


DataSheet.propTypes = {
  data: _propTypes2.default.array.isRequired,
  className: _propTypes2.default.string,
  overflow: _propTypes2.default.oneOf(['wrap', 'nowrap', 'clip']),
  onChange: _propTypes2.default.func,
  onCellsChanged: _propTypes2.default.func,
  onContextMenu: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  selected: _propTypes2.default.shape({
    start: _propTypes2.default.shape({
      i: _propTypes2.default.number,
      j: _propTypes2.default.number
    }),
    end: _propTypes2.default.shape({
      i: _propTypes2.default.number,
      j: _propTypes2.default.number
    })
  }),
  valueRenderer: _propTypes2.default.func.isRequired,
  dataRenderer: _propTypes2.default.func,
  sheetRenderer: _propTypes2.default.func.isRequired,
  rowRenderer: _propTypes2.default.func.isRequired,
  cellRenderer: _propTypes2.default.func.isRequired,
  valueViewer: _propTypes2.default.func,
  dataEditor: _propTypes2.default.func,
  parsePaste: _propTypes2.default.func,
  attributesRenderer: _propTypes2.default.func
};

DataSheet.defaultProps = {
  sheetRenderer: _Sheet2.default,
  rowRenderer: _Row2.default,
  cellRenderer: _Cell2.default,
  valueViewer: _ValueViewer2.default,
  dataEditor: _DataEditor2.default
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderData = exports.renderValue = exports.ValueViewer = exports.DataEditor = exports.Cell = exports.Row = exports.Sheet = undefined;

var _DataSheet = require('./DataSheet');

var _DataSheet2 = _interopRequireDefault(_DataSheet);

var _Sheet = require('./Sheet');

var _Sheet2 = _interopRequireDefault(_Sheet);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _DataEditor = require('./DataEditor');

var _DataEditor2 = _interopRequireDefault(_DataEditor);

var _ValueViewer = require('./ValueViewer');

var _ValueViewer2 = _interopRequireDefault(_ValueViewer);

var _renderHelpers = require('./renderHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DataSheet2.default;
exports.Sheet = _Sheet2.default;
exports.Row = _Row2.default;
exports.Cell = _Cell2.default;
exports.DataEditor = _DataEditor2.default;
exports.ValueViewer = _ValueViewer2.default;
exports.renderValue = _renderHelpers.renderValue;
exports.renderData = _renderHelpers.renderData;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TAB_KEY = exports.TAB_KEY = 9;
var ENTER_KEY = exports.ENTER_KEY = 13;
var ESCAPE_KEY = exports.ESCAPE_KEY = 27;
var LEFT_KEY = exports.LEFT_KEY = 37;
var UP_KEY = exports.UP_KEY = 38;
var RIGHT_KEY = exports.RIGHT_KEY = 39;
var DOWN_KEY = exports.DOWN_KEY = 40;
var DELETE_KEY = exports.DELETE_KEY = 46;
var BACKSPACE_KEY = exports.BACKSPACE_KEY = 8;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderValue = renderValue;
exports.renderData = renderData;
function renderValue(cell, row, col, valueRenderer) {
  var value = valueRenderer(cell, row, col);
  return value === null || typeof value === 'undefined' ? '' : value;
}

function renderData(cell, row, col, valueRenderer, dataRenderer) {
  var value = dataRenderer ? dataRenderer(cell, row, col) : null;
  return value === null || typeof value === 'undefined' ? renderValue(cell, row, col, valueRenderer) : value;
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CellShape = require('./CellShape');

var _CellShape2 = _interopRequireDefault(_CellShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_PureComponent) {
  _inherits(Row, _PureComponent);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tr',
        null,
        this.props.children
      );
    }
  }]);

  return Row;
}(_react.PureComponent);

Row.propTypes = {
  row: _propTypes2.default.number.isRequired,
  cells: _propTypes2.default.arrayOf(_propTypes2.default.shape(_CellShape2.default)).isRequired
};

exports.default = Row;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sheet = function (_PureComponent) {
  _inherits(Sheet, _PureComponent);

  function Sheet() {
    _classCallCheck(this, Sheet);

    return _possibleConstructorReturn(this, (Sheet.__proto__ || Object.getPrototypeOf(Sheet)).apply(this, arguments));
  }

  _createClass(Sheet, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'table',
        { className: this.props.className },
        _react2.default.createElement(
          'tbody',
          null,
          this.props.children
        )
      );
    }
  }]);

  return Sheet;
}(_react.PureComponent);

Sheet.propTypes = {
  className: _propTypes2.default.string,
  data: _propTypes2.default.array.isRequired
};

exports.default = Sheet;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CellShape = require('./CellShape');

var _CellShape2 = _interopRequireDefault(_CellShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValueViewer = function (_PureComponent) {
  _inherits(ValueViewer, _PureComponent);

  function ValueViewer() {
    _classCallCheck(this, ValueViewer);

    return _possibleConstructorReturn(this, (ValueViewer.__proto__ || Object.getPrototypeOf(ValueViewer)).apply(this, arguments));
  }

  _createClass(ValueViewer, [{
    key: 'render',
    value: function render() {
      var value = this.props.value;

      return _react2.default.createElement(
        'span',
        { className: 'value-viewer' },
        value
      );
    }
  }]);

  return ValueViewer;
}(_react.PureComponent);

exports.default = ValueViewer;


ValueViewer.propTypes = {
  row: _propTypes2.default.number.isRequired,
  col: _propTypes2.default.number.isRequired,
  cell: _propTypes2.default.shape(_CellShape2.default),
  value: _propTypes2.default.node.isRequired
};

