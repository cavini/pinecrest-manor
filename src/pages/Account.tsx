import React from "react";
import Heading, { HeadingType } from "../ui/Headings";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as={HeadingType.H1}>Update your account</Heading>

      <Row>
        <Heading as={HeadingType.H3}>Update user data</Heading>
        <p>Update user data form</p>
      </Row>

      <Row>
        <Heading as={HeadingType.H3}>Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </>
  );
}

export default Account;
