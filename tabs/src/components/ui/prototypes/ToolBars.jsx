import React from "react";
import { Box, Button, Dialog, Header, Segment } from '@fluentui/react-northstar';
import NestedDialogsCode from '!!raw-loader!../../../assets/code/prototypes/toolbars/NestedDialogsCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function NestedDialogs() {
  return (
    <div>
    <Header as="h4" content="Nested Dialogs" />

    <Collapse>
      <Code code={ NestedDialogsCode } />
    </Collapse>
    <Box styles={{ marginTop: '20px' }}>
      <Segment>
        <p>An example with nested dialogs</p>
      </Segment>
      <Segment>
        <Dialog
          cancelButton="Close"
          header="An outer dialog"
          content={
            <>
              <p>
                This <code>Dialog</code> contains another <code>Dialog</code> inside.
              </p>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </blockquote>

              <Dialog
                cancelButton="Close"
                header="An inner dialog"
                content={
                  <>
                    <p>
                      This <code>Dialog</code> is nested ヽ(^o^)ノ, if you will on an overlay only this <code>Dialog</code>{' '}
                      will be closed.
                    </p>
                  </>
                }
                trigger={<Button content="Open a dialog" />}
              />
            </>
          }
          trigger={<Button content="Open a dialog" />}
        />
      </Segment>
    </Box>
  </div>
    
  );
}

export default class ToolBars extends React.Component {
  render() {
    return (
      <div className="ToolBars page">
        <Header as="h2" content="ToolBars" />
        <ul id="ToolBarsList">
          <li><Button onClick={ () => ScrollToAnchor('NestedDialogs') }>Nested Dialogs</Button></li>
        </ul>
        <div id="NestedDialogs"><NestedDialogs /></div>
      </div>
    )
  }
}