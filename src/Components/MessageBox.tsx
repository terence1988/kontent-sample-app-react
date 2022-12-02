import React from 'react';

import infoImage from '../Images/Admin/info.svg';
import { ParsedQs } from 'qs';

interface MessageBoxProps {
  message: string | ParsedQs | string[] | ParsedQs[] | undefined;
}

const MessageBox: React.FC<MessageBoxProps> = (props) => {
  if (!props.message) {
    return null;
  }

  return (
    <div id="message-box" className="container message">
      <section className="messages">
        <table className="user-message message-info">
          <tbody>
            <tr>
              <td className="message-icon">
                <img src={infoImage} height="44" width="44" alt="info icon" />
              </td>
              <td className="message-content">
                <p>{props.message as string}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MessageBox;
