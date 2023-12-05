// "use strict";
import styled from 'styled-components';

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });

const ButtonForm = styled.input`
    display: block;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    text-align: center; 
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin : auto;
    background: ${props => props.color};
    width: ${props => props.width};
    height: ${props => props.height};
`;

var SubmitButton = function (_a) {
    var name = _a.name, width = _a.width, height = _a.height, color = _a.color;
    return (<><ButtonForm type='submit' value={name} width={width} height={height} color={color}/></>);
};
// exports.default = SubmitButton;
export default SubmitButton;
var templateObject_1;
