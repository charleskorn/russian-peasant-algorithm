import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state) => state;

const Root = connect(mapStateToProps)(Container);

export default Root;
