import React from "react";
import { Image } from "@fluentui/react-northstar";

class Project extends React.Component {
  render() {
    return (
    <div>
      <h1>Project</h1>
      <h2>Create New Project</h2>
      <Image src="pic/create_new_project.gif" />
      <h2>Provision in the Cloud</h2>
      <Image src="pic/provision_in_the_cloud.gif" />
      <h2>Deploy to the Cloud</h2>
      <Image src="pic/deploy_to_the_cloud.gif" />
      <h2>Local Debug</h2>
      <p>Or just press <strong>F5</strong></p>
      <Image src="pic/local_dubug.gif" />
      <p>Local Dubug Page</p>
      <Image src="pic/local_dubug_web_page.gif" />
      <h2>Add Capabilities</h2>
      <Image src="pic/add_capabilities.gif" />
    </div>
    )
  }
}

export default Project;