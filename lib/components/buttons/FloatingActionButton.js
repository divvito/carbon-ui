Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');

var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
























FloatingActionButton=function(_Component){_inherits(FloatingActionButton,_Component);function FloatingActionButton(){var _ref;var _temp,_this,_ret;_classCallCheck(this,FloatingActionButton);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=FloatingActionButton.__proto__||Object.getPrototypeOf(FloatingActionButton)).call.apply(_ref,[this].concat(args))),_this),_this.
_setPressed=function(e){
_index.Animations.standard(_this._pressAV).start();
_this.props.onPressIn&&_this.props.onPressIn(e);
},_this.
_setNotPressed=function(e){
_index.Animations.standard(_this._pressAV,{toValue:0}).start();
_this.props.onPressOut&&_this.props.onPressOut(e);
},_this.

_pressAV=new _reactNative.Animated.Value(0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(FloatingActionButton,[{key:'render',value:function render()

{var _props=
this.props,accent=_props.accent,children=_props.children,style=_props.style,theme=_props.theme,size=_props.size,disabled=_props.disabled,other=_objectWithoutProperties(_props,['accent','children','style','theme','size','disabled']);




var TouchableComponent=_reactNative.Platform.OS==='android'?_reactNative.TouchableOpacity:_index.TouchableRipple;



var styles=tStyles(size)(theme);

return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.base,
(0,_uranium.animate)(styles.base,styles.pressed,this._pressAV),
accent&&{backgroundColor:theme.colors.accent},
disabled&&styles.disabled].
concat(style)},
_react2.default.createElement(TouchableComponent,_extends({
rippleColor:'white'},
other,{
disabled:disabled,
style:styles.touchableRipple,
onPressIn:this._setPressed,
onPressOut:this._setNotPressed}),
children)));



}}]);return FloatingActionButton;}(_react.Component);


FloatingActionButton.propTypes={



accent:_propTypes2.default.bool,




children:_propTypes2.default.node,
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array,_propTypes2.default.number]),
onPressIn:_propTypes2.default.func,
onPressOut:_propTypes2.default.func,
size:_propTypes2.default.number,
disabled:_propTypes2.default.bool,


theme:_propTypes2.default.object.isRequired};


FloatingActionButton.defaultProps={
size:14*_index.gu};exports.default=



(0,_index.connectTheme)(
FloatingActionButton);

var tStyles=function tStyles(size){return function(theme){return{
base:_extends({
position:'relative',

width:size,
height:size,
borderRadius:size/2,

backgroundColor:theme.colors.primary},

_index.Elevation.dp6),


disabled:{
backgroundColor:theme.colors.button.raised.disabled},


pressed:_extends({},
_index.Elevation.dp12),


touchableRipple:{
borderRadius:size/2,

flex:1,
alignItems:'center',
justifyContent:'center'}};};};