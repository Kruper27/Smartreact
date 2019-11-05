import styled from "styled-components";
import {Link} from "react-router-dom";
import img from "../../../asserts/images/Rectangle_816.png"

export default styled(Link)`
    text-decoration: none;
    color: #000000;
    background: url(${img}) no-repeat;
    width: 234px;
    height: 87px;
    display: block;
    color: white;
    font-size: 20px;
    text-align:center;
    margin-left: 43%;
    padding-top:30px;
`;
