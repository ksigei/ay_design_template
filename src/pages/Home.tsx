import { Fragment } from "react";
import Page from "../components/Page";
import Landing from "../sections/Home/Landing";
import OurTeachers from "../sections/Home/OurTeachers";
import ProgramStructure from "../sections/Home/ProgramStructure";
import Schedule from "../sections/Home/Schedule";

export default function Home() {
  return (
    <Fragment>
      <Page>
        {/* main landing */}
        <Landing />

        {/* structure of program */}
        <ProgramStructure />
      </Page>

      {/* schedule  */}
      <Schedule />

      {/* our teachers */}
      <OurTeachers />
    </Fragment>
  );
}
