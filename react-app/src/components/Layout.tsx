import * as React from "react";
import "./layout.scss";
import TabList from "./TabComp/TabList";
import TabItem from "./TabComp/TabItem";
import Tabs from "./TabComp/Tabs";
import TabPanels from "./TabComp/TabPanels";
import TabPanel from "./TabComp/TabPanel";

export default class Layout extends React.Component {
  render(): JSX.Element {
    return (
      <div >
        <Tabs>
          <TabList>
            <TabItem name="Home" />
            <TabItem name="Contact"/>
            <TabItem name="About"/>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Home Panel</p>
            </TabPanel>
            <TabPanel>
              <p>Contact Us Panel</p>
            </TabPanel>
            <TabPanel>
              <p>About Panel</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    );
  }
}
