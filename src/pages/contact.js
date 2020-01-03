import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import config from "../../content/meta/config";

const styles = theme => ({});

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="Contact" />
        <div
          className="typeform-widget"
          data-url="https://pun4.typeform.com/to/o0MoOP"
          style="width: 100%; height: 500px;"
        ></div>
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
